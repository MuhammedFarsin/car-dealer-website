import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Shield, label: "UK Specialists" },
  { icon: Award, label: "5-Star Rated" },
  { icon: Users, label: "50+ Dealers Served" },
];

const AboutUsSection = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-background">
    <div className="container">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">

        {/* LEFT — Text */}
        <div>
          <span className="inline-block px-3 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-4">
            Who We Are
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Digital Agency Built{" "}
            <span className="text-accent">Only for UK Car Dealers</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            BrandWox is not a generic web agency. We focus exclusively on UK used car dealerships — which means we already understand your buyers, your market, and what makes someone pick up the phone.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-6">
            From independent forecourts to multi-branch dealers, we build websites that load fast, look trustworthy, and turn visitors into enquiries — starting from day one.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-muted/40 text-xs sm:text-sm text-foreground font-medium"
              >
                <badge.icon className="w-3.5 h-3.5 text-accent" />
                {badge.label}
              </div>
            ))}
          </div>

          <Link to="/about-us">
            <Button variant="outline" className="group border-accent/40 hover:border-accent text-sm">
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* RIGHT — Stats cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { value: "300%", label: "Average enquiry increase", bg: "bg-secondary" },
            { value: "50+", label: "UK dealers served", bg: "bg-accent/100" },
            { value: "5–7", label: "Days to go live", bg: "bg-accent/100" },
            { value: "5★", label: "Average client rating", bg: "bg-secondary" },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50`}
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
                {item.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm leading-snug">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  </section>
);

export default AboutUsSection;