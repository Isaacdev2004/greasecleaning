import { Gift, Users, Percent, Shield, Wrench, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = `https://wa.me/971585707110?text=${encodeURIComponent("I want grease trap cleaning - custom quote for multiple locations")}`;

const newCustomerOffers = [
  { icon: Percent, title: "First Month 50% Off", description: "All monthly plans" },
  { icon: Shield, title: "Free Compliance Audit", description: "With any annual plan" },
  { icon: Wrench, title: "Free Emergency Kit", description: "With VIP annual signup" },
];

export function SpecialOffers() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Gift className="w-4 h-4 text-gold" />
            Limited Time Offers
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Special Offers for New Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            Start saving from day one with these exclusive deals
          </p>
        </div>

        {/* New Customer Offers */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {newCustomerOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center shadow-card border-2 border-gold/20 hover:border-gold/50 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <offer.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">{offer.title}</h3>
              <p className="text-muted-foreground">{offer.description}</p>
            </div>
          ))}
        </div>

        {/* Bundle Offers */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary-foreground/80" />
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">
              Multiple Locations?
            </h3>
            <p className="text-primary-foreground/80 mb-2">
              Get <span className="font-bold text-primary-foreground">15% discount</span> on 3+ locations
            </p>
            <p className="text-primary-foreground/80 mb-6">
              Plus <span className="font-bold text-primary-foreground">1 month free</span> for every referral
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
