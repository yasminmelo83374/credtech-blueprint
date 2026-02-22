import { FadeIn } from "../FadeIn";

const duties = [
  "Executar as missões",
  "Aplicar o que for estruturado",
  "Disponibilizar mailing",
  "Participar dos encontros",
  "Implementar as ferramentas",
];

export const ResponsibilitySection = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-5xl font-black leading-tight mb-4">
          A CredTech <span className="text-highlight">estrutura</span>.<br />
          A execução é sua.
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-lg mb-8">
          Quem entra assume o papel de <span className="text-foreground font-semibold">Operador Estrutural</span>.
        </p>
        <div className="space-y-3">
          {duties.map((d, i) => (
            <p key={i} className="text-muted-foreground text-sm border-l-2 border-primary/30 pl-4">• {d}</p>
          ))}
        </div>
        <p className="text-foreground font-bold text-lg mt-8">
          Sem execução, não há resultado.
        </p>
      </FadeIn>
    </div>
  </section>
);
