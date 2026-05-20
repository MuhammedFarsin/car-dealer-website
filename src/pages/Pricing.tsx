import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Star, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    price: "£499",
    period: "one-time",
    description: "Perfect for dealers just getting started online",
    features: [
      "Single landing page",
      "Mobile responsive design",
      "WhatsApp integration",
      "Basic SEO setup",
      "Contact form",
      "1 round of revisions",
      "Delivered in 7 days",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    icon: Star,
    price: "£1,299",
    period: "one-time",
    description: "Most popular choice for serious dealers",
    features: [
      "Full dealer website (5+ pages)",
      "Vehicle listing system",
      "Mobile responsive design",
      "WhatsApp & form integration",
      "Advanced SEO optimization",
      "Google Analytics setup",
      "Social media integration",
      "3 rounds of revisions",
      "Delivered in 14 days",
      "30 days support included",
    ],
    highlighted: true,
    cta: "Choose Growth",
  },
  {
    name: "Scale",
    icon: Crown,
    price: "Custom",
    period: "bespoke",
    description: "For dealers who want the complete package",
    features: [
      "Everything in Growth, plus:",
      "Custom design & branding",
      "Facebook & Instagram ads setup",
      "Monthly ad management",
      "SEO & content strategy",
      "Lead funnel optimization",
      "Priority support",
      "Dedicated account manager",
      "Monthly performance reports",
    ],
    highlighted: false,
    cta: "Contact Us",
  },
];

const faqs = [
  {
    question: "How long does it take to build my website?",
    answer: "Starter packages are delivered within 7 days, Growth packages within 14 days. Scale packages are custom quoted based on scope."
  },
  {
    question: "Do I need to pay monthly fees?",
    answer: "The Starter and Growth plans are one-time payments. You only pay for hosting (around £10-20/month) separately. Scale plans may include ongoing services."
  },
  {
    question: "Can I update my website myself?",
    answer: "Yes! We build with user-friendly systems and provide training. Or we can handle updates for you at competitive rates."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 100% satisfaction guarantee. If you're not happy with the initial design concept, we'll refund you in full."
  },
];

const Pricing = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-14 sm:pt-16 bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-br from-secondary via-secondary/95 to-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Simple Pricing
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Invest in Your <span className="text-accent">Success</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your dealership's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 sm:py-16 md:py-20 -mt-4 sm:-mt-8">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 ${
                  plan.highlighted 
                    ? "bg-secondary text-white border-2 border-accent shadow-[0_0_40px_rgba(255,199,0,0.2)] sm:scale-105 z-10" 
                    : "bg-card border border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-0.5 sm:py-1 bg-accent text-secondary text-xs sm:text-sm font-bold rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
                  plan.highlighted ? "bg-accent/20" : "bg-accent/10"
                }`}>
                  <plan.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${plan.highlighted ? "text-accent" : "text-accent"}`} />
                </div>
                
                <h3 className={`font-heading text-xl sm:text-2xl font-bold mb-1 sm:mb-2 ${
                  plan.highlighted ? "text-white" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${plan.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <span className={`text-3xl sm:text-4xl font-bold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xs sm:text-sm ml-1 sm:ml-2 ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-accent" : "text-accent"
                      }`} />
                      <span className={`text-xs sm:text-sm ${plan.highlighted ? "text-white/90" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact-us" className="block">
                  <Button 
                    className={`w-full font-bold text-sm sm:text-base h-10 sm:h-11 ${
                      plan.highlighted 
                        ? "bg-accent hover:bg-accent/90 text-secondary" 
                        : "bg-secondary hover:bg-secondary/90 text-white"
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-8 sm:py-12 bg-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-1">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
              💯 100% Satisfaction Guarantee
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Not happy with the initial design concept? We'll refund you in full, no questions asked. 
              We're confident you'll love what we create.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2">
                Common Questions
              </h2>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                  <h4 className="font-heading font-bold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-1">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Get More Enquiries?
            </h2>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-lg">
              Let's discuss which package is right for your dealership.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact-us">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  Chat With Us
                </Button>
              </Link>
            </div>
            <p className="text-white/60 text-xs sm:text-sm mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#25D366] rounded-full animate-pulse" />
              Usually replies within 5 minutes
            </p>
          </div>
        </div>
      </section>

        <Footer />
        <MobileFooter />
      </main>
    </PageTransition>
  );
};

export default Pricing;
