import { useEffect } from "react";
import { motion } from "motion/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, TrendingUp, Zap, AlertCircle, ChevronRight } from "lucide-react";
import { useProposalModal } from "../components/ProposalModalContext";

const productsData: Record<string, {
  name: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  specs: { icon: typeof CheckCircle; label: string; value: string }[];
  features: { title: string; description: string }[];
  integrations: string[];
  relatedProducts: string[];
}> = {
  "pcsl-22000": {
    name: "Contadora de Sementes",
    subtitle: "PCSL 22000",
    description: "Sistema de controle e contagem de sementes com alta precisão, garantindo padronização de lotes e redução significativa de falhas operacionais. Ideal para sementeiras e agroindústrias que buscam excelência no processo de beneficiamento.",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "22.000 uds/h" },
      { icon: AlertCircle, label: "Precisão", value: "99,8%" },
      { icon: Zap, label: "Velocidade", value: "Alta" }
    ],
    features: [
      { title: "Contagem Automática", description: "Sistema automatizado que conta sementes com precisão superior a 99,8%, eliminando erros manuais." },
      { title: "Padronização de Lotes", description: "Garante lotes uniformes com quantidade exata, facilitando o controle de qualidade." },
      { title: "Redução de retrabalho", description: "Minimiza falhas operacionais e necessidade de correção, aumentando a eficiência." }
    ],
    integrations: ["ERP", "SAP", "Sistemas de gestão", "Balanças industriais"],
    relatedProducts: ["pebbag-1500", "pfd-30t", "peved-2060"]
  },
  "pebbag-1500": {
    name: "Ensacadeira Eletrônica Automática para Big-Bags",
    subtitle: "PEBBAG 1500",
    description: "Automação completa no ensaque de big-bags com ganho de produtividade e padronização perfeita. Sistema eletrônico de última geração para operações de médio e grande porte.",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "1.500 kg/h" },
      { icon: CheckCircle, label: "Precisão", value: "±0,5%" },
      { icon: Zap, label: "Automação", value: "Total" }
    ],
    features: [
      { title: "Ensaque Automático", description: "Processo totalmente automatizado desde o preenchimento até o fechamento do big-bag." },
      { title: "Produtividade", description: "Aumento significativo na capacidade de produção com menor necessidade de mão de obra." },
      { title: "Padronização", description: "Cada big-bag sai com peso uniforme, garantindo consistência na expedição." }
    ],
    integrations: ["CLP", "IHM", "Sistemas de pesagem", "Conveyor"],
    relatedProducts: ["pcsl-22000", "pebe-2000", "pevps-2060"]
  },
  "pevps-2060": {
    name: "Ensacadeira Eletrônica de Sopro para Sacos Valvulados",
    subtitle: "PEVPS 2060",
    description: "Eficiência no ensaque de sacos valvulados com melhor desempenho operacional. Sistema pneumático controlado eletronicamente para precisão e velocidade.",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "2.060 uds/h" },
      { icon: AlertCircle, label: "Precisão", value: "±0,3%" },
      { icon: Zap, label: "Velocidade", value: "Alta" }
    ],
    features: [
      { title: "Sistema de Sopro", description: "Tecnologia de sopro para enchimento rápido e uniforme dos sacos valvulados." },
      { title: "Desempenho", description: "Melhoria operacional com maior velocidade sem perda de precisão." },
      { title: "Versatilidade", description: "Adaptável a diferentes tamanhos e tipos de sacos valvulados." }
    ],
    integrations: ["Pneumático", "Eletrônico", "Sensor de nível"],
    relatedProducts: ["pebbag-1500", "pebe-2000", "pfd-30t"]
  },
  "pfd-30t": {
    name: "Balança de Fluxo para Sementes e Grãos",
    subtitle: "PFD 30T",
    description: "Controle contínuo do fluxo de sementes e grãos com estabilidade na operação. Sistema de pesagem em movimento para máxima eficiência.",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "30 t/h" },
      { icon: CheckCircle, label: "Precisão", value: "±0,25%" },
      { icon: Zap, label: "Controle", value: "Contínuo" }
    ],
    features: [
      { title: "Fluxo Contínuo", description: "Pesagem em movimento que não interrompe o processo produtivo." },
      { title: "Estabilidade", description: "Sistema robusto que mantém a precisão mesmo em altas vazões." },
      { title: "Monitoramento", description: "Acompanhamento em tempo real do fluxo de material." }
    ],
    integrations: ["CLP", "Scada", "IHM", "Sistemas de automação"],
    relatedProducts: ["pcsl-22000", "pevps-2060", "pebe-2000"]
  },
  "pebe-2000": {
    name: "Ensacadeira Eletrônica com Dosagem Automática para Big-Bags",
    subtitle: "PEBE2000",
    description: "Controle preciso da dosagem com maior estabilidade no processo de ensaque. Sistema eletrônico avançado para operações que exigem precisão máxima.",
    color: "#1a3a5c",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "2.000 kg/h" },
      { icon: CheckCircle, label: "Precisão", value: "±0,2%" },
      { icon: Zap, label: "Dosagem", value: "Automática" }
    ],
    features: [
      { title: "Dosagem Precisa", description: "Controle eletrônico que garante quantidade exata em cada ensaque." },
      { title: "Estabilidade", description: "Processo estável com variação mínima entre os lotes." },
      { title: "Automação Total", description: "Sistema completamente automatizado com mínima intervenção." }
    ],
    integrations: ["CLP", "IHM", "Sistemas de pesagem", "Conveyor"],
    relatedProducts: ["pebbag-1500", "pevps-2060", "pcsl-22000"]
  },
  "peved-2060": {
    name: "Ensacadeira Eletrônica",
    subtitle: "PEVED 2060",
    description: "Versatilidade no ensaque para diferentes aplicações industriais. Sistema adaptável que atende múltiplos tipos de produtos e formatos de embalagem.",
    color: "#f5a623",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    specs: [
      { icon: TrendingUp, label: "Capacidade", value: "2.060 uds/h" },
      { icon: CheckCircle, label: "Precisão", value: "±0,4%" },
      { icon: Zap, label: "Versatilidade", value: "Alta" }
    ],
    features: [
      { title: "Múltiplas Aplicações", description: "Sistema versátil que se adapta a diferentes tipos de produtos e embalagens." },
      { title: "Flexibilidade", description: "Configuração rápida para mudanças de produto ou formato." },
      { title: "Redução de Retrabalho", description: "Menor índice de rejeição e necessidade de correções." }
    ],
    integrations: ["Eletrônico", "Pneumático", "Sensor de peso"],
    relatedProducts: ["pcsl-22000", "pebbag-1500", "pfd-30t"]
  }
};

