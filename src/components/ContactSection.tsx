import { MessageCircle, AlertTriangle, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = `https://wa.me/919207509746?text=${encodeURIComponent("Hi BrandWox! I'm interested in your dealership website services.")}`;

const ContactSection = () => {
  const handleWhatsAppClick = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-28 bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center px-1">
          {/* Warning badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 text-accent-foreground text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-fade-in">
            <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
            Don't Let Your Site Leak Money
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get More Enquiries{" "}
            <span className="text-primary">Without Tech Chaos</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            If your site looks slow, outdated, or doesn't push buyers to WhatsApp or Call — 
            you're leaking money silently. <strong className="text-foreground">We fix that.</strong>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5 sm:gap-3 items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
              <Button onClick={handleWhatsAppClick} variant="whatsapp" size="lg" className="group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="truncate">Chat on WhatsApp Now</span>
              </Button>
              <Button variant="cta" size="lg" className="group text-sm sm:text-base">
                <ClipboardCheck className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                Get Your Free Audit
              </Button>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25D366] rounded-full animate-pulse" />
              Usually replies within 5 minutes
            </p>
          </div>
          
          {/* Delivery promise */}
          <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-muted border border-border animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-foreground font-medium text-sm sm:text-base">
              ⚡ Concept homepages delivered in <strong>48–72 hours</strong>
            </p>
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">
              Full rebuilds in 5–7 days. Proof collected after delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
