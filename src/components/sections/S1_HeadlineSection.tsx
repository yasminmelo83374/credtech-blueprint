import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

const CTA_URL = "#assistir";

const Particles = () => (
  <>
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="particle"
        style={{
          left: `${15 + i * 15}%`,
          bottom: '10%',
          animationDelay: `${i * 0.9}s`,
        }}
      />
    ))}
  </>
);

export const S1_HeadlineSection = () => (
  <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center grid-bg scan-lines overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <Particles />
    <div className="relative z-10 max-w-3xl mx-auto px-5 text-center py-16 md:py-32">
      <FadeIn>
        <motion.div
          className="glow-line w-16 md:w-24 mx-auto mb-5 md:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </FadeIn>

      <FadeIn>
        <h1 className="text-[1.65rem] sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-4 md:mb-6">
          O mercado virou algorítmico. Quem não operar com método,{" "}
          <span className="text-highlight">vai ficar pra trás.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-muted-foreground text-sm md:text-lg font-medium mb-7 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Aprenda o método que está destravando operações travadas e trazendo clientes todos os dias — disponível gratuitamente por tempo limitado.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <a
          href={CTA_URL}
          className="inline-block bg-primary text-primary-foreground font-bold text-sm md:text-lg px-8 md:px-10 py-3.5 md:py-4 rounded-full glow-button"
        >
          Quero acessar o método gratuitamente
        </a>
      </FadeIn>

      <FadeIn delay={0.4}>
        <motion.div
          className="glow-line w-12 md:w-16 mx-auto mt-8 md:mt-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        />
      </FadeIn>
    </div>
  </section>
);
