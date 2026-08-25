import { ArrowRight, Bot, Store } from "lucide-react";
import { LINKS } from "./links";
import { ProductIntro } from "./product-intro";
import logoDchao from "@/assets/logo-dchao.png.asset.json";
import dchaoDashboard from "@/assets/dchao-dashboard.png.asset.json";
import dchaoFinance from "@/assets/dchao-finance.png.asset.json";

const FEATURES = [
  { title: "สัญญาเช่าครบวงจร", desc: "เทมเพลตแก้ไขได้ ล็อกเมื่อเซ็นแล้ว รองรับค่าเช่าขั้นบันได ฟรีค่าเช่า และ %GP" },
  { title: "มิเตอร์น้ำ–ไฟอัตโนมัติ", desc: "บันทึกเลขมิเตอร์รายเดือน คำนวณตัวคูณ CT และ Surcharge แล้วออกบิลได้ทันที" },
  { title: "ตั้งหนี้ วางบิล รับชำระ", desc: "รวมค่าเช่า ค่าส่วนกลาง ค่าน้ำค่าไฟ และรายการเพิ่มเติมเป็นใบวางบิลเดียว พร้อมใบเสร็จ" },
  { title: "งบรายรับ–รายจ่าย", desc: "ดูงบรายเดือนแบบเงินสดหรือตามเอกสาร ส่งออก Excel/PDF ให้ฝ่ายบัญชีได้ทันที" },
  { title: "เริ่มใช้ได้เองใน 1 วัน", desc: "สมัคร ตั้งค่าพื้นที่ และวางบิลรอบแรกได้เอง ไม่ต้องรอทีมติดตั้ง" },
  { title: "หลายสกุลเงิน & FX", desc: "ตั้งค่าเงินได้ทั้งสัญญาและรายการย่อย พร้อมบันทึกกำไร/ขาดทุนจากอัตราแลกเปลี่ยน" },
];

export function ProductDchao() {
  return (
    <section id="dchao" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <ProductIntro
              logo={logoDchao.url}
              name="dChao"
              kicker="SME · ไม่เกิน 200 ยูนิต"
              tagline="สำหรับตลาด แผงเช่า หอพัก และอาคารขนาดกลาง — เริ่มเองได้ในวันเดียว"
              tone="dchao"
            />

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-dchao-soft px-3 py-1.5 text-xs font-semibold text-dchao">
              <Store className="size-3.5" />
              เหมาะกับพอร์ตไม่เกิน 200 ยูนิต
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              เลิกทำบิลค่าเช่าในไฟล์ Excel ตั้งแต่รอบนี้
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              สัญญา ค่าเช่า มิเตอร์น้ำ–ไฟ ใบวางบิล และการรับชำระ ครบในระบบเดียวที่สมัครใช้เองได้
              เหมาะกับเจ้าของตลาด แผงเช่า หอพัก และอาคารขนาดกลางที่ทีมงานไม่กี่คน
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <dt className="font-display text-base font-bold">{f.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-3xl border border-border bg-dchao-soft/50 p-5">
              <p className="flex items-center gap-2 font-display text-base font-bold">
                <Bot className="size-4 text-dchao" />
                ChaCha AI สรุปให้ทุกเช้าว่าวันนี้ควรทำอะไรก่อน
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                ค่าเช่าที่ครบกำหนด ยอดค้างชำระ สัญญาใกล้หมดอายุ พื้นที่ว่าง สลิปที่รอตรวจสอบ และรายการที่รออนุมัติ —
                วิเคราะห์จากตัวเลขจริงในระบบเท่านั้น
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LINKS.dchaoSignup}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
              >
                ทดลองใช้ dChao ฟรี 45 วัน
                <ArrowRight className="size-4" />
              </a>
              <a
                href={LINKS.dchao}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
              >
                ดูรายละเอียด dChao
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-24">
            <figure>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/5">
                <img
                  src={dchaoDashboard.url}
                  alt="แดชบอร์ด dChao PMS พร้อมผู้ช่วย ChaCha AI สรุปงานประจำวัน"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                หน้าจอจริงจาก dChao PMS · ข้อมูลในภาพเป็นข้อมูลตัวอย่างสำหรับสาธิต
              </figcaption>
            </figure>

            <figure>
              <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-foreground/5">
                <img
                  src={dchaoFinance.url}
                  alt="งบรายรับรายจ่ายใน dChao PMS พร้อมตัวกรองช่วงเวลาและการส่งออก Excel/PDF"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                งบรายรับ–รายจ่ายรายเดือน ส่งออก Excel/PDF ได้ทันที
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
