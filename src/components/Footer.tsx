import { Link } from "react-router-dom";

const footerLinks = [
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact" },
];

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary text-secondary-foreground pb-28 lg:pb-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-xl mb-3">
              Brand<span className="text-accent">Wox</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm">
              Specialist digital agency for UK car dealers. We build websites that generate enquiries.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className="text-secondary-foreground/60 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">
              Get In Touch
            </h4>
            <p className="text-secondary-foreground/60 text-sm mb-2">brandwoxsolution@gmail.com</p>
            <p className="text-secondary-foreground/60 text-sm">Mon - Fri: 9am - 6pm GMT</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <p className="text-secondary-foreground/40 text-sm text-center">
            © {new Date().getFullYear()} BrandWox. Built for UK car dealers who want more enquiries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
