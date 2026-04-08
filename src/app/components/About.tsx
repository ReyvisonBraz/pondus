import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Cog, Award, Users } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentials = [
    {
      icon: Cog,
      title: "Equipamentos para operação contínua",
      description: "Robustez e confiabilidade para uso industrial"
    },
    {
      icon: Target,
      title: "Redução de interferência manual",
      description: "Automação que minimiza erros operacionais"
    },
    {
      icon: Award,
      title: "Integração com sistemas industriais",
      description: "Compatibilidade total com sua infraestrutura"
    },
    {
      icon: Users,
      title: "Soluções adaptadas à operação",
      description: "Projetos personalizados para cada necessidade"
    }
  ];

  return (
    <section id="quem-somos" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26, 58, 92, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
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
              Quem Somos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 md:mb-8 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Especialistas em Soluções
            <br />
            <span className="text-[#f5a623]">Para a Indústria</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              A Pondus é especializada no desenvolvimento e fabricação de soluções para pesagem, contagem e ensaque de materiais granulares, atendendo operações do agro e da indústria.
            </p>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Presente em diferentes segmentos, desenvolvemos equipamentos robustos e integráveis, atuando ao lado de empresas que precisam de mais controle, eficiência e confiabilidade em seus processos industriais.
            </p>
          </div>
        </motion.div>

        {/* Diferenciais Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-24">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-white p-6 md:p-8 rounded-2xl border-2 border-gray-200 hover:border-[#1a3a5c]/40 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a5c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-10 h-10 text-[#1a3a5c] mb-4" />
                </motion.div>
                <h3 className="text-base md:text-lg text-[#1a3a5c] mb-2 leading-tight" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="absolute -bottom-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f5a623] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Missão, Visão, Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Missão */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl text-[#1a3a5c] mb-4" style={{ fontWeight: 700 }}>
              Missão
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Desenvolver soluções que aumentem o controle e a eficiência dos processos industriais, com foco em qualidade, confiabilidade e desempenho operacional.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl text-[#1a3a5c] mb-4" style={{ fontWeight: 700 }}>
              Visão
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ser referência em soluções de pesagem, contagem e ensaque para materiais granulares no agro e na indústria.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 shadow-lg">
            <h3 className="text-2xl text-[#1a3a5c] mb-4" style={{ fontWeight: 700 }}>
              Valores
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">Compromisso com a qualidade</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">Foco no resultado do cliente</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">Confiabilidade nos processos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">Evolução contínua das soluções</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#f5a623] rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">Parceria com o cliente</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-[#1a3a5c]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-[#f5a623]/30 to-transparent" />
    </section>
  );
}
