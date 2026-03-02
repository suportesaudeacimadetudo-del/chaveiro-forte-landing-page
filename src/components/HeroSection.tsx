import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-locksmith.jpg";

const trustItems = [
  "Atendimento 24 horas",
  "Chegada rápida",
  "Profissionais especializados",
  "Pagamento facilitado",
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Chaveiro profissional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-darker-blue/95 via-dark-blue/85 to-dark-blue/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-secondary text-secondary-foreground font-bold text-sm px-4 py-1.5 rounded-full mb-6">
              🔑 Atendimento Emergencial
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
          >
            Chaveiro 24h em Florianópolis —{" "}
            <span className="text-secondary">Atendimento Rápido e Seguro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed"
          >
            Perdeu a chave? Trancou o carro? Atendimento imediato residencial, automotivo e comercial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a
              href="tel:+5548999999999"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:bg-gold-hover transition-colors animate-pulse-glow"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </a>
            <a
              href="https://wa.me/5548999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-bold px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Atendimento
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-3"
          >
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
