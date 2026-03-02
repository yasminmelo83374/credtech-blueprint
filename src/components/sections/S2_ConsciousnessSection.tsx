import { FadeIn } from "../FadeIn";
import depoimento1 from "@/assets/depoimento-1.png";
import depoimento2 from "@/assets/depoimento-2.png";
import depoimento3a from "@/assets/depoimento-3a.png";
import depoimento3b from "@/assets/depoimento-3b.png";

const TestimonialFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative rounded-xl overflow-hidden" style={{
    boxShadow: "0 0 20px hsl(75 100% 47% / 0.15), 0 0 40px hsl(75 100% 47% / 0.05)",
    border: "1px solid hsl(75 100% 47% / 0.2)",
  }}>
    {children}
  </div>
);

export const S2_ConsciousnessSection = () => (
  <section className="py-8 md:py-28 px-5 md:px-6">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="pulse-dot" />
          <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
            Prova social
          </span>
        </div>
        <h2 className="text-xl md:text-4xl font-extrabold leading-tight mb-6 md:mb-10">
          O que já está acontecendo com quem aplicou a{" "}
          <span className="text-highlight">estrutura:</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
          <TestimonialFrame>
            <img src={depoimento1} alt="Depoimento de aluna" className="w-full rounded-xl" loading="lazy" />
          </TestimonialFrame>
          <TestimonialFrame>
            <img src={depoimento2} alt="Depoimento de aluna" className="w-full rounded-xl" loading="lazy" />
          </TestimonialFrame>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <TestimonialFrame>
          <div className="grid grid-cols-2 gap-0">
            <img src={depoimento3a} alt="Depoimento parte 1" className="w-full" loading="lazy" />
            <img src={depoimento3b} alt="Depoimento parte 2" className="w-full" loading="lazy" />
          </div>
        </TestimonialFrame>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="glow-line w-12 mx-auto mb-3 mt-6 md:mt-8" />
        <p className="text-muted-foreground/60 text-[11px] md:text-xs">
          Isso é o que acontece quando você sai do improviso e opera no novo modelo.
        </p>
      </FadeIn>
    </div>
  </section>
);
