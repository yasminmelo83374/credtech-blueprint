import { FadeIn } from "../FadeIn";

const weeks = [
  { week: "Semana 1", title: "Estrutura Física + Tecnológica", items: ["Instalação do agente autônomo", "Diagnóstico e definição de convênios"] },
  { week: "Semana 2", title: "Método Hidra Multicanal", items: ["Ativação progressiva de canais", "Estratégia de tráfego com IA"] },
  { week: "Semana 3", title: "Validação de Mailing", items: ["Segmentação inteligente", "Estruturação de prospecção estratégica"] },
  { week: "Semana 4", title: "Automação + Inteligência de Retorno", items: ["Ajuste fino", "Plano de autonomia 60 dias"] },
];

export const TimelineSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
          Como funciona: <span className="text-highlight">45 dias</span>
        </h2>
      </FadeIn>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        {weeks.map((w, i) => (
          <FadeIn key={i} delay={i * 0.12}>
            <div className={`relative flex flex-col md:flex-row items-start mb-12 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2" />
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-primary text-sm font-bold uppercase tracking-wider">{w.week}</span>
                <h3 className="text-xl font-bold text-foreground mt-1 mb-2">{w.title}</h3>
                {w.items.map((item, j) => (
                  <p key={j} className="text-muted-foreground text-sm">{item}</p>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
          <span className="border border-border rounded-full px-4 py-2">6 encontros ao vivo</span>
          <span className="border border-border rounded-full px-4 py-2">Grupo fechado</span>
          <span className="border border-border rounded-full px-4 py-2">Missões semanais obrigatórias</span>
        </div>
      </FadeIn>
    </div>
  </section>
);
