import { FadeIn } from "../FadeIn";
import { Layers, BarChart3, Bot, MessageSquare, RefreshCw, TrendingUp } from "lucide-react";

const features = [
  { icon: Layers, title: "Esteira Multicanal (Método Hidra)", desc: "Ativamos múltiplos canais de prospecção simultaneamente para que sua produção não dependa de uma única fonte." },
  { icon: BarChart3, title: "Validação Inteligente de Mailing", desc: "Definição estratégica de convênios + análise de margem + higienização + priorização." },
  { icon: Bot, title: "Agente Autônomo no Seu Computador", desc: "Um assistente inteligente que executa tarefas, organiza processos e auxilia na operação." },
  { icon: MessageSquare, title: "IA no Atendimento", desc: "Automação inteligente para qualificação e respostas estratégicas." },
  { icon: RefreshCw, title: "Automação de Follow-up", desc: "Sequência estruturada de contatos para aumentar conversão sem esforço manual excessivo." },
  { icon: TrendingUp, title: "Inteligência Comercial Aplicada", desc: "Análise profunda dos retornos para identificar padrão de consumo por convênio." },
];

export const WhatIsSection = () => (
  <section className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Uma célula privada de estruturação em <span className="text-highlight">45 dias</span>.
        </h2>
        <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
          A Operação CredTech <span className="text-foreground font-semibold">não é curso</span>.
        </p>
        <p className="text-foreground text-xl font-bold mb-12">É implementação.</p>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <f.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <p className="text-lg font-bold text-foreground mt-12 text-center">
          Você sai com uma operação <span className="text-highlight">estruturada</span>, automatizada e previsível.
        </p>
      </FadeIn>
    </div>
  </section>
);
