import { FadeIn } from "../FadeIn";

const cards = [
  { title: "Esteira Hidra (multicanal)", text: "Entrada de leads por múltiplas fontes conectadas na mesma esteira, com rotina simples de execução." },
  { title: "Validação + Prioridade de Mailing", text: "Convênio-alvo definido, base higienizada, segmentada e priorizada para atacar primeiro o que mais converte." },
  { title: "Agente Autônomo (no seu PC)", text: "Um funcionário digital instalado para apoiar tarefas operacionais e organizar seu processo com você." },
  { title: "IA no Atendimento", text: "Roteiro + regras + tom: qualifica, responde e encaminha o lead certo para a etapa certa." },
  { title: "Régua de Follow-up", text: "Sequência de contatos com lógica (tempo, variação e motivo), sem parecer spam." },
  { title: "Inteligência de Retorno", text: "Leitura dos padrões de resposta por convênio para ajustar copy, abordagem e canal com precisão." },
];

export const DeliverablesSection = () => (
  <section className="py-16 md:py-24 px-4 md:px-6">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-3">
          O que você leva <span className="text-highlight">pronto</span> (na prática)
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-2xl">
          Sem palestra infinita. Você sai com peças montadas e funcionando.
        </p>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-[18px]">
        {cards.map((c, i) => (
          <FadeIn key={i} delay={i * 0.06}>
            <div className="bg-card border border-border rounded-2xl p-5 md:p-6 h-full hover:border-primary/30 transition-colors duration-300">
              <h3 className="font-bold text-foreground text-sm mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <p className="text-foreground font-bold text-base md:text-lg mt-10 text-center">
          Você não compra "informação". Você compra <span className="text-highlight">estrutura aplicada</span>.
        </p>
      </FadeIn>
    </div>
  </section>
);
