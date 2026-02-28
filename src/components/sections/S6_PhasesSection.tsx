import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

const authorityBullets = [
  "especialista em operações algorítmicas no crédito",
  "destravou operações que estavam no zero",
  "IA prática aplicada no dia a dia",
  "estrutura usada por players reais do mercado",
];

export const S6_PhasesSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10 text-center">
          Por que aprender com quem está no{" "}
          <span className="text-highlight">campo de batalha?</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-4 mb-10">
          {authorityBullets.map((b, i) => (
            <motion.div
              key={i}
              className="corner-bracket bg-card border border-border rounded-lg px-5 py-3"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{b}</p>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="glow-line w-16 mx-auto mb-4" />
        <p className="text-muted-foreground text-sm text-center">
          Não é sobre usar ferramentas. É sobre operar com método.
        </p>
      </FadeIn>
    </div>
  </section>
);
