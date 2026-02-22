import { FadeIn } from "../FadeIn";

export const InvestmentSection = () => (
  <section id="investimento" className="py-24 md:py-32 px-6 bg-secondary/30">
    <div className="max-w-xl mx-auto text-center">
      <FadeIn>
        <span className="text-primary text-sm font-bold uppercase tracking-wider">Investimento</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-2">Operação <span className="text-highlight">CredTech</span></h2>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="bg-card border-2 border-primary/30 rounded-2xl p-10 mt-8">
          <p className="text-muted-foreground text-sm mb-2">em até</p>
          <p className="text-4xl md:text-5xl font-black text-foreground mb-1">
            12x R$ 197,00
          </p>
          <p className="text-muted-foreground text-sm mb-1">ou</p>
          <p className="text-2xl font-bold text-highlight mb-8">R$ 1.697 à vista</p>

          <a href="#" className="inline-block bg-primary text-primary-foreground font-bold text-lg px-12 py-4 rounded-full glow-button mb-6">
            Quero entrar
          </a>

          <div className="text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto">
            <p className="font-semibold text-foreground mb-1">Garantia Estrutural:</p>
            <p>
              Se você participar dos dois primeiros encontros, executar as missões e ativar sua estrutura mínima, 
              poderá solicitar cancelamento até 12/03/26.
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);
