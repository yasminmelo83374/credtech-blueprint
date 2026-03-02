import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

const CTA_URL = "#assistir";

const Particles = () => (
  <>
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${25 + i * 18}%`,
          bottom: '5%',
          animationDelay: `${i * 1.2}s`,
        }}
      />
    ))}
  </>
);

export const S7_ResultSection = () => (
  <section className="py-14 md:py-32 px-5 md:px-6 grid-bg scan-lines relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <Particles />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <FadeIn>
        <motion.div
          className="glow-line w-16 md:w-20 mx-auto mb-6 md:mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <a
          href={CTA_URL}
          className="inline-block bg-primary text-primary-foreground font-bold text-sm md:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-full glow-button"
        >
          Garantir meu acesso antes de sair do ar
        </a>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-xs md:text-sm mt-4 md:mt-6">
          Conteúdo gratuito por tempo limitado.
        </p>
      </FadeIn>
    </div>
  </section>
);
