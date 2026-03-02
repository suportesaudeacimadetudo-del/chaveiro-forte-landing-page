import { motion } from "framer-motion";
import { Shield, Clock, Users, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-locksmith.jpg";

const highlights = [
  { icon: Shield, text: "Mais de 10 anos de experiência" },
  { icon: Clock, text: "Atendimento 24 horas, 7 dias" },
  { icon: Users, text: "Equipe altamente especializada" },
  { icon: MapPin, text: "Atendimento em toda Florianópolis" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={aboutImage}
              alt="Oficina do Chaveiro Forte"
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground font-heading font-extrabold text-xl px-6 py-3 rounded-xl shadow-lg">
              +10 anos
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold text-sm tracking-wider uppercase">Quem somos</span>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2 mb-6">
              Sobre a Chaveiro Forte
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Chaveiro Forte é referência em serviços de chaveiro em Florianópolis e região. Com mais de uma década de atuação, oferecemos soluções rápidas e seguras para residências, veículos e empresas.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nossa equipe é formada por profissionais altamente qualificados, com ferramentas de última geração e compromisso total com a segurança e satisfação dos nossos clientes. Estamos disponíveis 24 horas por dia, todos os dias da semana.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item.text} className="flex items-start gap-3 bg-card p-3 rounded-lg">
                  <item.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-card-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
