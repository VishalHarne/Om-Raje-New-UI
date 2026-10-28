import { createFileRoute } from "@tanstack/react-router";
import { Hero, Marquee } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Work } from "@/components/site/work";
import { Moments } from "@/components/site/moments";
import { Register, Contact, Footer } from "@/components/site/engage";
import { ThemeSwitch } from "@/components/site/theme-switch";
import { LangProvider } from "@/components/site/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ओम राजे निंबाळकर — धाराशिवचा आवाज" },
      { name: "description", content: "धाराशिवसाठी जनतेचे व्यासपीठ — लोककार्य, रोजगार संधी आणि आपला आवाज पोहोचवण्याचा मार्ग." },
      { property: "og:title", content: "ओम राजे निंबाळकर — धाराशिवचा आवाज" },
      { property: "og:description", content: "आधी ऐकून घेऊ. एकत्र पुढे जाऊ. धाराशिवसाठी जनतेचे व्यासपीठ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LangProvider>
    <main className="grain">
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Moments />
      <Register />
      <Contact />
      <Footer />
      <ThemeSwitch />
    </main>
    </LangProvider>
  );
}
