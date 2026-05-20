import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Target, Zap, Rocket, TrendingUp, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";

const processSteps = [
  { icon: Target, title: "Design", description: "We craft stunning, conversion-focused designs tailored for car dealers" },
  { icon: Zap, title: "Build", description: "Lightning-fast development with mobile-first, SEO-optimized code" },
  { icon: Rocket, title: "Launch", description: "Seamless deployment with full testing and quality assurance" },
  { icon: TrendingUp, title: "Scale", description: "Ongoing optimization to maximize your enquiries and growth" },
];

const testimonials = [
  {
    quote: "BrandWox transformed our online presence. Enquiries increased by 300% in the first month!",
    author: "James Mitchell",
    role: "Owner, Mitchell Motors",
    location: "Manchester"
  },
  {
    quote: "Professional, fast, and they truly understand the car dealer business. Highly recommend.",
    author: "Sarah Thompson",
    role: "Director, Thompson Auto Sales",
    location: "Birmingham"
  },
  {
    quote: "Best investment we made. Our website now generates more leads than all other channels combined.",
    author: "David Wilson",
    role: "Managing Director, Wilson Cars",
    location: "Leeds"
  },
];

const trustBadges = [
  { icon: Shield, label: "UK Based Agency" },
  { icon: Award, label: "5-Star Rated" },
  { icon: Users, label: "50+ Dealers Served" },
];

const AboutUs = () => {
  return (
    <PageTransition>
      <main className="min-h-screen pt-14 sm:pt-16 bg-background">
        <Header />
      
      {/* Hero Section */}
      <section className="py-10 sm:py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center px-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About BrandWox
            </span>
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              We Help UK Car Dealers <span className="text-accent">Get More Enquiries</span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              BrandWox is a specialist digital agency focused exclusively on the UK automotive industry. 
              We understand what makes car buyers click, call, and convert.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-6 justify-center">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-white/90">
                  <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 sm:mb-6">
                Why We Specialize in Automotive Marketing
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">
                The UK used car market is fiercely competitive. Generic websites and cookie-cutter marketing 
                simply don't cut it anymore. Car buyers expect professional, fast-loading websites with 
                easy contact options.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">
                That's why we focus 100% on car dealers. We know the buyer journey, the objections, 
                and exactly what triggers someone to send an enquiry. Our websites are built to convert 
                browsers into buyers.
              </p>
              <div className="flex gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">50+</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">Dealers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">300%</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">Avg. Enquiry Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-accent">24hrs</div>
                  <div className="text-[10px] sm:text-sm text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-border">
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">What Makes Us Different</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">We only work with car dealers – no distractions</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">Conversion-focused designs backed by data</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">WhatsApp-first contact strategy for instant leads</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent" />
                  </div>
                  <span className="text-muted-foreground text-sm sm:text-base">Mobile-optimized for on-the-go car shoppers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-1">
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
              From Concept to Conversion
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Our proven 4-step process ensures your dealership gets a website that actually generates results.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-border hover:border-accent/50 transition-colors h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-2 sm:mb-4">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  </div>
                  <div className="text-[10px] sm:text-sm text-accent font-medium mb-0.5 sm:mb-1">Step {index + 1}</div>
                  <h3 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-16 md:py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-accent font-semibold text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3 sm:mb-4">
              Trusted by UK Dealers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-6 border border-border">
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground text-sm sm:text-base mb-3 sm:mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-accent">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center px-1">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to Transform Your Dealership?
            </h2>
            <p className="text-white/80 mb-6 sm:mb-8 text-sm sm:text-lg">
              Join 50+ UK car dealers who trust BrandWox to drive more enquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/contact-us">
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto group shadow-[0_0_25px_rgba(37,211,102,0.4)] bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  Get Started Today
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

export default AboutUs;
