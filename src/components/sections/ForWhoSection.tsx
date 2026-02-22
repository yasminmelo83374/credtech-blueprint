import { FadeIn } from "../FadeIn";
import { Check, X } from "lucide-react";

const yes = [
  "Já atua no mercado",
  "Está cansado da dependência de produto",
  "Quer diversificar convênios",
  "Quer implementar IA na rotina",
  "Está disposto a executar",
];

const no = [
  "Iniciantes",
  "Quem busca lista pronta",
  "Quem quer milagre",
  "Quem não executa",
];

export const ForWhoSection = () => (
  <section id="para-quem" className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">
          Para quem <span className="text-highlight">é</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-8">
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            {yes.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-4">
            {no.map((item, i) => (
              <div key={i} className="flex items-center gap-3 opacity-50">
                <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
