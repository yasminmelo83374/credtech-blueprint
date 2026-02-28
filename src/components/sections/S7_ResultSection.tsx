import { FadeIn } from "../FadeIn";
import { Check } from "lucide-react";

const results = [
  "Demanda chegando todos os dias",
  "IA operando o trabalho pesado",
  "Estrutura que não depende de humor ou motivação",
  "Processo previsível",
  "Gargalos eliminados",
  "Vendas acontecendo sem esforço manual",
  "Operação rodando mesmo quando você dorme",
  "Crescimento contínuo",
  "E uma vantagem definitiva no mercado",
];

export const S7_ResultSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
          O resultado <span className="text-highlight">final</span>
        </h2>
        <p className="text-foreground font-bold text-base md:text-lg mb-8">
          No fim dessa jornada você terá:
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="grid sm:grid-cols-2 gap-3 mb-8">
          {results.map((r, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl px-4 py-3.5 flex items-start gap-3 hover:border-primary/30 transition-colors"
            >
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-foreground text-sm md:text-base">{r}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-muted-foreground text-sm md:text-base text-center">
          Tudo isso usando IA de forma simples, prática e guiada.
        </p>
      </FadeIn>
    </div>
  </section>
);
