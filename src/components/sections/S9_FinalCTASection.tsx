import { FadeIn } from "../FadeIn";

const CTA_URL = "#assistir";

export const S9_FinalCTASection = () => (
  <section className="py-20 md:py-32 px-5 md:px-6 grid-bg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-4">
          Você não precisa adivinhar nada.{" "}
          <br className="hidden md:block" />
          Só seguir o <span className="text-highlight">método</span>.
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <a
          href={CTA_URL}
          className="inline-block bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button mt-8"
        >
          Quero entrar agora
        </a>
      </FadeIn>
    </div>
  </section>
);
