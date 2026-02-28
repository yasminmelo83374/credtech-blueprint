import { FadeIn } from "../FadeIn";

const oldBeliefs = [
  "aprender mais produto",
  "colocar mais vendedor",
  "atender mais rápido",
  "comprar mais lead",
];

export const S2_ConsciousnessSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-8">
          A virada de <span className="text-highlight">consciência</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-foreground text-base md:text-lg mb-6">
          Por anos, correspondente bancário acreditou que vender mais era uma questão de:
        </p>
        <div className="space-y-2.5 mb-8">
          {oldBeliefs.map((b, i) => (
            <p key={i} className="text-muted-foreground text-sm md:text-base border-l-2 border-border pl-4">
              • {b}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed">
          <p className="font-bold">Mas nada disso cria previsibilidade.</p>
          <p className="text-muted-foreground text-sm md:text-base">Porque tudo isso depende de esforço humano.</p>
          <p className="text-muted-foreground text-sm md:text-base">E esforço humano tem limites.</p>
        </div>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="mt-10 bg-card border border-border rounded-2xl p-6 md:p-8">
          <p className="text-foreground text-base md:text-lg leading-relaxed mb-4">
            Mas quando você entende que vender é um <span className="text-highlight font-semibold">processo</span> — e processo é automatizável…<br />
            <span className="font-bold">a sua cabeça vira.</span>
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            O que antes parecia "sorte", "fase boa", "quando Deus ajuda"<br />
            vira <span className="text-highlight font-semibold">engenharia de demanda + IA operando por você</span>.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);
