import { FadeIn } from "../FadeIn";

const bullets = [
  "não entende nada de tecnologia",
  "já tentou tráfego pago e não funcionou",
  "tem medo de IA",
  "trabalha com mailing fraco",
  "não tem tempo sobrando",
  "sente que está ficando para trás no mercado",
];

export const S5_MethodSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10 text-center">
          Isto é para você mesmo se…
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-primary mt-1 text-lg leading-none">•</span>
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{b}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);
