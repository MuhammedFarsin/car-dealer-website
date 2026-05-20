import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Layout, Globe, Megaphone, Palette, Search, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const services = [
  {
    icon: Layout,
    title: "Dealer Landing Page Design",
    description: "High-converting landing pages designed specifically for car dealers. Optimized for mobile, fast-loading, and built to capture enquiries.",
    features: ["Mobile-first design", "WhatsApp integration", "Lead capture forms", "Fast loading speed"]
  },
  {
    icon: Globe,
    title: "Full Car Dealership Website",
    description: "Complete website solutions with stock management, vehicle listings, and integrated contact systems. Everything you need to showcase your inventory.",
    features: ["Vehicle listing system", "Stock management", "SEO optimized", "Analytics dashboard"]
  },
  {
    icon: Megaphone,
    title: "Facebook & Instagram Ads",
    description: "Targeted social media advertising campaigns that reach car buyers in your local area. We handle everything from creative to conversion.",
    features: ["Audience targeting", "Creative design", "A/B testing", "ROI tracking"]
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    description: "Stand out from competitors with professional branding. From logos to social media graphics, we create a cohesive visual identity.",
    features: ["Logo design", "Brand guidelines", "Social media assets", "Print materials"]
  },
  {
    icon: Search,
    title: "SEO & Lead Funnel Optimization",
    description: "Get found on Google when buyers search for cars in your area. We optimize your online presence for maximum visibility.",
    features: ["Local SEO", "Google Business", "Keyword strategy", "Conversion optimization"]
  },
];

const whyChooseUs = [
  { title: "Automotive Specialists", description: "We only work with car dealers, so we understand your unique challenges" },
  { title: "Results-Driven", description: "Our clients see an average 300% increase in online enquiries" },
  { title: "Fast Turnaround", description: "Most projects completed within 2-4 weeks" },
  { title: "Ongoing Support", description: "We're here to help long after your website goes live" },
];

const Services = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-14 sm:pt-16 bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Services
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Digital Solutions for <span className="text-accent">Car Dealers</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              From stunning websites to powerful ad campaigns, we provide everything 
              UK car dealers need to dominate online and generate more enquiries.
            </p>
            <Link to="/contact-us">
              <Button variant="whatsapp" size="lg" className="group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-1">
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
              Comprehensive Digital Services
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Each service is tailored specifically for the automotive industry to maximize your results.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border hover:border-accent/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact-us" className="inline-flex items-center gap-1.5 sm:gap-2 text-accent font-medium text-xs sm:text-sm mt-3 sm:mt-4 hover:gap-2 sm:hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Why BrandWox</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 sm:mb-6">
                The Smart Choice for UK Dealers
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8">
                We're not a generic web agency. We've dedicated ourselves to understanding the UK automotive 
                market inside and out. This specialization means better results for your dealership.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-3 sm:p-4 border border-border">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent mb-1 sm:mb-2">300%</div>
              <div className="text-white text-base sm:text-lg mb-3 sm:mb-4">Average Increase in Enquiries</div>
              <p className="text-white/70 text-xs sm:text-sm mb-4 sm:mb-6">
                Our clients consistently see dramatic improvements in their online lead generation 
                after working with BrandWox.
              </p>
              <div className="flex justify-center gap-6 sm:gap-8">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                  <div className="text-white/60 text-xs sm:text-sm">Dealers Served</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">98%</div>
                  <div className="text-white/60 text-xs sm:text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-1">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-lg">
              Ready to take your dealership to the next level? Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact-us">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  Start Your Project
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 text-sm sm:text-base">
                  View Pricing
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

export default Services;
