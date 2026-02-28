import { FadeIn } from "../FadeIn";
import { Play } from "lucide-react";

const lessons = [
  {
    ep: 1,
    title: "O Mercado Antigo Morreu: Por Que a Operação Travou Sem Aviso Prévio",
  },
  {
    ep: 2,
    title: "Para Quem Este Movimento É — E Para Quem Não É (Sem Rodeios)",
  },
  {
    ep: 3,
    title: "A Virada Algorítmica: A Revolução Silenciosa Que Está Mudando o Crédito Para Sempre",
  },
  {
    ep: 4,
    title: "O Caminho Até a CredTech: A Jornada Real Que Deu Origem ao Método",
  },
  {
    ep: 5,
    title: "O Fim do Achismo: A Estrutura Oculta Que Explica o Banimento e Revoluciona o WhatsApp",
  },
  {
    ep: 6,
    title: "O Método CredTech Revelado: O Funil de Alta Demanda em 4 Passos Para Vender Todo Dia",
  },
];

export const S3_ProblemSection = () => (
  <section id="assistir" className="py-16 md:py-28 px-5 md:px-6 bg-secondary/30">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <span className="text-primary text-xs font-bold uppercase tracking-[0.25em] mb-3 block text-center">
          As 6 Aulas
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-12 text-center">
          Catálogo <span className="text-highlight">CredTech</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/30 transition-colors h-full flex flex-col">
              <div className="aspect-video bg-background flex items-center justify-center border-b border-border">
                <div className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
                  <Play className="w-5 h-5 text-primary ml-0.5" />
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                  Episódio {lesson.ep}
                </span>
                <p className="text-foreground text-sm font-semibold leading-snug mb-4 flex-1">
                  {lesson.title}
                </p>
                <a
                  href="#"
                  className="text-primary text-xs font-bold uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3" />
                  Assistir episódio
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
