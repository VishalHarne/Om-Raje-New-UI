import { useState } from "react";
import { assetUrl } from "@/lib/asset-url";
import { Reveal, SectionTag } from "./reveal";
import { useL } from "./i18n";

const posts = [
  {
    tag: ["शेतकरी", "Farmers"],
    place: ["जळकोट, धाराशिव", "Jalkot, Dharashiv"],
    title: ["शेतकरी संवाद: दुष्काळग्रस्तांशी थेट संवाद", "Farmer Dialogue: face to face with drought-hit families"],
    body: [
      "जळकोट व परिसरातील दुष्काळग्रस्त शेतकऱ्यांच्या समस्या, अडीअडचणी आणि अपेक्षा जाणून घेण्यासाठी ‘शेतकरी संवाद कार्यक्रम’ पार पडला. शेतकऱ्यांच्या प्रश्नांना वाचा फोडून ते शासन-प्रशासनापर्यंत पोहोचवण्याचा आणि सातत्याने पाठपुरावा करण्याचा निर्धार.",
      "A 'Farmer Dialogue' was held to hear the problems, hardships and hopes of drought-affected farmers in and around Jalkot — with a resolve to carry their questions to the government and follow up consistently.",
    ],
    tags: ["#शेतकरीसंवाद", "#जळकोट", "#मराठवाडा"],
    imgs: ["/images/fb-p1-1.jpg", "/images/fb-p1-2.jpg", "/images/fb-p1-3.jpg"],
  },
  {
    tag: ["जनता दरबार", "Janata Darbar"],
    place: ["जनसंपर्क कार्यालय, धाराशिव", "Public office, Dharashiv"],
    title: ["जनतेचे प्रश्न म्हणजे माझी वैयक्तिक जबाबदारी!", "People's problems are my personal responsibility!"],
    body: [
      "आलेल्या प्रत्येक तक्रारीकडे गांभीर्याने आणि संवेदनशीलतेने पाहिलं. संबंधित विभागांशी त्वरित संपर्क साधत अनेक समस्यांवर जागेवरच तोडगा काढला. आपल्या प्रेमाला, विश्वासाला आणि पाठिंब्याला खंबीरपणे न्याय देईन हेच माझं वचन!",
      "Every complaint was heard seriously and with empathy. By contacting departments immediately, many issues were resolved on the spot. My promise: to stand firmly by your love, trust and support!",
    ],
    tags: ["#जनता_दरबार", "#लोकसेवा", "#MissionDharashiv"],
    imgs: ["/images/fb-p2-1.jpg", "/images/fb-p2-2.jpg", "/images/fb-p2-3.jpg"],
  },
  {
    tag: ["शिवसेना", "Shiv Sena"],
    place: ["नेस्को सेंटर, गोरेगाव, मुंबई", "NESCO Centre, Goregaon, Mumbai"],
    title: ["शिवसेनेचा हिरक महोत्सवी दसरा मेळावा", "Shiv Sena's Diamond Jubilee Dussehra rally"],
    body: [
      "विजयादशमीच्या शुभदिनी उपमुख्यमंत्री एकनाथजी शिंदे यांनी संबोधित केले — भगवा खांद्यावर घेऊन प्रत्येक शिवसैनिक शेतकऱ्यांच्या बांधावर जाईल. ‘आम्ही भाषण देणारे नाही, तर शेतकऱ्यांची चूल पेटवणारे आहोत.’",
      "On Vijayadashami, Deputy CM Eknathji Shinde addressed the gathering — every Shiv Sainik will reach the farmers' fields with the saffron flag. 'We are not speech-makers; we are the ones who keep the farmer's hearth burning.'",
    ],
    tags: ["#शिवसेना", "#दसरामेळावा", "#भगवा"],
    imgs: ["/images/fb-p3-1.jpg", "/images/fb-p3-2.jpg"],
  },
  {
    tag: ["आरोग्य", "Health"],
    place: ["धाराशिव", "Dharashiv"],
    title: ["देशमुख मल्टिस्पेशालिटी हॉस्पिटल व ट्रॉमा केअर सेंटरचे उद्घाटन", "Inauguration of Deshmukh Multispeciality Hospital & Trauma Care Centre"],
    body: [
      "धाराशिव शहरासह परिसरातील नागरिकांना आधुनिक वैद्यकीय सुविधा, दर्जेदार आरोग्यसेवा आणि आपत्कालीन उपचार एकाच छताखाली उपलब्ध व्हावेत, या उद्देशाने सुरू झालेला उपक्रम निश्चितच कौतुकास्पद आहे.",
      "A commendable initiative to bring modern medical facilities, quality healthcare and emergency treatment under one roof for citizens of Dharashiv and the surrounding region.",
    ],
    tags: ["#Dharashiv", "#Healthcare", "#TraumaCare"],
    imgs: ["/images/fb-p4-1.jpg", "/images/fb-p4-2.jpg", "/images/fb-p4-3.jpg"],
  },
] as const;

