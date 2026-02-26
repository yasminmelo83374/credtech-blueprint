import { FadeIn } from "../FadeIn";

const steps = [
  {
    number: "01",
    title: "Anamnese Estratégica (15 min com Yasmin Melo)",
    content: [
      "Reunião individual. Rápida. Direta ao ponto.",
      "Ela vai entender sua operação, gargalos, produto e objetivo real.",
    ],
    bullets: [],
    footer: "Isso acontece antes da primeira aula.",
  },
  {
    number: "02",
    title: "Encontros Fechados — 6 semanas",
    content: [
      "Toda terça-feira às 19:29. 6 encontros ao vivo para 15 mentorados.",
    ],
    bullets: [
      "Base da Arquitetura CredTech",
      "O que você está fazendo errado",
      "Plano de ação + primeiras tarefas",
    ],
    footer: "Tudo é sequência.",
  },
  {
    number: "03",
    title: "Execução com Liberação por Entrega",
    content: [
      "Tarefas claras. Próximo módulo só libera quando entregar o anterior.",
    ],
    bullets: [],
    footer: "Aqui é estrutura. Não motivação.",
  },
  {
    number: "04",
    title: "Grupo Fechado + Suporte Real",
    content: [
      "Grupo aberto durante todo o processo com suporte da Yah.",
    ],
    bullets: [
      "Regras claras",
      "Participação ativa",
      "Suporte para dúvidas e travamentos",
    ],
    footer: "Você não vai ficar perdido.",
  },
];

const buildItems = [
  "Assistente particular de IA",
  "Convênio estratégico do grupo",
  "Treinamento do produto escolhido",
  "Captação multicanal (Hidra de Lerna)",
  "Análise de resultados semanal",
  "Ajuste de rota com base em dados",
];

const bonusItems = [
  "Mailings estratégicos filtrados",
  "Agentes de IA exclusivos",
  "Prompts prontos para agentes",
  "Automações inteligentes via WhatsApp",
];

export const HowItWorksSection = () => (
  <section id="como-funciona-operacao" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/20">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
          Como Funciona
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-3">
          Execução em <span className="text-highlight">6 semanas</span>.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Estrutura aplicada. Sem teoria solta.
        </p>
      </FadeIn>

      {/* Steps */}
      <div className="relative mt-12">
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-14 md:pl-16 mb-10 last:mb-0">
              <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <span className="text-primary text-xs md:text-sm font-black">{step.number}</span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{step.title}</h3>

              <div className="space-y-1">
                {step.content.map((line, j) => (
                  <p key={j} className="text-muted-foreground text-sm leading-relaxed">{line}</p>
                ))}
              </div>

              {step.bullets.length > 0 && (
                <div className="mt-2 space-y-1">
                  {step.bullets.map((b, j) => (
                    <p key={j} className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/20">
                      {b}
                    </p>
                  ))}
                </div>
              )}

              <p className="text-foreground font-semibold text-sm mt-3">{step.footer}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* O que vamos construir */}
      <FadeIn delay={0.15}>
        <div className="mt-14 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5">
            O que construímos <span className="text-highlight">juntos</span>
          </h3>
          <div className="space-y-2.5">
            {buildItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground font-bold text-base mt-6">
            Você sai com <span className="text-highlight">estrutura funcionando</span>.
          </p>
        </div>
      </FadeIn>

      {/* Bônus */}
      <FadeIn delay={0.2}>
        <div className="mt-6 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5">
            Bônus <span className="text-highlight">Estratégicos</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {bonusItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-secondary/30 rounded-xl p-4">
                <span className="mt-0.5 text-primary text-sm">✦</span>
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
