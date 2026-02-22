import { FadeIn } from "../FadeIn";

const cases = [
  {
    name: "Daniela",
    headline: "Mudou o produto? Não. Mudou a estrutura.",
    before: { title: "Antes", points: ["Produção média: 70k/mês", "Operação manual", "Dependência de produto"] },
    after: { title: "Depois", points: ["Produção: 1.200.000/mês", "Mesma base de equipe", "Processo + multicanal + inteligência"] },
    quote: "Não foi produto novo. Foi estrutura.",
  },
  {
    name: "Lidiane",
    headline: "Mesma venda. Operação mais enxuta. Margem mais saudável.",
    before: { title: "Antes (estrutura pesada)", points: ["Aluguel: R$ 1.700", "3 funcionárias CLT (custos + premiação)", "Discador: R$ 2.000", "Mailing + sistemas + custos fixos"] },
    after: { title: "Depois (modelo mais inteligente)", points: ["Convênios públicos + processo", "Custo com afiliados: R$ 8.400", "Internet: R$ 120", "Menos fixo, mais previsibilidade"] },
    quote: "Troca de produto não salva. Troca de estrutura salva.",
  },
];

export const ProofsSection = () => (
  <section id="provas" className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-center">
          Provas <span className="text-highlight">reais</span>
        </h2>
        <p className="text-muted-foreground text-sm text-center mb-12 max-w-xl mx-auto">
          Aqui não tem mágica. Tem estrutura, rotina e inteligência aplicada.
        </p>
      </FadeIn>

      <div className="space-y-8 md:space-y-12">
        {cases.map((c, i) => (
          <FadeIn key={i} delay={i * 0.15}>
            <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">Case {c.name}</p>
              <h3 className="text-foreground font-bold text-base md:text-lg mb-6">{c.headline}</h3>

              <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-6">
                {/* Before */}
                <div className="bg-secondary/50 rounded-xl p-4 md:p-5">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-3 font-semibold">{c.before.title}</p>
                  {c.before.points.map((b, j) => (
                    <p key={j} className="text-muted-foreground text-sm mb-1">— {b}</p>
                  ))}
                </div>
                {/* After */}
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 md:p-5">
                  <p className="text-primary text-xs uppercase tracking-wider mb-3 font-semibold">{c.after.title}</p>
                  {c.after.points.map((a, j) => (
                    <p key={j} className="text-foreground text-sm mb-1 font-medium">— {a}</p>
                  ))}
                </div>
              </div>

              <p className="text-lg font-bold text-foreground border-t border-border pt-5 italic">
                "{c.quote}"
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.3}>
        <p className="text-muted-foreground text-xs text-center mt-8 max-w-lg mx-auto">
          Resultados variam conforme execução, base, convênio e consistência. A promessa aqui é estrutura e previsibilidade — não milagre.
        </p>
      </FadeIn>
    </div>
  </section>
);
