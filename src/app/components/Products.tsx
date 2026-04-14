import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlowButton } from "./ui/glow-button";
import { products, getEnsacadeiras, getBalancas, getContadoras, getIconByName } from "../../data/products";

function ProductCard({ product, index, isInView }: { product: typeof products[0]; index: number; isInView: boolean }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-white rounded-2xl border-2 border-gray-200 hover:border-transparent overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
      whileHover={{ y: -4, scale: 1.01 }}
      onClick={() => navigate(`/produto/${product.id}`)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-4 right-4">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="inline-flex p-3 rounded-xl backdrop-blur-sm"
              style={{ backgroundColor: `${product.color}90` }}
            >
              {(() => {
                const Icon = getIconByName(product.iconName);
                return <Icon className="w-6 h-6 text-white" />;
              })()}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="p-8">
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${product.color}08, transparent 70%)`
          }}
        />

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            border: `2px solid ${product.color}80`
          }}
        />

        <h3 className="text-lg md:text-xl text-[#1a3a5c] mb-3 leading-tight relative z-10" style={{ fontWeight: 700 }}>
          {product.name}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base relative z-10">
          {product.shortDescription}
        </p>

        <div
          className="absolute bottom-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at bottom right, ${product.color}, transparent)`
          }}
        />
      </div>
    </motion.div>
  );
}

export function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const ensacadeiras = getEnsacadeiras();
  const balancas = getBalancas();
  const contadoras = getContadoras();

  let globalIndex = 0;

  return (
    <section id="solucoes" className="relative py-24 md:py-32 bg-white overflow-hidden">
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
              Soluções Pondus
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Nossas
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              Soluções
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As soluções Pondus atuam em diferentes etapas do processo industrial, garantindo controle, padronização e eficiência operacional
          </p>
        </motion.div>

        {/* Ensacadeiras Section */}
        {ensacadeiras.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 md:mb-24"
          >
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1a3a5c] mb-4 tracking-tight" style={{ fontWeight: 800 }}>
                Nossas
                <span className="text-[#f5a623]"> Ensacadeiras</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Equipamentos para pesagem e embalagem de produtos a granel com precisão e eficiência
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {ensacadeiras.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={globalIndex++}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Balancas Section */}
        {balancas.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 md:mb-24"
          >
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1a3a5c] mb-4 tracking-tight" style={{ fontWeight: 800 }}>
                Nossas
                <span className="text-[#f5a623]"> Balanças</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Balanças de fluxo e expedição para medição precisa em processos industriais
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {balancas.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={globalIndex++}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Contadoras Section */}
        {contadoras.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 md:mb-24"
          >
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl text-[#1a3a5c] mb-4 tracking-tight" style={{ fontWeight: 800 }}>
                Nossas
                <span className="text-[#f5a623]"> Contadoras</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Contagem de sementes com tecnologia de imagem e alta precisão
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {contadoras.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={globalIndex++}
                  isInView={isInView}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center pt-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GlowButton
              label="Ver todas as soluções"
              variant="primary"
              onClick={() => {
                navigate('/solucoes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
