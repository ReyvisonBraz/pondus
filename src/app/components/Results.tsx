import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Network, Code, Link2 } from "lucide-react";

const protocols = [
  "Modbus TCP",
  "EtherNet/IP",
  "Profinet",
  "OPC UA",
  "CANopen"
];

export function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />

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
              Integração
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Integração com
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              Sistemas Industriais
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compatibilidade total com os principais protocolos do mercado
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {[
            {
              icon: Network,
              title: "Conectividade Total",
              description: "Integração completa com sistemas industriais existentes"
            },
            {
              icon: Code,
              title: "Protocolos Padrão",
              description: "Suporte aos principais protocolos do mercado"
            },
            {
              icon: Link2,
              title: "Comunicação Eficiente",
              description: "Troca de dados em tempo real com alta confiabilidade"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 md:p-10 rounded-3xl border-2 border-gray-200 hover:border-[#1a3a5c]/40 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, #1a3a5c08, transparent 60%)`
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex p-4 rounded-xl mb-6"
                  style={{ backgroundColor: `#1a3a5c15` }}
                >
                  <feature.icon className="w-8 h-8 text-[#1a3a5c]" />
                </motion.div>

                <h3 className="text-xl md:text-2xl text-[#1a3a5c] mb-3 leading-tight" style={{ fontWeight: 700 }}>
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Protocols Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-8 md:p-12 rounded-3xl border-2 border-gray-200 shadow-xl"
        >
          <h3 className="text-2xl text-[#1a3a5c] mb-8 text-center" style={{ fontWeight: 700 }}>
            Protocolos Suportados
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {protocols.map((protocol, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.08 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-200 hover:border-[#f5a623]/40 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-[#1a3a5c] text-center text-sm md:text-base" style={{ fontWeight: 600 }}>
                  {protocol}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Financiamento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="inline-block p-6 md:p-8 bg-gradient-to-br from-[#f5a623]/10 to-[#1a3a5c]/10 rounded-2xl border-2 border-[#f5a623]/30">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              <span style={{ fontWeight: 700 }} className="text-[#1a3a5c]">Financiamento disponível:</span> Equipamentos com possibilidade de financiamento via FINAME
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
