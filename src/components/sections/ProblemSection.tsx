import { FadeIn } from "../FadeIn";

const problems = [
  "Banimentos recorrentes por disparo sem cadência.",
  "Mailing sem validação = desperdício de tempo e dinheiro.",
  "Operação no escuro, sem leitura de retorno.",
  "Dependência de um único produto ou convênio.",
  "Imprevisibilidade total na produção mensal.",
];

export const ProblemSection = () => (
  <section id="o-problema" className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-10">
          O mercado <span className="text-highlight">mudou</span>.<br />
          A maioria continua operando como em 2018.
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="space-y-3 mb-10">
          {problems.map((p, i) => (
            <p key={i} className="text-muted-foreground text-base md:text-lg border-l-2 border-border pl-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="text-foreground font-bold text-lg md:text-xl">
          Você não precisa de mais volume. Precisa de <span className="text-highlight">arquitetura</span>.
        </p>
      </FadeIn>
    </div>
  </section>
);
