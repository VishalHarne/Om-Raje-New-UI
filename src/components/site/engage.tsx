import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal, SectionTag } from "./reveal";
import { useL } from "./i18n";

const field =
  "peer w-full rounded-xl border border-input bg-background/40 px-4 pb-2 pt-6 text-foreground outline-none transition focus:border-primary focus:bg-background/70 focus:shadow-glow";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="relative block">
      {children}
      <span className="pointer-events-none absolute left-4 top-2 label-mono text-muted-foreground">{label}</span>
    </label>
  );
}

function DemoForm({ children, note, cta }: { children: ReactNode; note: string; cta: string }) {
  const l = useL();
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <form onSubmit={submit} className="space-y-4">
      {children}
      <button
        type="submit"
        className="group relative w-full overflow-hidden rounded-xl bg-fire py-4 font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.01]"
      >
        <span className="relative z-10">{sent ? l("धन्यवाद! (डेमो)", "Thank you! (demo)") : cta}</span>
        <span className="absolute inset-0 -translate-x-full bg-foreground/20 transition duration-700 group-hover:translate-x-full" />
      </button>
      <p className="text-xs text-muted-foreground">{note}</p>
    </form>
  );
}

export function Register() {
  const l = useL();
  return (
    <section id="register" className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-dusk" />
      <div className="pointer-events-none absolute -right-20 top-10 select-none font-display text-[16rem] leading-none text-outline opacity-40 md:text-[22rem]">
        {l("रोजगार", "Rojgar")}
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionTag n="03">{l("पुढचे पाऊल", "The next step")}</SectionTag>
          <p className="mt-10 label-mono text-gold">{l("रोजगार मेळावा · नोकरीची संधी", "Job fair · Employment opportunity")}</p>
          <Reveal as="h2" className="mt-4 text-5xl md:text-6xl">
            {l("संधी", "Opportunity must")} <span className="italic text-fire">{l("प्रत्येकापर्यंत", "reach everyone")}</span>{" "}
            {l("पोहोचली पाहिजे.", "— everywhere.")}
          </Reveal>
          <Reveal delay={120} as="p" className="mt-6 max-w-md text-lg text-muted-foreground">
            {l(
              "धाराशिवमधील नोकरी शोधणारे उमेदवार आणि नियोक्त्यांसाठी प्रस्तावित रोजगार मेळावा नोंदणी. अधिकृत खात्री झाल्यानंतर तारीख व सहभागाची माहिती जाहीर केली जाईल.",
              "Proposed job-fair registration for job seekers and employers in Dharashiv. Dates and participation details will be announced after official confirmation.",
            )}
          </Reveal>

          {/* Event ticket */}
          <Reveal delay={200} className="mt-12 max-w-md">
            <div className="relative flex overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="flex w-24 shrink-0 flex-col sm:w-32 items-center justify-center gap-1 bg-fire p-6 text-primary-foreground">
                <span className="label-mono">TBA</span>
                <span className="font-display text-4xl">{l("२०२६", "2026")}</span>
              </div>
              <div className="relative flex-1 border-l-2 border-dashed border-border p-6">
                <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-background" />
                <span className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-background" />
                <p className="label-mono text-primary">{l("04 / दिनदर्शिकेत नोंद करा", "04 / Save the date")}</p>
                <p className="mt-2 font-display text-xl">{l("धाराशिव जनसंवाद कार्यक्रम", "Dharashiv Public Dialogue")}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {l("अधिकृत तारीख, ठिकाण आणि नोंदणीची माहिती येथे दिली जाईल.", "Official date, venue and registration details will appear here.")}
                </p>
                <p className="mt-3 text-xs text-gold">● {l("तारीख जाहीर होणे बाकी", "Date to be announced")}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="glass rounded-[2rem] p-6 sm:p-8 md:p-10">
          <p className="label-mono text-primary">{l("ROJGAR MELAVA / रोजगार मेळावा", "ROJGAR MELAVA / Job fair")}</p>
          <h3 className="mt-3 text-3xl">{l("पुढचे पाऊल उचला", "Take the next step")}</h3>
          <p className="mb-8 mt-1 text-muted-foreground">{l("उमेदवार आणि नियोक्त्यांसाठी", "For candidates and employers")}</p>
          <DemoForm cta={l("आवड नोंदवा", "Register interest")} note={l("डेमो फॉर्म. तुमची माहिती साठवली किंवा कार्यालयात पाठवली जात नाही.", "Demo form. Your details are not stored or sent to the office.")}>
            <Field label={l("पूर्ण नाव", "Full name")}>
              <input required className={field} />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={l("मोबाईल क्रमांक", "Mobile number")}>
                <input required type="tel" className={field} />
              </Field>
              <Field label={l("ई-मेल (ऐच्छिक)", "Email (optional)")}>
                <input type="email" className={field} />
              </Field>
            </div>
            <Field label={l("मी आहे…", "I am…")}>
              <select required className={field} defaultValue="">
                <option value="" disabled>
                  {l("एक पर्याय निवडा", "Choose an option")}
                </option>
                <option>{l("नोकरी शोधणारा / शोधणारी", "Job seeker")}</option>
                <option>{l("नियोक्ता", "Employer")}</option>
              </select>
            </Field>
            <Field label={l("तालुका / गाव", "Taluka / Village")}>
              <input className={field} />
            </Field>
          </DemoForm>
        </Reveal>
      </div>
    </section>
  );
}

