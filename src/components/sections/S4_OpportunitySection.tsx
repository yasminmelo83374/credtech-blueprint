import { FadeIn } from "../FadeIn";
import { ChevronRight } from "lucide-react";

const bullets = [
  "Por que suas vendas caíram mesmo você trabalhando mais",
  "O motivo real do WhatsApp banir",
  "Como a IA decide quem sobrevive no crédito",
  "A estrutura exata para vender todo dia",
  "O modelo CredTech (e por que ele é a única saída lógica)",
];

export const S4_OpportunitySection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10">
          Você vai ver o que{" "}
          <span className="text-highlight">ninguém no mercado</span> está
          explicando.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3">
          {bullets.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-foreground text-sm md:text-base"
            >
              <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
