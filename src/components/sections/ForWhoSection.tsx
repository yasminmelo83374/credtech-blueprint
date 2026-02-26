import { FadeIn } from "../FadeIn";
import { Check, X } from "lucide-react";

const yes = [
  "Já atua no mercado de crédito",
  "Está cansado da dependência de um produto",
  "Quer diversificar convênios com método",
  "Quer implementar IA na rotina comercial",
  "Está disposto a executar tarefas com orientação",
];

const no = [
  "Iniciantes do zero (sem operação ativa)",
  "Quem quer milagre sem execução",
  "Quem busca lista pronta sem processo",
  "Quem não executa tarefas básicas",
];

export const ForWhoSection = () => (
  <section id="para-quem" className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-12 text-center">
          Para quem <span className="text-highlight">é</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <FadeIn delay={0.1}>
          <div className="bg-card border border-border rounded-2xl p-5 md:p-6">
            <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">É pra você se:</p>
            <div className="space-y-3.5">
              {yes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="bg-card border border-border rounded-2xl p-5 md:p-6">
            <p className="text-muted-foreground text-xs font-bold uppercase tracking-wider mb-4">NÃO é pra você se:</p>
            <div className="space-y-3.5">
              {no.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
