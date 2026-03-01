import { useState } from "react";
import type { TrapData } from "@/data/trapPricing";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingSectionProps {
  trap: TrapData;
}

export function PricingSection({ trap }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const visitRange = trap.minimumRequirement.includes("1-2") ? "1-2" : "2-4";
  const WHATSAPP_BASE = "https://wa.me/971585707110?text=";

  const monthlyPlans = [
    {
      id: "monthly-basic",
      name: "Monthly Basic",
      tagline: trap.monthlyBasic.tagline,
      price: `${trap.monthlyBasic.price} AED`,
      period: "per visit",
      notes: `${visitRange} visits/month`,
      features: trap.monthlyBasic.includes.slice(0, 5),
      cta: "Get Started",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - Monthly Basic (${trap.name})`)}`,
      featured: false,
    },
    {
      id: "monthly-vip",
      name: "Monthly VIP",
      tagline: trap.monthlyVip.tagline,
      price: `${trap.monthlyVip.price} AED`,
      period: "per visit",
      notes: `${visitRange} visits/month`,
      features: trap.monthlyVip.includes.slice(1, 6),
      cta: "Choose VIP",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - Monthly VIP (${trap.name})`)}`,
      featured: true,
      badge: "Most Popular",
    },
    {
      id: "monthly-enterprise",
      name: "Monthly Enterprise",
      tagline: "For multi-branch or high-demand operations",
      price: "Custom",
      period: "pricing",
      notes: "Built around your exact visit volume",
      features: [
        "Everything in VIP plus",
        "Multi-trap & multi-branch plan",
        "Custom SLA & response window",
        "Dedicated operations coordinator",
        "Priority emergency scheduling",
      ],
      cta: "Contact Sales",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I need Enterprise Monthly pricing (${trap.name})`)}`,
      featured: false,
    },
  ];

  const yearlyPlans = [
    {
      id: "annual-basic",
      name: "Annual Basic",
      tagline: trap.annualBasic.tagline,
      price: `${trap.annualBasic.price} AED`,
      period: "per visit",
      notes: trap.annualBasic.savings ?? `Annual plan`,
      features: trap.annualBasic.includes.slice(0, 5),
      cta: "Get Annual Basic",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - Annual Basic (${trap.name})`)}`,
      featured: false,
    },
    {
      id: "annual-vip",
      name: "Annual VIP",
      tagline: trap.annualVip.tagline,
      price: `${trap.annualVip.price} AED`,
      period: "per visit",
      notes: trap.annualVip.savings ?? `Annual VIP plan`,
      features: trap.annualVip.includes.slice(1, 6),
      cta: "Choose Annual VIP",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - Annual VIP (${trap.name})`)}`,
      featured: true,
      badge: "Best Value",
    },
    {
      id: "annual-enterprise",
      name: "Annual Enterprise",
      tagline: "Long-term enterprise contract pricing",
      price: "Custom",
      period: "annual",
      notes: "Best for chains and large facilities",
      features: [
        "Everything in VIP plus",
        "Annual master service agreement",
        "Dedicated account & compliance lead",
        "Custom reporting & audit pack",
        "Bundled pricing across all locations",
      ],
      cta: "Contact Sales",
      href: `${WHATSAPP_BASE}${encodeURIComponent(`I need Enterprise Annual pricing (${trap.name})`)}`,
      featured: false,
    },
  ];

  const activePlans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose What Works For You — No Hidden Fees, No Surprises
          </p>
          <p className="text-sm text-primary font-semibold mt-3">
            Selected trap type: {trap.name} ({trap.size})
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-muted border border-border">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                billingCycle === "monthly"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-colors",
                billingCycle === "yearly"
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly Plans
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {activePlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative rounded-2xl border bg-card p-6 flex flex-col",
                plan.featured
                  ? "border-primary shadow-lg ring-1 ring-primary/20 lg:-translate-y-1"
                  : "border-border shadow-card"
              )}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-4 bg-gold text-gold-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-5">{plan.tagline}</p>

              <div className="mb-5">
                <div className="flex items-end gap-2">
                  <span className={cn("text-4xl font-extrabold", plan.featured ? "text-gold" : "text-foreground")}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground pb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-success mt-1">{plan.notes}</p>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm flex items-start gap-2">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant={plan.featured ? "gold" : "default"} size="lg" className="w-full">
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gold-light text-gold-foreground px-6 py-3 rounded-full max-w-3xl">
            <span className="text-sm font-bold">{trap.vipSavings}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
