import { motion } from "framer-motion";
import { Home, Car, Lock, KeyRound, Smartphone, Building2 } from "lucide-react";

const services = [
  { icon: Home, title: "Abertura de Portas Residenciais", desc: "Abertura rápida e sem danos à sua porta ou fechadura." },
  { icon: Car, title: "Abertura de Veículos", desc: "Desbloqueio de carros, motos e utilitários de todas as marcas." },
  { icon: Lock, title: "Troca de Fechaduras", desc: "Instalação e troca de fechaduras com segurança garantida." },
  { icon: KeyRound, title: "Cópia de Chaves", desc: "Cópias precisas de chaves residenciais e automotivas." },
  { icon: Smartphone, title: "Fechaduras Digitais", desc: "Instalação de fechaduras eletrônicas e biométricas." },
  { icon: Building2, title: "Atendimento Empresarial", desc: "Soluções completas para empresas e condomínios." },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-bold text-sm tracking-wider uppercase">O que fazemos</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
            Nossos Serviços
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-secondary/50 hover:-translate-y-1"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-card-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
