import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Wheat, Leaf, Package, Boxes } from "lucide-react";

const applications = [
  {
    icon: Wheat,
    title: "Sementes",
    description: "Soluções completas para processamento e ensaque de sementes",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80"
  },
  {
    icon: Leaf,
    title: "Fertilizantes",
    description: "Sistemas de dosagem e pesagem para fertilizantes",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80"
  },
  {
    icon: Package,
    title: "Grãos",
    description: "Controle e padronização no processamento de grãos",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
  },
  {
    icon: Boxes,
    title: "Materiais Granulares",
    description: "Soluções adaptadas para diversos materiais granulares",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  }
];

export function Applications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-gray-50 overflow-hidden">
      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="#1a3a5c" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block mb-4">
            <span className="text-[#f5a623] tracking-[0.3em] uppercase text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
              Aplicações
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Segmentos
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              Atendidos
            </span>
          </h2>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a5c]/95 via-[#1a3a5c]/70 to-transparent" />
                <div className="absolute inset-0 bg-[#f5a623]/0 group-hover:bg-[#f5a623]/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mb-4"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-[#f5a623]/30 to-white/20 backdrop-blur-sm rounded-xl border border-[#f5a623]/30">
                    <app.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <h3 className="text-2xl text-white mb-3 leading-tight" style={{ fontWeight: 700 }}>
                  {app.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                  {app.description}
                </p>

                {/* Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#f5a623]/50 rounded-2xl transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
