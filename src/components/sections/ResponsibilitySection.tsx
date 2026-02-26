import { FadeIn } from "../FadeIn";

const duties = [
  "Executar as missões semanais",
  "Participar dos encontros ao vivo",
  "Aplicar o que for estruturado",
  "Fornecer os resultados para análise",
];

export const ResponsibilitySection = () => (
  <section className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
          A CredTech <span className="text-highlight">estrutura</span>.<br />
          A execução é sua.
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="space-y-3 mt-6">
          {duties.map((d, i) => (
            <p key={i} className="text-muted-foreground text-sm md:text-base border-l-2 border-primary/30 pl-4 leading-relaxed">• {d}</p>
          ))}
        </div>
        <p className="text-foreground font-bold text-base md:text-lg mt-8">
          Sem execução, não há resultado.
        </p>
      </FadeIn>
    </div>
  </section>
);
