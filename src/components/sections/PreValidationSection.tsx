import { FadeIn } from "../FadeIn";
import { ClipboardList, UserCheck, Users } from "lucide-react";

const steps = [
  { icon: ClipboardList, num: "1", label: "Você aplica" },
  { icon: UserCheck, num: "2", label: "Confirmamos fit" },
  { icon: Users, num: "3", label: "Você entra no grupo" },
];

export const PreValidationSection = () => (
  <section className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
          Pré-validação <span className="text-highlight">obrigatória</span>
        </h2>
        <p className="text-muted-foreground text-sm mb-10 max-w-md mx-auto">
          15 vagas. Grupo fechado com implementação prática.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-10">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-foreground text-sm font-semibold">{s.label}</p>
              {i < steps.length - 1 && (
                <span className="hidden sm:block absolute" />
              )}
            </div>
          ))}
        </div>
        <a href="#aplicar" className="inline-block bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-full glow-button">
          Quero passar pela pré-validação
        </a>
      </FadeIn>
    </div>
  </section>
);
