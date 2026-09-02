// Preview-only banner linking this app to its Wix Business Manager (back office).
// Never renders on the published site; dismissible (persisted per site); SSR-safe.
import { useEffect, useState } from "react";
import { WIX_METASITE_ID } from "@/lib/wix/wix-config";

const DASHBOARD_URL = `https://manage.wix.com/dashboard/${WIX_METASITE_ID}`;
const DISMISS_KEY = `wix-manage-banner-dismissed-${WIX_METASITE_ID}`;
const PREVIEW_HOST = /^(preview|preview-sandbox|checkpoint|id-preview)--/;

export function WixManageBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (WIX_METASITE_ID.startsWith("<")) return;
    let dismissed = false;
    try {
      dismissed = Boolean(window.localStorage.getItem(DISMISS_KEY));
    } catch {
      /* ignore disabled storage */
    }
    if (dismissed) return;
    const inPreview =
      Boolean(import.meta.env?.DEV) ||
      PREVIEW_HOST.test(window.location.hostname) ||
      window.location.hostname === "localhost" ||
      Boolean(document.querySelector("script[data-preview-inject]"));
    setVisible(inPreview);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative flex w-full items-center justify-center gap-3.5 border-b border-border bg-background px-12 py-3 text-sm text-foreground">
      <span>
        Manage your business behind this site in Wix{" "}
        <a href={DASHBOARD_URL} target="_blank" rel="noopener" className="underline">
          business manager
        </a>
      </span>
      <a
        href={DASHBOARD_URL}
        target="_blank"
        rel="noopener"
        className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background"
      >
        Open
      </a>
      <button
        type="button"
        aria-label="Dismiss banner"
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-muted-foreground transition hover:text-foreground"
      >
        ✕
      </button>
    </div>
  );
}
