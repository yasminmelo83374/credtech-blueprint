import { FadeIn } from "../FadeIn";
import { MessageCircle, UserCheck, Users } from "lucide-react";

const WA_URL = "https://wa.me/55SEUNUMERO?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

const flowSteps = [
  { icon: MessageCircle, label: "Você chama no WhatsApp" },
  { icon: UserCheck, label: "Confirmamos fit" },
  { icon: Users, label: "Você entra no grupo" },
];

const afterSteps = [
  "Você responde 5 perguntas rápidas (produto, estrutura e meta).",
  "Você recebe o diagnóstico + confirmação de fit.",
  "Se aprovado: agenda da anamnese e entrada no grupo.",
];

export const PreValidationSection = () => (
  <section id="pre-validacao" className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
          Pré-validação <span className="text-highlight">obrigatória</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto leading-relaxed">
          São 15 vagas porque é grupo fechado e envolve implementação prática.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-8">
          {flowSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground text-sm font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-full glow-button mb-10"
        >
          Quero passar pela pré-validação
        </a>
      </FadeIn>

      {/* O que acontece depois */}
      <FadeIn delay={0.25}>
        <div className="bg-card border border-border rounded-2xl p-5 md:p-6 text-left max-w-md mx-auto">
          <p className="text-foreground font-bold text-sm mb-4">O que acontece depois que você chama no WhatsApp?</p>
          <div className="space-y-3">
            {afterSteps.map((s, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold text-sm mt-0.5">{i + 1}.</span>
                <p className="text-muted-foreground text-sm leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
