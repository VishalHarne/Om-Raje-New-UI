import { useEffect, useRef, type ElementType, type ReactNode, type CSSProperties } from "react";

export function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  variant = "reveal",
  children,
  style,
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  variant?: "reveal" | "clip-reveal";
  children: ReactNode;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`${variant} ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  );
}

export function SectionTag({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-muted-foreground">
      <span className="label-mono text-primary">{n}</span>
      <span className="h-px w-12 bg-primary/60" />
      <span className="label-mono">{children}</span>
    </div>
  );
}
