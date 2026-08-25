import { ArrowUpRight, Facebook, Play } from "lucide-react";
import { LINKS } from "./links";

const CHANNELS = [
  {
    id: "youtube",
    name: "YouTube",
    handle: "@chaoperty",
    desc: "วิดีโอสอนใช้งานระบบ ทัวร์ฟีเจอร์ และเคสจากโครงการจริง",
    href: LINKS.youtube,
    icon: Play,
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@chaoperty",
    desc: "คลิปสั้นเบื้องหลังงานอาคาร ทริคจัดการผู้เช่า และอัปเดตฟีเจอร์ใหม่",
    href: LINKS.tiktok,
    icon: TikTokIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "ChaopertyApp",
    desc: "ภาพงานติดตั้งจริง ทีมงานลงพื้นที่ และข่าวสารจากลูกค้าโครงการ",
    href: LINKS.facebook,
    icon: Facebook,
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.5 3c.4 2.2 1.9 3.9 4 4.2v2.9c-1.5.1-2.9-.3-4.2-1.1v5.9c0 3.6-2.7 6.1-6 6.1S4.3 18.5 4.3 15c0-3.3 2.7-5.9 6.2-5.6v3c-.3-.1-.7-.2-1-.2-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9c1.7 0 2.9-1.2 2.9-3V3h4.1Z" />
    </svg>
  );
}

export function SocialChannels() {
  return (
    <section id="social" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-muted-foreground">ช่องทางของเรา</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          ดูงานจริงของเรา ก่อนตัดสินใจ
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          เราถ่ายงานติดตั้ง ทีมงานลงพื้นที่ และวิธีใช้งานจริงลงช่องทางโซเชียลอยู่ตลอด —
          เข้าไปดูได้ว่าระบบนี้ถูกใช้ในโครงการจริงอย่างไร
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {CHANNELS.map((c) => (
          <a
            key={c.id}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-foreground/5"
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-foreground">
              <c.icon className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{c.name}</h3>
            <p className="text-sm font-semibold text-muted-foreground">{c.handle}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
              เปิดช่อง
              <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export { TikTokIcon };
