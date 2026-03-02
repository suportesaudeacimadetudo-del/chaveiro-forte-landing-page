import { motion } from "framer-motion";
import { MapPin, Phone, Navigation } from "lucide-react";
import storefrontImage from "@/assets/storefront-locksmith.jpg";

const LocationSection = () => {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-bold text-sm tracking-wider uppercase">Onde estamos</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
            Nossa Localização
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113541.96897556655!2d-48.5482!3d-27.5954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527382b2a280f05%3A0xa1c0cf4a29948a80!2sFlorianópolis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Chaveiro Forte"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <img
              src={storefrontImage}
              alt="Fachada da Chaveiro Forte"
              className="rounded-xl shadow-lg w-full h-64 object-cover mb-6"
            />

            <div className="bg-card rounded-xl p-6 border border-border flex-1">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-card-foreground">Endereço</p>
                  <p className="text-muted-foreground text-sm">Rua Felipe Schmidt, 515 — Centro, Florianópolis - SC, 88010-001</p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-card-foreground">Telefone</p>
                  <p className="text-muted-foreground text-sm">(48) 99999-9999</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-27.5954,-48.5482"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity w-full"
              >
                <Navigation className="w-4 h-4" />
                Como Chegar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
