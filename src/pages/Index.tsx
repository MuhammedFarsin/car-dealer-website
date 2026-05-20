import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import React, { Suspense } from "react";

// ✅ Lazy load ALL below-the-fold
const BenefitsSection = React.lazy(() => import("@/components/BenefitsSection"));
const ProofSection = React.lazy(() => import("@/components/ProofSection"));
const ContactSection = React.lazy(() => import("@/components/ContactSection"));
const AboutSection = React.lazy(() => import("@/components/AboutUsSection"));

const Index = () => {
  return (
    <main className="min-h-screen pt-14 sm:pt-16">
      
      {/* ABOVE THE FOLD (keep normal) */}
      <Header />
      <HeroSection />

        {/* BELOW THE FOLD (lazy load with suspense) */}
      <Suspense fallback={<div className="h-40" />}>
        <AboutSection />
      </Suspense>

      {/* BELOW THE FOLD (split properly) */}
      <Suspense fallback={<div className="h-40" />}>
        <BenefitsSection />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <ProofSection />
      </Suspense>

      <Suspense fallback={<div className="h-40" />}>
        <ContactSection />
      </Suspense>

        <Footer />

        <MobileFooter />

    </main>
  );
};

export default Index;