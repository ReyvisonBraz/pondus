import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { AlertCircle, CheckCircle, TrendingUp, Link, Zap } from "lucide-react";

const benefits = [
  {
    icon: AlertCircle,
    title: "Redução de falhas e retrabalho",
    description: "Minimização de erros operacionais e otimização de recursos"
  },
  {
    icon: CheckCircle,
    title: "Padronização dos lotes e da expedição",
    description: "Uniformidade e qualidade em todas as etapas do processo"
  },
  {
    icon: TrendingUp,
    title: "Mais controle sobre a operação",
    description: "Visibilidade total e gestão eficiente dos processos"
  },
  {
    icon: Link,
    title: "Integração com sistemas já existentes",
    description: "Compatibilidade total com sua infraestrutura atual"
  },
  {
    icon: Zap,
    title: "Ganho de produtividade no processo",
    description: "Otimização e aceleração das operações industriais"
  }
];

export function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#1a3a5c" />
              <circle cx="90" cy="90" r="2" fill="#f5a623" />
              <line x1="10" y1="10" x2="50" y2="10" stroke="#1a3a5c" strokeWidth="0.5" />
              <line x1="50" y1="10" x2="90" y2="90" stroke="#f5a623" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
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
              Benefícios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Benefícios
            <br />
            <span className="text-[#f5a623]">Operacionais</span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-[#1a3a5c]/40 transition-all duration-300 h-full shadow-lg hover:shadow-2xl">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/0 to-[#f5a623]/0 group-hover:from-[#1a3a5c]/5 group-hover:to-[#f5a623]/5 rounded-2xl transition-all duration-300" />

                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="relative mb-6"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-[#1a3a5c]/10 to-[#f5a623]/10 rounded-xl group-hover:from-[#1a3a5c]/20 group-hover:to-[#f5a623]/20 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-[#1a3a5c] group-hover:text-[#f5a623] transition-colors duration-300" />
                  </div>

                  {/* Icon Glow */}
                  <div className="absolute inset-0 bg-[#f5a623]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <h3 className="text-lg md:text-xl text-[#1a3a5c] mb-3 leading-tight" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Connecting Dots */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="absolute -top-2 -left-2 w-4 h-4 bg-[#f5a623] rounded-full opacity-70"
                style={{
                  boxShadow: '0 0 20px rgba(245, 166, 35, 0.6)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
