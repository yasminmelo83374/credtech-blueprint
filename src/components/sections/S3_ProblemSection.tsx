import { FadeIn } from "../FadeIn";

const painPoints = [
  "você não sabe por que vendeu",
  "não sabe por que não vendeu",
  "não sabe de onde veio a demanda",
  "não sabe quando virá",
  "não sabe qual ação funciona",
  "não sabe qual canal responde",
  "não sabe onde está o gargalo",
];

export const S3_ProblemSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-3">
          O problema <span className="text-highlight">real</span>
        </h2>
        <p className="text-foreground font-bold text-base md:text-lg mb-8">
          O problema não é falta de lead.<br />
          O problema é o mesmo padrão se repetindo:
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-2.5 mb-10">
          {painPoints.map((p, i) => (
            <p key={i} className="text-muted-foreground text-sm md:text-base border-l-2 border-destructive/40 pl-4">
              • {p}
            </p>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="space-y-3 text-foreground text-base md:text-lg">
          <p>E se você não sabe…<br /><span className="font-bold">você vive de tentativa e erro.</span></p>
          <p>E quem vive de tentativa e erro…<br /><span className="font-bold">vive de aleatoriedade.</span></p>
          <p className="text-highlight font-extrabold text-lg md:text-xl mt-4">E aleatoriedade custa caro.</p>
        </div>
      </FadeIn>
    </div>
  </section>
);
