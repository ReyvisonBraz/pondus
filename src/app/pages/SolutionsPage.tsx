import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Scale, Gauge, PackageCheck, Package, Boxes, CheckCircle, TrendingUp, AlertCircle, Link as LinkIcon, Zap } from "lucide-react";
import { Contact } from "../components/Contact";

const products = [
  {
    icon: PackageCheck,
    name: "Contadora de Sementes PCSL 22000",
    description: "Controle e padronização de lotes com redução de falhas operacionais",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    benefits: [
      { icon: AlertCircle, text: "Redução de falhas e retrabalho" },
      { icon: CheckCircle, text: "Padronização dos lotes" },
      { icon: TrendingUp, text: "Mais controle sobre a operação" }
    ]
  },
  {
    icon: Boxes,
    name: "Ensacadeira Eletrônica Automática para Big-Bags PEBBAG 1500",
    description: "Automação no ensaque com ganho de produtividade e padronização",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    benefits: [
      { icon: Zap, text: "Ganho de produtividade" },
      { icon: CheckCircle, text: "Padronização da expedição" },
      { icon: LinkIcon, text: "Integração com sistemas existentes" }
    ]
  },
  {
    icon: Package,
    name: "Ensacadeira Eletrônica de Sopro para Sacos Valvulados PEVPS 2060",
    description: "Eficiência no ensaque com melhor desempenho operacional",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    benefits: [
      { icon: Zap, text: "Ganho de produtividade" },
      { icon: AlertCircle, text: "Redução de falhas" },
      { icon: TrendingUp, text: "Melhor desempenho operacional" }
    ]
  },
  {
    icon: Gauge,
    name: "Balança de Fluxo para Sementes e Grãos PFD 30T",
    description: "Controle contínuo do fluxo com estabilidade na operação",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    benefits: [
      { icon: TrendingUp, text: "Controle contínuo do fluxo" },
      { icon: CheckCircle, text: "Estabilidade na operação" },
      { icon: LinkIcon, text: "Integração com sistemas" }
    ]
  },
  {
    icon: Scale,
    name: "Ensacadeira Eletrônica com Dosagem Automática para Big-Bags PEBE2000",
    description: "Controle da dosagem com maior estabilidade no processo",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    benefits: [
      { icon: TrendingUp, text: "Controle preciso da dosagem" },
      { icon: CheckCircle, text: "Estabilidade no processo" },
      { icon: Zap, text: "Automação completa" }
    ]
  },
  {
    icon: PackageCheck,
    name: "Ensacadeira Eletrônica PEVED 2060",
    description: "Versatilidade no ensaque para diferentes aplicações",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    benefits: [
      { icon: Zap, text: "Versatilidade operacional" },
      { icon: AlertCircle, text: "Redução de retrabalho" },
      { icon: LinkIcon, text: "Compatibilidade total" }
    ]
  }
];

export function SolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(26, 58, 92, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(26, 58, 92, 0.15) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
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
                Soluções Completas
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
              Todas as Nossas
              <br />
              <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
                Soluções
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Conheça em detalhes todas as soluções Pondus e seus benefícios operacionais para sua indústria
            </p>
          </motion.div>

          {/* Products List with Benefits */}
          <div className="space-y-12 md:space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Border Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    border: `2px solid ${product.color}80`
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon on Image */}
                    <div className="absolute top-6 right-6">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="inline-flex p-4 rounded-xl backdrop-blur-sm"
                          style={{ backgroundColor: `${product.color}90` }}
                        >
                          <product.icon
                            className="w-8 h-8 text-white"
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${product.color}08, transparent 70%)`
                      }}
                    />

                    <h2 className="text-2xl md:text-3xl text-[#1a3a5c] mb-4 leading-tight relative z-10" style={{ fontWeight: 700 }}>
                      {product.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg relative z-10 mb-6">
                      {product.description}
                    </p>

                    {/* Benefits Section */}
                    <div className="relative z-10">
                      <h3 className="text-lg font-semibold mb-4" style={{ color: product.color }}>
                        Benefícios Operacionais
                      </h3>
                      <div className="space-y-4">
                        {product.benefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ x: -10, opacity: 0 }}
                            animate={isInView ? { x: 0, opacity: 1 } : {}}
                            transition={{ delay: (index * 0.1) + (idx * 0.1) }}
                            className="flex items-start gap-4"
                          >
                            <div
                              className="p-3 rounded-lg flex-shrink-0"
                              style={{ backgroundColor: `${product.color}15` }}
                            >
                              <benefit.icon
                                className="w-5 h-5"
                                style={{ color: product.color }}
                              />
                            </div>
                            <p
                              className="text-base leading-relaxed pt-2"
                              style={{ color: product.color }}
                            >
                              {benefit.text}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${product.color}, transparent)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
