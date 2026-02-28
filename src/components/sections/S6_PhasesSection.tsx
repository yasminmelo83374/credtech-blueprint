import { FadeIn } from "../FadeIn";
import { RotateCcw, Target, Flame, Bot, TrendingUp } from "lucide-react";

const phases = [
  {
    icon: RotateCcw,
    number: "01",
    title: "Reset Algorítmico",
    short: "Sair da mente manual e ativar a mente algorítmica.",
    detail: "Você instala seu primeiro Super Agente e já começa a automatizar.",
  },
  {
    icon: Target,
    number: "02",
    title: "Território de Precisão",
    short: "Aqui nasce sua previsibilidade.",
    detail: "Você define convênio, mailing tratado e foco absoluto.",
  },
  {
    icon: Flame,
    number: "03",
    title: "Máquina de Demanda CredTech",
    short: "Nada de depender de sorte.",
    detail: "Você ativa a Hidra de Lerna e o motor ativo — leads começam a chegar todos os dias.",
  },
  {
    icon: Bot,
    number: "04",
    title: "IA Operacional Autônoma",
    short: "Agentes assumem prospecção, atendimento e gargalos.",
    detail: "Sua operação começa a rodar praticamente sozinha.",
  },
  {
    icon: TrendingUp,
    number: "05",
    title: "Ciclo de Previsibilidade",
    short: "Você opera como um profissional de elite:",
    detail: "ajustes semanais, dados, conversão e crescimento contínuo.",
  },
];

export const S6_PhasesSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          As 5 fases do <span className="text-highlight">método</span>
        </h2>
      </FadeIn>

      <div className="space-y-4 md:space-y-5">
        {phases.map((p, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-2xl p-5 md:p-7 flex gap-4 md:gap-6 items-start hover:border-primary/30 transition-colors duration-300">
              <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <p.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="text-primary font-black text-sm">{p.number}</span>
                  <h3 className="text-foreground font-bold text-base md:text-lg">{p.title}</h3>
                </div>
                <p className="text-foreground text-sm md:text-base font-medium mb-1">{p.short}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.detail}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
