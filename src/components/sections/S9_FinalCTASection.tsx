import { FadeIn } from "../FadeIn";
import { CountdownTimer } from "../CountdownTimer";
import { Lock } from "lucide-react";

const WA_URL = "https://wa.me/55SEUNUMERO?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

export const S9_FinalCTASection = () => (
  <section className="relative py-20 md:py-32 px-5 md:px-6 grid-bg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          O chamado
        </h2>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="space-y-4 text-foreground text-base md:text-lg leading-relaxed mb-8">
          <p>O mercado virou algorítmico.</p>
          <p className="font-bold">Agora só existem duas escolhas:</p>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-left max-w-md mx-auto space-y-3">
            <p className="text-muted-foreground text-sm md:text-base">
              • ser substituído pela IA
            </p>
            <p className="text-center text-muted-foreground text-xs font-medium">ou</p>
            <p className="text-highlight font-semibold text-sm md:text-base">
              • usar a IA para substituir tudo que te atrasa hoje.
            </p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="text-foreground font-bold text-base md:text-lg mb-2">
          No Operação CredTech, você escolhe a segunda opção.
        </p>
        <p className="text-muted-foreground text-sm md:text-base mb-4">
          As vagas da mentoria abrem agora.<br />
          Entra quem está pronto para sair da aleatoriedade e operar com previsibilidade diária.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="bg-card/50 border border-border rounded-xl px-4 py-3 inline-flex items-center gap-2 mb-6 text-xs text-muted-foreground">
          <Lock className="w-3.5 h-3.5 text-primary" />
          Esta turma tem somente <span className="text-foreground font-semibold">15 vagas</span> por limitação operacional real.
        </div>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="mb-6">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-bold text-base md:text-lg px-10 py-4 rounded-full glow-button"
          >
            Clique abaixo para entrar
          </a>
        </div>
        <div className="flex justify-center">
          <CountdownTimer />
        </div>
      </FadeIn>
    </div>
  </section>
);
