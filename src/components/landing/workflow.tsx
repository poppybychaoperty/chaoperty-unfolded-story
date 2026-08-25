import logoDchao from "@/assets/logo-dchao.png.asset.json";
import logoDwork from "@/assets/logo-dwork.png.asset.json";
import logoTamtam from "@/assets/logo-tamtam.png.asset.json";
import popspaceWordmark from "@/assets/popspace-wordmark.svg";

const STEPS = [
  {
    tag: "PopSpace",
    logo: popspaceWordmark,
    wordmark: true,
    accent: "text-popspace bg-popspace-soft",
    title: "เปิดจองล็อกอีเวนต์",
    desc: "ตลาดนัดและงานแฟร์เปิดรอบจองออนไลน์ ผู้ขายเลือกล็อกและชำระเงินได้เอง",
  },
  {
    tag: "dChao",
    logo: logoDchao.url,
    wordmark: false,
    accent: "text-dchao bg-dchao-soft",
    title: "ปล่อยเช่าพื้นที่",
    desc: "จัดผังโครงการ/โซน/พื้นที่ให้เช่า เห็นพื้นที่ว่างและอัตราการเช่าแบบเรียลไทม์",
  },
  {
    tag: "dChao",
    logo: logoDchao.url,
    wordmark: false,
    accent: "text-dchao bg-dchao-soft",
    title: "ทำสัญญาและเก็บค่าเช่า",
    desc: "ออกสัญญา อ่านมิเตอร์ ตั้งหนี้ วางบิลทั้งอาคารในคลิกเดียว รับสลิปผ่านพอร์ทัลผู้เช่า",
  },
  {
    tag: "dWork",
    logo: logoDwork.url,
    wordmark: false,
    accent: "text-dwork bg-dwork-soft",
    title: "ผู้เช่าแจ้งซ่อม",
    desc: "แจ้งผ่าน LINE หรือในระบบ งานถูกจัดหมวดและระบุความเร่งด่วนอัตโนมัติ",
  },
  {
    tag: "dWork",
    logo: logoDwork.url,
    wordmark: false,
    accent: "text-dwork bg-dwork-soft",
    title: "ทีมช่างปิดงาน",
    desc: "ช่างรับงานบนมือถือ แนบรูปก่อน–หลัง เบิกอะไหล่จากคลัง และบันทึกต้นทุนงานผู้รับเหมา",
  },
  {
    tag: "Tamtam",
    logo: logoTamtam.url,
    wordmark: false,
    accent: "text-tamtam bg-tamtam-soft",
    title: "ลูกค้าหน้าร้านสะสมแต้ม",
    desc: "ทราฟฟิกและยอดใช้จ่ายกลายเป็นข้อมูล ย้อนกลับมาช่วยเจ้าของพื้นที่ตัดสินใจเรื่องผู้เช่าและค่าเช่า",
  },
];

export function Workflow() {
  return (
    <section id="flow" className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">สายงานเชื่อมกันทั้งสตรีม</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            หนึ่งพื้นที่เช่า หนึ่งเส้นทางข้อมูล ตั้งแต่วันเซ็นสัญญาถึงลูกค้าคนล่าสุด
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-ink-foreground/15 pt-5">
              <span className="absolute -top-3 left-0 flex size-6 items-center justify-center rounded-full bg-primary font-display text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>

              <span className="flex size-11 items-center justify-center rounded-full bg-background">
                <img
                  src={s.logo}
                  alt=""
                  className={s.wordmark ? "w-7 object-contain" : "size-8 object-contain"}
                  loading="lazy"
                />
              </span>

              <span className={`mt-3 inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${s.accent}`}>
                {s.tag}
              </span>
              <h3 className="mt-2 font-display text-base font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