const socials = [
  { k: ["फेसबुक", "Facebook"], d: ["ओम राजे निंबाळकर यांचा शोध घ्या", "Find Om Raje Nimbalkar"], href: "https://www.facebook.com/omprakashrajenimbalkar", i: "f" },
  { k: ["व्हॉट्सॲप", "WhatsApp"], d: ["आमच्या व्हॉट्सॲप चॅनेलला जॉइन करा", "Join our WhatsApp channel"], href: "https://whatsapp.com/channel/0029Vb97yd1DeOMyTuR1mN1V", i: "✆" },
  { k: ["इन्स्टाग्राम", "Instagram"], d: ["@mpomrajenimbalkar", "@mpomrajenimbalkar"], href: "https://www.instagram.com/mpomrajenimbalkar/", i: "◎" },
] as const;

export function Contact() {
  const l = useL();
  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag n="05">{l("तुमचा आवाज महत्त्वाचा", "Your voice matters")}</SectionTag>
        <Reveal as="h2" className="mt-10 text-5xl sm:text-6xl md:text-[8rem] md:leading-[1]">
          {l("चला,", "Let's")} <span className="italic text-fire">{l("बदल", "make")}</span> {l("घडवूया.", "change.")}
        </Reveal>
        <p className="mt-6 max-w-xl text-muted-foreground">
          {l("स्थानिक प्रश्न मांडा किंवा माहिती विचारा. एकत्र आलो, तर प्रत्येक गोष्ट शक्य.", "Raise a local issue or ask for information. Together, everything is possible.")}
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {socials.map((s, k) => (
              <Reveal key={s.href} delay={k * 100}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-5 rounded-2xl border border-border p-5 transition duration-500 hover:border-primary hover:bg-card"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary text-xl transition duration-500 group-hover:bg-fire group-hover:text-primary-foreground">
                    {s.i}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl">{l(s.k)}</span>
                    <span className="text-sm text-muted-foreground">{l(s.d)}</span>
                  </span>
                  <span className="text-primary transition group-hover:translate-x-1 group-hover:-rotate-45">→</span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150} className="rounded-[2rem] border border-border bg-card p-6 sm:p-8 md:p-10 lg:col-span-3">
            <p className="label-mono text-primary">{l("CITIZEN HELP DESK / नागरिक मदत", "CITIZEN HELP DESK")}</p>
            <h3 className="mt-3 text-3xl">{l("तुमची अडचण सांगा", "Tell us your problem")}</h3>
            <p className="mb-8 mt-1 text-muted-foreground">{l("कशाबाबत मदत हवी आहे ते लिहा.", "Write what you need help with.")}</p>
            <DemoForm cta={l("संदेश तयार करा", "Prepare message")} note={l("डेमो फॉर्म. तुमचा संदेश पाठवला किंवा साठवला जात नाही.", "Demo form. Your message is not sent or stored.")}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={l("तुमचे नाव", "Your name")}>
                  <input required className={field} />
                </Field>
                <Field label={l("फोन किंवा ई-मेल", "Phone or email")}>
                  <input required className={field} />
                </Field>
              </div>
              <Field label={l("अडचणीचा विषय", "Topic")}>
                <select required className={field} defaultValue="">
                  <option value="" disabled>
                    {l("विषय निवडा", "Choose a topic")}
                  </option>
                  <option>{l("रस्ते व पायाभूत सुविधा", "Roads & infrastructure")}</option>
                  <option>{l("पाणी व शेती", "Water & farming")}</option>
                  <option>{l("सार्वजनिक सेवा", "Public services")}</option>
                  <option>{l("रोजगार", "Employment")}</option>
                  <option>{l("इतर", "Other")}</option>
                </select>
              </Field>
              <Field label={l("तुमचा संदेश", "Your message")}>
                <textarea required rows={4} className={field} />
              </Field>
            </DemoForm>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const l = useL();
  return (
    <footer className="relative overflow-hidden border-t border-border pt-20">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 md:flex-row">
        <p className="label-mono text-muted-foreground">{l("© २०२६ · धाराशिव, महाराष्ट्र", "© 2026 · Dharashiv, Maharashtra")}</p>
        <a href="#" className="label-mono text-primary">
          {l("वर जा ↑", "Back to top ↑")}
        </a>
      </div>
      <p className="mt-10 select-none text-center font-display text-[18vw] leading-[0.9] text-fire opacity-90">
        {l("धाराशिव", "Dharashiv")}
      </p>
    </footer>
  );
}
