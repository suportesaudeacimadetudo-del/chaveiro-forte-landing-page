import { useState, useEffect } from "react";
import { Menu, X, Phone, Key } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg py-2"
          : "bg-primary/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <div className="bg-secondary p-2 rounded-lg">
            <Key className="w-6 h-6 text-secondary-foreground" />
          </div>
          <div>
            <span className="font-heading font-extrabold text-lg text-primary-foreground leading-tight block">
              Chaveiro Forte
            </span>
            <span className="text-secondary text-xs font-semibold tracking-wider">24 HORAS</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-secondary font-medium text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+5548999999999"
            className="flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-5 py-2.5 rounded-lg hover:bg-gold-hover transition-colors animate-pulse-glow"
          >
            <Phone className="w-4 h-4" />
            Ligar Agora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground/80 hover:text-secondary font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+5548999999999"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-5 py-3 rounded-lg mt-2"
            >
              <Phone className="w-4 h-4" />
              Ligar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
