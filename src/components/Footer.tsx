import { Key, Phone, MessageCircle, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-darker-blue text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-secondary p-2 rounded-lg">
                <Key className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg block leading-tight">Chaveiro Forte</span>
                <span className="text-secondary text-xs font-semibold">24 HORAS</span>
              </div>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Segurança e agilidade a qualquer hora. Seu chaveiro de confiança em Florianópolis.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {["Início", "Serviços", "Sobre", "Avaliações", "Localização"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+5548999999999" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                <Phone className="w-4 h-4" /> (48) 99999-9999
              </a>
              <a href="https://wa.me/5548999999999" className="flex items-center gap-2 text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Rua Felipe Schmidt, 515 — Centro, Florianópolis - SC</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Clock className="w-4 h-4" /> 24 horas — Todos os dias
              </div>
            </div>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-heading font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="bg-primary-foreground/10 hover:bg-secondary/20 p-3 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary-foreground/10 hover:bg-secondary/20 p-3 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 Chaveiro Forte 24h. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
