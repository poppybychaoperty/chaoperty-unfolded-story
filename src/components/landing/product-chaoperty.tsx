import { ArrowRight, Building2, UserCheck } from "lucide-react";
import { LINKS } from "./links";
import { ProductIntro } from "./product-intro";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";
import chaopertyDashboard from "@/assets/chaoperty-dashboard.png.asset.json";
import chaopertySpacemap from "@/assets/chaoperty-spacemap.png.asset.json";
import chaopertyBilling from "@/assets/chaoperty-billing.png.asset.json";
import chaopertyLease from "@/assets/chaoperty-lease.png.asset.json";
import chaopertyReports from "@/assets/chaoperty-reports.png.asset.json";
import chaopertyDocs from "@/assets/chaoperty-docs.png.asset.json";

const FEATURES = [
  { title: "ผังพื้นที่ทั้งโครงการ", desc: "หลายโซน หลายอาคาร หลายนิติบุคคล เห็นล็อกว่าง เช่าอยู่ และใกล้หมดสัญญาในหน้าจอเดียว" },
  { title: "งานบัญชีและกระทบยอด", desc: "วางบิลทั้งโครงการ ตรวจสลิป QR อัปโหลด Statement ธนาคาร และกระทบยอดอัตโนมัติ" },
  { title: "เอกสารและสัญญาแบบรวมศูนย์", desc: "เก็บสัญญา เอกสารผู้เช่า และไฟล์แนบไว้ที่เดียว พร้อมสิทธิ์การเข้าถึงแยกตามทีม" },
  { title: "รายงานผู้บริหาร", desc: "อัตราการเช่า รายรับตามโซน ช่องทางชำระเงิน และยอดค้าง สรุปให้ผู้บริหารดูได้ทุกวัน" },
  { title: "ทีมงานหลายระดับสิทธิ์", desc: "แยกบทบาทเจ้าหน้าที่เก็บเงิน ฝ่ายบัญชี ฝ่ายอาคาร และผู้บริหาร พร้อมประวัติการแก้ไข" },
  { title: "เชื่อมต่อ dWork และ Tamtam", desc: "งานซ่อมของแต่ละพื้นที่และข้อมูลลูกค้าหน้าร้าน ไหลกลับเข้าพอร์ตเดียวกัน" },
];

const PORTAL = [
  "ดูรายละเอียดสัญญาเช่าและวันครบกำหนดของตัวเอง",
  "เปิดใบวางบิล ดาวน์โหลด PDF และเห็น QR สำหรับชำระเงิน",
  "แจ้งชำระเงิน แนบสลิป และติดตามสถานะการตรวจสอบ",
  "เก็บใบเสร็จย้อนหลังไว้ครบ ไม่ต้องโทรถามเจ้าหน้าที่",
];

const SHOTS = [
  {
    src: chaopertySpacemap.url,
    alt: "ผังพื้นที่เช่าของ Chaoperty แสดงล็อกที่ว่างและล็อกที่มีผู้เช่าแยกด้วยสี",
    caption: "ผังพื้นที่ทั้งโครงการ — ล็อกว่าง เช่าอยู่ ใกล้หมดสัญญา แยกด้วยสีในหน้าจอเดียว",
  },
  {
    src: chaopertyBilling.url,
    alt: "หน้าบัญชีและการวางบิลของ Chaoperty พร้อมสถานะค้างชำระและตรวจสอบสลิป",
    caption: "งานบัญชี: วางบิลทั้งโครงการ ตรวจสลิป QR และกระทบยอดอัตโนมัติ",
  },
  {
    src: chaopertyLease.url,
    alt: "หน้ารายละเอียดสัญญาเช่าใน Chaoperty แสดงโซน รหัสพื้นที่ และวันหมดสัญญา",
    caption: "รายละเอียดสัญญารายราย — มิเตอร์น้ำ–ไฟ วางบิล ลดหนี้ รับชำระ ประวัติบิล ในการ์ดเดียว",
  },
  {
    src: chaopertyDocs.url,
    alt: "หน้าจัดเก็บเอกสารผู้เช่าของ Chaoperty",
    caption: "คลังเอกสารผู้เช่า — สัญญา เอกสารยืนยันตัวตน และไฟล์แนบ เก็บรวมศูนย์",
  },
  {
    src: chaopertyReports.url,
    alt: "หน้ารายงานภาพรวมการดำเนินการของ Chaoperty",
    caption: "รายงานผู้บริหาร: จำนวนยูนิต ช่องทางรับชำระ และภาพรวมการดำเนินงาน",
  },
  {
    src: chaopertyDashboard.url,
    alt: "แดชบอร์ด Chaoperty แสดงจำนวนผู้เช่าปัจจุบัน สัญญาใกล้หมดอายุ และรายรับ 7 วันล่าสุด",
    caption: "แดชบอร์ดเจ้าของพื้นที่ — ผู้เช่าปัจจุบัน สัญญาใกล้หมดอายุ และรายรับ 7 วันล่าสุด",
  },
];

export function ProductChaoperty() {
  return (
    <section id="chaoperty" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <ProductIntro
              logo={chaopertyLogo.url}
              name="Chaoperty"
              kicker="Enterprise · มากกว่า 200 ยูนิต"
              tagline="สำหรับโครงการขนาดใหญ่ — คอมมูนิตี้มอลล์ ตลาดขนาดใหญ่ และอาคารสำนักงาน"
              tone="chaoperty"
              wordmark
            />

            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-chaoperty-soft px-3 py-1.5 text-xs font-semibold text-chaoperty">
              <Building2 className="size-3.5" />
              เหมาะกับพอร์ตมากกว่า 200 ยูนิต
            </span>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              บริหารพื้นที่เช่าหลักพันยูนิต ด้วยทีมเท่าเดิม
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              หลายโซน หลายอาคาร หลายทีมงาน — Chaoperty รวมผัง สัญญา บัญชี เอกสาร และรายงานผู้บริหารไว้ในระบบเดียว
              พร้อมพอร์ทัลให้ผู้เช่าดูแลเรื่องบิลของตัวเองได้
            </p>

            <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <dt className="font-display text-base font-bold">{f.title}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-3xl border border-border bg-chaoperty-soft/50 p-5">
              <p className="flex items-center gap-2 font-display text-base font-bold">
                <UserCheck className="size-4 text-chaoperty" />
                พอร์ทัลผู้เช่า — ผู้เช่าดูแลตัวเองได้ 24 ชม.
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {PORTAL.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    · {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                ลดสายโทรเข้าเรื่องบิลและใบเสร็จ เจ้าหน้าที่ไปโฟกัสงานที่สำคัญกว่า
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={LINKS.trial}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
              >
                คุยกับทีมงานสำหรับโครงการใหญ่
                <ArrowRight className="size-4" />
              </a>
              <a
                href={LINKS.dchaoTenant}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-accent"
              >
                เข้าพอร์ทัลผู้เช่า
              </a>
            </div>
          </div>

          <figure className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/5">
              <img
                src={chaopertyDashboard.url}
                alt="แดชบอร์ด Chaoperty สำหรับโครงการขนาดใหญ่"
                loading="lazy"
                className="w-full"
              />
            </div>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              หน้าจอจริงจาก Chaoperty · ข้อมูลในภาพเป็นข้อมูลตัวอย่างสำหรับสาธิต
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-foreground/5">
                <img src={shot.src} alt={shot.alt} loading="lazy" className="w-full" />
              </div>
              <figcaption className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
