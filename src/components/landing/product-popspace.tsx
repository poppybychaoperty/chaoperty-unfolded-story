import { ArrowRight, CalendarDays, CreditCard, LayoutGrid, Megaphone, Search , Tent } from "lucide-react";
import { LINKS } from "./links";
import { ProductIntro } from "./product-intro";
import popspaceWordmark from "@/assets/popspace-wordmark.svg";
import popspaceHome from "@/assets/popspace-home.png.asset.json";
import popspaceMarkets from "@/assets/popspace-markets.png.asset.json";
import popspaceBooth from "@/assets/popspace-booth.png.asset.json";

const FEATURES = [
  {
    icon: Search,
    title: "ค้นหาตลาดและอีเวนต์ทั่วประเทศ",
    desc: "ผู้ขายค้นหาตลาดนัด งานแฟร์ และพื้นที่เช่าตามวันที่ ทำเล และประเภทสินค้า",
  },
  {
    icon: LayoutGrid,
    title: "ผังล็อกและการจองออนไลน์",
    desc: "เห็นล็อกว่าง–ล็อกจองแล้วบนผังงาน เลือกล็อกที่ต้องการแล้วจองได้ทันที",
  },
  {
    icon: CreditCard,
    title: "ชำระเงินจบในที่เดียว",
    desc: "ยืนยันการจองพร้อมชำระเงิน ลดงานเก็บเงินหน้างานและการจดคิวในกลุ่มไลน์",
  },
  {
    icon: Megaphone,
    title: "โปรโมทงานและรอบ Early Bird",
    desc: "ติดป้ายตลาดใหม่ ใกล้วันจัด เหลือน้อย และราคาจองล่วงหน้า ช่วยเร่งยอดจองบูธ",
  },
  {
    icon: CalendarDays,
    title: "จัดการหลายงาน หลายรอบวัน",
    desc: "งานหลายวันติดกัน คิดราคาแยกรายวันหรือทั้งงาน พร้อมสรุปจำนวนบูธว่าง",
  },
  {
    icon: Tent,
    title: "สำหรับเจ้าของตลาดโดยเฉพาะ",
    desc: "เปิดรอบจอง คุมผู้ขายรายบูธ และดูภาพรวมรายได้ของงานได้จากหลังบ้านเดียว",
  },
];

export function ProductPopspace() {
  return (
    <section id="popspace" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <BoothMockup />

          <div>
            <ProductIntro
              logo={popspaceWordmark}
              name="PopSpace"
              kicker="สำหรับผู้จัดงานและเจ้าของตลาด"
              tagline="เปิดรอบจองล็อก ขายบูธออนไลน์ และเก็บเงินล่วงหน้าได้ในที่เดียว"
              tone="popspace"
              wordmark
            />
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              เปิดจองล็อกขายของในตลาดนัดและอีเวนต์ จบในที่เดียว
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              พื้นที่เช่าไม่ได้มีแค่สัญญายาว — งานอีเวนต์ ตลาดนัด และงานแฟร์เป็นการเช่าระยะสั้นที่หมุนเร็วที่สุด
              PopSpace ช่วยผู้จัดงานเปิดรอบจอง ขายล็อก และเก็บเงินออนไลน์ ส่วนพ่อค้าแม่ค้าก็หาตลาดที่ใช่ได้เอง
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <article key={f.title} className="rounded-3xl border border-border bg-card p-4">
                  <span className="flex size-9 items-center justify-center rounded-2xl bg-popspace-soft text-popspace">
                    <f.icon className="size-4" />
                  </span>
                  <h3 className="mt-3 font-display text-sm font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </article>
              ))}
            </div>

            <a
              href={LINKS.popspace}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              เปิดระบบจองล็อก PopSpace
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoothMockup() {
  return (
    <div className="space-y-5 lg:sticky lg:top-24">
      <figure>
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-foreground/5">
          <img
            src={popspaceHome.url}
            alt="หน้าแรก PopSpace สำหรับค้นหาตลาดนัดและงานแฟร์ทั่วประเทศ"
            loading="lazy"
            className="w-full"
          />
        </div>
        <figcaption className="mt-2.5 text-sm text-muted-foreground">
          ค้นหาตลาดด้วย AI พร้อมป้ายกำกับ Early Bird ตลาดใหม่ และเหลือน้อย
        </figcaption>
      </figure>

      <figure>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={popspaceBooth.url}
            alt="ผังล็อกออนไลน์ของ PopSpace แสดงบูธว่างและบูธที่ถูกจองแล้วพร้อมราคา"
            loading="lazy"
            className="w-full"
          />
        </div>
        <figcaption className="mt-2.5 text-sm text-muted-foreground">
          ผังล็อกจริงพร้อมราคา — แตะเลือกบูธแล้วจองได้ทันที
        </figcaption>
      </figure>

      <figure>
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={popspaceMarkets.url}
            alt="หน้ารวมตลาดและอีเวนต์ใน PopSpace พร้อมตัวกรองวันที่ สถานที่ และงบค่าเช่า"
            loading="lazy"
            className="w-full"
          />
        </div>
        <figcaption className="mt-2.5 text-sm text-muted-foreground">
          รวมทุกงานในที่เดียว กรองตามวันที่ ทำเล งบค่าเช่า และหมวดสินค้า
        </figcaption>
      </figure>
    </div>
  );
}
