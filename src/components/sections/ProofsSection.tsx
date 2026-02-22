import { FadeIn } from "../FadeIn";

const cases = [
  {
    name: "Daniela",
    before: ["Operação tradicional", "70k/mês", "Dependência de produto", "Mesmo custo fixo"],
    after: ["1.200.000 em produção", "Mesma estrutura", "Processos", "Multicanal + Inteligência"],
    quote: "Não foi produto novo. Foi estrutura.",
  },
  {
    name: "Lidiane",
    before: ["Escritório físico", "Custos CLT", "Margem apertada"],
    after: ["Diversificação em convênios públicos", "Menos custo fixo", "Mais previsibilidade"],
    quote: "Troca de produto não salva. Troca de estrutura salva.",
  },
];

export const ProofsSection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
          Provas <span className="text-highlight">reais</span>
        </h2>
      </FadeIn>

      <div className="space-y-16">
        {cases.map((c, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-6">Case {c.name}</h3>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3">Antes</p>
                  {c.before.map((b, j) => (
                    <p key={j} className="text-muted-foreground text-sm mb-1">— {b}</p>
                  ))}
                </div>
                <div>
                  <p className="text-primary text-xs uppercase tracking-wider mb-3">Depois</p>
                  {c.after.map((a, j) => (
                    <p key={j} className="text-foreground text-sm mb-1 font-medium">— {a}</p>
                  ))}
                </div>
              </div>
              <p className="text-xl font-bold text-foreground border-t border-border pt-6 italic">
                "{c.quote}"
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
