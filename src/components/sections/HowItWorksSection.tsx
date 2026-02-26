import { FadeIn } from "../FadeIn";

const steps = [
  {
    number: "01",
    title: "Anamnese Estratégica (15 min com Yasmin Melo)",
    content: [
      "Você terá uma reunião individual com a Yah.",
      "Rápida. Objetiva. Direta ao ponto.",
      "Ela vai entender:",
    ],
    bullets: [
      "Como sua operação funciona hoje",
      "Onde está o gargalo",
      "Qual produto você trabalha",
      "Seu nível de estrutura",
      "Seu objetivo real",
    ],
    footer: "Isso acontece antes da primeira aula.",
  },
  {
    number: "02",
    title: "Encontros Fechados — 6 semanas",
    content: [
      "Toda terça-feira às 19:29. Pontualmente.",
      "Serão 6 encontros ao vivo, fechados para 15 mentorados.",
      "Na primeira aula você vai entender:",
    ],
    bullets: [
      "A base da Arquitetura CredTech",
      "O que você está fazendo errado sem perceber",
      "O plano de ação das próximas semanas",
      "As primeiras tarefas práticas",
    ],
    footer: "Nada é solto. Tudo é sequência.",
  },
  {
    number: "03",
    title: "Execução com Liberação por Entrega",
    content: [
      "Você terá tarefas claras.",
      "O próximo módulo só é liberado quando você entregar o anterior.",
      "Os encontros continuam mesmo que você não entregue.",
      "Mas a evolução prática depende da sua execução.",
    ],
    bullets: [],
    footer: "Aqui é estrutura. Não motivação.",
  },
  {
    number: "04",
    title: "Grupo Fechado + Suporte Real",
    content: [
      "O grupo ficará aberto durante todo o processo.",
    ],
    bullets: [
      "Regras claras",
      "Participação ativa da Yah",
      "Suporte durante a semana para dúvidas e travamentos",
    ],
    footer: "Você não vai ficar perdido.",
  },
];

const buildItems = [
  "Entender profundamente o funcionamento da IA aplicada à sua operação",
  "Construir seu assistente particular de IA",
  "Definir o convênio estratégico do grupo",
  "Treinar o produto escolhido",
  "Aplicar a estratégia de captação (Hidra de Lerna) — orgânico e pago",
  "Analisar resultados semana a semana",
  "Ajustar rota com base em dados",
];

const bonusItems = [
  "Mailings estratégicos já filtrados",
  "Acesso a Agentes de IA exclusivos",
  "Prompts prontos para criação de agentes",
  "Testes de automações inteligentes via WhatsApp",
];

export const HowItWorksSection = () => (
  <section id="como-funciona-operacao" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/20">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <FadeIn>
        <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
          Como Funciona na Prática
        </p>
        <h2 className="text-3xl md:text-5xl font-black mb-3">
          Execução estruturada em <span className="text-highlight">6 semanas</span>.
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl">
          Sem teoria solta. Sem motivação vazia. Estrutura aplicada.
        </p>
      </FadeIn>

      {/* Video Placeholder */}
      <FadeIn delay={0.1}>
        <div className="mt-12 mb-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
            <div className="aspect-video flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <p className="text-sm font-medium">Entenda o Método CredTech</p>
              <p className="text-xs text-muted-foreground/60">Espaço reservado para vídeo explicativo</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Steps */}
      <div className="relative">
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="relative pl-14 md:pl-16 mb-10 last:mb-0">
              <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center">
                <span className="text-primary text-xs md:text-sm font-black">{step.number}</span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{step.title}</h3>

              <div className="space-y-1.5">
                {step.content.map((line, j) => (
                  <p key={j} className="text-muted-foreground text-sm leading-relaxed">{line}</p>
                ))}
              </div>

              {step.bullets.length > 0 && (
                <div className="mt-3 space-y-1">
                  {step.bullets.map((b, j) => (
                    <p key={j} className="text-muted-foreground text-sm pl-4 border-l-2 border-primary/20">
                      {b}
                    </p>
                  ))}
                </div>
              )}

              <p className="text-foreground font-semibold text-sm mt-4">{step.footer}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* O que vamos construir juntos */}
      <FadeIn delay={0.15}>
        <div className="mt-16 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
            O que vamos construir <span className="text-highlight">juntos</span>
          </h3>
          <div className="space-y-3">
            {buildItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-foreground font-bold text-base mt-8">
            Você não vai sair com ideias. Vai sair com <span className="text-highlight">estrutura funcionando</span>.
          </p>
        </div>
      </FadeIn>

      {/* Bônus */}
      <FadeIn delay={0.2}>
        <div className="mt-8 bg-card border border-border rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
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
