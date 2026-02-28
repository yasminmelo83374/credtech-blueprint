import { FadeIn } from "../FadeIn";

const testimonials = [
  "Parei de depender de vendedor e minha operação ficou previsível pela primeira vez.",
  "Eu achava que IA era complicado. Em 3 dias já tinha agente rodando sozinho.",
  "Fiz mais em 1 semana com o método do que em 3 meses no manual.",
  "Finalmente entendi por que meu WhatsApp vivia banido.",
];

export const S8_ForWhoSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block text-center">
          Depoimentos
        </span>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-card border border-border rounded-xl p-6">
              <p className="text-foreground text-sm md:text-base leading-relaxed italic">
                "{t}"
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
