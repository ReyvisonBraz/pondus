import { motion } from "motion/react";

const tickerItems = [
  "Sementes",
  "Fertilizantes",
  "Grãos",
  "Materiais granulares",
  "Pesagem industrial",
  "Contagem de sementes",
  "Ensacadeiras",
  "Balanças de fluxo"
];

export function Ticker() {
  const repeatedItems = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-[#f5a623] py-4 overflow-hidden white-space-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 28,
            ease: "linear"
          }
        }}
      >
        {repeatedItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-6 px-10"
          >
            <span
              className="font-mono text-lg tracking-[0.25em] uppercase font-medium text-[#002444] whitespace-nowrap"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#002444]/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
