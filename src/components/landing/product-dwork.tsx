import { ArrowRight } from "lucide-react";
import { LINKS } from "./links";
import { ProductIntro } from "./product-intro";
import logoDwork from "@/assets/logo-dwork.png.asset.json";
import dworkOverview from "@/assets/dwork-overview.png.asset.json";
import dworkBoard from "@/assets/dwork-board.png.asset.json";
import dworkRoutine from "@/assets/dwork-routine.png.asset.json";
import dworkLine from "@/assets/dwork-line.png.asset.json";

const FEATURES = [
  { title: "งานรับแจ้ง", desc: "รับงานจากผู้ใช้ ติดตามสถานะ พร้อมภาพถ่ายและประวัติการทำงานครบทุกขั้น" },
  { title: "งานรูทีน", desc: "ตั้งเช็คลิสต์รายวัน/สัปดาห์/เดือน ระบบสร้างงานให้อัตโนมัติตามรอบ" },
  { title: "งาน outsource", desc: "บันทึกผู้รับเหมา ราคา ใบเสนอราคา และเอกสารแนบให้ตรวจสอบย้อนหลังได้" },
  { title: "ใบอนุญาต/สัญญา", desc: "แจ้งเตือนวันหมดอายุล่วงหน้า ไม่พลาดต่ออายุใบอนุญาตสำคัญ" },
  { title: "คลัง/ทรัพย์สิน", desc: "ติดตามสต๊อกอะไหล่ บันทึกการเบิกจ่าย แจ้งเตือนเมื่อต่ำกว่าขั้นต่ำ" },
  { title: "ภาษี/ค่าธรรมเนียม", desc: "ทะเบียนทรัพย์สินและรอบชำระภาษี เปรียบเทียบรายปีได้" },
  { title: "เชื่อมต่อ LINE", desc: "แปลงข้อความรายงานจาก LINE Group เป็น task ให้อัตโนมัติด้วย AI" },
  { title: "รายงานผู้บริหาร", desc: "Dashboard และกราฟวิเคราะห์ — รู้ทันทีว่าหมวดไหนมีปัญหามากที่สุด" },
];


export function ProductDwork() {
  return (
    <section id="dwork" className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1fr] lg:items-start lg:py-24">
        <TaskBoard />

        <div>
          <ProductIntro
            logo={logoDwork.url}
            name="dWork"
            kicker="แพลตฟอร์มงานช่างซ่อมบำรุง"
            tagline="หลังบ้านของอาคาร — งานรับแจ้ง งานรูทีน คลังอะไหล่ และทีมช่าง"
            tone="dwork"
          />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            ดูแลทุกงานซ่อมบำรุงของอาคาร ในที่เดียว
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            dWork ช่วยทีมช่างและฝ่ายอาคารจัดการงานรับแจ้ง งานรูทีน ใบอนุญาต คลังอะไหล่ และรายงานผู้บริหาร —
            พร้อมรับงานจาก LINE อัตโนมัติ ใช้งานบนมือถือได้เต็มรูปแบบ
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div key={f.title}>
                <dt className="font-display text-base font-bold">{f.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</dd>
              </div>
            ))}
          </dl>

          <a
            href={LINKS.dworkAuth}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            เข้าสู่ระบบ dWork
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function TaskBoard() {
  return (
    <div className="lg:sticky lg:top-24">
      <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-foreground/5">
        <img
          src={dworkOverview.url}
          alt="หน้าจอภาพรวมของ dWork แสดงสรุปงานประจำวัน งานที่เสร็จ งานใหม่ และงานที่อัปเดตสถานะ"
          className="w-full"
          loading="lazy"
        />
      </figure>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={dworkBoard.url}
            alt="หน้าจอบอร์ดงานรับแจ้งของ dWork แบ่งตามหมวดงานและสถานะ"
            className="w-full"
            loading="lazy"
          />
        </figure>
        <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={dworkRoutine.url}
            alt="หน้าจองานรูทีนประจำวันของ dWork พร้อมเช็คลิสต์และรูปถ่ายยืนยันงาน"
            className="w-full"
            loading="lazy"
          />
        </figure>
      </div>

      <figure className="mt-6 flex flex-col items-center gap-4 rounded-3xl border border-border bg-dwork-soft/40 px-4 py-8">
        <span className="rounded-full bg-background px-3 py-1 text-[11px] font-semibold text-muted-foreground shadow-sm">
          ตัวอย่างข้อความที่ dWork AI ส่งเข้ากลุ่ม LINE
        </span>
        <div className="relative w-[248px] rounded-[2.4rem] border border-foreground/10 bg-foreground p-2 shadow-2xl shadow-foreground/25">
          <div className="relative overflow-hidden rounded-[1.9rem] bg-background">
            <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-foreground" />
            <img
              src={dworkLine.url}
              alt="ตัวอย่างข้อความ LINE จาก dWork AI สรุปงานซ่อมบำรุงประจำวันของโครงการ"
              className="w-full"
              loading="lazy"
            />
          </div>
          <span className="pointer-events-none absolute -right-[3px] top-28 h-12 w-[3px] rounded-r bg-foreground/70" />
          <span className="pointer-events-none absolute -left-[3px] top-24 h-8 w-[3px] rounded-l bg-foreground/70" />
          <span className="pointer-events-none absolute -left-[3px] top-36 h-8 w-[3px] rounded-l bg-foreground/70" />
        </div>
        <figcaption className="max-w-sm text-center text-xs leading-relaxed text-muted-foreground">
          สรุปประจำวันเข้ากลุ่ม LINE ของโครงการ — งานรับแจ้ง งานคงค้าง งานรูทีน และงานที่ต้องตัดสินใจ
          อ่านจบในข้อความเดียว
        </figcaption>
      </figure>


      <p className="mt-4 rounded-2xl bg-dwork-soft/60 p-3 text-xs leading-relaxed text-muted-foreground">
        ภาพหน้าจอจริงจากระบบ dWork — ข้อความแจ้งซ่อมในกลุ่ม LINE ถูกแปลงเป็นงานใหม่ให้อัตโนมัติ พร้อมจัดหมวดและระบุความเร่งด่วน
      </p>
    </div>

  );
}

