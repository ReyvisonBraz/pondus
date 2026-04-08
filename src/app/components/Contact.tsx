import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Send, User, Building2, Phone, Mail, MessageSquare } from "lucide-react";
import { GlowButton } from "./ui/glow-button";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(26, 58, 92, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(26, 58, 92, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-[#f5a623] tracking-[0.3em] uppercase text-sm border-b border-[#f5a623]/30 pb-2" style={{ fontWeight: 600 }}>
              Contato
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-6 tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Fale com Nossa
            <br />
            <span className="text-[#f5a623]">Equipe</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Entenda como aplicar as soluções Pondus na sua operação
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-3xl border-2 border-gray-200 shadow-2xl"
        >
          <form className="space-y-6">
            {/* Nome */}
            <div className="relative">
              <label className="block text-gray-600 mb-3 text-sm tracking-wide uppercase" style={{ fontWeight: 600 }}>
                <User className="inline-block w-4 h-4 mr-2" />
                Nome Completo
              </label>
              <input
                type="text"
                onFocus={() => setFocused("nome")}
                onBlur={() => setFocused(null)}
                className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-6 py-4 text-gray-900 transition-all duration-300 outline-none"
                placeholder="Seu nome"
              />
              {focused === "nome" && (
                <motion.div
                  layoutId="input-glow"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(26, 58, 92, 0.2)"
                  }}
                />
              )}
            </div>

            {/* Empresa */}
            <div className="relative">
              <label className="block text-gray-600 mb-3 text-sm tracking-wide uppercase" style={{ fontWeight: 600 }}>
                <Building2 className="inline-block w-4 h-4 mr-2" />
                Empresa
              </label>
              <input
                type="text"
                onFocus={() => setFocused("empresa")}
                onBlur={() => setFocused(null)}
                className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-6 py-4 text-gray-900 transition-all duration-300 outline-none"
                placeholder="Nome da empresa"
              />
              {focused === "empresa" && (
                <motion.div
                  layoutId="input-glow"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(26, 58, 92, 0.2)"
                  }}
                />
              )}
            </div>

            {/* Telefone e Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-gray-600 mb-3 text-sm tracking-wide uppercase" style={{ fontWeight: 600 }}>
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  Telefone
                </label>
                <input
                  type="tel"
                  onFocus={() => setFocused("telefone")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-6 py-4 text-gray-900 transition-all duration-300 outline-none"
                  placeholder="(00) 00000-0000"
                />
                {focused === "telefone" && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: "0 0 20px rgba(26, 58, 92, 0.2)"
                    }}
                  />
                )}
              </div>

              <div className="relative">
                <label className="block text-gray-600 mb-3 text-sm tracking-wide uppercase" style={{ fontWeight: 600 }}>
                  <Mail className="inline-block w-4 h-4 mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-6 py-4 text-gray-900 transition-all duration-300 outline-none"
                  placeholder="seu@email.com"
                />
                {focused === "email" && (
                  <motion.div
                    layoutId="input-glow"
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: "0 0 20px rgba(26, 58, 92, 0.2)"
                    }}
                  />
                )}
              </div>
            </div>

            {/* Mensagem */}
            <div className="relative">
              <label className="block text-gray-600 mb-3 text-sm tracking-wide uppercase" style={{ fontWeight: 600 }}>
                <MessageSquare className="inline-block w-4 h-4 mr-2" />
                Mensagem
              </label>
              <textarea
                onFocus={() => setFocused("mensagem")}
                onBlur={() => setFocused(null)}
                rows={5}
                className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-6 py-4 text-gray-900 transition-all duration-300 outline-none resize-none"
                placeholder="Descreva seu projeto ou necessidade..."
              />
              {focused === "mensagem" && (
                <motion.div
                  layoutId="input-glow"
                  className="absolute inset-0 rounded-xl pointer-events-none"
                  style={{
                    boxShadow: "0 0 20px rgba(26, 58, 92, 0.2)"
                  }}
                />
              )}
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <GlowButton
                label="Enviar Solicitação"
                variant="primary"
                icon={<Send className="w-5 h-5" />}
                className="w-full"
                type="submit"
              />
            </motion.div>
          </form>
        </motion.div>

        {/* Privacy Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          Seus dados estão protegidos e serão utilizados apenas para contato comercial
        </motion.p>
      </div>
    </section>
  );
}
