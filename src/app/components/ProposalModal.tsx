import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, MessageCircle, Mail, Send, User, Building2, Phone, Mail as MailIcon, MessageSquare, Package, ChevronDown } from "lucide-react";

const products = [
  { id: "pcsl-22000", name: "Contadora de Sementes PCSL 22000" },
  { id: "pebbag-1500", name: "Ensacadeira Big-Bags PEBBAG 1500" },
  { id: "pevps-2060", name: "Ensacadeira de Sopro PEVPS 2060" },
  { id: "pfd-30t", name: "Balança de Fluxo PFD 30T" },
  { id: "pebe-2000", name: "Ensacadeira com Dosagem PEBE2000" },
  { id: "peved-2060", name: "Ensacadeira Eletrônica PEVED 2060" }
];

const WHATSAPP_NUMBER = "5599900799";
const WHATSAPP_MESSAGE = "Olá! Gostaria de solicitar uma proposta.";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  product: string;
  message: string;
}

export function ProposalModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<"select" | "whatsapp" | "email">("select");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep("select");
      setFormData({ name: "", company: "", phone: "", email: "", product: "", message: "" });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleWhatsAppSend = () => {
    const selectedProduct = products.find(p => p.id === formData.product);
    
    const message = `🏭 *SOLICITAÇÃO DE PROPOSTA*

*Dados do Cliente:*
👤 Nome: ${formData.name}
🏢 Empresa: ${formData.company}
📞 Telefone: ${formData.phone}
📧 Email: ${formData.email}

*Produto de Interesse:*
${selectedProduct ? selectedProduct.name : "Não especificado"}

*Mensagem:*
${formData.message}

---
Enviado pelo site Pondus`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  const handleEmailSend = () => {
    const selectedProduct = products.find(p => p.id === formData.product);
    
    const subject = encodeURIComponent(`Solicitação de Proposta - ${formData.company}`);
    const body = encodeURIComponent(
`Nome: ${formData.name}
Empresa: ${formData.company}
Telefone: ${formData.phone}
Email: ${formData.email}

Produto de Interesse: ${selectedProduct ? selectedProduct.name : "Não especificado"}

Mensagem:
${formData.message}`
    );
    
    window.location.href = `mailto:contato@pondus.com.br?subject=${subject}&body=${body}`;
    onClose();
  };

  const isWhatsAppValid = formData.name && formData.phone;
  const isEmailValid = formData.name;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            <AnimatePresence mode="wait">
              {step === "select" && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#1a3a5c] mb-2 uppercase tracking-wide">
                      Solicitar Proposta
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Escolha como prefere entrar em contato
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("whatsapp")}
                      className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-gray-100 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                        <MessageCircle className="w-8 h-8 text-[#25D366]" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-[#1a3a5c] mb-1">WhatsApp</p>
                        <p className="text-xs text-gray-500">Resposta mais rápida</p>
                      </div>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setStep("email")}
                      className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-gray-100 hover:border-[#1a3a5c] hover:bg-[#1a3a5c]/5 transition-all"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center">
                        <Mail className="w-8 h-8 text-[#1a3a5c]" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-[#1a3a5c] mb-1">E-mail</p>
                        <p className="text-xs text-gray-500">Solicitação formal</p>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === "whatsapp" && (
                <motion.div
                  key="whatsapp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {/* WhatsApp Header Banner */}
                  <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-6">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setStep("select")}
                        className="p-2 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ChevronDown className="w-5 h-5 text-white rotate-90" />
                      </button>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white uppercase tracking-wide">
                          WhatsApp
                        </h3>
                        <p className="text-white/80 text-xs">Resposta mais rápida</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 space-y-4 max-h-[55vh] overflow-y-auto pr-2">
                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <User className="inline-block w-3 h-3 mr-1" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <Building2 className="inline-block w-3 h-3 mr-1" />
                        Empresa <span className="text-gray-400">(opcional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <Phone className="inline-block w-3 h-3 mr-1" />
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="(00) 00000-0000"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <MailIcon className="inline-block w-3 h-3 mr-1" />
                        E-mail <span className="text-gray-400">(opcional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <Package className="inline-block w-3 h-3 mr-1" />
                        Produto de Interesse <span className="text-gray-400">(opcional)</span>
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm text-left flex items-center justify-between"
                        >
                          <span className={formData.product ? "text-gray-900" : "text-gray-400"}>
                            {formData.product ? products.find(p => p.id === formData.product)?.name : "Selecione um produto"}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto">
                            <button
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, product: "" });
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors text-gray-400 border-b border-gray-100"
                            >
                              Não tenho um produto específico ainda
                            </button>
                            {products.map((product) => (
                              <button
                                key={product.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, product: product.id });
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors"
                              >
                                {product.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <MessageSquare className="inline-block w-3 h-3 mr-1" />
                        Mensagem
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#25D366] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm resize-none"
                        placeholder="Descreva sua necessidade ou projeto..."
                      />
                    </div>
                  </div>

                  <div className="px-8 pb-8">
                    <motion.button
                      whileHover={{ scale: isWhatsAppValid ? 1.01 : 1 }}
                      whileTap={{ scale: isWhatsAppValid ? 0.99 : 1 }}
                      onClick={handleWhatsAppSend}
                      disabled={!isWhatsAppValid}
                      className={`w-full py-4 rounded-xl font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all ${
                        isWhatsAppValid
                          ? "bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:shadow-lg shadow-[#25D366]/30"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      Enviar via WhatsApp
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === "email" && (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <button
                      onClick={() => setStep("select")}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 rotate-90" />
                    </button>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#1a3a5c]/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#1a3a5c]" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1a3a5c] uppercase tracking-wide">
                        Via E-mail
                      </h3>
                    </div>
                  </div>

                  <div className="bg-[#f6f7f8] rounded-xl p-6 mb-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sua mensagem será enviada para <span className="font-semibold text-[#1a3a5c]">contato@pondus.com.br</span>
                    </p>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <User className="inline-block w-3 h-3 mr-1" />
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="Seu nome"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <Building2 className="inline-block w-3 h-3 mr-1" />
                        Empresa *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                        placeholder="Nome da empresa"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                          <Phone className="inline-block w-3 h-3 mr-1" />
                          Telefone
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                          placeholder="(00) 00000-0000"
                        />
                      </div>

                      <div className="relative">
                        <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                          <MailIcon className="inline-block w-3 h-3 mr-1" />
                          E-mail *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <Package className="inline-block w-3 h-3 mr-1" />
                        Produto de Interesse
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm text-left flex items-center justify-between"
                        >
                          <span className={formData.product ? "text-gray-900" : "text-gray-400"}>
                            {formData.product ? products.find(p => p.id === formData.product)?.name : "Selecione um produto (opcional)"}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-200 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto">
                            {products.map((product) => (
                              <button
                                key={product.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, product: product.id });
                                  setIsDropdownOpen(false);
                                }}
                                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition-colors"
                              >
                                {product.name}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-gray-600 mb-2 text-xs tracking-wide uppercase font-medium">
                        <MessageSquare className="inline-block w-3 h-3 mr-1" />
                        Mensagem
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full bg-gray-50 border-2 border-gray-200 focus:border-[#1a3a5c] rounded-xl px-4 py-3 text-gray-900 transition-all outline-none text-sm resize-none"
                        placeholder="Descreva sua necessidade ou projeto..."
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: formData.name && formData.company && formData.email ? 1.01 : 1 }}
                    whileTap={{ scale: formData.name && formData.company && formData.email ? 0.99 : 1 }}
                    onClick={handleEmailSend}
                    disabled={!formData.name || !formData.company || !formData.email}
                    className={`w-full mt-6 py-4 rounded-xl font-semibold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all ${
                      formData.name && formData.company && formData.email
                        ? "bg-[#1a3a5c] text-white hover:bg-[#2a4a6c] shadow-lg shadow-[#1a3a5c]/30"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Enviar via E-mail
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
