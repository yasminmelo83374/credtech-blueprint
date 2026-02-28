import { FadeIn } from "../FadeIn";
import { CountdownTimer } from "../CountdownTimer";

const WA_URL = "https://wa.me/55SEUNUMERO?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

export const S1_HeadlineSection = () => (
  <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-3xl mx-auto px-5 text-center py-24 md:py-32">
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-8">
          Vender todo santo dia — sem esforço manual — com uma operação automatizada por <span className="text-highlight">IA</span>.
        </h1>
      </FadeIn>

      <FadeIn delay={0.15}>
        <p className="text-foreground/90 text-base md:text-lg font-medium mb-6 max-w-2xl mx-auto">
          Se você é correspondente bancário, existe uma verdade que ninguém te contou:
        </p>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8 text-left max-w-xl mx-auto">
          <p className="text-foreground font-bold text-lg md:text-xl mb-4">
            O mercado não está mais difícil.<br />
            O mercado está <span className="text-highlight">algorítmico</span>.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
            E enquanto a maioria ainda tenta "acertar o mês", você já deve ter percebido:
          </p>
          <div className="space-y-2.5">
            {[
              "um mês entra dinheiro…",
              "no outro, some…",
              "cliente some…",
              "vendedor desanima…",
              "operação trava…",
              "demandas caem…",
              "e você fica sempre no modo reação.",
            ].map((item, i) => (
              <p key={i} className="text-muted-foreground text-sm md:text-base border-l-2 border-primary/30 pl-4">
                • {item}
              </p>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="max-w-xl mx-auto mb-10 space-y-4 text-left px-2">
          <p className="text-foreground font-semibold text-base md:text-lg">Não falta vontade.</p>
          <p className="text-foreground font-semibold text-base md:text-lg">Não falta esforço.</p>
          <p className="text-foreground font-semibold text-base md:text-lg">Não falta conhecimento de produto.</p>
          <p className="text-foreground font-bold text-lg md:text-xl mt-6">
            O que falta é <span className="text-highlight">previsibilidade</span>.
          </p>
          <p className="text-muted-foreground text-sm mt-4">E adivinha?</p>
          <p className="text-foreground font-medium text-base md:text-lg mt-2">
            Previsibilidade não nasce de talento.<br />
            Nasce de <span className="text-highlight">estrutura</span>.
          </p>
          <p className="text-foreground font-bold text-lg md:text-xl mt-6">
            E é exatamente isso que o <span className="text-highlight">Operação CredTech</span> faz.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.45}>
        <div className="bg-card/50 border border-border rounded-xl px-4 py-3 inline-flex items-center gap-2 mb-6 text-xs text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Esta turma tem somente <span className="text-foreground font-semibold">15 vagas</span> por limitação operacional real.
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button mb-6"
        >
          Quero passar pela pré-validação
        </a>
        <div className="flex justify-center mt-4">
          <CountdownTimer />
        </div>
      </FadeIn>
    </div>
  </section>
);
