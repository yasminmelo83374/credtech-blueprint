import { FadeIn } from "../FadeIn";

const bullets = [
  "Um canal só vira dependência.",
  "Mailing sem validação vira desperdício.",
  "WhatsApp sem cadência vira bloqueio.",
  "Sem leitura de retorno, você opera no escuro.",
];

export const WhyArchitectureSection = () => (
  <section className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          O problema não é esforço. É <span className="text-highlight">arquitetura</span>.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p className="text-muted-foreground text-base md:text-lg mb-8">
          A maioria tenta resolver produção com mais volume. E quebra do mesmo jeito.
        </p>
        <div className="space-y-3 mb-8">
          {bullets.map((b, i) => (
            <p key={i} className="text-muted-foreground text-sm border-l-2 border-primary/30 pl-4">
              {b}
            </p>
          ))}
        </div>
        <p className="text-foreground font-bold text-base md:text-lg">
          A CredTech troca improviso por estrutura — para você operar com constância, não com ansiedade.
        </p>
      </FadeIn>
    </div>
  </section>
);
