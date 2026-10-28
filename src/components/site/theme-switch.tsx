import { useEffect, useState, type MouseEvent } from "react";
import { useL } from "./i18n";

export const themes = [
  { id: "classic", label: "क्लासिक", en: "Classic", sw: ["oklch(0.16 0.004 260)", "oklch(0.62 0.012 260)", "oklch(0.84 0.045 85)"] },
  { id: "white", label: "व्हाइट", en: "White", sw: ["oklch(1 0 0)", "oklch(0.4 0.075 165)", "oklch(0.62 0.09 80)"] },
  { id: "navy", label: "नेव्ही", en: "Navy", sw: ["oklch(0.17 0.055 262)", "oklch(0.86 0.04 230)", "oklch(0.92 0.04 85)"] },
  { id: "black", label: "ब्लॅक", en: "Black", sw: ["oklch(0.08 0 0)", "oklch(0.72 0.2 45)", "oklch(0.98 0 0)"] },
] as const;
type ThemeId = (typeof themes)[number]["id"];

function apply(id: ThemeId) {
  const el = document.documentElement;
  if (id === "classic") delete el.dataset["theme"];
  else el.dataset["theme"] = id;
  try {
    localStorage.setItem("om-theme", id);
  } catch {}
}

export function ThemeSwitch() {
  const l = useL();
  const [active, setActive] = useState<ThemeId>("classic");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let t = document.documentElement.dataset["theme"];
    if (t === "ivory") {
      t = "white";
      apply("white");
    }
    if (t && themes.some((x) => x.id === t)) setActive(t as ThemeId);
  }, []);

  const choose = (id: ThemeId, e: MouseEvent) => {
    if (id === active) return;
    const x = e.clientX;
    const y = e.clientY;
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    const run = () => {
      apply(id);
      setActive(id);
      if (window.innerWidth < 640) setOpen(false);
    };
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return run();
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    doc.startViewTransition(run).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 900, easing: "cubic-bezier(0.16,1,0.3,1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
  };

  const current = themes.find((t) => t.id === active)!;

  return (
    <div className="fixed bottom-4 left-4 z-[70] flex items-center gap-2">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="थीम बदला"
        aria-expanded={open}
        className="glass group grid h-12 w-12 place-items-center rounded-full shadow-card transition hover:scale-110"
      >
        <span
          className="h-6 w-6 rounded-full transition duration-700 group-hover:rotate-180"
          style={{ background: `conic-gradient(${current.sw[0]} 0 33%, ${current.sw[1]} 0 66%, ${current.sw[2]} 0)` }}
        />
      </button>
      <div
        className={`glass flex items-center gap-1 rounded-full p-1.5 shadow-card transition-all duration-500 ${open ? "translate-x-0 opacity-100" : "pointer-events-none -translate-x-4 opacity-0"}`}
      >
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={(e) => choose(t.id, e)}
            aria-pressed={active === t.id}
            aria-label={t.en}
            className={`flex items-center gap-2 rounded-full p-1.5 text-sm sm:pr-3 transition ${active === t.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
          >
            <span className="flex -space-x-1.5">
              {t.sw.map((c) => (
                <span key={c} className="h-5 w-5 rounded-full border border-border" style={{ background: c }} />
              ))}
            </span>
            <span className="hidden sm:inline">{l(t.label, t.en)}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
