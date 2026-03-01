import { Check, X, AlertTriangle, Crown, Calendar, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/971585707110?text=";

interface PricingFeature {
  text: string;
  included: boolean;
  warning?: boolean;
}

interface PricingCardProps {
  name: string;
  tagline: string;
  price: number;
  unit: string;
  savings?: string;
  isVip?: boolean;
  isAnnual?: boolean;
  features: PricingFeature[];
  perfectFor: string;
  popular?: boolean;
}

export function PricingCard({
  name,
  tagline,
  price,
  unit,
  savings,
  isVip = false,
  isAnnual = false,
  features,
  perfectFor,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-1 transition-all duration-300 hover:-translate-y-1",
        isVip ? "bg-gradient-to-br from-gold via-gold/80 to-gold/60" : "bg-border",
        popular && "scale-105 z-10"
      )}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-gold text-gold-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-gold">
            <Star className="w-4 h-4 fill-current" />
            Most Popular
          </div>
        </div>
      )}

      <div className={cn(
        "bg-card rounded-xl p-6 h-full flex flex-col",
        isVip ? "shadow-gold" : "shadow-card"
      )}>
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {isVip ? (
              <Crown className="w-5 h-5 text-gold" />
            ) : (
              <Calendar className="w-5 h-5 text-primary" />
            )}
            <span className={cn(
              "text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full",
              isAnnual 
                ? "bg-success-light text-success" 
                : "bg-info-light text-info"
            )}>
              {isAnnual ? "Annual" : "Monthly"}
            </span>
          </div>
          <h3 className={cn(
            "text-xl font-bold mb-1",
            isVip ? "text-gold" : "text-foreground"
          )}>
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className={cn(
              "text-4xl font-extrabold",
              isVip ? "text-gold" : "text-foreground"
            )}>
              {price}
            </span>
            <span className="text-lg font-semibold text-muted-foreground">AED</span>
          </div>
          <p className="text-sm text-muted-foreground">{unit}</p>
          {savings && (
            <div className="inline-flex items-center gap-1 mt-2 bg-success-light text-success px-2 py-1 rounded-full text-xs font-semibold">
              <Check className="w-3 h-3" />
              {savings}
            </div>
          )}
        </div>

        {/* Features */}
        <div className="flex-1 mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            {isVip ? "Everything in Basic PLUS:" : "What's Included:"}
          </p>
          <ul className="space-y-2.5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm">
                {feature.included ? (
                  <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                ) : feature.warning ? (
                  <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                )}
                <span className={cn(
                  feature.included ? "text-foreground" : "text-muted-foreground"
                )}>
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Perfect for */}
        <div className="mb-6 p-3 bg-muted rounded-lg">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Perfect for:
          </p>
          <p className="text-sm text-foreground">{perfectFor}</p>
        </div>

        {/* CTA */}
        <Button
          variant={isVip ? "gold" : "default"}
          size="lg"
          className="w-full"
          asChild
        >
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - ${name} plan`)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Get Started
          </a>
        </Button>
      </div>
    </div>
  );
}
