import { FadeIn } from "../FadeIn";

const problems = [
  "Dependência de um único produto.",
  "Disparo sem estratégia.",
  "Banimentos recorrentes.",
  "Mailing sem validação.",
  "Sem inteligência de dados.",
  "Sem previsibilidade.",
];

export const ProblemSection = () => (
  <section id="o-problema" className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-12">
          O mercado <span className="text-highlight">mudou</span>.<br />
          A maioria continua operando como em 2018.
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="space-y-3 mb-12">
          {problems.map((p, i) => (
            <p key={i} className="text-muted-foreground text-lg border-l-2 border-border pl-4">
              {p}
            </p>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <div className="border-t border-border pt-8">
          <p className="text-lg text-muted-foreground">
            Negócio frágil depende de <span className="text-foreground font-semibold">produto</span>.
          </p>
          <p className="text-lg text-foreground font-bold">
            Negócio forte depende de <span className="text-highlight">estrutura</span>.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);
