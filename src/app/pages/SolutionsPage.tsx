import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Scale, Gauge, PackageCheck, Package, Boxes, CheckCircle, TrendingUp, Zap, ArrowRight, ChevronLeft, ChevronRight, Hand } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Contact } from "../components/Contact";
import { GlowButton } from "../components/ui/glow-button";

const products = [
  {
    id: "pcsl-22000",
    icon: PackageCheck,
    name: "Contadora de Sementes PCSL 22000",
    tagline: "Precisão que transforma sua produção",
    description: "Sistema de contagem de alta precisão para sementes e grãos. Elimina falhas operacionais e garante padronização completa dos lotes.",
    features: ["Contagem precisa por lote", "Redução de retrabalho", "Interface intuitiva", "Relatórios em tempo real"],
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    badge: "Mais Vendida"
  },
  {
    id: "pebbag-1500",
    icon: Boxes,
    name: "Ensacadeira Big-Bags PEBBAG 1500",
    tagline: "Automação que acelera sua expedição",
    description: "Ensacadeira automática para big-bags com ganho de produtividade de até 40%. Integração direta com linhas de produção existentes.",
    features: ["Capacidade de 500kg a 2000kg", "Velocidade de até 120 big-bags/hora", "Calibragem automática", "Sistema de pesagem integrado"],
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    badge: null
  },
  {
    id: "pevps-2060",
    icon: Package,
    name: "Ensacadeira de Sopro PEVPS 2060",
    tagline: "Eficiência em cada sopro",
    description: "Sistema de ensaque por sopro para sacos valvulados. Maximiza a eficiência operacional com controle preciso de peso.",
    features: [" وزن دقيق لكل كيس", "Velocidade ajustável", "Baixo consumo de energia", "Manutenção simplificada"],
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
    badge: null
  },
  {
    id: "pfd-30t",
    icon: Gauge,
    name: "Balança de Fluxo PFD 30T",
    tagline: "Controle contínuo, estabilidade total",
    description: "Balança de fluxo para sementes e grãos com controle contínuo. Estabilidade operacional 24/7 com monitoramento remoto.",
    features: ["Capacidade de 30 toneladas/hora", "Precisão de ±0.1%", "Monitoramento remoto", "Alertas automáticos"],
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    badge: "Novo"
  },
  {
    id: "pebe-2000",
    icon: Scale,
    name: "Ensacadeira Big-Bags PEBE2000",
    tagline: "Dosagem inteligente, resultados consistentes",
    description: "Ensacadeira com dosagem automática para big-bags. Controle preciso da dosagem com estabilidade superior no processo.",
    features: ["Dosagem automática adaptativa", "Estabilidade superior", "Integração com CLP", "Relatórios de produção"],
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    badge: null
  },
  {
    id: "peved-2060",
    icon: PackageCheck,
    name: "Ensacadeira PEVED 2060",
    tagline: "Versatilidade que se adapta ao seu negócio",
    description: "Ensacadeira eletrônica de múltiplas aplicações. Versatilidade operacional para diferentes tipos de sacos e materiais.",
    features: ["Múltiplos formatos de saco", "Troca rápida de matriz", "Painel touch screen", "Conexão USB para dados"],
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&q=80",
    badge: null
  }
];

