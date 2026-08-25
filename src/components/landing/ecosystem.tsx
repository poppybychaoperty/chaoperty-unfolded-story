import { ArrowRight } from "lucide-react";
import { LINKS } from "./links";
import chaopertyLogo from "@/assets/chaoperty-logo.png.asset.json";
import logoDchao from "@/assets/logo-dchao.png.asset.json";
import logoDwork from "@/assets/logo-dwork.png.asset.json";
import logoTamtam from "@/assets/logo-tamtam.png.asset.json";
import popspaceWordmark from "@/assets/popspace-wordmark.svg";

type Product = {
  id: string;
  logo: string;
  wordmark: boolean;
  name: string;
  role: string;
  users: string;
  desc: string;
  href: string;
  accent: string;
  soft: string;
};

type Layer = {
  no: string;
  label: string;
  english: string;
  users: string;
  summary: string;
  products: Product[];
};

const LAYERS: Layer[] = [
  {
    no: "1",
    label: "จัดการพื้นที่เช่า",
    english: "Core / หน้าบ้าน",
    users: "เจ้าของพื้นที่ · ผู้จัดการโครงการ · ฝ่ายบัญชี",
    summary:
      "ผังพื้นที่ สัญญาเช่า มิเตอร์น้ำ–ไฟ ใบวางบิล ใบเสร็จ และงบรายรับ–รายจ่าย เลือกใช้ตามขนาดพอร์ต",
    products: [
      {
        id: "chaoperty",
        logo: chaopertyLogo.url,
        wordmark: true,
        name: "Chaoperty",
        role: "มากกว่า 200 ยูนิต",
        users: "โครงการหลายโซน / หลายนิติบุคคล",
        desc: "ผังทั้งโครงการ บัญชีและกระทบยอด เอกสารสัญญา ใบ 50 ทวิ รายงานผู้บริหาร และพอร์ทัลให้ผู้เช่าดูยอดค้างและใบเสร็จเอง",
        href: "#chaoperty",
        accent: "text-chaoperty",
        soft: "bg-chaoperty-soft",
      },
      {
        id: "dchao",
        logo: logoDchao.url,
        wordmark: false,
        name: "dChao",
        role: "ไม่เกิน 200 ยูนิต",
        users: "ตลาด แผงเช่า หอพัก อาคารขนาดกลาง",
        desc: "สัญญาเช่า จดมิเตอร์น้ำ–ไฟ ตั้งหนี้ วางบิลทั้งอาคาร รับชำระผ่าน QR และเครื่องพิมพ์ใบเสร็จหน้างาน",
        href: "#dchao",
        accent: "text-dchao",
        soft: "bg-dchao-soft",
      },
      {
        id: "popspace",
        logo: popspaceWordmark,
        wordmark: true,
        name: "PopSpace",
        role: "เช่าระยะสั้น · อีเวนต์",
        users: "ผู้จัดตลาดนัดและงานแฟร์",
        desc: "เปิดรอบจองล็อกออนไลน์ ผังล็อกรายวัน ผู้ขายเลือกล็อกและชำระเงินได้เอง",
        href: "#popspace",
        accent: "text-popspace",
        soft: "bg-popspace-soft",
      },
    ],
  },
  {
    no: "2",
    label: "งานหลังบ้าน",
    english: "Operations",
    users: "ทีมช่าง แม่บ้าน รปภ. และผู้รับเหมา",
    summary: "ทุกงานที่เกิดหลังผู้เช่าเข้าอยู่ ผูกกับพื้นที่เช่านั้นโดยตรง",
    products: [
      {
        id: "dwork",
        logo: logoDwork.url,
        wordmark: false,
        name: "dWork",
        role: "งานซ่อมบำรุงและงานรูทีน",
        users: "หัวหน้าฝ่ายอาคาร · ทีมช่าง",
        desc: "รับแจ้งซ่อมผ่าน LINE จ่ายงานตามแผนก แนบรูปก่อน–หลัง เบิกอะไหล่จากคลัง คุมใบอนุญาตผู้รับเหมา และสรุปต้นทุนงานอาคาร",
        href: "#dwork",
        accent: "text-dwork",
        soft: "bg-dwork-soft",
      },
    ],
  },
  {
    no: "3",
    label: "ลูกค้าปลายทาง",
    english: "CRM",
    users: "ผู้เช่าร้านค้า และลูกค้าที่เดินเข้าโครงการ",
    summary: "เปลี่ยนคนเดินตลาดให้เป็นข้อมูล ย้อนกลับมาช่วยเจ้าของพื้นที่ตัดสินใจ",
    products: [
      {
        id: "tamtam",
        logo: logoTamtam.url,
        wordmark: false,
        name: "Tamtam",
        role: "สะสมแต้ม · โปรโมชั่นร้านค้า",
        users: "ลูกค้าหน้าร้าน · ฝ่ายการตลาดโครงการ",
        desc: "เช็คอินหน้าร้าน สะสมแต้มจากใบเสร็จ แลกของรางวัล และดูว่าร้านไหนคนเข้าเยอะจริง",
        href: "#tamtam",
        accent: "text-tamtam",
        soft: "bg-tamtam-soft",
      },
    ],
  },
];

