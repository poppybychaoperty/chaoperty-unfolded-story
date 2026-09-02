/**
 * Wix Managed headless transport — plain fetch, JSON in / JSON out.
 * Exchanges the public WIX_CLIENT_ID for an anonymous visitor token (that token IS the
 * cart/session identity), persists + refreshes it, and exposes wixApiRequest().
 * SSR-safe: never touches window/localStorage on the server.
 */
import { WIX_CLIENT_ID } from "./wix-config";

export { WIX_CLIENT_ID } from "./wix-config";

export const WIX_API_BASE = "https://www.wixapis.com";
const OAUTH_TOKEN_URL = `${WIX_API_BASE}/oauth2/token`;

// Scope the storage key by client id so two headless sites on the same origin don't share a token.
const TOKEN_STORAGE_KEY = `wix-visitor-token-${WIX_CLIENT_ID}`;

type TokenSet = {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  role?: "visitor" | "member";
};

let tokenCache: TokenSet | null = null;

function loadToken(): TokenSet | null {
  if (tokenCache) return tokenCache;
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(TOKEN_STORAGE_KEY);
    if (raw) tokenCache = JSON.parse(raw) as TokenSet;
  } catch {
    /* ignore disabled/full storage */
  }
  return tokenCache;
}

function saveToken(t: TokenSet) {
  tokenCache = t;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(t));
  } catch {
    /* ignore */
  }
}

async function mintToken(body: Record<string, string>): Promise<TokenSet> {
  const res = await fetch(OAUTH_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Wix OAuth failed: ${res.status}`);
  const data = (await res.json()) as { access_token: string; refresh_token: string; expires_in: number };
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
}

/** Swap the persisted token set for a member's tokens — every later call runs as that member. */
export function setSessionTokens({
  accessToken,
  refreshToken,
  expiresIn,
}: {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}) {
  saveToken({ accessToken, refreshToken, expiresAt: Date.now() + expiresIn * 1000, role: "member" });
}

/** Drop the persisted session so the next call mints a fresh anonymous visitor. */
export function clearSession() {
  tokenCache = null;
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/** True once a member is logged in on this client (vs. an anonymous visitor). */
export function isMember(): boolean {
  return loadToken()?.role === "member";
}

async function getAccessToken(): Promise<string> {
  const cached = loadToken();
  if (cached && cached.expiresAt > Date.now() + 60_000) return cached.accessToken;

  if (cached?.refreshToken) {
    try {
      const refreshed = await mintToken({
        clientId: WIX_CLIENT_ID,
        grantType: "refresh_token",
        refreshToken: cached.refreshToken,
      });
      // Refreshing preserves identity: a member refresh token yields member tokens.
      refreshed.role = cached.role || "visitor";
      saveToken(refreshed);
      return refreshed.accessToken;
    } catch {
      /* refresh failed — fall through to a fresh anonymous visitor */
    }
  }
  const fresh = await mintToken({ clientId: WIX_CLIENT_ID, grantType: "anonymous" });
  fresh.role = "visitor";
  saveToken(fresh);
  return fresh.accessToken;
}

export type WixRequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  query?: Record<string, string | string[] | undefined>;
};

export type WixApiError = Error & { status?: number; body?: unknown };

/** Core transport: adds the Authorization header, resolves the path, parses JSON, surfaces errors. */
export async function wixApiRequest<T = unknown>(
  path: string,
  options: WixRequestOptions = {},
): Promise<T | undefined> {
  const { method = "POST", body, query } = options;
  const token = await getAccessToken();

  const url = new URL(path.startsWith("http") ? path : `${WIX_API_BASE}${path}`);
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v === undefined) continue;
      if (Array.isArray(v)) {
        for (const item of v) url.searchParams.append(k, item);
      } else {
        url.searchParams.set(k, v);
      }
    }
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: token, // Wix expects the raw access token (no "Bearer " prefix)
    },
    body: body !== undefined ? JSON.stringify(body) : null,
  });

  if (res.status === 402) {
    console.warn("Wix: Payment required (402) — this API needs an active plan/premium feature.");
    return undefined;
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      parsed = text;
    }
    const err: WixApiError = new Error(`Wix API error ${res.status}: ${text}`);
    err.status = res.status;
    err.body = parsed;
    throw err;
  }
  if (res.status === 204) return undefined;
  return (await res.json()) as T;
}
