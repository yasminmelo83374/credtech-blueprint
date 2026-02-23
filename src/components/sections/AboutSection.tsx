import { FadeIn } from "../FadeIn";
import { Monitor, Megaphone, Bot } from "lucide-react";
import yasminImg from "@/assets/yasmin.jpg";

const teamPoints = [
  { icon: Monitor, label: "Núcleo de TI", desc: "Setup, ambiente, organização técnica" },
  { icon: Megaphone, label: "Núcleo de Marketing", desc: "Mensagens, canais, rotina multicanal" },
  { icon: Bot, label: "Núcleo de IA", desc: "Agentes, automação, inteligência de retorno" },
];

export const AboutSection = () => (
  <section id="sobre" className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center">
          Quem conduz a <span className="text-highlight">Operação CredTech</span>
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left — Yas */}
        <FadeIn delay={0.1}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={yasminImg} alt="Yasmin Melo" className="w-full h-full object-cover object-top" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">Yasmin Melo</h3>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-4">Estratégia + Estrutura Comercial</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Atuo na interseção entre crédito, tecnologia e inteligência aplicada. Meu foco aqui não é te ensinar a "vender mais". É te ajudar a construir uma operação que sustenta produção com método, processo e leitura de dados.
            </p>
          </div>
        </FadeIn>

        {/* Right — Team */}
        <FadeIn delay={0.2}>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <p className="text-foreground font-bold text-sm mb-6">
              Você não entra só num grupo. Você acessa uma <span className="text-highlight">estrutura</span>.
            </p>
            <div className="space-y-5">
              {teamPoints.map((t, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <t.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{t.label}</p>
                    <p className="text-muted-foreground text-xs">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-xs mt-6 border-t border-border pt-4">
              Isso normalmente custaria caro e exigiria várias contratações. Aqui, já vem integrado.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
