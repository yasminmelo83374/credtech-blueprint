import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

const CTA_URL = "#assistir";

const bullets = [
  "por que suas vendas travaram mesmo trabalhando mais",
  "o motivo real do WhatsApp banir",
  "como a IA decide quem cresce e quem quebra",
  "a estrutura CredTech em 4 passos",
  "como gerar demanda todo dia sem depender de sorte",
  "como sair do modo sobrevivência em 7 dias",
];

export const S3_ProblemSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30 relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 glow-line" />
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-10 text-center">
          O que você vai aprender nos episódios do{" "}
          <span className="text-highlight">método:</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-3 mb-12">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="pulse-dot mt-2 flex-shrink-0" />
              <p className="text-foreground/90 text-sm md:text-base leading-relaxed">{b}</p>
            </motion.div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="text-center">
          <a
            href={CTA_URL}
            className="inline-block bg-primary text-primary-foreground font-bold text-base px-10 py-4 rounded-full glow-button"
          >
            Liberar meu acesso
          </a>
        </div>
      </FadeIn>
    </div>
    <div className="absolute bottom-0 left-0 right-0 glow-line" />
  </section>
);
