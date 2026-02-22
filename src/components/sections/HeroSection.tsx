import { FadeIn } from "../FadeIn";
import { CountdownTimer } from "../CountdownTimer";

export const HeroSection = () => (
  <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          Operação <span className="text-highlight">CredTech</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-3">
          Produção não é sorte. É <span className="text-highlight">estrutura</span>.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-sm md:text-base leading-relaxed">
          Implementação de Estrutura Autônoma com IA, Multicanal e Inteligência Comercial para Correspondentes.
        </p>
      </FadeIn>
      <FadeIn delay={0.45}>
        <a href="#investimento" className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full glow-button mb-6">
          Quero ter uma CredTech
        </a>
        <div className="text-muted-foreground text-sm mb-8">
          <p>Início: <span className="text-foreground font-semibold">03/03/26</span></p>
          <p>15 vagas reais. Sem reposição.</p>
        </div>
      </FadeIn>
      <FadeIn delay={0.6}>
        <div className="flex justify-center">
          <CountdownTimer />
        </div>
        <p className="text-muted-foreground text-xs mt-3">Inscrições encerram 02/03 às 23:59</p>
      </FadeIn>
    </div>
  </section>
);
