import { ArrowRight, Facebook, Youtube } from "lucide-react";
import { LINKS } from "./links";
import { TikTokIcon } from "./social-channels";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";

export function FinalCta() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <div className="rounded-[2rem] bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          พร้อมจัดระบบพื้นที่เช่าทั้งพอร์ตให้เป็นระเบียบหรือยัง?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed sm:text-base">
          เริ่มจากระบบเดียวก่อนก็ได้ แล้วค่อยต่อยอดให้ครบทั้งสตรีม ทีมงานช่วยตั้งค่าและย้ายข้อมูลให้ตั้งแต่วันแรก
        </p>
        <a
          href={LINKS.trial}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-ink-foreground transition hover:opacity-90"
        >
          ทดลองระบบฟรี
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={chaopertyLogo.url} alt="Chaoperty" className="h-7 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">
            เช่าเพอร์ตี้ · ระบบจัดการพื้นที่เช่าและงานอาคารครบวงจร
          </p>
        </div>

        <FooterCol
          title="ระบบในเครือ"
          items={[
            { label: "dChao · จัดการพื้นที่เช่า", href: LINKS.dchao },
            { label: "dWork · งานซ่อมบำรุง", href: LINKS.dwork },
            { label: "Tamtam · สะสมแต้มลูกค้า", href: LINKS.tamtam },
            { label: "PopSpace · จองล็อกอีเวนต์", href: LINKS.popspace },
          ]}
        />
        <FooterCol
          title="สำหรับผู้ใช้งาน"
          items={[
            { label: "พอร์ทัลผู้เช่า dChao", href: LINKS.dchaoTenant },
            { label: "เข้าสู่ระบบ dWork", href: LINKS.dworkAuth },
            { label: "แลกของรางวัล Tamtam", href: LINKS.tamtamRewards },
            { label: "หาตลาดออกร้าน PopSpace", href: LINKS.popspace },
          ]}
        />
        <div>
          <FooterCol
            title="เริ่มต้นใช้งาน"
            items={[
              { label: "ทดลองระบบฟรี", href: LINKS.trial },
              { label: "เว็บไซต์หลัก chaoperty.com", href: LINKS.main },
            ]}
          />
          <div className="mt-5 flex items-center gap-2">
            <a
              href={LINKS.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Youtube className="size-4" />
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <TikTokIcon className="size-4" />
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook ของ Chaoperty"
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:bg-accent hover:text-foreground"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Chaoperty. สงวนลิขสิทธิ์
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="font-display text-sm font-bold">{title}</p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
