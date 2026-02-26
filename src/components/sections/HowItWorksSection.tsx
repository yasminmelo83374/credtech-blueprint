import { FadeIn } from "../FadeIn";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Anamnese estratégica (15 min com Yasmin Melo)",
    short: "Rápida, objetiva e individual. A Yah entende sua operação e define o foco.",
    details: [
      "Como sua operação funciona hoje",
      "Onde está o gargalo real",
      "Qual produto você trabalha",
      "Seu nível de estrutura",
      "Seu objetivo em 45 dias",
    ],
    footer: "Isso acontece antes da primeira aula.",
  },
  {
    number: "02",
    title: "Encontros fechados (6 semanas)",
    short: "Toda terça às 19:29. Ao vivo. Apenas 15 operadores.",
    details: [
      "Base da Arquitetura CredTech",
      "O que você faz errado sem perceber",
      "Plano de ação das próximas semanas",
      "Primeiras tarefas práticas",
      "Nada solto. Tudo em sequência.",
    ],
    footer: "",
  },
  {
    number: "03",
    title: "Execução com liberação por entrega",
    short: "O próximo módulo só libera quando você entrega o anterior.",
    details: [
      "Tarefas claras e verificáveis",
      "Encontros continuam mesmo se você atrasar",
      "Evolução prática depende da sua entrega",
      "Aqui é estrutura. Não motivação.",
    ],
    footer: "",
  },
  {
    number: "04",
    title: "Grupo fechado + suporte real",
    short: "Você não fica perdido. Regras claras e suporte durante a semana.",
    details: [
      "Regras claras no grupo",
      "Participação ativa da Yah",
      "Time acionável pra dúvida/travamento",
      "Foco: destravar execução",
    ],
    footer: "",
  },
];

const buildItems = [
  "Construir seu assistente particular de IA (na sua operação)",
  "Definir convênio-alvo estratégico do grupo (com critério)",
  "Treinar o produto escolhido (roteiro + objeções + cadência)",
  "Aplicar captação Hidra (orgânico + pago) com controle",
  "Medir retorno semanal e ajustar rota com dados",
];

const bonusItems = [
  "Mailings estratégicos já filtrados (por convênio e prioridade)",
  "Acesso a agentes de IA exclusivos (prontos pra operação)",
  "Prompts prontos (para você criar e ajustar seus agentes)",
  "Testes guiados de automação no WhatsApp (cadência inteligente)",
];

const StepAccordion = ({ step }: { step: typeof steps[0] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative pl-14 md:pl-16 mb-10 last:mb-0">
      <div className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center">
        <span className="text-primary text-xs md:text-sm font-black">{step.number}</span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{step.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-2">{step.short}</p>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-primary text-xs font-semibold hover:underline"
      >
        {open ? "Fechar detalhes" : "Ver detalhes"}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 mt-3" : "max-h-0"}`}>
        <div className="space-y-1.5 pl-4 border-l-2 border-primary/20">
          {step.details.map((d, j) => (
            <p key={j} className="text-muted-foreground text-sm leading-relaxed">{d}</p>
          ))}
        </div>
        {step.footer && <p className="text-foreground font-semibold text-sm mt-3">{step.footer}</p>}
      </div>
    </div>
  );
};

export const HowItWorksSection = () => (
  <section id="como-funciona-operacao" className="py-14 md:py-24 px-4 md:px-6 bg-secondary/20">
    <div className="max-w-4xl mx-auto">
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

      {/* Video block */}
      <FadeIn delay={0.1}>
        <div className="mt-10 mb-12">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg shadow-primary/5">
            <div className="aspect-video flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <p className="text-sm font-medium">Entenda o Método CredTech (2 minutos)</p>
              <p className="text-xs text-muted-foreground/60">Espaço reservado para vídeo</p>
            </div>
          </div>
          <div className="mt-4 space-y-1.5 max-w-lg mx-auto text-center">
            <p className="text-muted-foreground text-xs leading-relaxed">✦ O que é a Arquitetura CredTech (sem jargão)</p>
            <p className="text-muted-foreground text-xs leading-relaxed">✦ Por que "mais esforço" não resolve</p>
            <p className="text-muted-foreground text-xs leading-relaxed">✦ O que você leva pronto ao final</p>
          </div>
        </div>
      </FadeIn>

      {/* Steps */}
      <div className="relative mt-12">
        <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

        {steps.map((step, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <StepAccordion step={step} />
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
            Você não sai com "ideias". Sai com <span className="text-highlight">estrutura funcionando</span>.
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
