import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Scale, Gauge, PackageCheck, Package, Boxes, CheckCircle, TrendingUp, AlertCircle, Link as LinkIcon, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Contact } from "../components/Contact";

const products = [
  {
    id: "pcsl-22000",
    icon: PackageCheck,
    name: "Contadora de Sementes PCSL 22000",
    description: "Controle e padronização de lotes com redução de falhas operacionais",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
    benefits: [
      { icon: AlertCircle, text: "Redução de falhas e retrabalho" },
      { icon: CheckCircle, text: "Padronização dos lotes" },
      { icon: TrendingUp, text: "Mais controle sobre a operação" }
    ]
  },
  {
    id: "pebbag-1500",
    icon: Boxes,
    name: "Ensacadeira Big-Bags PEBBAG 1500",
    description: "Automação no ensaque com ganho de produtividade e padronização",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    benefits: [
      { icon: Zap, text: "Ganho de produtividade" },
      { icon: CheckCircle, text: "Padronização da expedição" },
      { icon: LinkIcon, text: "Integração com sistemas existentes" }
    ]
  },
  {
    id: "pevps-2060",
    icon: Package,
    name: "Ensacadeira de Sopro PEVPS 2060",
    description: "Eficiência no ensaque com melhor desempenho operacional",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    benefits: [
      { icon: Zap, text: "Ganho de produtividade" },
      { icon: AlertCircle, text: "Redução de falhas" },
      { icon: TrendingUp, text: "Melhor desempenho operacional" }
    ]
  },
  {
    id: "pfd-30t",
    icon: Gauge,
    name: "Balança de Fluxo PFD 30T",
    description: "Controle contínuo do fluxo com estabilidade na operação",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    benefits: [
      { icon: TrendingUp, text: "Controle contínuo do fluxo" },
      { icon: CheckCircle, text: "Estabilidade na operação" },
      { icon: LinkIcon, text: "Integração com sistemas" }
    ]
  },
  {
    id: "pebe-2000",
    icon: Scale,
    name: "Ensacadeira Dosadora PEBE2000",
    description: "Controle da dosagem com maior estabilidade no processo",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    benefits: [
      { icon: TrendingUp, text: "Controle preciso da dosagem" },
      { icon: CheckCircle, text: "Estabilidade no processo" },
      { icon: Zap, text: "Automação completa" }
    ]
  },
  {
    id: "peved-2060",
    icon: PackageCheck,
    name: "Ensacadeira Eletrônica PEVED 2060",
    description: "Versatilidade no ensaque para diferentes aplicações",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80",
    benefits: [
      { icon: Zap, text: "Versatilidade operacional" },
      { icon: AlertCircle, text: "Redução de retrabalho" },
      { icon: LinkIcon, text: "Compatibilidade total" }
    ]
  }
];

export function SolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div ref={ref} className="relative max-w-6xl mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="text-[#f5a623] tracking-[0.2em] uppercase text-xs font-semibold">
              Soluções Completas
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1a3a5c] mt-2 font-bold tracking-tight">
              Todas as Nossas <span className="text-[#f5a623]">Soluções</span>
            </h1>
            <p className="text-sm text-gray-500 mt-3 max-w-xl mx-auto">
              Conheça em detalhes todas as soluções Pondus e seus benefícios operacionais para sua indústria
            </p>
          </motion.div>

          {/* Products Grid - 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => navigate(`/produto/${product.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-[#f5a623]/30 hover:shadow-lg transition-all duration-200">
                  {/* Image Header */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <div 
                        className="p-2 rounded-lg backdrop-blur-sm"
                        style={{ backgroundColor: `${product.bgColor}cc` }}
                      >
                        <product.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <span 
                      className="absolute top-3 left-3 text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded text-white"
                      style={{ backgroundColor: product.bgColor, fontFamily: "'DM Mono', monospace" }}
                    >
                      {product.name.split(' ')[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h2 className="text-base font-bold text-[#1a3a5c] mb-2 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      {product.name}
                    </h2>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {product.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <benefit.icon className="w-3.5 h-3.5" style={{ color: product.color }} />
                          <span className="text-[11px] text-gray-600">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 mt-4 pt-3 border-t border-gray-100 text-[#f5a623]">
                      <span className="text-[10px] font-semibold uppercase tracking-wide">Ver detalhes</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
