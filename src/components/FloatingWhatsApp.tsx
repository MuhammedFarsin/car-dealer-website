import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = `https://wa.me/919207509746?text=${encodeURIComponent("Hi BrandWox! I'm interested in your dealership website services.")}`;

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden lg:block animate-fade-in">
      <Button 
        variant="whatsapp" 
        size="icon"
        onClick={handleClick}
        className="w-14 h-14 rounded-full shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] hover:scale-110 transition-all duration-200"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
    </div>
  );
};

export default FloatingWhatsApp;
