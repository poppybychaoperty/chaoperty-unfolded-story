import { LINKS } from "./links";
import realTeam from "@/assets/real-team.jpg.asset.json";
import realMarketTeam from "@/assets/real-market-team.jpg.asset.json";
import realMarketPos from "@/assets/real-market-pos.jpg.asset.json";
import realTraining from "@/assets/real-training.jpg.asset.json";
import realKeynote from "@/assets/real-keynote.jpg.asset.json";
import realBoothDemo from "@/assets/real-booth-demo.jpg.asset.json";
import realExpo from "@/assets/real-expo.jpg.asset.json";
import realExecVisit from "@/assets/real-exec-visit.jpg.asset.json";
import realStagePitch from "@/assets/real-stage-pitch.jpg.asset.json";
import realStartupBooth from "@/assets/real-startup-booth.jpg.asset.json";

type Photo = { src: string; alt: string; caption: string; wide?: boolean };

const PHOTOS: Photo[] = [
  {
    src: realTeam.url,
    alt: "ทีมงาน Chaoperty ถ่ายภาพร่วมกับทีมลูกค้าหลังส่งมอบระบบบริหารพื้นที่เช่า",
    caption: "ทีม Chaoperty กับทีมลูกค้าหลังส่งมอบระบบและอบรมการใช้งาน",
    wide: true,
  },
  {
    src: realMarketTeam.url,
    alt: "ทีมงานและแม่ค้าที่กาดลำพูนจตุจักรถือผ้ากันเปื้อน Chaoperty",
    caption: "กาดลำพูนจตุจักร — ตลาดที่เปลี่ยนมาบริหารแผงเช่าด้วย Chaoperty",
  },
  {
    src: realMarketPos.url,
    alt: "เจ้าหน้าที่ตลาดใช้เครื่อง POS Chaoperty เก็บค่าเช่าแผงในตลาดกลางคืน",
    caption: "เก็บค่าเช่าแผงหน้างานด้วยเครื่องพิมพ์ใบเสร็จ ต่อตรงเข้าระบบ",
  },
  {
    src: realTraining.url,
    alt: "ทีมงานอบรมการใช้งานระบบให้เจ้าหน้าที่โครงการรอบโต๊ะประชุม",
    caption: "อบรมใช้งานจริงกับเจ้าหน้าที่โครงการ ไม่ปล่อยให้เรียนรู้เอง",
  },
  {
    src: realBoothDemo.url,
    alt: "บูธ Chaoperty สาธิตระบบบริหารพื้นที่เช่าให้ผู้สนใจ",
    caption: "ออกบูธสาธิตระบบให้เจ้าของตลาดและผู้บริหารอาคาร",
  },
  {
    src: realKeynote.url,
    alt: "ตัวแทน Chaoperty ขึ้นเวทีนำเสนอระบบบริหารพื้นที่เช่าในงาน Transform",
    caption: "ขึ้นเวทีงาน TRANSFORM ตลาดสดยุควิถีใหม่ ร่วมกับ depa",
  },
  {
    src: realStartupBooth.url,
    alt: "ทีม Chaoperty ในงาน Startup Thailand Connext",
    caption: "Startup Thailand Connext — ดิจิทัลแพลตฟอร์มสัญชาติไทย",
  },
  {
    src: realExecVisit.url,
    alt: "ผู้บริหารหน่วยงานภาครัฐเยี่ยมชมบูธ Chaoperty",
    caption: "ผู้บริหารภาครัฐเยี่ยมชมบูธและรับฟังการใช้งานจริง",
  },
  {
    src: realExpo.url,
    alt: "ผู้เข้าร่วมงานรุมชมการสาธิตการออกใบแจ้งหนี้ที่บูธ Chaoperty",
    caption: "สาธิตการวางบิลและออกใบแจ้งหนี้ให้ผู้สนใจในงานแสดงเทคโนโลยี",
  },
  {
    src: realStagePitch.url,
    alt: "การนำเสนอบนเวทีต่อหน้าผู้ประกอบการตลาดและอาคาร",
    caption: "\u201cไม่ต้องห่วง เราเข้าใจปัญหาของคุณ\u201d — จากการลงพื้นที่จริงกว่า 100 โครงการ",
  },
];

export function SocialProof() {
  return (
    <section id="real" className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-muted-foreground">ใช้งานจริง ไม่ใช่แค่เดโม</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            ใช้งานจริงในโครงการทั่วไทย โดยทีมงานที่ลงพื้นที่เอง
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            เบื้องหลังระบบคือทีมที่เข้าไปติดตั้ง ย้ายข้อมูล และอบรมการใช้งานกับเจ้าหน้าที่จริงในแต่ละโครงการ —
            ตั้งแต่ตลาดสด ตลาดนัด คอมมูนิตี้มอลล์ ไปจนถึงอาคารสำนักงาน
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHOTOS.map((p) => (
            <figure
              key={p.src}
              className={`group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-foreground/5 ${
                p.wide ? "sm:col-span-2" : ""
              }`}
            >
              <div className={`overflow-hidden ${p.wide ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-4 text-sm leading-relaxed text-muted-foreground">{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <a
          href={LINKS.facebook}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:bg-accent"
        >
          ดูภาพจากหน้างานทั้งหมดบนเพจ Chaoperty
        </a>
      </div>
    </section>
  );
}
