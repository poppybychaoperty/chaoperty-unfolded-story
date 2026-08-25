import { ArrowRight, Gift, MapPin, Receipt } from "lucide-react";
import { LINKS } from "./links";
import { ProductIntro } from "./product-intro";
import logoTamtam from "@/assets/logo-tamtam.png.asset.json";
import tamtamHome from "@/assets/tamtam-home.png.asset.json";
import tamtamPoints from "@/assets/tamtam-points.png.asset.json";
import tamtamCheckin from "@/assets/tamtam-checkin.png.asset.json";


const STEPS = [
  { icon: MapPin, title: "เช็คอินที่ร้าน", desc: "เปิดแอป เลือกร้าน แล้วยืนยันพิกัด รับแต้มทันที" },
  { icon: Receipt, title: "อัปโหลดใบเสร็จ / สลิป", desc: "ถ่ายรูปใบเสร็จหลังจ่ายเงิน ทุก 20 บาท = 1 แต้ม" },
  { icon: Gift, title: "นำแต้มไปแลกรางวัล", desc: "เลือกของรางวัลที่ชอบ จากเมนูรางวัลในแอป" },
];

const VALUE = [
  { title: "ฐานข้อมูลลูกค้าของโครงการ", desc: "รู้ว่าใครมาบ่อย มาช่วงไหน และใช้จ่ายกับร้านไหนในพลาซ่า" },
  { title: "โปรโมชั่นและข่าวสารร้านค้า", desc: "ผู้เช่าประกาศโปรโมชั่นถึงสมาชิกได้ตรง ช่วยดันทราฟฟิกเข้าร้าน" },
  { title: "ชุมชนรูปเช็คอิน", desc: "รูปจากสมาชิกกลายเป็นคอนเทนต์ของโครงการ สร้างการกลับมาซ้ำ" },
];

export function ProductTamtam() {
  return (
    <section id="tamtam" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <ProductIntro
            logo={logoTamtam.url}
            name="Tamtam Rewards"
            kicker="CRM ลูกค้าปลายทาง"
            tagline="เช็คอิน สะสมแต้มจากใบเสร็จ แลกของรางวัล และรู้จักลูกค้าของโครงการ"
            tone="tamtam"
          />
          <h2 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            เปลี่ยนคนเดินผ่าน ให้กลายเป็นสมาชิกที่กลับมาซ้ำ
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            เจ้าของพื้นที่ไม่ได้ขายแค่พื้นที่ แต่ขายทราฟฟิกให้ผู้เช่าด้วย — Tamtam
            ให้ลูกค้าสะสมแต้มจากการเช็คอินและใบเสร็จ แล้วเปลี่ยนพฤติกรรมเหล่านั้นเป็นข้อมูลที่ใช้บริหารส่วนผสมร้านค้าได้จริง
          </p>

          <ol className="mt-8 space-y-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-3xl border border-border bg-card p-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-tamtam-soft text-tamtam">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className="font-display text-base font-bold">
                    <span className="mr-2 text-tamtam">{i + 1}</span>
                    {s.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {VALUE.map((v) => (
              <div key={v.title}>
                <dt className="font-display text-sm font-bold">{v.title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{v.desc}</dd>
              </div>
            ))}
          </dl>

          <a
            href={LINKS.tamtam}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            ดูระบบสะสมแต้ม Tamtam
            <ArrowRight className="size-4" />
          </a>
        </div>

        <PhoneMockup />
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-full max-w-[22rem]">
      <figure className="overflow-hidden rounded-[2.5rem] border-8 border-ink bg-card shadow-xl shadow-foreground/10">
        <img
          src={tamtamHome.url}
          alt="หน้าจอแอป Tamtam Rewards แสดงแต้มสะสมของสมาชิกและขั้นตอนสะสมแต้ม 3 ขั้นตอน"
          className="w-full"
          loading="lazy"
        />
      </figure>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={tamtamPoints.url}
            alt="หน้าแต้มของฉันในแอป Tamtam แสดงแต้มที่ใช้ได้ แต้มที่แลกแล้ว และที่มาของแต้ม"
            className="w-full"
            loading="lazy"
          />
        </figure>
        <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-md shadow-foreground/5">
          <img
            src={tamtamCheckin.url}
            alt="หน้าเช็คอินสะสมแต้มในแอป Tamtam เลือกร้านค้าและถ่ายรูปยืนยันหน้าร้าน"
            className="w-full"
            loading="lazy"
          />
        </figure>
      </div>

      <a
        href={LINKS.tamtamRewards}
        target="_blank"
        rel="noreferrer"
        className="mt-4 block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-semibold text-primary-foreground"
      >
        แลกของรางวัล
      </a>
    </div>
  );
}

