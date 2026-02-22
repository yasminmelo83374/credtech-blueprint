import { FadeIn } from "../FadeIn";

export const FinalCTASection = () => (
  <section className="py-32 md:py-40 px-6 text-center grid-bg relative">
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
    <div className="relative z-10 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Produção não é <span className="text-highlight">sorte</span>.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          É decisão estrutural.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <a href="#investimento" className="inline-block bg-primary text-primary-foreground font-bold text-xl px-14 py-5 rounded-full glow-button mb-4">
          Quero estar entre os 15
        </a>
        <p className="text-muted-foreground text-sm">
          Vagas encerram 02/03 às 23:59.
        </p>
      </FadeIn>
    </div>
  </section>
);
