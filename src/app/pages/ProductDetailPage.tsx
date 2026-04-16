import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon, Cpu, Wifi, Gauge, Target, Zap, Database } from "lucide-react";
import { useProposalModal } from "../components/ProposalModalContext";
import { getProductDetailById } from "../../data/products-detail";

const specIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Scale: Target,
  Target: Target,
  Timer: Gauge,
  Camera: Cpu,
  default: Zap
};

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openProposalModal } = useProposalModal();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentImageIndex(0);
  }, [id]);

  const product = id ? getProductDetailById(id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1a3a5c] mb-4">Produto não encontrado</h1>
          <button
            onClick={() => navigate('/solucoes')}
            className="text-[#f5a623] hover:underline"
          >
            Voltar para soluções
          </button>
        </div>
      </div>
    );
  }

  const hasMultipleImages = product.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <>
      <section className="bg-[#f6f7f8] min-h-screen">
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-[#1a3a5c] transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/solucoes" className="hover:text-[#1a3a5c] transition-colors">Soluções</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#1a3a5c] font-bold">{product.subtitle}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <motion.button
            onClick={() => navigate('/solucoes')}
            className="flex items-center gap-2 text-gray-500 hover:text-[#1a3a5c] transition-colors mb-8"
            whileHover={{ x: -4 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-xs uppercase tracking-wider">Voltar</span>
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-[#001e38] to-[#002f5a] rounded-xl overflow-hidden relative h-[460px] flex items-center justify-center">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(245,166,35,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.04) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
                <span className="absolute top-5 left-5 bg-[#f5a623] text-[#002444] px-3 py-1.5 rounded text-xs uppercase font-bold tracking-wider z-20">
                  {product.subtitle}
                </span>
                
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 z-20 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRightIcon className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}

                

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} - Imagem ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {hasMultipleImages && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? 'border-[#f5a623] shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {hasMultipleImages && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {currentImageIndex + 1} de {product.images.length}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-4">
                <span className="text-[#f5a623] text-xs uppercase tracking-widest font-medium">
                  Solução Pondus
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#1a3a5c] mb-4 leading-tight font-extrabold tracking-tight">
                {product.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#f5a623] mb-8 leading-tight font-bold">
                {product.subtitle}
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
                {product.description}
              </p>

              <div className="flex gap-4 mb-12">
                <button
                  onClick={openProposalModal}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f5a623] to-[#e8951a] text-[#002444] px-8 py-4 rounded font-bold text-xs uppercase tracking-wider hover:shadow-lg hover:shadow-[#f5a623]/30 transition-all hover:-translate-y-0.5"
                >
                  Solicitar Proposta
                </button>
                <button
                  onClick={() => navigate('/contato')}
                  className="inline-flex items-center gap-2 border border-[#1a3a5c]/20 text-[#1a3a5c] px-8 py-4 rounded text-xs uppercase tracking-wider hover:bg-[#1a3a5c] hover:text-white transition-all"
                >
                  Falar com Especialista
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#f6f7f8] py-12"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/4 flex justify-center">
                <img
                  src="/assets/images/finame-bndes.webp"
                  alt="FINAME BNDES"
                  className="h-20 object-contain"
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-xl text-[#1a3a5c] mb-3" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Financiamento de Máquinas e Equipamentos
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Equipamentos industriais financiados pelo <strong>BNDES FINAME</strong> com condições especiais: taxas competitivas, financiamento de até 100% do valor do equipamento, prazo de pagamento extensible e agilidade na aprovação do crédito.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f5a623]" />
                    <span className="text-xs text-gray-600" style={{ fontFamily: "'DM Mono', monospace" }}>Taxas competitivas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f5a623]" />
                    <span className="text-xs text-gray-600" style={{ fontFamily: "'DM Mono', monospace" }}>Até 100% do valor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#f5a623]" />
                    <span className="text-xs text-gray-600" style={{ fontFamily: "'DM Mono', monospace" }}>Parcelamento em até 10 anos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {product.specs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white py-16"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <h3 className="text-2xl text-[#1a3a5c] mb-8 font-bold tracking-tight uppercase">
                Especificações
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {product.specs.map((spec, index) => {
                  const IconComponent = specIcons[spec.iconName] || specIcons.default;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="group relative bg-gradient-to-br from-[#f6f7f8] to-white p-6 rounded-2xl border border-gray-200 hover:border-[#f5a623]/40 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="absolute top-4 right-4 w-10 h-10 bg-[#f5a623]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-[#f5a623]" />
                      </div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-medium">
                        {spec.label}
                      </p>
                      <p className="text-xl text-[#1a3a5c] font-bold leading-tight">
                        {spec.value}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {product.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#f6f7f8] py-16"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <h3 className="text-2xl text-[#1a3a5c] mb-8 font-bold tracking-tight uppercase">
                Principais Características
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.05 * index }}
                    className="group bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#f5a623]/30 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-8 h-8 bg-[#1a3a5c]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#f5a623]/20 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-[#1a3a5c] group-hover:text-[#f5a623] transition-colors duration-300" />
                    </div>
                    <h4 className="text-sm text-[#1a3a5c] font-bold mb-1 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {(product.comunicacao.disponivel.length > 0 || product.comunicacao.possibilidade.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="py-16"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="bg-gradient-to-br from-[#1a3a5c] via-[#0d2137] to-[#1a3a5c] rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(245,166,35,0.3) 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                  }} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-[#f5a623]/20 rounded-xl flex items-center justify-center">
                      <Wifi className="w-6 h-6 text-[#f5a623]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        Comunicação Industrial
                      </h3>
                      <p className="text-white/60 text-sm mt-1">
                        Integração com sistemas e protocolos industriais
                      </p>
                    </div>
                  </div>

                  {product.comunicacao.disponivel.length > 0 && (
                    <div className="mb-8">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <p className="text-[#f5a623] text-sm uppercase tracking-wider font-semibold">
                          Disponível Nativamente
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {product.comunicacao.disponivel.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10 hover:bg-white/20 hover:border-[#f5a623]/30 transition-all duration-300"
                          >
                            <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            </div>
                            <span className="text-white font-medium text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {product.comunicacao.possibilidade.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 bg-[#f5a623] rounded-full" />
                        <p className="text-white/40 text-sm uppercase tracking-wider font-semibold">
                          Sob Consulta
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {product.comunicacao.possibilidade.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="w-8 h-8 bg-[#f5a623]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Database className="w-4 h-4 text-[#f5a623]" />
                            </div>
                            <span className="text-white/70 font-medium text-sm">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl text-[#1a3a5c] mb-8 font-bold tracking-tight uppercase">
              Produtos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.relatedProducts.map((relId) => {
                const relProduct = getProductDetailById(relId);
                if (!relProduct) return null;
                return (
                  <motion.div
                    key={relId}
                    onClick={() => navigate(`/produto/${relId}`)}
                    whileHover={{ y: -4 }}
                    className="bg-[#f6f7f8] p-6 rounded-xl cursor-pointer border border-transparent hover:border-[#f5a623]/30 transition-all"
                  >
                    <div className="h-28 bg-gradient-to-br from-[#e0e4e8] to-[#f6f7f8] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <p className="text-xs text-[#f5a623] uppercase tracking-widest mb-1 font-mono">
                      {relProduct.subtitle}
                    </p>
                    <p className="text-sm font-bold text-[#1a3a5c] uppercase tracking-wide">
                      {relProduct.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
