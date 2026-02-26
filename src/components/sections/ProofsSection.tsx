import { FadeIn } from "../FadeIn";

const cases = [
  {
    name: "Daniela",
    headline: "Mudou a estrutura, não o produto.",
    before: { points: ["Produção média: 70k/mês", "Operação manual", "Dependência de produto"] },
    after: { points: ["Produção: 1.200.000/mês", "Mesma base de equipe", "Processo + multicanal + inteligência"] },
    quote: "Não foi produto novo. Foi estrutura.",
  },
  {
    name: "Lidiane",
    headline: "Operação enxuta. Margem saudável.",
    before: { points: ["Aluguel: R$ 1.700", "3 CLT + premiação", "Discador: R$ 2.000"] },
    after: { points: ["Convênios públicos + processo", "Custo afiliados: R$ 8.400", "Menos fixo, mais previsibilidade"] },
    quote: "Troca de estrutura salva.",
  },
];

const screenshots = [
  { alt: "Resultado 1", placeholder: true },
  { alt: "Resultado 2", placeholder: true },
  { alt: "Resultado 3", placeholder: true },
  { alt: "Resultado 4", placeholder: true },
];

export const ProofsSection = () => (
  <section id="provas" className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Resultados estruturais reais</span>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3 mt-2">
          Provas <span className="text-highlight">reais</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-12 max-w-xl">
          Estrutura, rotina e inteligência aplicada.
        </p>
      </FadeIn>

      {/* Cases */}
      <div className="space-y-6 md:space-y-10 mb-14">
        {cases.map((c, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div className="bg-card border border-border rounded-2xl p-5 md:p-8">
              <p className="text-primary font-bold text-xs uppercase tracking-wider mb-1">Case {c.name}</p>
              <h3 className="text-foreground font-bold text-base md:text-lg mb-5">{c.headline}</h3>

              <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-5">
                <div className="bg-secondary/50 rounded-xl p-4">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2 font-semibold">Antes</p>
                  {c.before.points.map((b, j) => (
                    <p key={j} className="text-muted-foreground text-sm mb-0.5">— {b}</p>
                  ))}
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
                  <p className="text-primary text-xs uppercase tracking-wider mb-2 font-semibold">Depois</p>
                  {c.after.points.map((a, j) => (
                    <p key={j} className="text-foreground text-sm mb-0.5 font-medium">— {a}</p>
                  ))}
                </div>
              </div>

              <p className="text-base font-bold text-foreground border-t border-border pt-4 italic">
                "{c.quote}"
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Screenshots grid — WhatsApp mockup style */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {screenshots.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-secondary/50 px-4 py-2 flex items-center gap-2 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                <span className="text-muted-foreground text-xs font-medium">Print real</span>
              </div>
              <div className="aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center text-muted-foreground/40">
                <p className="text-xs">Espaço para print</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-muted-foreground text-xs text-center mt-8 max-w-lg mx-auto">
          Resultados variam conforme execução, base e consistência. A promessa é estrutura — não milagre.
        </p>
      </FadeIn>
    </div>
  </section>
);
