import { useEffect } from "react";
import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ChevronRight } from "lucide-react";
import { useProposalModal } from "../components/ProposalModalContext";
import { getProductDetailById } from "../../data/products-detail";

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openProposalModal } = useProposalModal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <span className="absolute top-5 left-5 bg-[#f5a623] text-[#002444] px-3 py-1.5 rounded text-xs uppercase font-bold tracking-wider">
                  {product.subtitle}
                </span>
                <div className="absolute bottom-5 left-5 right-5 bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/10">
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">Imagem ilustrativa</p>
                  <p className="text-white/50 text-xs">Equipamento pode variar conforme configuração</p>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover relative z-10"
                />
              </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#1a3a5c] to-[#0d2137] rounded-2xl p-10 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-8">
              Comunicação Industrial
            </h3>
            
            <div className="mb-8">
              <p className="text-sm text-[#f5a623] uppercase tracking-[0.2em] mb-4 font-semibold">
                Disponível
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {product.comunicacao.disponivel.map((item, index) => (
                  <span 
                    key={index} 
                    className="px-5 py-3 bg-white/15 backdrop-blur-sm rounded-xl text-sm font-medium text-white border border-white/20 hover:bg-white/25 hover:border-white/30 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {product.comunicacao.possibilidade.length > 0 && (
              <div>
                <p className="text-sm text-white/40 uppercase tracking-[0.15em] mb-4">
                  Sob Consulta
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {product.comunicacao.possibilidade.map((item, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-white/5 rounded-lg text-sm text-white/50 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

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
                        src={relProduct.relatedImage}
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
