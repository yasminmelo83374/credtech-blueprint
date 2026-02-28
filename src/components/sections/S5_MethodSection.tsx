import { FadeIn } from "../FadeIn";

export const S5_MethodSection = () => (
  <section className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <span className="text-primary text-xs font-bold uppercase tracking-widest">O Método</span>
        <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6">
          Operação <span className="text-highlight">CredTech</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-4">
          O método que transforma sua operação de crédito em um sistema previsível, automatizado e alimentado por IA — sem precisar ser técnico, programador ou "entendido de tecnologia".
        </p>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Ele foi desenhado para tirar você do modo manual e colocar no <span className="text-highlight font-semibold">modo algorítmico</span>, passando por 5 fases claras, replicáveis e inevitavelmente lucrativas.
        </p>
      </FadeIn>
    </div>
  </section>
);
