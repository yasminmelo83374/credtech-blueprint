import { FadeIn } from "../FadeIn";

const bullets = [
  "Um canal só = dependência fatal.",
  "Mailing sem validação = dinheiro jogado fora.",
  "WhatsApp sem cadência = bloqueio certo.",
];

export const WhyArchitectureSection = () => (
  <section className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          O problema não é esforço. É <span className="text-highlight">arquitetura</span>.
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <div className="space-y-3 mb-8">
          {bullets.map((b, i) => (
            <p key={i} className="text-muted-foreground text-sm md:text-base border-l-2 border-primary/30 pl-4 leading-relaxed">
              {b}
            </p>
          ))}
        </div>
        <p className="text-foreground font-bold text-base md:text-lg leading-relaxed">
          A CredTech troca improviso por estrutura — para você operar com constância, não com ansiedade.
        </p>
      </FadeIn>
    </div>
  </section>
);
