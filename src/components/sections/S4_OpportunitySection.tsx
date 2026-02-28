import { FadeIn } from "../FadeIn";
import { motion } from "framer-motion";

export const S4_OpportunitySection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 relative">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <motion.span
          className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block typing-cursor"
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          viewport={{ once: true }}
        >
          Urgência
        </motion.span>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          Disponível por <span className="text-highlight">tempo limitado.</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="corner-bracket bg-card border border-border rounded-xl p-6 mb-6 max-w-xl mx-auto">
          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
            Os episódios saem do ar assim que a nova turma do Método CredTech abrir.
            Depois disso, o conteúdo será removido.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <p className="text-muted-foreground text-sm">
          O mercado não espera. A IA não espera. E o crédito também não.
        </p>
      </FadeIn>
    </div>
  </section>
);
