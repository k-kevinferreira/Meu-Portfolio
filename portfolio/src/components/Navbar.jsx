import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#projetos", label: "Projetos" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#f5f5f3]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="#inicio"
          className="text-[20px] font-bold tracking-[-0.03em] text-[#0f172a]"
          onClick={closeMenu}
        >
          Dev<span className="text-[#24385b]">Portfolio</span>
        </a>

        <nav className="hidden items-center gap-10 text-[17px] font-medium text-[#5b6475] md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[#120257]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-[#d8d5cf] bg-white/80 p-3 text-[#24385b] shadow-sm transition hover:border-[#24385b] hover:text-[#120257] md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-[#0f172a]/35 transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isOpen}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-screen w-[52vw] min-w-[220px] max-w-[300px] flex-col bg-[#24385b] px-6 pb-12 pt-8 text-[#f5f5f3] shadow-[0_0_40px_rgba(15,23,42,0.28)] transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-14 flex items-center justify-end">
          <button
            type="button"
            className="inline-flex items-center justify-center p-1 text-[#f5f5f3] transition hover:opacity-80"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col gap-9 pt-2 text-[1.7rem] font-normal tracking-[-0.02em]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="transition hover:translate-x-1 hover:opacity-90"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  );
}

export default Navbar;
