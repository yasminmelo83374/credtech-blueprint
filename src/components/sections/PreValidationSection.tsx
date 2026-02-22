import { FadeIn } from "../FadeIn";

const steps = [
  "1) Você aplica",
  "2) Confirmamos fit (perfil e execução)",
  "3) Se fizer sentido, você entra no grupo",
];

export const PreValidationSection = () => (
  <section className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-6">
          Pré-validação <span className="text-highlight">(obrigatória)</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-xl mx-auto">
          São apenas 15 vagas porque é grupo fechado e envolve implementação prática. Por isso, a entrada passa por pré-validação.
        </p>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl px-5 py-3 text-sm text-foreground font-medium">
              {s}
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
