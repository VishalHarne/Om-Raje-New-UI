import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "mr" | "en";
/** A bilingual string: [marathi, english] */
export type Bi = readonly [string, string];

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "mr", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mr");
  useEffect(() => {
    try {
      const s = localStorage.getItem("om-lang");
      if (s === "en" || s === "mr") setLangState(s);
    } catch {}
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("om-lang", l);
    } catch {}
  }, []);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  return useContext(Ctx);
}

/** Returns a picker: l("मराठी", "English") or l(biTuple) */
export function useL() {
  const { lang } = useContext(Ctx);
  return useCallback(
    (a: string | Bi, b?: string) => {
      const [mr, en] = typeof a === "string" ? [a, b ?? a] : a;
      return lang === "en" ? en : mr;
    },
    [lang],
  );
}

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div role="group" aria-label="Language" className="glass relative flex rounded-full p-1 text-xs font-semibold">
      <span
        className="absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-fire transition-transform duration-500"
        style={{ transform: lang === "en" ? "translateX(100%)" : "translateX(0)" }}
      />
      {(["mr", "en"] as const).map((k) => (
        <button
          key={k}
          onClick={() => setLang(k)}
          aria-pressed={lang === k}
          className={`relative z-10 w-10 rounded-full py-1.5 transition ${lang === k ? "text-primary-foreground" : "text-foreground/70"}`}
        >
          {k === "mr" ? "मरा" : "EN"}
        </button>
      ))}
    </div>
  );
}
