import { Zap, Phone, LayoutGrid, Timer } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Loads Under 2 Seconds",
    description: "Mobile buyers won't wait. Your site loads lightning-fast on any phone or connection.",
  },
  {
    icon: Phone,
    title: "Call + WhatsApp Always Visible",
    description: "Clear contact buttons that follow buyers as they scroll. No hunting, no friction.",
  },
  {
    icon: LayoutGrid,
    title: "Stock Displayed Like a Dealership",
    description: "Professional vehicle layouts that build trust—not like a cluttered marketplace listing.",
  },
  {
    icon: Timer,
    title: "No Delays, No Lag",
    description: "Clean, simple pages with zero confusing navigation. Buyers find what they need instantly.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-12 sm:py-16 lg:py-28 bg-card">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground mb-3 sm:mb-4">
            Why Local Dealers Win With{" "}
            <span className="text-primary">Better Websites</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">
            Your buyers are on their phones. Give them speed, clarity, and easy ways to contact you.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl hero-gradient flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm lg:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
