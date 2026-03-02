import { FadeIn } from "../FadeIn";
import { Users, Lock } from "lucide-react";

const WA_URL = "https://wa.me/5519993171855?text=Quero%20passar%20pela%20pr%C3%A9-valida%C3%A7%C3%A3o%20da%20Opera%C3%A7%C3%A3o%20CredTech.%20Meu%20produto%20principal%20%C3%A9%20____%20e%20meu%20objetivo%20em%2045%20dias%20%C3%A9%20____.";

export const InvestmentSection = () => (
  <section id="investimento" className="py-14 md:py-24 px-4 md:px-6 bg-secondary/30">
    <div className="max-w-xl mx-auto text-center">
      <FadeIn>
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Investimento</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-2">Operação <span className="text-highlight">CredTech</span></h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-8 md:p-10 mt-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-secondary border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">
              <Lock className="w-3 h-3" /> Grupo fechado
            </span>
            <span className="inline-flex items-center gap-1.5 bg-secondary border border-border rounded-full px-3 py-1 text-xs text-muted-foreground">
              <Users className="w-3 h-3" /> 15 vagas
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-2">em até</p>
          <p className="text-4xl md:text-5xl font-black text-foreground mb-1">
            <span className="text-lg font-medium text-muted-foreground">12x </span>R$ 197,00
          </p>
          <p className="text-muted-foreground text-sm mb-1">ou</p>
          <p className="text-2xl font-bold text-highlight mb-2">R$ 1.797 à vista</p>
          <p className="text-xs text-muted-foreground mb-8">Economize pagando à vista</p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-bold text-lg px-12 py-4 rounded-full glow-button mb-6"
          >
            Quero estar entre os 15
          </a>

          <div className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
            <p className="font-semibold text-foreground mb-1">Garantia Estrutural:</p>
            <p>
              Participou dos 2 primeiros encontros + executou as missões iniciais = pode solicitar cancelamento até 12/03/26.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