function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const IconComponent = products[current].icon;
  
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleInteraction = (action: () => void) => {
    action();
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStart(clientX);
  };

  const handleDragEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStart === null) return;
    const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart - clientX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleInteraction(() => setCurrent((prev) => (prev + 1) % products.length));
      } else {
        handleInteraction(() => setCurrent((prev) => (prev - 1 + products.length) % products.length));
      }
    }
    setDragStart(null);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[600px] rounded-2xl md:rounded-3xl overflow-hidden select-none"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseLeave={() => setDragStart(null)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img
            src={products[current].image}
            alt={products[current].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/40" />
          
          <div className="absolute inset-0 flex flex-col justify-end pb-20 sm:pb-24 md:pb-28 px-6 sm:px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="max-w-xl"
            >
              {products[current].badge && (
                <span className="inline-block px-3 py-1 text-xs font-bold text-white bg-[#f5a623] rounded-full mb-3 sm:mb-4">
                  {products[current].badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight" style={{ fontWeight: 800 }}>
                {products[current].name}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-3 sm:mb-4 font-medium" style={{ color: '#f5a623' }}>
                {products[current].tagline}
              </p>
              <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 max-w-lg hidden sm:block line-clamp-2">
                {products[current].description}
              </p>
              <div className="hidden sm:flex flex-wrap gap-2 mb-4 sm:mb-6">
                {products[current].features.slice(0, 3).map((feat, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    {feat}
                  </span>
                ))}
              </div>
              <GlowButton
                label="Ver detalhes"
                variant="primary"
                onClick={() => navigate(`/produto/${products[current].id}`)}
              />
            </motion.div>
          </div>

          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ backgroundColor: `${products[current].color}E6` }}
            >
              {IconComponent && <IconComponent className="w-4 h-4 text-white" />}
              <span className="text-xs sm:text-sm font-semibold text-white">{products[current].name.split(' ')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              {isPaused && (
                <span className="px-3 py-1 text-xs text-white bg-black/40 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Hand className="w-3 h-3" />
                  </motion.div>
                  Arraste
                </span>
              )}
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
            <button
              onClick={() => handleInteraction(() => setCurrent((prev) => (prev - 1 + products.length) % products.length))}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md">
              <span className="text-white/60 text-xs">{current + 1}/{products.length}</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleInteraction(() => setCurrent(idx))}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === current ? 'w-6 sm:w-8 bg-[#f5a623]' : 'w-2 bg-white/40 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => handleInteraction(() => setCurrent((prev) => (prev + 1) % products.length))}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ProductCard({ product, index, isInView }: { product: typeof products[0]; index: number; isInView: boolean }) {
  const navigate = useNavigate();
  const IconComponent = product.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={() => navigate(`/produto/${product.id}`)}
      whileHover={{ y: -4 }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative h-56 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {product.badge && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-bold text-white bg-[#1a3a5c] rounded-full">
                {product.badge}
              </span>
            </div>
          )}

          <div className="absolute top-4 left-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
              style={{ backgroundColor: `${product.color}E6` }}
            >
              {IconComponent && <IconComponent className="w-4 h-4 text-white" />}
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-bold text-white leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.tagline}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color }} />
              <span className="text-xs text-gray-500 uppercase tracking-wide">Ver detalhes</span>
            </div>
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1a3a5c]/10 group-hover:bg-[#1a3a5c] transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4 text-[#1a3a5c] group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at bottom right, ${product.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export function SolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <section className="relative py-16 md:py-24 bg-[#fafaf9] overflow-hidden">
        <div ref={ref} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <div className="inline-block mb-4">
              <span className="text-[#f5a623] tracking-[0.2em] uppercase text-xs md:text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
                Soluções Completas
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-4 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
              Todas as Nossas
              <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent"> Soluções</span>
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologias que transformam operações industriais em resultados concretos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeaturedCarousel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 md:mt-20"
          >
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 md:h-10 bg-gradient-to-b from-[#f5a623] to-[#1a3a5c] rounded-full" />
                <h2 className="text-xl sm:text-2xl md:text-3xl text-[#1a3a5c]" style={{ fontWeight: 700 }}>
                  Nossas Soluções
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#f5a623]" />
                <span>6 produtos</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} isInView={isInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <div className="relative bg-[#1a3a5c] rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl text-white mb-3" style={{ fontWeight: 700 }}>
                    Precisa de ajuda para escolher?
                  </h3>
                  <p className="text-white/80 max-w-md">
                    Nossa equipe de especialistas está pronta para indicar a melhor solução para sua operação
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <GlowButton
                    label="Falar com especialista"
                    variant="secondary"
                    onClick={() => navigate('/contato')}
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/produto/pcsl-22000')}
                    className="px-6 py-3 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
                  >
                    Ver produto destaque
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Contact />
    </>
  );
}
