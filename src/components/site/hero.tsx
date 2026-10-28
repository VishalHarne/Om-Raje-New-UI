import { useEffect, useState } from "react";
import { LangSwitch, useL } from "./i18n";

const slides = [
  "/images/hero-banner-title.jpg",
  "/images/hero-banner-1.jpg",
  "/images/hero-banner-2.jpg",
  "/images/hero-banner-3.jpg",
  "/images/hero-banner-4.jpg",
];

const nav = [
  [["परिचय", "About"], "#about"],
  [["कार्य", "Work"], "#work"],
  [["क्षण", "Moments"], "#moments"],
  [["रोजगार", "Jobs"], "#register"],
  [["संपर्क", "Contact"], "#contact"],
] as const;

export function Hero() {
  const l = useL();
  const [i, setI] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => {
      clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink">
      {slides.map((src, idx) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1600ms]"
          style={{ opacity: idx === i ? 1 : 0 }}
        >
          <img
            src={src}
            alt={idx === 0 ? "Om Raje meeting residents in Dharashiv" : ""}
            className={`h-full w-full object-cover ${idx === i ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-veil" />
      <div className="absolute inset-0 bg-dusk mix-blend-screen opacity-70" />

      <nav className={`fixed inset-x-0 top-0 z-50 px-3 text-foreground transition-all duration-500 ${scrolled ? "py-3" : "on-photo py-4 md:py-6"}`}>
        <div
          className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-full py-2.5 pl-3 pr-2.5 transition-all duration-500 md:flex md:justify-between md:px-5 ${scrolled ? "glass" : ""}`}
        >
          <a href="#" className="flex min-w-0 items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-fire font-display text-lg text-primary-foreground">
              {l("ओ", "O")}
            </span>
            <span className="truncate font-display text-lg">{l("ओम राजे", "Om Raje")}</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map(([lb, h]) => (
              <a key={h} href={h} className="group relative text-sm text-foreground/80 transition hover:text-foreground">
                {l(lb)}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <LangSwitch />
            <a
              href="#contact"
              className="hidden rounded-full bg-fire px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-105 sm:inline-flex"
            >
              {l("आवाज द्या", "Raise your voice")}
            </a>
          </div>
        </div>
      </nav>

      <div className="on-photo relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:pb-24">
        <div className="mb-6 flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="label-mono text-foreground/80">
            {l("तुमचा आवाज · तुमचा मतदारसंघ", "Your voice · Your constituency")}
          </span>
        </div>
        <h1 key={l("mr", "en")} className="max-w-5xl text-[2.6rem] leading-[1.08] sm:text-7xl lg:text-[7.5rem]">
          <span className="block overflow-hidden pb-2">
            <span className="block animate-rise">{l("आधी ऐकून घेऊ.", "Listen first.")}</span>
          </span>
          <span className="block overflow-hidden pb-3">
            <span className="block animate-rise text-fire italic" style={{ animationDelay: "180ms" }}>
              {l("एकत्र पुढे जाऊ.", "Rise together.")}
            </span>
          </span>
        </h1>
        <div className="mt-6 flex flex-col gap-8 md:mt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base text-foreground/75 sm:text-lg">
            {l(
              "धाराशिवसाठी जनतेचे व्यासपीठ — लोककार्य, संधी आणि आपला आवाज पोहोचवण्याचा मार्ग.",
              "A people's platform for Dharashiv — public work, opportunities and a way to make your voice heard.",
            )}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className="relative h-1 w-8 overflow-hidden rounded-full bg-foreground/20 sm:w-10"
                >
                  <span
                    className="absolute inset-y-0 left-0 bg-primary"
                    style={{
                      width: idx <= i ? "100%" : "0%",
                      transition: idx === i ? "width 6s linear" : "none",
                    }}
                  />
                </button>
              ))}
            </div>
            <span className="label-mono text-foreground/70">
              0{i + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>

      <div className="on-photo absolute right-8 top-32 z-10 hidden h-36 w-36 lg:block">
        <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
          <defs>
            <path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
          </defs>
          <text className="fill-foreground/80 font-mono" fontSize="8.5" letterSpacing="3">
            <textPath href="#c">{l("सदैव जनतेत • FOR THE PEOPLE • ", "ALWAYS WITH YOU • FOR THE PEOPLE • ")}</textPath>
          </text>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-3xl text-primary">✳</span>
      </div>
    </header>
  );
}

/* Luxury ribbon: hairline-framed, slow serif words with fine star separators. */
const words = [
  ["आधी ऐकून घेऊ", "Listen first"],
  ["एकत्र काम करू", "Work together"],
  ["पुढे वाटचाल करू", "Move forward"],
  ["शेतकरी", "Farmers"],
  ["युवा", "Youth"],
  ["धाराशिव", "Dharashiv"],
] as const;

export function Marquee() {
  const l = useL();
  const row = [...words, ...words];
  return (
    <section aria-label="Values" className="group relative py-10 md:py-14">
      <div className="mx-auto mb-6 flex max-w-6xl items-center gap-4 px-6">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-border" />
        <span className="label-mono text-muted-foreground">{l("मूल्ये · Est. धाराशिव", "Values · Est. Dharashiv")}</span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-border" />
      </div>
      <div className="overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...row, ...row].map((w, k) => (
            <span key={k} className="flex items-center">
              <span
                className={`px-8 font-display text-3xl leading-[1.4] tracking-wide md:px-12 md:text-5xl ${
                  k % 2 === 0 ? "text-foreground/90" : "italic text-fire"
                }`}
              >
                {l(w)}
              </span>
              <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-primary/70" aria-hidden>
                <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z" fill="currentColor" />
              </svg>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 h-px max-w-6xl bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
