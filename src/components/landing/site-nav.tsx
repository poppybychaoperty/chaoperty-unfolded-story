import { useState } from "react";
import { Facebook, Menu, X, Youtube } from "lucide-react";
import { LINKS } from "./links";
import { TikTokIcon } from "./social-channels";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";

const NAV = [
  { href: "#ecosystem", label: "ระบบนิเวศ" },
  { href: "#tiers", label: "เลือกรุ่น" },
  { href: "#chaoperty", label: "Chaoperty" },
  { href: "#dchao", label: "dChao" },
  { href: "#dwork", label: "dWork" },
  { href: "#tamtam", label: "Tamtam" },
  { href: "#popspace", label: "PopSpace" },
  { href: "#flow", label: "ขั้นตอน" },
  { href: "#contact", label: "ติดต่อ" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center">
          <img src={chaopertyLogo.url} alt="Chaoperty" className="h-7 w-auto" />
        </a>


        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1 pr-1 lg:flex">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <TikTokIcon className="size-4" />
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Facebook className="size-4" />
            </a>
          </span>
          <a
            href={LINKS.trial}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
          >
            ทดลองระบบฟรี
          </a>
          <button
            type="button"
            aria-label="เปิดเมนู"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={LINKS.trial}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            ทดลองระบบฟรี
          </a>
        </nav>
      )}
    </header>
  );
}
