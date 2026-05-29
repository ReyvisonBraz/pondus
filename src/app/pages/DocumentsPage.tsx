import { useEffect } from "react";
import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";
import { documents } from "../../data/documents";

export function DocumentsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="relative min-h-screen bg-[#fafaf9] py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(26, 58, 92, 0.18) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-[#f5a623] tracking-[0.2em] uppercase text-sm border-b border-[#f5a623]/30 pb-2 font-semibold">
            Downloads
          </span>
          <h1 className="text-4xl md:text-6xl text-[#1a3a5c] mt-6 mb-4 tracking-tight font-extrabold">
            Documentos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Materiais e arquivos Pondus disponíveis para consulta e download.
          </p>
        </motion.div>

        {documents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {documents.map((document, index) => (
              <motion.a
                key={document.title}
                href={document.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f5a623]/50 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1a3a5c]/10 text-[#1a3a5c] group-hover:bg-[#f5a623]/15 group-hover:text-[#f5a623] transition-colors">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-bold text-[#1a3a5c] leading-tight">
                    {document.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500 truncate">
                    {document.url}
                  </p>
                </div>
                <Download className="h-5 w-5 flex-shrink-0 text-[#f5a623]" />
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white/70 p-8 text-center">
            <FileText className="mx-auto mb-4 h-10 w-10 text-[#f5a623]" />
            <p className="text-[#1a3a5c] font-bold">Nenhum documento cadastrado no momento.</p>
            <p className="mt-2 text-sm text-gray-500">
              Adicione novos itens em src/data/documents.ts usando titulo e link.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
