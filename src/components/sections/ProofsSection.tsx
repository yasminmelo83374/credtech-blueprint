import { FadeIn } from "../FadeIn";
import { useState } from "react";
import { X as CloseIcon } from "lucide-react";

const screenshots = Array.from({ length: 8 }, (_, i) => ({
  alt: `Resultado ${i + 1}`,
  label: "",
}));

export const ProofsSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="provas" className="py-14 md:py-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-primary text-xs font-bold uppercase tracking-widest">Resultados estruturais reais</span>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 mt-2">
            Provas <span className="text-highlight">reais</span> (prints)
          </h2>
          <p className="text-muted-foreground text-sm mb-10 max-w-xl leading-relaxed">
            Resultados variam conforme execução, base e convênio. Aqui a promessa é estrutura e previsibilidade — não milagre.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-300 text-left"
              >
                <div className="bg-secondary/50 px-4 py-2 flex items-center gap-2 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <span className="text-muted-foreground text-xs font-medium">Print real</span>
                </div>
                <div className="aspect-[3/4] flex items-center justify-center text-muted-foreground/40">
                  <p className="text-xs">Espaço para print</p>
                </div>
                {s.label && (
                  <div className="px-4 py-2 border-t border-border">
                    <p className="text-muted-foreground text-xs">{s.label}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p className="text-muted-foreground text-xs text-center mt-8 max-w-lg mx-auto">
            Clique em qualquer print para ampliar. Legendas adicionadas conforme contexto.
          </p>
        </FadeIn>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground"
            onClick={() => setLightbox(null)}
          >
            <CloseIcon className="w-6 h-6" />
          </button>
          <div className="bg-card border border-border rounded-2xl max-w-md w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="bg-secondary/50 px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
              <span className="text-muted-foreground text-xs font-medium">Print {lightbox + 1}</span>
            </div>
            <div className="aspect-[3/4] flex items-center justify-center text-muted-foreground/40">
              <p className="text-sm">Espaço para print</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
