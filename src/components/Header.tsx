import { Button } from "@/components/ui/button";
import { Phone, Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const PHONE_NUMBER = "+971585707110";
const PHONE_DISPLAY = "+971 58 570 7110";
const WHATSAPP_URL = `https://wa.me/971585707110?text=${encodeURIComponent("I want grease trap cleaning")}`;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-section">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GT</span>
            </div>
            <span className="font-bold text-foreground">GreaseClean</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("recommendation")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Find Your Plan
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Phone className="w-4 h-4" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <Button size="sm" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-1" />
                Subscribe Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("recommendation")}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Find Your Plan
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                FAQ
              </button>
              <div className="flex flex-col gap-2 mt-2">
                <Button size="sm" variant="outline" asChild>
                  <a href={`tel:${PHONE_NUMBER}`}>
                    <Phone className="w-4 h-4 mr-1" />
                    Call Us
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
