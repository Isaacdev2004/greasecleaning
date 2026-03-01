import { Shield, Mail, Phone, MapPin } from "lucide-react";

const PHONE_NUMBER = "+971585707110";
const PHONE_DISPLAY = "+971 58 570 7110";
const EMAIL = "sales@greasetrapcleaning.ae";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-section">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-foreground font-bold text-sm">GT</span>
              </div>
              <span className="font-bold">GreaseClean</span>
            </div>
            <p className="text-sm text-background/70 mb-4">
              Dubai's trusted partner for grease trap compliance. Professional service, guaranteed results.
            </p>
            <div className="flex items-center gap-2 text-sm text-background/70">
              <Shield className="w-4 h-4" />
              <span>Dubai Municipality Certified</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#pricing" className="hover:text-background transition-colors">Pricing Plans</a></li>
              <li><a href="#recommendation" className="hover:text-background transition-colors">Find Your Plan</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-background transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-background transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>{EMAIL}</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} GreaseClean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
