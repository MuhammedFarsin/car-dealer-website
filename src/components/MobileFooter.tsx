import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = `https://wa.me/919207509746?text=${encodeURIComponent("Hi BrandWox! I'm interested in your dealership website services.")}`;

const MobileFooter = () => {
  const handleClick = () => {
    window.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#25D366] p-2 sm:p-3 shadow-elevated safe-area-inset-bottom">
      <Button 
        variant="whatsapp" 
        size="default"
        onClick={handleClick}
        className="w-full bg-white text-[#25D366] hover:bg-white/90 font-bold text-sm sm:text-base shadow-lg h-10 sm:h-11"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <span className="truncate">Message Us on WhatsApp</span>
      </Button>
      <p className="text-white/90 text-[10px] sm:text-xs text-center mt-1.5 sm:mt-2 flex items-center justify-center gap-1">
        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full animate-pulse" />
        Usually replies within 5 minutes
      </p>
    </div>
  );
};

export default MobileFooter;
