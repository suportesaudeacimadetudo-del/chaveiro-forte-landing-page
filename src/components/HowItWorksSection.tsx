import { motion } from "framer-motion";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Ligue ou envie mensagem",
    desc: "Entre em contato por telefone ou WhatsApp. Estamos disponíveis 24h.",
  },
  {
    icon: MapPin,
    step: "02",
    title: "Receba atendimento rápido",
    desc: "Nosso profissional vai até você em minutos, onde estiver em Florianópolis.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Problema resolvido",
    desc: "Serviço executado com segurança, rapidez e garantia de qualidade.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-bold text-sm tracking-wider uppercase">Simples e rápido</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
            Como Funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="bg-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 relative">
                <item.icon className="w-9 h-9 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground font-heading font-extrabold text-xs w-7 h-7 rounded-full flex items-center justify-center">
                  {item.step}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>

              {i < 2 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 text-border">
                  <svg viewBox="0 0 24 8" fill="none" className="w-full">
                    <path d="M0 4h20m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
