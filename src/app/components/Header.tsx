import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlowButton } from "./ui/glow-button";
import pondusSvg from "../../imports/PONDUS_SOBRE.svg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

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

  const navLinks = [
    { name: "Início", href: "/", isRoute: true },
    { name: "Soluções", href: "/solucoes", isRoute: true },
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
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => {
              const baseClasses = "relative text-gray-600 hover:text-[#1a3a5c] transition-colors duration-200 text-sm tracking-wide uppercase group py-2";
              const content = (
                <>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1a3a5c] to-[#f5a623] group-hover:w-full transition-all duration-300" />
                </>
              );

              return link.isRoute ? (
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
              ) : (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={baseClasses}
                >
                  {content}
                </motion.a>
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
