import { FadeIn } from "../FadeIn";

const CTA_URL = "#assistir";

const bullets = [
  "por que suas vendas travaram mesmo trabalhando mais",
  "o motivo real do WhatsApp banir",
  "como a IA decide quem cresce e quem quebra",
  "a estrutura CredTech em 4 passos",
  "como gerar demanda todo dia sem depender de sorte",
  "como sair do modo sobrevivência em 7 dias",
];

export const S3_ProblemSection = () => (
  <section id="assistir" className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10 text-center">
          O que você vai aprender nos episódios do{" "}
          <span className="text-highlight">método:</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3 mb-12">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1 text-lg leading-none">•</span>
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="text-center">
          <a
            href={CTA_URL}
            className="inline-block bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-full glow-button"
          >
            Liberar Meu Acesso
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);
