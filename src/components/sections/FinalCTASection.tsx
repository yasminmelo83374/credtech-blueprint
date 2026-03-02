import { FadeIn } from "../FadeIn";

const WA_URL = "https://wa.me/5519993171855?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

export const FinalCTASection = () => (
  <section className="py-20 md:py-32 px-4 md:px-6 text-center grid-bg relative">
    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
    <div className="relative z-10 max-w-3xl mx-auto">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Produção não é sorte.<br />
          É <span className="text-highlight">decisão estrutural</span>.
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-10">
          A decisão é sua.
        </p>
      </FadeIn>
      <FadeIn delay={0.2}>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-xl px-14 py-5 rounded-full glow-button mb-4"
        >
          Quero estar entre os 15
        </a>
        <p className="text-muted-foreground text-sm">
          Vagas encerram 02/03 às 23:59.
        </p>
      </FadeIn>
    </div>
  </section>
);
