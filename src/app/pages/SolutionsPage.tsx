import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Hand, ArrowRight, Package, Boxes, Gauge, PackageCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Contact } from "../components/Contact";
import { GlowButton } from "../components/ui/glow-button";
import { products, getEnsacadeiras, getBalancas, getContadoras, type Product } from "../../data/products";

/* ─── Featured Carousel ──────────────────────────────── */

function FeaturedCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const currentProduct = products[current];

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
            src={currentProduct.image}
            alt={currentProduct.name}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 sm:mb-3 leading-tight" style={{ fontWeight: 800 }}>
                {currentProduct.name}
              </h2>
              <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 max-w-lg line-clamp-2">
                {currentProduct.description}
              </p>
              <GlowButton
                label="Ver detalhes"
                variant="primary"
                onClick={() => navigate(`/produto/${currentProduct.id}`)}
              />
            </motion.div>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-2">
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

/* ─── Product Card ────────────────────────────────────── */

function ProductCard({ product, index, isInView }: { product: Product; index: number; isInView: boolean }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group relative cursor-pointer"
      onClick={() => navigate(`/produto/${product.id}`)}
      whileHover={{ y: -4 }}
    >
      <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        <div className="relative h-52 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg font-bold text-white leading-tight">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Ver detalhes</span>
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1a3a5c]/10 group-hover:bg-[#1a3a5c] transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-[#1a3a5c] group-hover:text-white transition-colors duration-300" />
            </div>
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

/* ─── Category Section ────────────────────────────────── */

interface CategorySectionProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  products: Product[];
  isInView: boolean;
  delay: number;
  startIndex: number;
}

function CategorySection({ icon, title, subtitle, description, accentColor, products: sectionProducts, isInView, delay, startIndex }: CategorySectionProps) {
  if (sectionProducts.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="mb-20"
    >
      {/* Category header */}
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 mb-8">
        <div className="flex items-center gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${accentColor}15` }}
          >
            {icon}
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl text-[#1a3a5c] tracking-tight leading-tight" style={{ fontWeight: 800 }}>
              {title}
            </h3>
            <span
              className="text-xs uppercase tracking-[0.2em] mt-1 inline-block"
              style={{ color: accentColor, fontFamily: "'DM Mono', monospace", fontWeight: 600 }}
            >
              {subtitle}
            </span>
          </div>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent hidden sm:block" />
        <p className="text-sm text-gray-500 max-w-xs sm:text-right">
          {description}
        </p>
      </div>

      {/* Product grid */}
      <div className={`grid grid-cols-1 gap-5 ${
        sectionProducts.length === 1 ? 'sm:grid-cols-1 max-w-md' :
        sectionProducts.length === 2 ? 'sm:grid-cols-2' :
        sectionProducts.length <= 4 ? 'sm:grid-cols-2 lg:grid-cols-3' :
        'sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {sectionProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={startIndex + idx}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Solutions Page ──────────────────────────────────── */

export function SolutionsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const ensacadeiras = getEnsacadeiras();
  const balancas = getBalancas();
  const contadoras = getContadoras();

  // Split ensacadeiras into sub-groups for visual clarity
  const ensacadeirasSaco = ensacadeiras.filter(p =>
    !p.id.includes('big-bag') && p.id !== 'big-bag'
  );
  const ensacadeirasBigBag = ensacadeiras.filter(p =>
    p.id.includes('big-bag') || p.id === 'big-bag'
  );

  let idx = 0;

  return (
    <>
      <section className="relative py-16 md:py-24 bg-[#fafaf9] overflow-hidden">
        <div ref={ref} className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Page Header */}
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

          {/* Featured Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FeaturedCarousel />
          </motion.div>

          {/* Category Sections */}
          <div className="mt-16 md:mt-24">
            {/* Summary bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 mb-12 md:mb-16 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#f5a623]" />
                <span className="text-sm text-gray-600">
                  <strong className="text-[#1a3a5c]">{ensacadeiras.length}</strong> Ensacadeiras
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#1a3a5c]" />
                <span className="text-sm text-gray-600">
                  <strong className="text-[#1a3a5c]">{balancas.length}</strong> Balanças
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#2d7d6b]" />
                <span className="text-sm text-gray-600">
                  <strong className="text-[#1a3a5c]">{contadoras.length}</strong> Contadoras
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>
                {products.length} produtos no total
              </span>
            </motion.div>

            {/* Ensacadeiras para Sacaria */}
            <CategorySection
              icon={<Package className="w-6 h-6 text-[#f5a623]" />}
              title="Ensacadeiras para Sacaria"
              subtitle={`${ensacadeirasSaco.length} modelos`}
              description="Soluções para pesagem e ensaque em sacos valvulados e de boca aberta"
              accentColor="#f5a623"
              products={ensacadeirasSaco}
              isInView={isInView}
              delay={0.4}
              startIndex={idx}
            />
            {(() => { idx += ensacadeirasSaco.length; return null; })()}

            {/* Ensacadeiras para Big-Bag */}
            <CategorySection
              icon={<Boxes className="w-6 h-6 text-[#f5a623]" />}
              title="Ensacadeiras para Big-Bag"
              subtitle={`${ensacadeirasBigBag.length} modelos`}
              description="Equipamentos para grandes volumes com precisão e automação"
              accentColor="#f5a623"
              products={ensacadeirasBigBag}
              isInView={isInView}
              delay={0.5}
              startIndex={idx}
            />
            {(() => { idx += ensacadeirasBigBag.length; return null; })()}

            {/* Balanças */}
            <CategorySection
              icon={<Gauge className="w-6 h-6 text-[#1a3a5c]" />}
              title="Balanças Industriais"
              subtitle={`${balancas.length} modelos`}
              description="Medição precisa de fluxo e controle de expedição"
              accentColor="#1a3a5c"
              products={balancas}
              isInView={isInView}
              delay={0.6}
              startIndex={idx}
            />
            {(() => { idx += balancas.length; return null; })()}

            {/* Contadoras */}
            <CategorySection
              icon={<PackageCheck className="w-6 h-6 text-[#2d7d6b]" />}
              title="Contadoras de Sementes"
              subtitle={`${contadoras.length} modelo`}
              description="Contagem por imagem com precisão de 99,9%"
              accentColor="#2d7d6b"
              products={contadoras}
              isInView={isInView}
              delay={0.7}
              startIndex={idx}
            />
          </div>

        </div>
      </section>

      <Contact />
    </>
  );
}
