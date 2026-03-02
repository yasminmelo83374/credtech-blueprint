import { useEffect } from "react";
import { FadeIn } from "../FadeIn";

declare global {
  interface Window {
    RDStationForms: any;
  }
}

export const RDFormSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.async = true;
    script.onload = () => {
      if (window.RDStationForms) {
        new window.RDStationForms(
          "formulario_captacao-credtech-4bd37597749ec244cdc0",
          "null"
        ).createForm();
      }
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="assistir" className="py-16 md:py-24 px-4 md:px-6 bg-secondary/30">
      <div className="max-w-xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-8">
            Garanta seu acesso <span className="text-highlight">agora</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div
            role="main"
            id="formulario_captacao-credtech-4bd37597749ec244cdc0"
          />
        </FadeIn>
      </div>
    </section>
  );
};
