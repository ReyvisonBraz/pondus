import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Scale, Gauge, PackageCheck, Package, Boxes, ArrowRight } from "lucide-react";
import { GlowButton } from "./ui/glow-button";

const products = [
  {
    id: "pcsl-22000",
    icon: PackageCheck,
    name: "Contadora de Sementes PCSL 22000",
    description: "Controle e padronização de lotes com redução de falhas operacionais",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80"
  },
  {
    id: "pebbag-1500",
    icon: Boxes,
    name: "Ensacadeira Big-Bags PEBBAG 1500",
    description: "Automação no ensaque com ganho de produtividade",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"
  },
  {
    id: "pevps-2060",
    icon: Package,
    name: "Ensacadeira de Sopro PEVPS 2060",
    description: "Eficiência no ensaque com melhor desempenho operacional",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
  },
  {
    id: "pfd-30t",
    icon: Gauge,
    name: "Balança de Fluxo PFD 30T",
    description: "Controle contínuo do fluxo com estabilidade na operação",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
  },
  {
    id: "pebe-2000",
    icon: Scale,
    name: "Ensacadeira Dosadora PEBE2000",
    description: "Controle da dosagem com maior estabilidade no processo",
    color: "#1a3a5c",
    bgColor: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
  },
  {
    id: "peved-2060",
    icon: PackageCheck,
    name: "Ensacadeira Eletrônica PEVED 2060",
    description: "Versatilidade no ensaque para diferentes aplicações",
    color: "#f5a623",
    bgColor: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80"
  }
];

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="solucoes" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div ref={ref} className="relative max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-[#f5a623] tracking-[0.2em] uppercase text-xs font-semibold">
            Soluções Pondus
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1a3a5c] mt-2 font-bold tracking-tight">
            Nossas <span className="text-[#f5a623]">Soluções</span>
          </h2>
        </motion.div>

        {/* Products Grid - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              onClick={() => navigate(`/produto/${product.id}`)}
              className="group flex gap-4 p-3 rounded-xl border border-gray-100 hover:border-[#f5a623]/30 bg-white hover:bg-[#f5a623]/5 cursor-pointer transition-all duration-200"
            >
              {/* Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span 
                    className="text-[8px] font-bold tracking-widest uppercase px-2 py-0.5 rounded text-white"
                    style={{ backgroundColor: product.bgColor, fontFamily: "'DM Mono', monospace" }}
                  >
                    {product.name.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#1a3a5c] leading-tight mb-1 line-clamp-1" style={{ fontFamily: "'Barlow Condensed', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 leading-snug line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-1 mt-2 text-[#f5a623]">
                  <span className="text-[10px] font-medium uppercase tracking-wide">Ver detalhes</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center"
        >
          <GlowButton
            label="Ver todas as soluções"
            variant="primary"
            onClick={() => navigate('/solucoes')}
            className="text-xs px-6 py-3"
          />
        </motion.div>
      </div>
    </section>
  );
}
