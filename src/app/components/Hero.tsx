import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { GlowButton } from "./ui/glow-button";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/98 via-white/95 to-white z-10" />
        <img
          src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Industrial Automation"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(26, 58, 92, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(26, 58, 92, 0.1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Tech Lines */}
      <motion.div
        className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-block px-4 py-2 border border-[#1a3a5c]/30 bg-[#1a3a5c]/5 rounded-full mb-8">
            <span className="text-[#1a3a5c] tracking-wider uppercase text-sm" style={{ fontWeight: 600 }}>
              Tecnologia Industrial Avançada
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#1a3a5c] mb-8 tracking-tight leading-[1.1] px-4"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          Mais que automação: <span className="glow-text">consistência</span> e <span className="glow-text">precisão</span> que garantem resultados, safra após safra.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Mais controle e padronização no processamento de sementes e materiais granulares.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <GlowButton
              label="Fale com um Especialista"
              variant="accent"
              onClick={() => {
                navigate('/contato');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#f5a623]/5 rounded-full blur-3xl" />
    </section>
  );
}
