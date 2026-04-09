import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlowButton } from "./ui/glow-button";
import pondusSvg from "../../imports/PONDUS_SOBRE.svg";

const products = [
  { id: "pcsl-22000", name: "Contadora de Sementes", code: "PCSL 22000" },
  { id: "pebbag-1500", name: "Ensacadeira Big-Bags", code: "PEBBAG 1500" },
  { id: "pevps-2060", name: "Ensacadeira de Sopro", code: "PEVPS 2060" },
  { id: "pfd-30t", name: "Balança de Fluxo", code: "PFD 30T" },
  { id: "pebe-2000", name: "Ensacadeira com Dosagem", code: "PEBE2000" },
  { id: "peved-2060", name: "Ensacadeira Eletrônica", code: "PEVED 2060" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
                      onClick={() => navigate('/solucoes')}
                    >
                      <span>Soluções</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] group-hover:w-full transition-all duration-300" />
                    </motion.div>

                    <AnimatePresence>
                      {solutionsDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={() => setSolutionsDropdownOpen(true)}
                          onMouseLeave={() => setSolutionsDropdownOpen(false)}
                        >
                          <div className="p-2">
                            <Link
                              to="/solucoes"
                              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f5a623]/10 transition-colors group"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-[#1a3a5c] flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>SP</span>
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-[#1a3a5c]">Todas as Soluções</p>
                                <p className="text-xs text-gray-500">Veja nosso portfólio completo</p>
                              </div>
                            </Link>
                          </div>
                          <div className="border-t border-gray-100" />
                          <div className="p-2">
                            <p className="px-4 py-2 text-[9px] tracking-[0.2em] uppercase text-gray-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                              Produtos
                            </p>
                            {products.map((product) => (
                              <Link
                                key={product.id}
                                to={`/produto/${product.id}`}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#f5a623]/10 transition-colors group"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className="w-8 h-8 rounded bg-[#f6f7f8] flex items-center justify-center flex-shrink-0">
                                  <span className="text-[8px] font-bold text-[#1a3a5c]/60" style={{ fontFamily: "'DM Mono', monospace" }}>
                                    {product.code.substring(0, 3)}
                                  </span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-[#1a3a5c] truncate">{product.name}</p>
                                  <p className="text-xs text-[#f5a623]" style={{ fontFamily: "'DM Mono', monospace" }}>{product.code}</p>
                                </div>
                              </Link>
                            ))}
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
              onClick={() => {
                navigate('/contato');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
                  <Link to="/solucoes" onClick={() => setMobileMenuOpen(false)}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={mobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      className={baseClasses}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                  <div className="ml-4 space-y-1">
                    {products.map((product, pIndex) => (
                      <Link
                        key={product.id}
                        to={`/produto/${product.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <motion.div
                          initial={{ x: -20, opacity: 0 }}
                          animate={mobileMenuOpen ? { x: 0, opacity: 1 } : {}}
                          transition={{ delay: (index * 0.05) + (pIndex * 0.03) }}
                          className="block text-gray-500 hover:text-[#f5a623] hover:bg-[#f5a623]/5 transition-all duration-200 text-xs tracking-wide uppercase py-2 px-4 rounded-lg"
                        >
                          {product.name}
                        </motion.div>
                      </Link>
                    ))}
                  </div>
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
                navigate('/contato');
                window.scrollTo({ top: 0, behavior: 'smooth' });
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
