import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pondusSvg from "../../imports/PONDUS_SOBRE.svg";

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    // Map hash links to routes
    const routeMap: { [key: string]: string } = {
      '#inicio': '/',
      '#solucoes': '/solucoes',
      '#quem-somos': '/quem-somos',
      '#clientes': '/clientes',
      '#blog': '/blog',
      '#contato': '/contato'
    };

    // Check if it's a route link
    if (routeMap[href]) {
      navigate(routeMap[href]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If we're not on the home page and trying to scroll to a section, go to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <footer className="relative bg-[#1a3a5c] border-t border-[#1a3a5c]/20 overflow-hidden">
      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f5a623] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-12 md:mb-16">
          {/* Logo & Description */}
          <div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="mb-6"
            >
              <img
                src={pondusSvg}
                alt="PONDUS Tecnologia Industrial"
                className="h-16 w-auto"
              />
            </motion.div>
            <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
              Soluções em pesagem, contagem e ensaque para agroindústrias, sementeiras, fertilizantes e operações com granéis.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "https://www.youtube.com/@Pondus2022", label: "YouTube" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 hover:border-[#f5a623] hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-[#f5a623] transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white mb-6 tracking-wide uppercase text-sm" style={{ fontWeight: 600 }}>
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Soluções", href: "#solucoes" },
                { name: "Quem Somos", href: "#quem-somos" },
                { name: "Clientes", href: "#clientes" },
                { name: "Blog", href: "#blog" },
                { name: "Contato", href: "#contato" }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300 hover:text-[#f5a623] transition-colors duration-200 inline-block text-sm md:text-base"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Soluções */}
          <div>
            <h4 className="text-white mb-6 tracking-wide uppercase text-sm" style={{ fontWeight: 600 }}>
              Soluções
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Contadora de Sementes", href: "/produto/contadora-sementes-pcsl" },
                { name: "Ensacadeira para Big-Bags", href: "/produto/big-bag" },
                { name: "Ensacadeira de Sopro", href: "/produto/ensacadeira-sopro-pevps" },
                { name: "Balança de Fluxo", href: "/produto/balanca-fluxo-pfd" },
                { name: "Ensacadeira Gravimétrica", href: "/produto/ensacadeira-gravimetrica-pevpd" },
                { name: "Ensacadeira para Ração", href: "/produto/ensacadeira-racao-pevprd" },
                { name: "Balança de Expedição", href: "/produto/balanca-expedicao-ppcd" },
                { name: "Big-Bag Básica", href: "/produto/big-bag-basica-pebe" },
                { name: "Big-Bag Automática", href: "/produto/big-bag-automatica-pebbag" }
              ].map((product, index) => (
                <li key={index}>
                  <motion.a
                    href={product.href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-300 hover:text-[#f5a623] transition-colors duration-200 inline-block text-sm md:text-base"
                  >
                    {product.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white mb-6 tracking-wide uppercase text-sm" style={{ fontWeight: 600 }}>
              Contato
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1.5 uppercase tracking-wide">Endereço</p>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Rua 19 de Outubro, 1561<br />
                    Bairro São José<br />
                    Ijuí – RS, CEP 98700-000
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#f5a623] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs mb-1.5 uppercase tracking-wide">WhatsApp</p>
                  <a href="https://wa.me/555599900799" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#f5a623] transition-colors block text-sm">
                    +55 (55) 99900-0799
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 PONDUS Tecnologia Industrial. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400 hover:text-[#f5a623] transition-colors"
            >
              Política de Privacidade
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400 hover:text-[#f5a623] transition-colors"
            >
              Termos de Uso
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1a3a5c] via-[#f5a623] to-[#1a3a5c]" />
    </footer>
  );
}
