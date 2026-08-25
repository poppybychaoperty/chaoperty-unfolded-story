import { ArrowRight, Check, Star } from "lucide-react";
import { LINKS } from "./links";
import dchaoDashboard from "@/assets/dchao-dashboard.png.asset.json";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";

const PROOF = ["ตั้งค่าเสร็จใน 1 วัน", "พอร์ทัลผู้เช่าใช้ฟรีทุกราย", "เชื่อมงานซ่อมและลูกค้าหน้าร้าน"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-dchao-soft text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-dchao/20 blur-[120px]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-0 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-dchao/20 bg-dchao/5 px-3.5 py-1.5 text-xs font-semibold text-foreground/80">
            ระบบบริหารพื้นที่เช่าเชิงพาณิชย์ · ใช้งานจริงกว่า 100 โครงการทั่วไทย
          </span>

          <div className="mt-7 flex items-end justify-center gap-1.5">
            <img
              src={chaopertyLogo.url}
              alt="Chaoperty"
              className="h-9 w-auto sm:h-11"
              width={640}
              height={160}
            />
            <span className="pb-0.5 font-display text-2xl font-bold leading-none text-dchao sm:text-3xl">+</span>
          </div>

          <h1 className="mt-5 font-display text-[2.6rem] leading-[1.08] font-bold tracking-tight sm:text-6xl lg:text-[4.2rem]">
            จัดการพื้นที่เช่า
            <br />
            <span className="relative inline-block">
              <span className="absolute inset-x-0 bottom-2 -z-0 h-4 bg-dchao/60 sm:h-5" />
              <span className="relative">ทั้งระบบ</span>
            </span>{" "}
            ในที่เดียว
          </h1>

          <p className="mx-auto mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-dchao sm:text-base">
            Commercial Property Management System and so much more
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            จัดการพื้นที่เช่า งานซ่อมบำรุง CRM ลูกค้า และการจองล็อกอีเวนต์ — Chaoperty
            รวมทุกอย่างให้ทำงานต่อกันเป็นสายเดียว
          </p>



          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={LINKS.trial}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-dchao px-8 py-4 text-base font-bold text-background shadow-lg shadow-dchao/20 transition hover:brightness-95 sm:w-auto"
            >
              ทดลองใช้ฟรี 45 วัน
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#ecosystem"
              className="inline-flex w-full items-center justify-center rounded-full border border-dchao/25 px-8 py-4 text-base font-semibold text-foreground transition hover:bg-dchao/10 sm:w-auto"
            >
              ระบบนิเวศนี้ทำงานยังไง
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {PROOF.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Check className="size-3.5 text-dchao" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-dchao text-dchao" />
              ))}
            </span>
            ดูแลพื้นที่เช่ากว่า 20,000 ยูนิตทั่วประเทศ · ประสบการณ์ 15 ปี
          </p>
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-t-[1.5rem] border border-dchao/15 border-b-0 bg-background shadow-2xl shadow-dchao/10">
            <img
              src={dchaoDashboard.url}
              alt="แดชบอร์ด dChao PMS แสดงภาพรวมค่าเช่า ยอดค้างชำระ อัตราการเช่า และผู้ช่วย ChaCha AI"
              width={1920}
              height={981}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