function StoryCard({ p, n }: { p: (typeof posts)[number]; n: number }) {
  const l = useL();
  const [img, setImg] = useState(0);
  return (
    <article
      className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-card md:sticky md:grid-cols-2"
      style={{ top: `${6 + n * 1.5}rem` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[30rem]">
        {p.imgs.map((src, k) => (
          <img
            key={src}
            src={assetUrl(src)}
            alt={k === 0 ? l(p.title) : ""}
            className="absolute inset-0 h-full w-full object-cover transition-all duration-1000"
            style={{ opacity: k === img ? 1 : 0, transform: k === img ? "scale(1)" : "scale(1.08)" }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        <span className="on-photo glass absolute left-4 top-4 max-w-[80%] truncate rounded-full px-3 py-1.5 label-mono">
          {l(p.place)}
        </span>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {p.imgs.map((src, k) => (
            <button
              key={src}
              onClick={() => setImg(k)}
              aria-label={`Photo ${k + 1}`}
              className={`h-12 w-12 overflow-hidden rounded-xl border-2 transition sm:h-14 sm:w-14 ${k === img ? "scale-110 border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={assetUrl(src)} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-12">
        <span className="pointer-events-none absolute right-4 top-2 font-display text-7xl leading-none text-outline md:right-6 md:text-[8rem]">
          0{n + 1}
        </span>
        <div>
          <span className="inline-block rounded-full bg-primary/15 px-3 py-1 label-mono text-primary">{l(p.tag)}</span>
          <h3 className="mt-6 pr-12 text-2xl sm:text-3xl md:text-4xl">{l(p.title)}</h3>
          <p className="mt-5 leading-relaxed text-muted-foreground">{l(p.body)}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="text-sm text-gold">
                {t}
              </span>
            ))}
          </div>
          <a
            href="https://www.facebook.com/omprakashrajenimbalkar"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-3 font-semibold"
          >
            {l("संपूर्ण पोस्ट पहा", "View full post")}
            <span className="grid h-9 w-9 place-items-center rounded-full bg-fire text-primary-foreground transition group-hover:translate-x-1 group-hover:-rotate-45">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const l = useL();
  return (
    <section id="work" className="relative py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTag n="02">{l("लोकहिताचे कार्य", "Work for the people")}</SectionTag>
        <div className="mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal as="h2" className="max-w-3xl text-5xl md:text-7xl">
            {l("बदलाची सुरुवात", "Change begins")} <span className="italic text-fire">{l("जनतेतून.", "with people.")}</span>
          </Reveal>
          <Reveal delay={120} as="p" className="max-w-sm text-muted-foreground">
            {l(
              "लोकसेवा म्हणजे लोकांचे प्रश्न ऐकणे, त्यांचा पाठपुरावा करणे आणि आवश्यक माहिती पोहोचवणे.",
              "Public service means listening to people's problems, following them up and getting the right information to them.",
            )}
          </Reveal>
        </div>
        <div className="mt-16 space-y-8 md:space-y-10">
          {posts.map((p, n) => (
            <StoryCard key={p.imgs[0]} p={p} n={n} />
          ))}
        </div>
      </div>
    </section>
  );
}
