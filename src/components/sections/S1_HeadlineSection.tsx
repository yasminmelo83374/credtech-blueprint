import { FadeIn } from "../FadeIn";

const CTA_URL = "#assistir";

export const S1_HeadlineSection = () => (
  <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-3xl mx-auto px-5 text-center py-24 md:py-32">
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          O mercado virou algorítmico. Agora, só existe um caminho:{" "}
          <span className="text-highlight">operar com método.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-base md:text-lg font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
          Aprenda o método que está destravando operações travadas e trazendo clientes todos os dias — disponível por tempo limitado.
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p className="text-muted-foreground/70 text-sm mb-10">
          Os episódios ficam no ar apenas até o início da próxima turma.
        </p>
      </FadeIn>

      <FadeIn delay={0.35}>
        <a
          href={CTA_URL}
          className="inline-block bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button"
        >
          Quero Acessar o Método Gratuitamente
        </a>
      </FadeIn>
    </div>
  </section>
);
