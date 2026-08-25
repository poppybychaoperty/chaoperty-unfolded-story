import { Building, CalendarDays, Factory, Home, Store, Tent } from "lucide-react";

const AUDIENCE = [
  { icon: Tent, title: "ตลาด / แผงเช่า", desc: "ค่าแผงรายวัน รายสัปดาห์ รายเดือน รายปี ในระบบเดียว" },
  { icon: Store, title: "คอมมูนิตี้มอลล์ / พลาซ่า", desc: "ผู้เช่าหลายร้าน ค่าเช่าแบบ %GP และงานลูกค้าสัมพันธ์" },
  { icon: Building, title: "อาคารสำนักงาน", desc: "สัญญาระยะยาว ค่าส่วนกลาง มิเตอร์แยกยูนิต และงานอาคาร" },
  { icon: Home, title: "อพาร์ตเมนต์ / หอพัก", desc: "ค่าเช่ารายเดือน ค่าน้ำค่าไฟ และการติดตามยอดค้าง" },
  { icon: Factory, title: "โกดัง / พื้นที่อุตสาหกรรม", desc: "พื้นที่ขนาดใหญ่ หลายสกุลเงิน และสัญญาหลายภาษา" },
  { icon: CalendarDays, title: "ผู้จัดอีเวนต์ / งานแฟร์", desc: "เปิดรอบจองล็อกรายวัน ขายบูธออนไลน์ และเก็บเงินล่วงหน้า" },
];

export function Audience() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">เหมาะสำหรับใคร?</h2>
        <p className="mt-3 max-w-xl text-base text-muted-foreground">
          ใช้ได้กับทุกรูปแบบการปล่อยเช่า ตั้งแต่แผงตลาดรายวันไปจนถึงอาคารสำนักงานสัญญาหลายปี
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <article key={a.title} className="rounded-3xl border border-border bg-card p-5">
              <a.icon className="size-5" />
              <h3 className="mt-4 font-display text-base font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
