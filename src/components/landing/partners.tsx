import orgNia from "@/assets/org-nia.png.asset.json";
import orgDepa from "@/assets/org-depa.png.asset.json";
import orgSgs from "@/assets/org-sgs.png.asset.json";
import orgNdea from "@/assets/org-ndea.png.asset.json";
import orgFti from "@/assets/org-fti.png.asset.json";
import orgChiangmai from "@/assets/org-chiangmai.png.asset.json";

const ORGS = [
  { src: orgNia.url, alt: "สำนักงานนวัตกรรมแห่งชาติ (NIA)", label: "NIA" },
  { src: orgDepa.url, alt: "สำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)", label: "depa" },
  { src: orgSgs.url, alt: "มาตรฐาน ISO/IEC 29110 รับรองโดย SGS", label: "ISO/IEC 29110" },
  { src: orgNdea.url, alt: "Northern Digital Enterprise Association", label: "NDEA" },
  { src: orgFti.url, alt: "สภาอุตสาหกรรมจังหวัดเชียงใหม่", label: "ส.อ.ท. เชียงใหม่" },
  { src: orgChiangmai.url, alt: "หน่วยงานจังหวัดเชียงใหม่", label: "จังหวัดเชียงใหม่" },
];

const STATS = [
  { value: "15", unit: "ปี", label: "พัฒนาซอฟต์แวร์" },
  { value: "20,000", unit: "ยูนิต", label: "พื้นที่เช่าในระบบ" },
  { value: "100+", unit: "โครงการ", label: "ใช้งานจริง" },
  { value: "~20", unit: "ชม./สัปดาห์", label: "เวลาที่ประหยัดได้" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <dl className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-bold text-foreground">
                  {s.value}
                  <span className="ml-1 text-xs font-semibold text-muted-foreground">{s.unit}</span>
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="lg:border-l lg:border-border lg:pl-12">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              ขึ้นทะเบียนและรับรองโดย
            </p>
            <ul className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
              {ORGS.map((o) => (
                <li key={o.label}>
                  <img
                    src={o.src}
                    alt={o.alt}
                    loading="lazy"
                    className="h-9 w-auto max-w-[6.5rem] object-contain opacity-80 transition hover:opacity-100"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
