import { ArrowRight } from "lucide-react";
import logoDchao from "@/assets/logo-dchao.png.asset.json";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";

const ROWS = [
  { label: "ขนาดพอร์ต", dchao: "ไม่เกิน 200 ยูนิต", chaoperty: "มากกว่า 200 ยูนิต" },
  { label: "เหมาะกับ", dchao: "ตลาด แผงเช่า หอพัก อาคารขนาดกลาง", chaoperty: "คอมมูนิตี้มอลล์ ตลาดใหญ่ อาคารสำนักงาน" },
  { label: "การเริ่มใช้งาน", dchao: "สมัครและตั้งค่าเองได้ในวันเดียว", chaoperty: "ทีมงานเข้าไปติดตั้ง ย้ายข้อมูล และอบรม" },
  { label: "โครงสร้างพื้นที่", dchao: "โครงการเดียว จัดโซนได้", chaoperty: "หลายโครงการ หลายโซน หลายนิติบุคคล" },
  { label: "พอร์ทัลผู้เช่า", dchao: "ดูบิลและแนบสลิป", chaoperty: "สัญญา ยอดค้าง บิล ชำระเงิน และใบเสร็จย้อนหลัง" },
  { label: "รายงาน", dchao: "งบรายรับ–รายจ่าย ส่งออก Excel/PDF", chaoperty: "รายงานผู้บริหารแยกโซน ช่องทางชำระ และอัตราการเช่า" },
];

export function Tiers() {
  return (
    <section id="tiers" className="bg-background">
      <div className="mx-auto max-w-5xl px-5 py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-muted-foreground">เลือกรุ่นไหนดี</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            พอร์ตเล็กใช้ dChao พอร์ตใหญ่ใช้ Chaoperty
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            สองรุ่นทำงานบนแนวคิดเดียวกันและเชื่อมกับ dWork, Tamtam, PopSpace ได้เหมือนกัน
            ต่างกันที่ขนาดพอร์ต โครงสร้างทีม และความลึกของรายงาน
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card">
          <div className="grid grid-cols-1 sm:grid-cols-[10rem_1fr_1fr]">
            <div className="hidden border-b border-border bg-cream p-4 sm:block" />
            <div className="flex items-center gap-3 border-b border-border bg-dchao-soft/60 p-4">
              <img src={logoDchao.url} alt="โลโก้ dChao" className="size-9 object-contain" loading="lazy" />
              <span>
                <span className="block font-display text-lg font-bold">dChao</span>
                <span className="block text-xs text-dchao">ไม่เกิน 200 ยูนิต</span>
              </span>
            </div>
            <div className="flex items-center gap-3 border-b border-border bg-chaoperty-soft/60 p-4">
              <img src={chaopertyLogo.url} alt="โลโก้ Chaoperty" className="h-5 w-auto object-contain" loading="lazy" />
              <span className="text-xs text-chaoperty">มากกว่า 200 ยูนิต</span>
            </div>

            {ROWS.map((r) => (
              <div key={r.label} className="contents">
                <div className="border-b border-border px-4 pt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase sm:border-b-0 sm:py-4 sm:text-sm sm:normal-case">
                  {r.label}
                </div>
                <div className="border-b border-border px-4 py-3 text-sm leading-relaxed sm:py-4">{r.dchao}</div>
                <div className="border-b border-border px-4 py-3 text-sm leading-relaxed sm:py-4">{r.chaoperty}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 p-4">
            <a
              href="#dchao"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-accent"
            >
              ดู dChao <ArrowRight className="size-4" />
            </a>
            <a
              href="#chaoperty"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition hover:bg-accent"
            >
              ดู Chaoperty <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
