import { FadeIn } from "../FadeIn";

const items = [
  "cansada de mailing ruim",
  "saturada do manual",
  "travada nos mesmos resultados",
  "insegura com a IA",
  "sobrecarregada, mas sem crescer",
  "querendo previsibilidade",
];

export const S5_MethodSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10">
          Se você sente que está fazendo de tudo… e mesmo assim{" "}
          <span className="text-highlight">nada muda</span>, esta série é para
          você.
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-2.5">
          {items.map((item, i) => (
            <p
              key={i}
              className="text-muted-foreground text-sm md:text-base border-l-2 border-primary/30 pl-4"
            >
              • {item}
            </p>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
