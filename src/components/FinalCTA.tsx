import { Button } from "@/components/ui/button";
import { Phone, FileText, MessageSquare, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "+971585707110";
const PHONE_DISPLAY = "+971 58 570 7110";
const EMAIL = "sales@greasetrapcleaning.ae";
const WHATSAPP_URL = `https://wa.me/971585707110?text=${encodeURIComponent("I want grease trap cleaning")}`;

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container-section relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Still Unsure? We're Here to Help
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Get personalized guidance from our compliance experts
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Phone className="w-10 h-10 mx-auto mb-4 text-gold" />
              <h3 className="font-bold text-primary-foreground mb-2">Talk to an Expert</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                Free 15-minute consultation to choose the right plan
              </p>
              <Button variant="heroOutline" size="sm" className="w-full" asChild>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <Phone className="w-4 h-4 mr-1" />
                  Call Now
                </a>
              </Button>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <FileText className="w-10 h-10 mx-auto mb-4 text-gold" />
              <h3 className="font-bold text-primary-foreground mb-2">Custom Quote</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                For multiple locations or special requirements
              </p>
              <Button variant="heroOutline" size="sm" className="w-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Get Quote
                </a>
              </Button>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <MessageSquare className="w-10 h-10 mx-auto mb-4 text-gold" />
              <h3 className="font-bold text-primary-foreground mb-2">Sample Report</h3>
              <p className="text-sm text-primary-foreground/70 mb-4">
                See what you'll receive after each service visit
              </p>
              <Button variant="heroOutline" size="sm" className="w-full" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  View Sample
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Start My Subscription Today
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/60">
            Questions? Call us at <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-primary-foreground hover:underline">{PHONE_DISPLAY}</a> or email <a href={`mailto:${EMAIL}`} className="font-semibold text-primary-foreground hover:underline">{EMAIL}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
