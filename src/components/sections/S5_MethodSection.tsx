import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

const bullets = [
  "não entende nada de tecnologia",
  "já tentou tráfego pago e não funcionou",
  "tem medo de IA",
  "trabalha com mailing fraco",
  "não tem tempo sobrando",
  "já foi banido mais de uma vez",
  "sente que está ficando para trás no mercado",
];

export const S5_MethodSection = () => (
  <section className="py-8 md:py-28 px-5 md:px-6 bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 glow-line" />
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 md:mb-10 text-center">
          Isto é para você mesmo se…
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-2.5 md:space-y-3">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <span className="text-primary mt-0.5 text-base md:text-lg leading-none">›</span>
              <p className="text-foreground/90 text-[13px] md:text-base leading-relaxed">{b}</p>
            </motion.div>
          ))}
        </div>
      </FadeIn>
    </div>
    <div className="absolute bottom-0 left-0 right-0 glow-line" />
  </section>
);
