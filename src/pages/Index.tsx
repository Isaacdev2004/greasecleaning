import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { RecommendationQuiz } from "@/components/RecommendationQuiz";
import { HowToSubscribe } from "@/components/HowToSubscribe";
import { SpecialOffers } from "@/components/SpecialOffers";
import { GreaseTrapTypes } from "@/components/GreaseTrapTypes";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { trapTypes } from "@/data/trapPricing";
import { useState } from "react";

const Index = () => {
  const [activeTrapId, setActiveTrapId] = useState("ag1d");
  const activeTrap = trapTypes.find((trap) => trap.id === activeTrapId) ?? trapTypes[0];

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="pt-16">
        <HeroSection />
        <GreaseTrapTypes activeTab={activeTrapId} onTabChange={setActiveTrapId} />
        <PricingSection trap={activeTrap} />
        <ComparisonTable trap={activeTrap} />
        <RecommendationQuiz />
        <HowToSubscribe />
        <SpecialOffers />
        <section id="faq">
          <FAQSection />
        </section>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
