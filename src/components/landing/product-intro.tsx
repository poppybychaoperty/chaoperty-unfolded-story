type Tone = "chaoperty" | "dchao" | "dwork" | "tamtam" | "popspace";

const TONE: Record<Tone, { soft: string; text: string; ring: string }> = {
  chaoperty: { soft: "bg-chaoperty-soft", text: "text-chaoperty", ring: "ring-chaoperty/20" },
  dchao: { soft: "bg-dchao-soft", text: "text-dchao", ring: "ring-dchao/20" },
  dwork: { soft: "bg-dwork-soft", text: "text-dwork", ring: "ring-dwork/20" },
  tamtam: { soft: "bg-tamtam-soft", text: "text-tamtam", ring: "ring-tamtam/20" },
  popspace: { soft: "bg-popspace-soft", text: "text-popspace", ring: "ring-popspace/20" },
};

export function ProductIntro({
  logo,
  name,
  kicker,
  tagline,
  tone,
  wordmark = false,
}: {
  logo: string;
  name: string;
  kicker: string;
  tagline: string;
  tone: Tone;
  wordmark?: boolean;
}) {
  const t = TONE[tone];

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
      <span
        className={`flex size-28 shrink-0 items-center justify-center rounded-full ring-8 ${t.soft} ${t.ring} shadow-lg shadow-foreground/5`}
      >
        <img
          src={logo}
          alt={`มาสคอต ${name}`}
          className={wordmark ? "w-16 object-contain" : "size-20 object-contain"}
          loading="lazy"
        />
      </span>

      <div>
        <p className={`text-xs font-semibold tracking-wide uppercase ${t.text}`}>{kicker}</p>
        <p className="font-display text-3xl leading-tight font-bold sm:text-4xl">{name}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tagline}</p>
      </div>
    </div>
  );
}

export function MascotChip({
  logo,
  label,
  tone,
  wordmark = false,
}: {
  logo: string;
  label: string;
  tone: Tone;
  wordmark?: boolean;
}) {
  const t = TONE[tone];
  return (
    <span className={`inline-flex items-center gap-2 rounded-full ${t.soft} px-2.5 py-1 text-xs font-semibold ${t.text}`}>
      <img src={logo} alt="" className={wordmark ? "h-3.5 w-auto object-contain" : "size-5 object-contain"} loading="lazy" />
      {label}
    </span>
  );
}
