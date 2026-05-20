import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoFull from "../assets/logo-full.webp";
import logoIcon from "../assets/logo-icon.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [iconLoaded, setIconLoaded] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-white/10">
        <div className="container h-16 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50" onClick={closeMenu}>
            {/* Skeleton (Desktop) */}
            {!logoLoaded && (
              <div className="hidden md:block h-36 w-[160px] -my-10 rounded-md bg-white/10 animate-pulse" />
            )}

            {/* Skeleton (Mobile) */}
            {!iconLoaded && (
              <div className="block md:hidden h-10 w-10 rounded-md bg-white/10 animate-pulse" />
            )}

            {/* Desktop Logo */}
            <img 
              src={logoFull} 
              alt="BrandWox" 
              onLoad={() => setLogoLoaded(true)}
              className={`hidden md:block h-36 w-auto -my-10 transition-opacity duration-300 ${
                logoLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
              width={400}
              height={144}
              loading="lazy"
              {...{ fetchpriority: "high" }}
              decoding="async"
            />

            {/* Mobile Logo */}
            <img 
              src={logoIcon} 
              alt="BrandWox" 
              onLoad={() => setIconLoaded(true)}
              className={`block md:hidden h-10 w-auto transition-opacity duration-300 ${
                iconLoaded ? "opacity-100" : "opacity-0 absolute"
              }`}
              width={40}
              height={40}
              loading="lazy"
              
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent hover:after:w-full after:transition-all ${
                  location.pathname === link.href 
                    ? "text-accent after:w-full" 
                    : "text-white/90 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop CTA */}
          <Link 
            to="/contact-us"
            className="hidden md:block text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            Get Free Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-secondary border-l border-white/10 z-40 transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col pt-20 px-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={closeMenu}
              className={`text-base font-medium py-4 border-b border-white/10 transition-colors ${
                location.pathname === link.href 
                  ? "text-accent" 
                  : "text-white/90 hover:text-accent"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen ? "slideIn 0.3s ease-out forwards" : "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile CTA */}
          <Link
            to="/contact-us"
            onClick={closeMenu}
            className="mt-6 w-full py-3 px-6 bg-accent text-secondary text-center font-bold rounded-lg hover:bg-accent/90 transition-colors"
          >
            Get Free Audit
          </Link>
        </nav>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header;