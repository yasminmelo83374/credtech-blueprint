import { FadeIn } from "../FadeIn";
import { Layers, BarChart3, Bot, MessageSquare, RefreshCw, TrendingUp } from "lucide-react";

const features = [
  { icon: Layers, title: "Esteira Multicanal (Hidra)", desc: "Múltiplos canais de prospecção para nunca depender de uma fonte só." },
  { icon: BarChart3, title: "Validação de Mailing", desc: "Convênio-alvo + higienização + priorização estratégica." },
  { icon: Bot, title: "Agente Autônomo (no seu PC)", desc: "Assistente que organiza processos e executa tarefas com você." },
  { icon: MessageSquare, title: "IA no Atendimento", desc: "Qualificação e respostas estratégicas automatizadas." },
  { icon: RefreshCw, title: "Régua de Follow-up", desc: "Cadência de contatos com lógica, sem parecer spam." },
  { icon: TrendingUp, title: "Inteligência de Retorno", desc: "Leitura de padrões por convênio para ajustar operação." },
];

export const WhatIsSection = () => (
  <section id="o-que-e" className="py-14 md:py-24 px-4 md:px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Uma célula privada de estruturação em <span className="text-highlight">45 dias</span>.
        </h2>
        <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
          A Operação CredTech <span className="text-foreground font-semibold">não é curso</span>. É implementação.
        </p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-xl p-5 md:p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <f.icon className="w-7 h-7 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-bold text-foreground text-sm mb-1.5">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
