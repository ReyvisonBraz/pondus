import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Clock, ArrowLeft, Copy, Check } from "lucide-react";

const WHATSAPP_NUMBER = "5599900799";
const EMAIL = "dutra@pondusrs.com.br";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMethod, setSelectedMethod] = useState<"whatsapp" | "email" | null>(null);
  const [copied, setCopied] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim pelo site e gostaria de falar com um especialista.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Failed to copy");
    }
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(26, 58, 92, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(26, 58, 92, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-6 lg:px-12">
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
            {selectedMethod === "whatsapp" ? "Fale via" : selectedMethod === "email" ? "Fale via" : "Fale com Nossa"}
            <br />
            <span className="text-[#f5a623]">
              {selectedMethod === "whatsapp" ? "WhatsApp" : selectedMethod === "email" ? "E-mail" : "Equipe"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {selectedMethod === "whatsapp" 
              ? "Inicie uma conversa rápida com nossos especialistas"
              : selectedMethod === "email"
              ? "Envie sua mensagem e responderemos em breve"
              : "Escolha como prefere entrar em contato conosco"}
          </p>
        </motion.div>

        {!selectedMethod ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMethod("whatsapp")}
              className="flex flex-col items-center gap-5 p-10 rounded-3xl border-2 border-gray-100 hover:border-[#25D366] bg-white hover:bg-[#25D366]/5 transition-all shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-[#1a3a5c] mb-2 uppercase tracking-wide">
                  WhatsApp
                </p>
                <p className="text-sm text-gray-500">Resposta mais rápida</p>
                <p className="text-xs text-[#25D366] mt-2 font-medium">(11) 99900-7999</p>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedMethod("email")}
              className="flex flex-col items-center gap-5 p-10 rounded-3xl border-2 border-gray-100 hover:border-[#1a3a5c] bg-white hover:bg-[#1a3a5c]/5 transition-all shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a3a5c] to-[#2a4a6c] flex items-center justify-center shadow-lg shadow-[#1a3a5c]/30">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-[#1a3a5c] mb-2 uppercase tracking-wide">
                  E-mail
                </p>
                <p className="text-sm text-gray-500">Solicitação formal</p>
                <button
                  onClick={(e) => { e.stopPropagation(); handleCopyEmail(); }}
                  className="text-xs text-[#1a3a5c] mt-2 font-medium flex items-center justify-center gap-1 hover:text-[#f5a623] transition-colors mx-auto"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {EMAIL}
                </button>
              </div>
            </motion.button>
          </motion.div>
        ) : selectedMethod === "whatsapp" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border-2 border-[#25D366]/30 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <p className="text-white/80 text-sm">Resposta em horário comercial</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-[#f6f7f8] rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Número</p>
                    <p className="text-lg font-bold text-[#1a3a5c]">(11) 99900-7999</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Horário</p>
                    <p className="text-lg font-bold text-[#1a3a5c]">Seg - Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={handleWhatsAppClick}
                className="w-full py-5 rounded-xl font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:shadow-lg shadow-[#25D366]/30 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Iniciar Conversa no WhatsApp
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border-2 border-[#1a3a5c]/30 shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#1a3a5c] to-[#2a4a6c] px-8 py-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold uppercase tracking-wide">
                    E-mail
                  </p>
                  <p className="text-white/80 text-sm">Respondemos em até 24h</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-[#f6f7f8] rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1a3a5c]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">E-mail Principal</p>
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-bold text-[#1a3a5c]">{EMAIL}</p>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1.5 rounded-lg hover:bg-[#1a3a5c]/10 transition-colors"
                        title="Copiar email"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4 text-gray-400 hover:text-[#1a3a5c]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1a3a5c]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Endereço</p>
                    <p className="text-base font-bold text-[#1a3a5c]">São Paulo, SP - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1a3a5c]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Horário de Atendimento</p>
                    <p className="text-base font-bold text-[#1a3a5c]">Seg - Sex: 8h às 18h</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={`mailto:${EMAIL}?subject=Contato%20via%20Site`}
                className="w-full py-5 rounded-xl font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-3 bg-gradient-to-r from-[#1a3a5c] to-[#2a4a6c] text-white hover:shadow-lg shadow-[#1a3a5c]/30 transition-all"
              >
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </motion.a>
            </div>
          </motion.div>
        )}

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
