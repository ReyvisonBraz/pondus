import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
  websiteUrl: string;
}

const clients: Client[] = [
  { id: 1, name: "3 Tentos", logo: "/assets/images/clientes/3tento.webp" },
  { id: 2, name: "Agrifirm", logo: "/assets/images/clientes/agrifirm.webp" },
  { id: 3, name: "Agro Cecchin", logo: "/assets/images/clientes/agro-cecchin.webp" },
  { id: 4, name: "Agromen Sementes", logo: "/assets/images/clientes/agromen-sementes.webp" },
  { id: 5, name: "Bio Granun", logo: "/assets/images/clientes/bio-granun.webp" },
  { id: 6, name: "Bons Negócios", logo: "/assets/images/clientes/bons-negocios.webp" },
  { id: 7, name: "Brandt", logo: "/assets/images/clientes/brandt.webp" },
  { id: 8, name: "Caico", logo: "/assets/images/clientes/caico.webp" },
  { id: 9, name: "Cambai", logo: "/assets/images/clientes/cambai.webp" },
  { id: 10, name: "Camera", logo: "/assets/images/clientes/camera.webp" },
  { id: 11, name: "Ceolin", logo: "/assets/images/clientes/ceolin.webp" },
  { id: 12, name: "Coopatrigo", logo: "/assets/images/clientes/coopatrigo.webp" },
  { id: 13, name: "Copagril", logo: "/assets/images/clientes/copagril.webp" },
  { id: 14, name: "Cotricampo", logo: "/assets/images/clientes/cotricampo.webp" },
  { id: 15, name: "Cotrimaio", logo: "/assets/images/clientes/cotrimaio.webp" },
  { id: 16, name: "Diltec", logo: "/assets/images/clientes/diltec.webp" },
  { id: 17, name: "Grupo Conceito", logo: "/assets/images/clientes/grupo-conceito.webp" },
  { id: 18, name: "Imacol", logo: "/assets/images/clientes/imacol.webp" },
  { id: 19, name: "Juriti", logo: "/assets/images/clientes/juriti.webp" },
  { id: 20, name: "Kothe Agro", logo: "/assets/images/clientes/kothe-agro.webp" },
  { id: 21, name: "Martini", logo: "/assets/images/clientes/martini.webp" },
  { id: 22, name: "Peacock", logo: "/assets/images/clientes/PEACOOK.webp" },
  { id: 23, name: "Piratini", logo: "/assets/images/clientes/PIRATINI.webp" },
  { id: 24, name: "Produtiva Sementes", logo: "/assets/images/clientes/produtiva-sementes.webp" },
  { id: 25, name: "Relva", logo: "/assets/images/clientes/relva.webp" },
  { id: 26, name: "RG Log", logo: "/assets/images/clientes/rg-log.webp" },
  { id: 27, name: "Rosina Alimentos", logo: "/assets/images/clientes/rosina-alimentos.webp" },
  { id: 28, name: "Sementes Butia", logo: "/assets/images/clientes/sementes-butia-3.webp" },
  { id: 29, name: "Sementes Coopatrigo", logo: "/assets/images/clientes/SEMENTES-COOPATRIGO.webp" },
  { id: 30, name: "Sementes Estrela", logo: "/assets/images/clientes/sementes-estrela.webp" },
  { id: 31, name: "Sementes Ritter", logo: "/assets/images/clientes/sementes-ritter.webp" },
  { id: 32, name: "Sementes Três Pinheiros", logo: "/assets/images/clientes/sementes-tres-pinheiros.webp" },
  { id: 33, name: "Senhor Cereais", logo: "/assets/images/clientes/senhor-cereais.webp" },
  { id: 34, name: "Sherer Sementes", logo: "/assets/images/clientes/sherer-sementes.webp" },
  { id: 35, name: "Sulamerica", logo: "/assets/images/clientes/sulamerica.webp" },
  { id: 36, name: "Sul Graan", logo: "/assets/images/clientes/sul-graan.webp" },
  { id: 37, name: "Supply Logistica", logo: "/assets/images/clientes/supply-logistica.webp" },
  { id: 38, name: "União Cereais", logo: "/assets/images/clientes/uniao-cereais.webp" },
  { id: 39, name: "Voaar", logo: "/assets/images/clientes/voaar.webp" },
  { id: 40, name: "Willers", logo: "/assets/images/clientes/willers.webp" }
];

const partners: Partner[] = [
  { id: 1, name: "Autyva", logo: "/assets/images/parceiros/Autyva.webp", websiteUrl: "https://www.autyva.com.br" },
  { id: 2, name: "GNP", logo: "/assets/images/parceiros/GNP.webp", websiteUrl: "https://www.linkedin.com/company/gnp-engenharia/posts/" },
  { id: 3, name: "Hansel", logo: "/assets/images/parceiros/Hansel.webp", websiteUrl: "https://hanselconnect.com" },
  { id: 4, name: "JC&S", logo: "/assets/images/parceiros/JC&S.webp", websiteUrl: "https://jces-sevicos-especializados-consultoria.lovable.app/" },
  { id: 5, name: "MK Comercialização Agrícola", logo: "/assets/images/parceiros/MK-comercialização-agricola.png", websiteUrl: "#" }
];

const firstClientRow = clients.slice(0, Math.ceil(clients.length / 2));
const secondClientRow = clients.slice(Math.ceil(clients.length / 2));

function ClientLogoRow({ rowClients, reverse = false }: { rowClients: Client[]; reverse?: boolean }) {
  return (
    <motion.div
      className="flex gap-6"
      animate={{
        x: reverse ? [-1800, 0] : [0, -1800]
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear"
        }
      }}
    >
      {[...rowClients, ...rowClients, ...rowClients].map((client, index) => (
        <motion.div
          key={`${client.id}-${index}`}
          className="flex-shrink-0 w-40 h-24 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-md hover:shadow-xl hover:border-[#f5a623]/40 transition-all duration-300 overflow-hidden"
          whileHover={{ y: -3, scale: 1.03 }}
        >
          <img
            src={client.logo}
            alt={client.name}
            className="max-w-full max-h-full object-contain p-2"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clientes" className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(26, 58, 92, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#1a3a5c] mb-4 tracking-tight" style={{ fontWeight: 800 }}>
            Empresas que Confiam
            <br />
            <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent">
              na Pondus
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas que utilizam soluções Pondus em suas operações industriais
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl text-[#1a3a5c] tracking-tight" style={{ fontWeight: 800 }}>
            Clientes
          </h3>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto mt-2 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden mb-20 space-y-6"
        >
          <ClientLogoRow rowClients={firstClientRow} />
          <ClientLogoRow rowClients={secondClientRow} reverse />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl text-[#1a3a5c] tracking-tight" style={{ fontWeight: 800 }}>
            Parceiros
          </h3>
          <div className="w-16 h-1 bg-[#f5a623] mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.id}
              href={partner.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group flex w-full max-w-[260px] flex-col items-center sm:w-[calc(50%-1rem)] md:w-[calc(25%-1.5rem)]"
              whileHover={{ y: -5 }}
            >
              <div className="w-full aspect-[4/3] bg-white rounded-2xl border-2 border-gray-200 p-4 flex items-center justify-center shadow-lg hover:shadow-2xl hover:border-[#f5a623]/50 transition-all duration-300 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              <div className="mt-4 flex items-center gap-2">
                <span className="text-base md:text-lg text-[#1a3a5c] group-hover:text-[#f5a623] transition-colors duration-300" style={{ fontWeight: 700 }}>
                  {partner.name}
                </span>
                <ArrowRight className="w-4 h-4 text-[#f5a623] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
