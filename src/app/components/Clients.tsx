import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder para logos de clientes - você pode substituir por logos reais
  const clients = Array(8).fill(null).map((_, i) => ({
    id: i,
    name: `Cliente ${i + 1}`
  }));

  return (
    <section id="clientes" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26, 58, 92, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-[#f5a623] tracking-[0.3em] uppercase text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
              Clientes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Empresas que Confiam
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              na Pondus
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que utilizam soluções Pondus em suas operações industriais
          </p>
        </motion.div>

        {/* Clients Grid - Animated Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: [0, -1000]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
          >
            {/* Double the array for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#f5a623]/40 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="w-32 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm" style={{ fontWeight: 600 }}>
                      {client.name}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          Adicione os logos dos seus clientes para exibição aqui
        </motion.p>
      </div>
    </section>
  );
}
