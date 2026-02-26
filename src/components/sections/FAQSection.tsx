import { FadeIn } from "../FadeIn";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso ser bom em tecnologia?", a: "Não. Basta executar ações básicas no computador com orientação." },
  { q: "Isso é curso?", a: "Não. É implementação em grupo com missões, estrutura mínima e ajustes guiados." },
  { q: "Vocês executam por mim?", a: "A CredTech entrega modelos prontos e estrutura. A execução diária é sua, com acompanhamento." },
  { q: "É só sobre WhatsApp?", a: "Não. O foco é arquitetura comercial: multicanal, validação, automação e inteligência de retorno." },
  { q: "Por que só 15 vagas?", a: "Porque envolve setup e implementação prática em grupo fechado. Mais do que isso derruba qualidade." },
  { q: "Quais são as datas?", a: "Inscrições até 02/03/26. Início 03/03/26 às 19:29. Duração: 45 dias com encontros toda terça-feira." },
  { q: "Como é a comunicação e suporte?", a: "Grupo fechado + suporte durante a semana para destravar execução. Encontros ao vivo às terças 19:29." },
  { q: "O que eu preciso ter pronto antes de entrar?", a: "Operação ativa (mesmo simples) e disposição para executar tarefas no computador com orientação." },
  { q: "Isso serve para qual produto?", a: "A estrutura serve para operação. O foco (produto/convênio) é definido estrategicamente na anamnese." },
];

export const FAQSection = () => (
  <section id="faq" className="py-14 md:py-24 px-4 md:px-6">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <h2 className="text-2xl md:text-4xl font-extrabold mb-10 text-center">
          Perguntas <span className="text-highlight">frequentes</span>
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5 overflow-hidden">
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </div>
  </section>
);
