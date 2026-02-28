import { FadeIn } from "../FadeIn";

const CTA_URL = "#assistir";

export const S7_ResultSection = () => (
  <section className="py-20 md:py-32 px-5 md:px-6 grid-bg relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <FadeIn>
        <a
          href={CTA_URL}
          className="inline-block bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button"
        >
          Garantir Meu Acesso Antes de Sair do Ar
        </a>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-sm mt-6">
          Conteúdo gratuito por tempo limitado.
        </p>
      </FadeIn>
    </div>
  </section>
);
