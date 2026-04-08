import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function EquipmentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const equipmentImages = [
    {
      title: "Contadora de Sementes",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      description: "Precisão na contagem"
    },
    {
      title: "Ensacadeira Automática",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      description: "Automação completa"
    },
    {
      title: "Balança de Fluxo",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      description: "Controle contínuo"
    },
    {
      title: "Sistema de Expedição",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      description: "Eficiência logística"
    }
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-[#f5a623] tracking-[0.3em] uppercase text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
              Em Operação
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Equipamentos
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              em Operação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções aplicadas em diferentes etapas do processo industrial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentImages.map((equipment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/90 via-[#1a3a5c]/50 to-transparent" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#f5a623]/0 group-hover:bg-[#f5a623]/20 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <h3 className="text-xl text-white mb-2 group-hover:text-[#f5a623] transition-colors duration-300" style={{ fontWeight: 700 }}>
                      {equipment.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {equipment.description}
                    </p>
                  </motion.div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a3a5c] via-[#f5a623] to-[#1a3a5c] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f5a623]/50 rounded-2xl transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          Adicione imagens reais dos seus equipamentos em operação para uma visualização autêntica
        </motion.p>
      </div>
    </section>
  );
}
