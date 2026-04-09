import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { GlowButton } from "./ui/glow-button";
import { useProposalModal } from "./ProposalModalContext";

export function CTA() {
  const { openProposalModal } = useProposalModal();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a5c]/5 via-transparent to-[#f5a623]/5 opacity-50" />

        {/* Moving Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#f5a623]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Tech Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/30 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-flex mb-8"
          >
            <div className="p-4 bg-gradient-to-br from-[#1a3a5c]/10 to-[#f5a623]/10 rounded-2xl border-2 border-[#f5a623]/30 backdrop-blur-sm">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-[#f5a623]" />
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 md:mb-8 tracking-tight leading-tight px-4" style={{ fontWeight: 800 }}>
            Entenda como aplicar
            <br />
            <span className="bg-gradient-to-r from-[#f5a623] via-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              as soluções Pondus
            </span>
            <br />
            na sua operação
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Transforme seus processos industriais com tecnologia de precisão.
            Fale com nossos especialistas e descubra a melhor solução para sua operação.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GlowButton
                label="Solicite uma Proposta"
                variant="primary"
                onClick={openProposalModal}
                className="text-base md:text-lg"
              />
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-gray-500 text-sm md:text-base"
          >
            Resposta em até 24 horas • Consultoria sem custo
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-72 md:w-96 h-72 md:h-96 bg-[#1a3a5c]/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 md:w-96 h-72 md:h-96 bg-[#f5a623]/5 rounded-full blur-3xl -translate-y-1/2" />
    </section>
  );
}
