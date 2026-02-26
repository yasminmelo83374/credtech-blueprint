export const FooterSection = () => (
  <footer className="border-t border-border bg-card/50 py-10 md:py-14 px-4 md:px-6">
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 text-xs text-muted-foreground">
        <div className="space-y-2">
          <p className="text-foreground font-semibold text-sm mb-3">Legal</p>
          <p className="hover:text-foreground transition-colors cursor-pointer">Política de Privacidade</p>
          <p className="hover:text-foreground transition-colors cursor-pointer">Termos de Uso</p>
          <p className="hover:text-foreground transition-colors cursor-pointer">Contrato de Mentoria</p>
        </div>
        <div className="space-y-2">
          <p className="text-foreground font-semibold text-sm mb-3">Contato</p>
          <p>contato@credtech.com.br</p>
          <p>Instagram: @credtech</p>
        </div>
        <div className="col-span-2 md:col-span-2 space-y-2">
          <p className="text-foreground font-semibold text-sm mb-3">Aviso Legal</p>
          <p className="leading-relaxed">
            Os resultados apresentados nesta página são reais, mas variam conforme execução, base, convênio e consistência individual. 
            Este programa não garante resultados financeiros específicos.
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>CNPJ: 00.000.000/0001-00</p>
        <p>© {new Date().getFullYear()} Operação CredTech. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);
