import { FadeIn } from "../FadeIn";

const authorityBullets = [
  "especialista em operações algorítmicas no crédito",
  "responsável por destravar operações que estavam no zero",
  "aplicando IA prática no dia a dia, não teoria",
  "estrutura usada por players reais do mercado",
];

export const S6_PhasesSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10 text-center">
          Por que você deve aprender com quem está no{" "}
          <span className="text-highlight">campo de batalha?</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3 mb-10">
          {authorityBullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1 text-lg leading-none">•</span>
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-muted-foreground text-sm text-center">
          Não é sobre usar ferramentas. É sobre operar com método.
        </p>
      </FadeIn>
    </div>
  </section>
);
