import { FadeIn } from "../FadeIn";
import { useState } from "react";

const radioFields = [
  { name: "opera_credito", label: "Você já opera crédito hoje?", options: ["Sim", "Não"] },
  { name: "unico_produto", label: "Sua operação depende majoritariamente de um único produto?", options: ["Sim", "Não"] },
  { name: "executa_tarefas", label: "Você consegue executar tarefas básicas no computador com orientação?", options: ["Sim", "Não"] },
];

export const ApplicationSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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
      <div className="max-w-xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-2 text-center">
            Aplicação <span className="text-highlight">(2 minutos)</span>
          </h2>
          <p className="text-muted-foreground text-sm text-center mb-10">
            Preencha para passar pela pré-validação.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Text inputs */}
            {[
              { name: "nome", label: "Nome", type: "text" },
              { name: "whatsapp", label: "WhatsApp", type: "tel" },
              { name: "instagram", label: "Instagram", type: "text" },
              { name: "produto_principal", label: "Seu produto principal hoje", type: "text" },
            ].map((f) => (
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

            {/* Radio fields */}
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

            {/* Textarea */}
            <div>
              <label className="block text-foreground text-sm font-medium mb-1.5">
                Qual seu objetivo nos próximos 45 dias?
              </label>
              <textarea
                required
                rows={3}
                className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                onChange={(e) => handleChange("objetivo", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-bold text-base py-4 rounded-full glow-button"
            >
              Enviar aplicação
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
};
