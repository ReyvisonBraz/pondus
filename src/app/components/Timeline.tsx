import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Search, Pencil, Rocket, Link2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnóstico",
    description: "Análise completa dos processos e identificação de oportunidades de otimização"
  },
  {
    icon: Pencil,
    title: "Projeto Personalizado",
    description: "Desenvolvimento de solução sob medida para suas necessidades específicas"
  },
  {
    icon: Rocket,
    title: "Implementação",
    description: "Instalação e configuração de equipamentos com mínima interrupção operacional"
  },
  {
    icon: Link2,
    title: "Integração",
    description: "Conexão total com sistemas existentes via APIs e protocolos industriais"
  },
  {
    icon: Sparkles,
    title: "Otimização Contínua",
    description: "Monitoramento e ajustes para garantir máxima performance"
  }
];

export function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Radial Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(26, 58, 92, 0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
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
              Processo
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight" style={{ fontWeight: 800 }}>
            Como
            <br />
            <span className="text-[#f5a623]">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Metodologia estruturada para implementação de excelência
          </p>
        </motion.div>

        <div className="relative">
          {/* Progressive Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />

          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-[#1a3a5c] via-[#f5a623] to-[#1a3a5c]"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1a3a5c]/40 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-white"
                        style={{
                          background: `linear-gradient(135deg, #1a3a5c, #f5a623)`,
                          fontWeight: 800
                        }}
                      >
                        {index + 1}
                      </div>
                      <h3 className="text-2xl text-[#1a3a5c]" style={{ fontWeight: 700 }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 md:-translate-x-1/2"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#f5a623] flex items-center justify-center relative"
                    style={{
                      boxShadow: '0 0 30px rgba(245, 166, 35, 0.4)'
                    }}
                  >
                    <step.icon className="w-8 h-8 text-white" />

                    {/* Pulse Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#f5a623]"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
