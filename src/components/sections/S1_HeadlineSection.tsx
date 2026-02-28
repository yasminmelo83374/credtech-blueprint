import { FadeIn } from "../FadeIn";
import { Play } from "lucide-react";

const CTA_URL = "#assistir";

export const S1_HeadlineSection = () => (
  <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-4xl mx-auto px-5 text-center py-24 md:py-32">
      <FadeIn>
        <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-6 block">
          Série Gratuita · 6 Episódios
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          O Mercado Mudou. O Crédito Mudou.{" "}
          <br className="hidden md:block" />
          Agora só Existe um Caminho:{" "}
          <span className="text-highlight">Virar uma CredTech.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-base md:text-lg font-medium mb-10 max-w-2xl mx-auto">
          A série de 6 episódios mais importante da sua carreira no crédito.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <a
          href={CTA_URL}
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button"
        >
          <Play className="w-5 h-5" />
          Assistir Agora – 100% Gratuito
        </a>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-2xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/3] bg-card border border-border rounded-lg flex items-center justify-center group hover:border-primary/40 transition-colors"
            >
              <div className="text-center">
                <span className="text-primary text-xs font-bold">EP {i + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
