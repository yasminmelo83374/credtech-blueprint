import { FadeIn } from "../FadeIn";
import { useState } from "react";

const radioFields = [
  { name: "opera_credito", label: "Já opera crédito?", options: ["Sim", "Não"] },
  { name: "unico_produto", label: "Depende de um único produto?", options: ["Sim", "Não"] },
  { name: "executa_tarefas", label: "Executa tarefas básicas no computador?", options: ["Sim", "Não"] },
];

const textFields = [
  { name: "nome", label: "Nome", type: "text" },
  { name: "whatsapp", label: "WhatsApp", type: "tel" },
  { name: "instagram", label: "Instagram", type: "text" },
  { name: "produto_principal", label: "Produto principal hoje", type: "text" },
];

export const ApplicationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const filledCount = Object.keys(formData).length;
  const totalFields = textFields.length + radioFields.length + 1; // +1 for textarea
  const progress = Math.min(Math.round((filledCount / totalFields) * 100), 100);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="aplicar" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <div className="bg-card border border-primary/30 rounded-2xl p-10">
              <h2 className="text-2xl font-extrabold text-foreground mb-3">Aplicação enviada ✓</h2>
              <p className="text-muted-foreground text-sm">
                Recebido. Se fizer sentido, te chamamos no WhatsApp.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="aplicar" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-xl mx-auto pb-20 md:pb-0">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-center">
            Aplicação <span className="text-highlight">(2 min)</span>
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-4">
            Preencha para passar pela pré-validação.
          </p>
          {/* Progress bar */}
          <div className="w-full bg-secondary rounded-full h-1.5 mb-8 max-w-xs mx-auto">
            <div
              className="bg-primary h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-4">
            {textFields.map((f) => (
              <div key={f.name}>
                <label className="block text-foreground text-sm font-medium mb-1.5">{f.label}</label>
                <input
                  required
                  type={f.type}
                  className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  onChange={(e) => handleChange(f.name, e.target.value)}
                />
              </div>
            ))}

            {radioFields.map((rf) => (
              <fieldset key={rf.name}>
                <legend className="text-foreground text-sm font-medium mb-2">{rf.label}</legend>
                <div className="flex gap-3">
                  {rf.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name={rf.name}
                        value={opt}
                        required
                        className="accent-primary"
                        onChange={(e) => handleChange(rf.name, e.target.value)}
                      />
                      <span className="text-muted-foreground text-sm">{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}

            <div>
              <label className="block text-foreground text-sm font-medium mb-1.5">
                Objetivo nos próximos 45 dias?
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                onChange={(e) => handleChange("objetivo", e.target.value)}
              />
            </div>

            {/* Desktop button */}
            <button
              type="submit"
              className="hidden md:block w-full bg-primary text-primary-foreground font-bold text-base py-4 rounded-full glow-button"
            >
              Enviar aplicação
            </button>
          </form>
        </FadeIn>
      </div>

      {/* Sticky CTA mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-3">
        <button
          type="submit"
          form="app-form"
          onClick={() => {
            const form = document.querySelector('#aplicar form') as HTMLFormElement;
            if (form) form.requestSubmit();
          }}
          className="w-full bg-primary text-primary-foreground font-bold text-base py-4 rounded-full glow-button"
        >
          Enviar aplicação
        </button>
      </div>
    </section>
  );
};
