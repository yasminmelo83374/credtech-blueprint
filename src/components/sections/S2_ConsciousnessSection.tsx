import { FadeIn } from "../FadeIn";

const quotes = [
  "Voltei a ter clientes todos os dias.",
  "Nunca mais fui banida.",
  "Até meu mailing fraco começou a converter.",
];

export const S2_ConsciousnessSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="pulse-dot" />
          <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
            Prova social
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10">
          O que já está acontecendo com quem aplicou a{" "}
          <span className="text-highlight">estrutura:</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="space-y-4 mb-8">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="corner-bracket bg-card border border-border rounded-xl px-6 py-4 text-foreground text-sm md:text-base font-medium"
            >
              "{q}"
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="glow-line w-12 mx-auto mb-4" />
        <p className="text-muted-foreground/60 text-xs">
          Isso é o que acontece quando você sai do improviso e opera no novo modelo.
        </p>
      </FadeIn>
    </div>
  </section>
);
