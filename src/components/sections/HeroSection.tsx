import { FadeIn } from "../FadeIn";
import { CountdownTimer } from "../CountdownTimer";

const WA_URL = "https://wa.me/55SEUNUMERO?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

export const HeroSection = () => (
  <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24 md:py-32">
      <FadeIn>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4">
          Operação <span className="text-highlight">CredTech</span>
        </h1>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-xl md:text-2xl font-medium text-foreground/80 mb-3">
          Estrutura que <span className="text-highlight">sustenta</span> produção.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
          Implementação guiada em 6 semanas + anamnese individual de 15 min.
        </p>
      </FadeIn>

      <FadeIn delay={0.4}>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-lg px-10 py-4 rounded-full glow-button mb-4"
        >
          Quero passar pela pré-validação
        </a>
        <div className="text-muted-foreground text-sm mb-2">
          <p>15 vagas reais. Inscrições até 02/03 às 23:59.</p>
        </div>
        <a href="#como-funciona-operacao" className="inline-block text-primary text-sm font-medium hover:underline mb-8">
          Ver o método em 2 min ↓
        </a>
      </FadeIn>

      <FadeIn delay={0.5}>
        <div className="flex justify-center">
          <CountdownTimer />
        </div>
      </FadeIn>
    </div>
  </section>
);
