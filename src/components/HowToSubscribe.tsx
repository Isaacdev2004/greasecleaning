import { FileText, Calculator, MapPin, CalendarCheck, CreditCard, Building2, Receipt } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Select Your Plan",
    description: "Choose from Monthly Basic, Monthly VIP, Annual Basic, or Annual VIP",
  },
  {
    icon: Calculator,
    title: "Choose Visit Frequency",
    description: "Select 2, 3, or 4 visits per month based on your needs",
  },
  {
    icon: MapPin,
    title: "Provide Details",
    description: "Share your business name, location, and contact information",
  },
  {
    icon: CalendarCheck,
    title: "Schedule First Visit",
    description: "We'll contact you within 24 hours to confirm your first service",
  },
];

const paymentMethods = [
  { icon: CreditCard, label: "Credit/Debit Card", description: "Monthly auto-debit" },
  { icon: Building2, label: "Bank Transfer", description: "Annual payments" },
  { icon: Receipt, label: "Corporate PO", description: "For larger businesses" },
];

export function HowToSubscribe() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How to Subscribe
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in 4 simple steps — we make compliance easy
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="bg-card rounded-xl p-6 text-center shadow-card relative z-10">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Payment Options
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 text-center shadow-card border border-border"
              >
                <method.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold text-foreground mb-1">{method.label}</h4>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
