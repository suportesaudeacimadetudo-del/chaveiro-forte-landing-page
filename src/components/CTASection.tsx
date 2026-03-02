import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-primary-foreground mb-6">
            Precisando de um Chaveiro Agora?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
            Não perca tempo! Ligue agora e tenha atendimento imediato em Florianópolis e região.
          </p>
          <a
            href="tel:+5548999999999"
            className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-extrabold px-10 py-5 rounded-xl text-xl hover:bg-gold-hover transition-colors animate-pulse-glow"
          >
            <Phone className="w-6 h-6" />
            Ligar 24h
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