const relatedImages: Record<string, string> = {
  "pcsl-22000": "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&q=80",
  "pebbag-1500": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
  "pevps-2060": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80",
  "pfd-30t": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80",
  "pebe-2000": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
  "peved-2060": "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&q=80"
};

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openProposalModal } = useProposalModal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  const product = id ? productsData[id] : null;

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

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {product.specs.map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-9 ${index === 1 ? 'bg-[#1a3a5c]' : 'bg-[#f6f7f8]'}`}
                >
                  <spec.icon className="w-5 h-5 mb-4 text-[#f5a623]" />
                  <p className={`font-bold text-3xl mb-2 ${index === 1 ? 'text-[#f5a623]' : 'text-[#1a3a5c]'}`}>
                    {spec.value}
                  </p>
                  <p className={`text-xs font-semibold uppercase tracking-wider ${index === 1 ? 'text-white/40' : 'text-gray-500'}`}>
                    {spec.label}
                  </p>
                </motion.div>
              ))}
            </div>
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

        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h3 className="text-2xl text-[#1a3a5c] mb-8 font-bold tracking-tight uppercase">
                  Características
                </h3>
                <div className="border-t border-[#1a3a5c]/10">
                  {product.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-5 py-6 border-b border-[#1a3a5c]/10 hover:pl-3 transition-all"
                    >
                      <span className="text-[#f5a623] text-xs pt-1 w-6 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-[#1a3a5c] mb-2 uppercase tracking-wide">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#1a3a5c] rounded-xl p-9"
              >
                <h3 className="text-base font-bold text-white mb-5 uppercase tracking-wider">
                  Integrações Disponíveis
                </h3>
                <div className="space-y-3">
                  {product.integrations.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/4 rounded-lg border border-white/6">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623]" />
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h3 className="text-2xl text-[#1a3a5c] mb-8 font-bold tracking-tight uppercase">
              Produtos Relacionados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.relatedProducts.map((relId) => {
                const relProduct = Object.entries(productsData).find(([key]) => key === relId);
                if (!relProduct) return null;
                const [key, data] = relProduct;
                return (
                  <motion.div
                    key={key}
                    onClick={() => navigate(`/produto/${key}`)}
                    whileHover={{ y: -4 }}
                    className="bg-[#f6f7f8] p-6 rounded-xl cursor-pointer border border-transparent hover:border-[#f5a623]/30 transition-all"
                  >
                    <div className="h-28 bg-gradient-to-br from-[#e0e4e8] to-[#f6f7f8] rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                      <img
                        src={relatedImages[key]}
                        alt={data.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <p className="text-xs text-[#f5a623] uppercase tracking-widest mb-1 font-mono">
                      {data.subtitle}
                    </p>
                    <p className="text-sm font-bold text-[#1a3a5c] uppercase tracking-wide">
                      {data.name}
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
