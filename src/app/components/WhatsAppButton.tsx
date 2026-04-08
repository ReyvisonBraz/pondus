import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/5555999900799?text=Olá! Gostaria de saber mais sobre as soluções da Pondus Tecnologia Industrial."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-50 group"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulsing Ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Button */}
        <motion.div
          className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl"
          style={{
            boxShadow: "0 8px 30px rgba(37, 211, 102, 0.4)"
          }}
        >
          <MessageCircle className="w-8 h-8 text-white" />

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              opacity: isHovered ? 0.5 : 0
            }}
            transition={{ duration: 0.3 }}
            style={{
              filter: "blur(10px)"
            }}
          />
        </motion.div>

        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center"
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
            className="text-white text-xs"
            style={{ fontWeight: 700 }}
          >
            1
          </motion.span>
        </motion.div>
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1a3a5c] text-white px-4 py-2 rounded-lg border border-[#f5a623]/30 shadow-xl"
      >
        <div className="text-sm">
          <p style={{ fontWeight: 600 }}>Fale conosco!</p>
          <p className="text-gray-300 text-xs">Resposta rápida garantida</p>
        </div>

        {/* Arrow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1a3a5c]" />
        </div>
      </motion.div>
    </motion.a>
  );
}
