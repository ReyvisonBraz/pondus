import { useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PackageCheck, Boxes, Package, Gauge, Scale, ArrowRight, Filter } from "lucide-react";

const products = [
  {
    id: "pcsl-22000",
    icon: PackageCheck,
    name: "Contadora de Sementes PCSL 22000",
    category: "Contagem",
    description: "Controle e padronização de lotes com redução de falhas operacionais",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    badge: "Mais vendido"
  },
  {
    id: "pebbag-1500",
    icon: Boxes,
    name: "Ensacadeira Eletrônica Automática para Big-Bags PEBBAG 1500",
    category: "Ensacadeiras",
    description: "Automação no ensaque com ganho de produtividade e padronização",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    badge: "Novo"
  },
  {
    id: "pevps-2060",
    icon: Package,
    name: "Ensacadeira Eletrônica de Sopro para Sacos Valvulados PEVPS 2060",
    category: "Ensacadeiras",
    description: "Eficiência no ensaque com melhor desempenho operacional",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    badge: null
  },
  {
    id: "pfd-30t",
    icon: Gauge,
    name: "Balança de Fluxo para Sementes e Grãos PFD 30T",
    category: "Pesagem",
    description: "Controle contínuo do fluxo com estabilidade na operação",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    badge: null
  },
  {
    id: "pebe-2000",
    icon: Scale,
    name: "Ensacadeira Eletrônica com Dosagem Automática para Big-Bags PEBE2000",
    category: "Ensacadeiras",
    description: "Controle da dosagem com maior estabilidade no processo",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    badge: null
  },
  {
    id: "peved-2060",
    icon: PackageCheck,
    name: "Ensacadeira Eletrônica PEVED 2060",
    category: "Ensacadeiras",
    description: "Versatilidade no ensaque para diferentes aplicações",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    badge: null
  }
];

const categories = ["Todos", "Contagem", "Ensacadeiras", "Pesagem"];
const tags = ["Sementes", "Big-Bags", "Fluxo contínuo", "Automação", "Dosagem"];

export function ProductsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredProducts = products.filter(product => {
    if (activeCategory !== "Todos" && product.category !== activeCategory) return false;
    return true;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <>
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(26, 58, 92, 0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(26, 58, 92, 0.15) 1px, transparent 1px)`,
            backgroundSize: '64px 64px'
          }} />
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-24"
          >
            <div className="inline-block mb-4">
              <span className="text-[#f5a623] tracking-[0.3em] uppercase text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
                Catálogo
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
              Nossos
              <br />
              <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
                Produtos
              </span>
            </h1>
            <div className="w-20 h-1 bg-[#f5a623] mx-auto" />
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-14 items-start">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full lg:w-56 flex-shrink-0 sticky top-28"
            >
              <div className="bg-[#f6f7f8] rounded-xl p-6 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-[#1a3a5c] font-bold text-xs tracking-[0.26em] uppercase pb-3 border-b border-[#1a3a5c]/10 mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Categorias
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer group">
                        <div
                          className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${activeCategory === category
                              ? "border-[#f5a623] bg-[#f5a623]"
                              : "border-gray-300 group-hover:border-[#f5a623]"
                            }`}
                          onClick={() => setActiveCategory(category)}
                        >
                          {activeCategory === category && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium tracking-[0.06em] uppercase transition-colors ${activeCategory === category ? "text-[#1a3a5c]" : "text-gray-500 group-hover:text-[#1a3a5c]"
                            }`}
                        >
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[#1a3a5c] font-bold text-xs tracking-[0.26em] uppercase pb-3 border-b border-[#1a3a5c]/10 mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-2 rounded text-[8px] tracking-[0.16em] uppercase transition-all border ${
                          selectedTags.includes(tag)
                            ? "bg-[#f5a623]/12 text-[#1a3a5c] border-[#f5a623]/30"
                            : "bg-gray-200/50 text-gray-500 border-transparent hover:bg-[#f5a623]/12 hover:text-[#1a3a5c]"
                        }`}
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    onClick={() => navigate(`/produto/${product.id}`)}
                    className="group relative bg-white border border-gray-100 hover:border-[#f5a623]/50 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#f6f7f8] to-[#e0e4e8]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 right-3 bg-[#1a3a5c]/85 text-white px-2 py-1 rounded text-[7px] tracking-[0.18em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {product.badge}
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold text-[#1a3a5c] mb-2 leading-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-5">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#1a3a5c] text-[9px] tracking-[0.2em] uppercase font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                        Ver detalhes
                        <ArrowRight className="w-3.5 h-3.5 text-[#f5a623]" />
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f5a623] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
