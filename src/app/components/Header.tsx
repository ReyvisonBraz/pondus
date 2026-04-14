import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlowButton } from "./ui/glow-button";
import { useProposalModal } from "./ProposalModalContext";
import pondusSvg from "../../imports/PONDUS_SOBRE.svg";
import { products, getEnsacadeiras, getBalancas, getContadoras } from "../../data/products";

const productGroups = [
  { key: 'ensacadeiras', label: 'Ensacadeiras', getItems: getEnsacadeiras },
  { key: 'balancas', label: 'Balanças', getItems: getBalancas },
  { key: 'contadoras', label: 'Contadoras', getItems: getContadoras }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openProposalModal } = useProposalModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Início", href: "/", isRoute: true },
    { name: "Soluções", href: "/solucoes", isRoute: true, hasDropdown: true },
    { name: "Quem Somos", href: "/quem-somos", isRoute: true },
    { name: "Clientes", href: "/clientes", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "Contato", href: "/contato", isRoute: true }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.isRoute) {
      return; // Let react-router handle route navigation
    }

    e.preventDefault();

    // If we're not on the home page and trying to scroll to a section, go to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const targetId = link.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const targetId = link.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex-shrink-0"
            >
              <img
                src={pondusSvg}
                alt="PONDUS Tecnologia Industrial"
                className="h-16 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" ref={dropdownRef}>
            {navLinks.map((link, index) => {
              const baseClasses = "relative text-gray-600 hover:text-[#1a3a5c] transition-colors duration-200 text-sm tracking-wide uppercase group py-2";

              if (link.hasDropdown) {
                return (
                  <div key={index} className="relative">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`${baseClasses} cursor-pointer flex items-center gap-1`}
                      onMouseEnter={() => setSolutionsDropdownOpen(true)}
                      onClick={() => {
                        if (solutionsDropdownOpen) {
                          setSolutionsDropdownOpen(false);
                        } else {
                          navigate('/solucoes');
                        }
                      }}
                    >
                      <span className="relative">
                        <span className="bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] bg-clip-text text-transparent font-bold">
                          Soluções
                        </span>
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#1a3a5c] to-[#f5a623]" />
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''} text-[#f5a623]`} />
                    </motion.div>

                    <AnimatePresence>
                      {solutionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-[780px] bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setSolutionsDropdownOpen(true)}
                          onMouseLeave={() => setSolutionsDropdownOpen(false)}
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-3 gap-8">
                              {productGroups.map((group) => {
                                const items = group.getItems();
                                if (items.length === 0) return null;
                                const groupColors: Record<string, string> = {
                                  'ensacadeiras': '#f5a623',
                                  'balancas': '#1a3a5c',
                                  'contadoras': '#2d7d6b'
                                };
                                const groupColor = groupColors[group.key] || '#1a3a5c';
                                return (
                                  <div key={group.key} className="group/col">
                                    <div className="pb-3 mb-4 border-b-2" style={{ borderColor: groupColor }}>
                                      <h4 
                                        className="text-2xl font-extrabold tracking-wide cursor-pointer transition-all duration-200"
                                        style={{ color: groupColor }}
                                      >
                                        {group.label}
                                      </h4>
                                    </div>
                                    <div className="space-y-3">
                                      {items.map((product) => (
                                        <Link
                                          key={product.id}
                                          to={`/produto/${product.id}`}
                                          className="block px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                                          onClick={() => setSolutionsDropdownOpen(false)}
                                        >
                                          <p className="text-sm font-semibold text-gray-800 hover:text-[#1a3a5c] transition-colors leading-tight">{product.name}</p>
                                          <p className="text-xs font-mono mt-1" style={{ color: groupColor }}>{product.subtitle || ''}</p>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="border-t border-gray-100 bg-gray-50/50">
                            <Link
                              to="/solucoes"
                              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#1a3a5c] hover:bg-gray-100 transition-colors"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              <span>Ver todas as soluções</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const content = (
                <>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] group-hover:w-full transition-all duration-300" />
                </>
              );

              return (
                <Link key={index} to={link.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={baseClasses}
                  >
                    {content}
                  </motion.div>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="hidden lg:block"
          >
            <GlowButton
              label="Solicite uma Proposta"
              variant="primary"
              onClick={openProposalModal}
              className="px-6 py-3 text-sm shine-continuous"
            />
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#1a3a5c] p-2 -mr-2"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <nav className="px-6 py-6 space-y-1">
          {navLinks.map((link, index) => {
            const baseClasses = "block text-gray-600 hover:text-[#1a3a5c] hover:bg-gray-50 transition-all duration-200 text-sm tracking-wide uppercase py-3 px-4 rounded-lg";

            if (link.hasDropdown) {
              return (
                <div key={index}>
                  <div
                    className="flex items-center justify-between block bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] text-white font-bold text-sm tracking-wide uppercase py-3 px-4 rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  >
                    <span>{link.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">{products.length} produtos</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  <motion.div
                    initial={false}
                    animate={{
                      height: mobileSolutionsOpen ? "auto" : 0,
                      opacity: mobileSolutionsOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2">
                      {productGroups.map((group) => {
                        const items = group.getItems();
                        if (items.length === 0) return null;
                        const groupColors: Record<string, string> = {
                          'ensacadeiras': '#f5a623',
                          'balancas': '#1a3a5c',
                          'contadoras': '#2d7d6b'
                        };
                        const groupColor = groupColors[group.key] || '#1a3a5c';
                        const isOpen = mobileCategoryOpen === group.key;
                        return (
                          <div key={group.key} className="ml-2">
                            <button
                              onClick={() => setMobileCategoryOpen(isOpen ? null : group.key)}
                              className="w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold text-sm tracking-wide transition-all duration-200"
                              style={{ 
                                backgroundColor: isOpen ? `${groupColor}20` : 'transparent',
                                color: groupColor 
                              }}
                            >
                              <span className="text-base font-extrabold">{group.label}</span>
                              <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <motion.div
                              initial={false}
                              animate={{
                                height: isOpen ? "auto" : 0,
                                opacity: isOpen ? 1 : 0
                              }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 space-y-1">
                                {items.map((product, pIndex) => (
                                  <Link
                                    key={product.id}
                                    to={`/produto/${product.id}`}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileSolutionsOpen(false);
                                      setMobileCategoryOpen(null);
                                    }}
                                  >
                                    <motion.div
                                      initial={{ x: -10, opacity: 0 }}
                                      animate={isOpen ? { x: 0, opacity: 1 } : {}}
                                      transition={{ delay: pIndex * 0.05 }}
                                      className="block text-gray-600 hover:text-[#1a3a5c] hover:bg-gray-50 transition-all duration-200 text-sm py-2 px-3 rounded-lg"
                                    >
                                      {product.name}
                                    </motion.div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              );
            }

            return link.isRoute ? (
              <Link key={index} to={link.href} onClick={() => setMobileMenuOpen(false)}>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={mobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className={baseClasses}
                >
                  {link.name}
                </motion.div>
              </Link>
            ) : (
              <motion.a
                key={index}
                href={link.href}
                initial={{ x: -20, opacity: 0 }}
                animate={mobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.05 }}
                onClick={(e) => {
                  handleNavClick(e, link);
                  setMobileMenuOpen(false);
                }}
                className={baseClasses}
              >
                {link.name}
              </motion.a>
            );
          })}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={mobileMenuOpen ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: navLinks.length * 0.05 }}
            className="mt-4"
          >
            <GlowButton
              label="Solicite uma Proposta"
              variant="primary"
              onClick={() => {
                setMobileMenuOpen(false);
                openProposalModal();
              }}
              className="w-full px-6 py-3 text-sm shine-continuous"
            />
          </motion.div>
        </nav>
      </motion.div>

      {/* Scroll Progress Bar */}
      {scrolled && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#1a3a5c] via-[#f5a623] to-[#1a3a5c]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      )}
    </motion.header>
  );
}
