import { FadeIn } from "../FadeIn";
import { ArrowRight } from "lucide-react";

const forWho = [
  "está cansado de meses bons e ruins",
  "quer parar de viver de tentativa e erro",
  "quer automatizar mas não sabe como",
  "quer vender todo santo dia",
  "quer crescer sem depender de vendedor",
  "quer deixar de ser manual",
  "quer entrar na era da previsibilidade",
];

export const S8_ForWhoSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
          Para quem <span className="text-highlight">é</span>
        </h2>
        <p className="text-foreground font-bold text-base md:text-lg mb-8">
          O Operação CredTech é para você que:
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3">
          {forWho.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <ArrowRight className="w-4 h-4 text-primary shrink-0" />
              <p className="text-foreground text-sm md:text-base">• {item}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
