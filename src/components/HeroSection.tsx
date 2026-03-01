import { Button } from "@/components/ui/button";
import { Check, Shield, Calendar, Wallet, Phone, ArrowDown } from "lucide-react";

const heroFeatures = [
  { icon: Calendar, text: "Monthly & Annual Options - Flexibility for every business" },
  { icon: Shield, text: "Basic & VIP Packages - From essential to premium service" },
  { icon: Check, text: "Guaranteed Compliance - Never face municipality fines again" },
  { icon: Wallet, text: "Predictable Pricing - Know exactly what you'll pay each month" },
  { icon: Phone, text: "Emergency Support - VIP includes free drain blockage removal" },
];

export function HeroSection() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToQuiz = () => {
    document.getElementById("recommendation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Shield className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">Dubai Municipality Certified Partner</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Subscribe to Stress-Free{" "}
            <span className="relative">
              Grease Trap Compliance
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" aria-hidden="true">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-gold" />
              </svg>
            </span>
            {" "}in Dubai
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Choose Monthly or Annual Plans. Basic Service or Premium VIP. All-in-One Compliance Solution.
          </p>

          {/* Feature bullets */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {heroFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-primary-foreground/5 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/10"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-gold" />
                </div>
                <span className="text-sm text-primary-foreground/90 leading-relaxed">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="heroOutline" size="xl" onClick={scrollToPricing} className="group">
              View All Plans & Pricing
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="gold" size="xl" onClick={scrollToQuiz}>
              Find My Perfect Plan
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/60 text-sm animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              <span>500+ Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              <span>100% Compliance Rate</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold" />
              <span>24/7 VIP Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto" aria-hidden="true">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
