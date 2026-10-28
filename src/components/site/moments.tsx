import { Reveal } from "./reveal";
import { useL } from "./i18n";
import { assetUrl } from "@/lib/asset-url";

const trio = [
  { src: "/images/community-visit.webp", t: ["जिथे प्रश्न, तिथे संवाद.", "Wherever there's a problem, there's a dialogue."] },
  { src: "/images/citizen-meeting.webp", t: ["प्रत्येक आवाज महत्त्वाचा.", "Every voice matters."] },
  { src: "/images/public-meeting-enhanced.jpg", t: ["समुदायासोबत, समुदायासाठी.", "With the community, for the community."] },
] as const;

const field = [
  { src: "/images/night-rally-enhanced.jpg", t: ["सायंकाळची जाहीर सभा", "Evening public rally"], cls: "md:col-span-2 md:row-span-2" },
  { src: "/images/field-smile.webp", t: ["कार्यकर्त्यांसोबत", "With party workers"], cls: "" },
  { src: "/images/field-citizen-meet.webp", t: ["नागरिकांशी संवाद", "Talking with citizens"], cls: "" },
  { src: "/images/field-shivaji-tribute.webp", t: ["छत्रपती शिवाजी महाराजांना अभिवादन", "Tribute to Chhatrapati Shivaji Maharaj"], cls: "md:row-span-2" },
  { src: "/images/field-village-visit.webp", t: ["गाव भेट", "Village visit"], cls: "" },
  { src: "/images/field-stage-address.webp", t: ["जनतेला संबोधन", "Addressing the people"], cls: "" },
  { src: "/images/night-speech-enhanced.jpg", t: ["धाराशिवचा आवाज", "The voice of Dharashiv"], cls: "md:col-span-2" },
] as const;

export function Moments() {
  const l = useL();
  return (
    <section id="moments" className="relative overflow-hidden bg-ivory py-24 text-ivory-foreground md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <span className="label-mono text-ember">{l("मतदारसंघात", "In the constituency")}</span>
          <span className="h-px w-12 bg-ember/60" />
        </div>
        <Reveal as="h2" className="mt-8 text-5xl md:text-7xl">
          {l("जनतेच्या", "Closer to")} <span className="italic text-ember">{l("अधिक जवळ.", "the people.")}</span>
        </Reveal>

        <div className="mt-14 flex h-[40rem] flex-col gap-3 md:h-[34rem] md:flex-row">
          {trio.map((m, k) => (
            <div
              key={m.src}
              className="group relative flex-1 overflow-hidden rounded-[1.75rem] transition-all duration-700 ease-out hover:flex-[2.6]"
            >
              <img src={assetUrl(m.src)} alt={l(m.t)} className="absolute inset-0 h-full w-full object-cover transition duration-[1.5s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="on-photo absolute bottom-0 p-6 md:p-7">
                <p className="label-mono text-gold">0{k + 1} / DHARASHIV</p>
                <p className="mt-2 font-display text-xl md:text-3xl">{l(m.t)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <Reveal as="h2" className="text-5xl md:text-7xl">
            {l("प्रत्येक गाव.", "Every village.")}
            <br />
            <span className="italic text-ember">{l("प्रत्येक आवाज.", "Every voice.")}</span>
          </Reveal>
          <span className="label-mono opacity-60">{l("प्रत्यक्ष जनतेत · ०७ क्षण", "On the ground · 07 moments")}</span>
        </div>
        <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-4">
          {field.map((f, k) => (
            <Reveal
              key={f.src}
              variant="clip-reveal"
              delay={k * 90}
              className={`group relative overflow-hidden rounded-3xl ${k === 0 || k === 6 ? "col-span-2" : ""} ${f.cls}`}
            >
              <img src={assetUrl(f.src)} alt={l(f.t)} className="h-full w-full object-cover grayscale-[40%] transition duration-1000 group-hover:scale-105 group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-60 transition duration-500 group-hover:opacity-100 md:opacity-0" />
              <span className="on-photo absolute bottom-3 left-3 right-3 text-sm transition duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {l(f.t)}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
