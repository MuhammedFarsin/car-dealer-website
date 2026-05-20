import { TrendingUp, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "3x",
    label: "More Enquiries",
    description: "Average increase in dealer leads",
  },
  {
    icon: Clock,
    value: "<2s",
    label: "Load Time",
    description: "Mobile-first performance",
  },
  {
    icon: Users,
    value: "100+",
    label: "UK Dealers",
    description: "Trust our rebuilds",
  },
];

const ProofSection = () => {
  return (
    <section id="proof" className="py-20 lg:py-28 bg-secondary text-secondary-foreground">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Real Results From{" "}
            <span className="text-accent">Rebuilt Dealer Pages</span>
          </h2>
          <p className="text-secondary-foreground/80 text-lg">
            We focus on one thing: getting more calls and messages to your showroom.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="inline-flex w-16 h-16 rounded-2xl cta-gradient items-center justify-center mb-6">
                <stat.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="text-5xl font-extrabold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-bold mb-1">{stat.label}</div>
              <p className="text-secondary-foreground/70 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Social proof placeholder */}
        <div className="text-center p-8 rounded-2xl border-2 border-dashed border-white/20 bg-white/5">
          <p className="text-secondary-foreground/60 text-sm">
            📸 Speed comparison screenshots & enquiry-focused homepage samples added after first deliveries
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
