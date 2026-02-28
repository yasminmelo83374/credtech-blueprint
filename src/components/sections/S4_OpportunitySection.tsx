import { FadeIn } from "../FadeIn";
import { Zap } from "lucide-react";

const replacedTasks = [
  "digitação",
  "follow‑up",
  "prospecção manual",
  "atendimento repetitivo",
  "análise inicial",
  "filtros de lead",
  "conversas básicas",
  "retestes",
  "triagem",
];

export const S4_OpportunitySection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
          A <span className="text-highlight">oportunidade</span>
        </h2>
        <p className="text-foreground font-bold text-lg md:text-xl mb-8">A boa notícia?</p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
          A IA não veio para substituir você.<br />
          Ela veio para <span className="text-highlight font-semibold">substituir aquilo que te atrasa</span>:
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {replacedTasks.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl px-4 py-3 text-sm text-muted-foreground flex items-center gap-2 hover:border-primary/30 transition-colors"
            >
              <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p className="text-foreground text-base md:text-lg leading-relaxed mb-2">
          Quando você para de perder tempo com isso…<br />
          sobra tempo para o que realmente faz dinheiro:
        </p>
        <p className="text-highlight font-black text-2xl md:text-3xl mt-4">Fechar vendas.</p>
      </FadeIn>
    </div>
  </section>
);
