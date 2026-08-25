import { FileWarning, MessagesSquare, UserSearch } from "lucide-react";

const PROBLEMS = [
  {
    icon: FileWarning,
    title: "ออกบิลทีละห้อง เสียทั้งวัน",
    pain: "จดมิเตอร์ คูณ CT บวก Surcharge แล้วพิมพ์บิลทีละสัญญา — พลาดเลขทีก็ต้องแก้ทั้งรอบ",
    fix: "dChao ตั้งหนี้ทุกสัญญาในรอบเดียว คำนวณค่าน้ำ–ค่าไฟและภาษีให้อัตโนมัติ",
  },
  {
    icon: MessagesSquare,
    title: "งานซ่อมหายไปในกลุ่มไลน์",
    pain: "แจ้งงานกันในแชท ไม่มีใครรู้ว่างานไหนค้าง ใครรับไปแล้ว และปิดงานไปหรือยัง",
    fix: "dWork แปลงข้อความจาก LINE Group เป็น task อัตโนมัติ พร้อมสถานะและรูปถ่ายครบทุกขั้น",
  },
  {
    icon: UserSearch,
    title: "ไม่รู้จักลูกค้าที่มาใช้พื้นที่",
    pain: "มีคนเดินเข้าโครงการทุกวัน แต่ไม่มีข้อมูลว่าใครมาบ่อย ซื้ออะไร ร้านไหนขายดี",
    fix: "Tamtam เก็บการเช็คอินและใบเสร็จเป็นฐานข้อมูล CRM ที่เอาไปทำโปรโมชั่นต่อได้",
  },
];

export function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <p className="text-sm font-semibold text-muted-foreground">ปัญหาที่เจอทุกเดือน</p>
      <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
        งานพื้นที่เช่ากินเวลาคุณไปเท่าไหร่ในแต่ละรอบบิล
      </h2>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {PROBLEMS.map((item) => (
          <article key={item.title} className="rounded-3xl border border-border bg-card p-6">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary/20">
              <item.icon className="size-5" />
            </span>
            <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.pain}</p>
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed font-medium">{item.fix}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
