import { Reveal, SectionTag } from "./reveal";
import { useL } from "./i18n";
import { assetUrl } from "@/lib/asset-url";

const timeline = [
  { y: ["२००९", "2009"], t: ["महाराष्ट्र विधानसभेवर निवड.", "Elected to the Maharashtra Legislative Assembly."] },
  { y: ["२०१९", "2019"], t: ["उस्मानाबाद मतदारसंघातून १७व्या लोकसभेवर निवड.", "Elected to the 17th Lok Sabha from Osmanabad."] },
  { y: ["२०२४", "2024"], t: ["धाराशिव मतदारसंघातून १८व्या लोकसभेवर पुन्हा निवड.", "Re-elected to the 18th Lok Sabha from Dharashiv."] },
] as const;

const pillars = [
  { k: ["शेतकरी", "Farmers"], d: ["पाणी, पीक व ग्रामीण मदत", "Water, crops & rural support"], n: "01" },
  { k: ["युवा", "Youth"], d: ["रोजगार व कौशल्य मेळावे", "Jobs & skill fairs"], n: "02" },
  { k: ["कुटुंबे", "Families"], d: ["आरोग्य व कल्याण योजना", "Health & welfare schemes"], n: "03" },
  { k: ["गावे", "Villages"], d: ["रस्ते, पाणी व पायाभूत सुविधा", "Roads, water & infrastructure"], n: "04" },
] as const;

export function About() {
  const l = useL();
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-40">
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-primary/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag n="01">{l("जनतेचा प्रतिनिधी", "Representative of the people")}</SectionTag>

        <div className="mt-14 grid gap-16 lg:grid-cols-12">
          <Reveal className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-fire opacity-60 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
                <img
                  src={assetUrl("/images/portrait.webp")}
                  alt="Portrait of Om Raje Nimbalkar"
                  className="aspect-[4/5] w-full object-cover transition duration-[1.5s] hover:scale-105"
                />
                <div className="on-photo absolute inset-x-0 bottom-0 bg-veil p-6 pt-20">
                  <p className="label-mono text-gold">{l("धाराशिव, महाराष्ट्र", "Dharashiv, Maharashtra")}</p>
                  <p className="mt-1 font-display text-xl sm:text-2xl">{l("ओमप्रकाश राजे निंबाळकर", "Omprakash Raje Nimbalkar")}</p>
                </div>
              </div>
              <div className="glass absolute -right-3 -top-6 animate-float rounded-2xl px-5 py-4 sm:-right-6">
                <p className="font-display text-4xl text-fire">{l("३", "3")}</p>
                <p className="label-mono text-muted-foreground">{l("वेळा निवड", "times elected")}</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal as="h2" className="text-4xl md:text-6xl">
              {l("जनतेशी नाळ.", "Rooted in people.")}{" "}
              <span className="italic text-fire">{l("उद्याच्या विकासावर", "Focused on tomorrow's")}</span>{" "}
              {l("लक्ष.", "growth.")}
            </Reveal>
            <Reveal delay={120} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                {l(
                  "ओमप्रकाश राजे निंबाळकर हे महाराष्ट्रातील राजकारणी आहेत. त्यांनी उस्मानाबाद—आताचा धाराशिव—लोकसभा मतदारसंघाचे प्रतिनिधित्व केले असून महाराष्ट्र विधानसभेवरही काम केले आहे.",
                  "Omprakash Raje Nimbalkar is a politician from Maharashtra. He has represented the Osmanabad—now Dharashiv—Lok Sabha constituency and has also served in the Maharashtra Legislative Assembly.",
                )}
              </p>
              <p>
                {l(
                  "लोककार्य, संधी आणि सहभागाची माहिती नागरिकांपर्यंत पोहोचवण्यासाठी हे व्यासपीठ आहे. कार्यक्रम व तारखा अधिकृत घोषणा झाल्यानंतर अद्ययावत केल्या जातील.",
                  "This platform brings news of public work, opportunities and participation to citizens. Events and dates will be updated after official announcements.",
                )}
              </p>
            </Reveal>

            <div id="timeline" className="mt-14">
              <p className="label-mono text-primary">{l("लोकसेवेचा प्रवास", "A journey of public service")}</p>
              <div className="relative mt-6">
                <div className="absolute left-0 right-0 top-[1.15rem] hidden h-px bg-gradient-to-r from-primary via-gold to-transparent sm:block" />
                <div className="grid gap-8 sm:grid-cols-3">
                  {timeline.map((e, k) => (
                    <Reveal key={e.y[1]} delay={k * 150} className="relative border-l border-primary/40 pl-5 sm:border-0 sm:pl-0">
                      <span className="relative z-10 hidden h-3 w-3 translate-y-3.5 rounded-full bg-primary ring-8 ring-primary/15 sm:block" />
                      <p className="font-display text-5xl text-outline transition hover:text-primary sm:mt-6">{l(e.y)}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{l(e.t)}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, k) => (
            <Reveal
              key={p.n}
              delay={k * 100}
              className="group relative overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-card"
            >
              <div className="absolute inset-x-0 bottom-0 h-0 bg-fire opacity-15 transition-all duration-700 group-hover:h-full" />
              <span className="label-mono text-muted-foreground">{p.n}</span>
              <p className="mt-10 font-display text-4xl transition group-hover:text-primary">{l(p.k)}</p>
              <p className="mt-2 text-muted-foreground">{l(p.d)}</p>
              <span className="absolute right-8 top-8 text-xl text-primary opacity-0 transition duration-500 group-hover:rotate-90 group-hover:opacity-100">
                ✳
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
