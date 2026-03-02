import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";

const reviews = [
  {
    name: "Carlos Eduardo",
    text: "Fui atendido em menos de 20 minutos. Serviço rápido e profissional. Recomendo!",
    initials: "CE",
  },
  {
    name: "Maria Fernanda",
    text: "Tranquei meu carro no estacionamento e eles resolveram em minutos. Excelente!",
    initials: "MF",
  },
  {
    name: "João Pedro",
    text: "Troquei todas as fechaduras do meu apartamento. Trabalho impecável e preço justo.",
    initials: "JP",
  },
];

const ReviewsSection = () => {
  return (
    <section id="avaliacoes" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-bold text-sm tracking-wider uppercase">Depoimentos</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mt-2">
            O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {review.initials}
                </div>
                <span className="font-heading font-bold text-card-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mt-10 bg-card border border-secondary/30 rounded-xl px-6 py-4 max-w-md mx-auto"
        >
          <Award className="w-8 h-8 text-secondary" />
          <span className="font-heading font-bold text-foreground">
            ⭐ Mais de 300 atendimentos realizados
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
