import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { equipmentImages, type EquipmentImage } from "../../data/equipment-gallery";

export function EquipmentShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setShowSwipeHint(true);
    setTimeout(() => setShowSwipeHint(false), 2500);
  };
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % equipmentImages.length : 0);
  const prevImage = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + equipmentImages.length) % equipmentImages.length : 0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
    setTouchStart(null);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  // Dynamic layout: first 3 go to hero section, rest to the bottom grid
  // Adapts automatically regardless of how many images are in the array
  const hasHeroLayout = equipmentImages.length >= 3;
  const topRow = hasHeroLayout ? equipmentImages.slice(0, 3) : [];
  const bottomRow = hasHeroLayout ? equipmentImages.slice(3) : equipmentImages;

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #f0f1f3 100%)" }}>
        {/* Decorative top line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1a3a5c]/20 to-transparent" />

        <div ref={ref} className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-14 md:mb-20"
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <span
                  className="inline-block text-[#f5a623] tracking-[0.25em] uppercase text-xs mb-4"
                  style={{ fontFamily: "'DM Mono', monospace", fontWeight: 600 }}
                >
                  Em campo
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#1a3a5c] tracking-tight leading-[1.1]" style={{ fontWeight: 800 }}>
                  Nossos equipamentos
                  <br />
                  <span className="bg-gradient-to-r from-[#f5a623] to-[#d4880f] bg-clip-text text-transparent">
                    onde eles importam
                  </span>
                </h2>
              </div>
              <p className="text-gray-500 max-w-sm text-sm md:text-base leading-relaxed md:text-right">
                Instalados e operando em plantas industriais — veja a tecnologia Pondus funcionando na prática.
              </p>
            </div>

            {/* Separator */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#1a3a5c]/15 to-transparent" />
              <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em]" style={{ fontFamily: "'DM Mono', monospace" }}>
                {equipmentImages.length} registros
              </span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#1a3a5c]/15 to-transparent" />
            </div>
          </motion.div>

          {/* Top Row — 1 large + 2 stacked (only if 3+ images) */}
          {hasHeroLayout && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
              {/* Large hero image */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <GalleryCard
                  item={topRow[0]}
                  index={0}
                  onOpen={openLightbox}
                  className="h-72 md:h-[420px]"
                />
              </motion.div>

              {/* 2 stacked */}
              <div className="grid grid-rows-2 gap-3 md:gap-4">
                {topRow.slice(1).map((item, idx) => (
                  <motion.div
                    key={idx + 1}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 + idx * 0.08 }}
                  >
                    <GalleryCard
                      item={item}
                      index={idx + 1}
                      onOpen={openLightbox}
                      className="h-56 md:h-[200px]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Row — adapts columns based on count */}
          {bottomRow.length > 0 && (
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 ${
              bottomRow.length >= 4 ? 'lg:grid-cols-4' :
              bottomRow.length === 3 ? 'lg:grid-cols-3' :
              bottomRow.length === 2 ? 'lg:grid-cols-2' :
              'lg:grid-cols-1 max-w-md mx-auto'
            }`}>
              {bottomRow.map((item, idx) => {
                const globalIndex = hasHeroLayout ? idx + 3 : idx;
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                  >
                    <GalleryCard
                      item={item}
                      index={globalIndex}
                      onOpen={openLightbox}
                      className="h-56 md:h-60"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-lg flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation arrows — pulsam nas primeiras exibições */}
            <motion.button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-3 md:left-8 w-12 h-12 bg-white/15 hover:bg-[#f5a623] rounded-full flex items-center justify-center text-white transition-colors duration-300 z-20 backdrop-blur-sm border border-white/20 hover:border-[#f5a623]"
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.12, x: 0 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-3 md:right-8 w-12 h-12 bg-white/15 hover:bg-[#f5a623] rounded-full flex items-center justify-center text-white transition-colors duration-300 z-20 backdrop-blur-sm border border-white/20 hover:border-[#f5a623]"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.12, x: 0 }}
              whileTap={{ scale: 0.92 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Swipe hint — mobile only, some after open */}
            <AnimatePresence>
              {showSwipeHint && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 md:hidden z-20 pointer-events-none"
                >
                  <ChevronLeft className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-xs tracking-wide">deslize para navegar</span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image container — swipe area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl w-full mx-4 md:mx-8"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={equipmentImages[lightboxIndex].src}
                  alt={`${equipmentImages[lightboxIndex].category} — ${equipmentImages[lightboxIndex].location}`}
                  className="w-full max-h-[78vh] object-contain rounded-xl"
                />
                <div className="mt-5 flex items-center justify-between px-1">
                  <div>
                    <p className="text-white/90 text-sm font-semibold">
                      {equipmentImages[lightboxIndex].category}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {equipmentImages[lightboxIndex].location}
                    </p>
                  </div>
                  <span
                    className="text-white/30 text-xs tracking-wider"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {lightboxIndex + 1} / {equipmentImages.length}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Gallery Card ────────────────────────────────────── */

function GalleryCard({
  item,
  index,
  onOpen,
  className = ""
}: {
  item: EquipmentImage;
  index: number;
  onOpen: (index: number) => void;
  className?: string;
}) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer ${className}`}
      onClick={() => onOpen(index)}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={`${item.category} — ${item.location}`}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Default subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-[#1a3a5c]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <p className="text-white text-sm font-bold leading-tight drop-shadow-lg">
          {item.category}
        </p>
        <p className="text-white/60 text-xs mt-0.5 drop-shadow-md">
          {item.location}
        </p>
      </div>

      {/* Zoom icon on hover */}
      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
        <ZoomIn className="w-3.5 h-3.5 text-white" />
      </div>

      {/* Border highlight */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#f5a623]/50 transition-colors duration-400 pointer-events-none" />
    </div>
  );
}