const FLOW = [
  { step: "ปล่อยเช่าพื้นที่", layer: "ชั้นที่ 1" },
  { step: "ทำสัญญา · เก็บค่าเช่า", layer: "ชั้นที่ 1" },
  { step: "แจ้งซ่อม · ปิดงาน", layer: "ชั้นที่ 2" },
  { step: "ลูกค้าหน้าร้านกลับมาซ้ำ", layer: "ชั้นที่ 3" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted-foreground">ระบบนิเวศเดียว สามชั้นงาน</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            หน้าบ้าน หลังบ้าน และลูกค้าปลายทาง แยกหน้าที่ชัด แต่ใช้ข้อมูลชุดเดียวกัน
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            ปกติเจ้าของพื้นที่ใช้ Excel เก็บค่าเช่า ไลน์กลุ่มแจ้งซ่อม และไม่มีข้อมูลลูกค้าหน้าร้านเลย
            ที่นี่แต่ละชั้นใช้แยกกันได้ และเมื่อใช้ร่วมกันข้อมูลจะไหลต่อกันเอง
          </p>
        </div>

        <ol className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          {FLOW.map((f, i) => (
            <li key={f.step} className="flex items-center gap-3">
              <span className="border-l-2 border-border pl-3">
                <span className="block text-xs font-semibold text-muted-foreground">{f.layer}</span>
                <span className="font-medium">{f.step}</span>
              </span>
              {i < FLOW.length - 1 && <ArrowRight className="size-4 text-muted-foreground" />}
            </li>
          ))}
        </ol>

        <div className="mt-14 space-y-12">
          {LAYERS.map((layer) => (
            <div key={layer.no} className="border-t border-border pt-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3 className="font-display text-xl font-bold">
                  <span className="text-muted-foreground">ชั้นที่ {layer.no} · </span>
                  {layer.label}
                  <span className="ml-2 text-sm font-semibold text-muted-foreground">{layer.english}</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">ใครใช้:</span> {layer.users}
                </p>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{layer.summary}</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {layer.products.map((p) => (
                  <a
                    key={p.id}
                    href={p.href}
                    className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition hover:border-foreground/25"
                  >
                    <span className={`inline-flex h-12 w-fit items-center rounded-lg px-3 ${p.soft}`}>
                      <img
                        src={p.logo}
                        alt={`โลโก้ ${p.name}`}
                        className={p.wordmark ? "h-4 w-auto object-contain" : "size-8 object-contain"}
                        loading="lazy"
                      />
                    </span>

                    <h4 className="mt-4 font-display text-xl font-bold">{p.name}</h4>
                    <p className={`text-sm font-semibold ${p.accent}`}>{p.role}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.users}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                      ดูรายละเอียด
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 rounded-xl border border-border bg-cream p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold">ไม่แน่ใจว่าต้องเริ่มตรงไหน?</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              เริ่มจากชั้นที่ 1 ก่อน แล้วค่อยเปิดชั้นอื่นเมื่อพร้อม — ข้อมูลเดิมใช้ต่อได้ทั้งหมด
            </p>
          </div>
          <a
            href={LINKS.trial}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            ให้ทีมงานช่วยเลือก
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

