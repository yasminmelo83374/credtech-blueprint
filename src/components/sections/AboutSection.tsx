import { FadeIn } from "../FadeIn";
import yasminImg from "@/assets/yasmin.jpg";

export const AboutSection = () => (
  <section id="sobre" className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-12 text-center">
          Quem conduz a <span className="text-highlight">Operação CredTech</span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="relative w-28 h-28 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-110" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden">
              <img src={yasminImg} alt="Yasmin Melo — mentora da Operação CredTech" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-foreground mb-1">Yasmin Melo</h3>
            <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">Estratégia + Estrutura Comercial</p>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
              Eu não entro pra te ensinar a "vender mais". Eu entro pra instalar estrutura: método, processo, cadência e leitura de retorno. Produção vira rotina — não ansiedade.
            </p>
            <p className="text-foreground/60 text-xs mt-4">
              Você não entra só num grupo. Você acessa uma estrutura completa — TI, marketing e IA integrados.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
