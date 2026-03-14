function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f5f5f3]/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <a
          href="#inicio"
          className="text-[20px] font-bold tracking-[-0.03em] text-[#0f172a]"
        >
          Dev<span className="text-[#24385b]">Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-[17px] text-[#5b6475] font-medium">
          <a href="#inicio" className="transition hover:text-[#120257]">
            Início
          </a>
          <a href="#sobre" className="transition hover:text-[#120257]">
            Sobre mim
          </a>
          <a href="#projetos" className="transition hover:text-[#120257]">
            Projetos
          </a>
          <a href="#tecnologias" className="transition hover:text-[#120257]">
            Tecnologias
          </a>
          <a href="#contato" className="transition hover:text-[#120257]">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;