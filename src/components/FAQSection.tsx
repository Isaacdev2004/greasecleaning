import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "How often does my grease trap need cleaning?",
    answer:
      "Small grease traps (15-40 gallons): 2-4 times per month. Large grease traps (100-135 gallons): 1-2 times per month. We schedule visits according to municipality guidelines.",
  },
  {
    question: "Will this service keep me compliant with Municipality regulations?",
    answer:
      "Yes. All services follow municipality guidelines and include proper grease removal, waste disposal, cleaning records, and service reports.",
  },
  {
    question: "What happens if I skip grease trap cleaning?",
    answer:
      "Skipping service can cause drain blockages, kitchen odors, overflowing traps, municipality fines, pest problems, and emergency plumbing costs.",
  },
  {
    question: "What is included in each cleaning visit?",
    answer:
      "Each visit includes grease removal, sludge removal, trap wall scraping, filter cleaning, reinstallation of covers, area cleaning, proper waste disposal, and a digital service report.",
  },
  {
    question: "What is the difference between Basic and VIP plans?",
    answer:
      "Basic: fixed schedule, lower cost, technical/jetting charged separately. VIP: flexible scheduling, priority service, free technical visits, free drain line jetting, and emergency support.",
  },
  {
    question: "When do FREE technical visits apply?",
    answer:
      "Free technical visits apply when the contract is at least 6 months old, payments are up to date, the account is active, and service schedule is followed.",
  },
  {
    question: "When is FREE drain line jetting included?",
    answer:
      "Included for VIP clients only when contract is 6+ months old, payments are current, regular visits were completed, and no scheduled service was skipped.",
  },
  {
    question: "What if my grease trap gets blocked between visits?",
    answer:
      "Emergency visits are available. VIP clients get priority service and may receive free inspection/jetting if eligible. Basic clients are charged for technical and jetting services.",
  },
  {
    question: "Can I reschedule my service visit?",
    answer:
      "Basic Plan: fixed schedule with no rescheduling. VIP Plan: flexible schedule with unlimited rescheduling and preferred time slots.",
  },
  {
    question: "What happens if I miss a scheduled visit?",
    answer:
      "Missed visits can lead to overflow, blockages, odors, pest issues, and compliance risks. Missed visits may still be charged if technicians arrive on-site.",
  },
  {
    question: "Do you dispose of grease waste properly?",
    answer:
      "Yes. All grease waste is collected and disposed of according to regulations to avoid environmental violations and fines.",
  },
  {
    question: "What if my drain line is already blocked?",
    answer:
      "A technical inspection is required. Jetting or additional cleaning may be needed. Charges apply for Basic plans. VIP clients may receive this free if eligible.",
  },
  {
    question: "Will cleaning stop bad smells?",
    answer:
      "Yes. Regular cleaning helps prevent grease buildup, bacteria growth, and drain odors in kitchens.",
  },
  {
    question: "How long does cleaning take?",
    answer:
      "Small traps: 20-30 minutes. Medium traps: 30-45 minutes. Large traps: 45-60 minutes.",
  },
  {
    question: "Do I need to stop kitchen operations?",
    answer:
      "Usually no. Our technicians work to minimize disruption, but temporary access to the grease trap area may be required.",
  },
  {
    question: "Is there a minimum contract period?",
    answer:
      "Monthly plans are flexible. Annual plans are 12 months. VIP benefits fully activate after 6 months of active service.",
  },
  {
    question: "Why choose subscription instead of one-time cleaning?",
    answer:
      "Subscriptions offer lower cost, regular maintenance, compliance support, fewer emergencies, priority service, and better budget control.",
  },
  {
    question: "What grease trap sizes do you service?",
    answer:
      "We service AG1 (15 gallons), AG2 (25 gallons), AG1.5 (35-40 gallons), Type A (40 gallons), Type B (100 gallons), and Type C (135 gallons).",
  },
  {
    question: "What causes grease traps to overflow?",
    answer:
      "Common reasons include infrequent cleaning, heavy grease use, blocked pipes, food waste, and soap buildup.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "Monthly plans are paid monthly. Annual plans provide discounted rates. Payments must remain up to date to keep VIP benefits active.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about grease trap cleaning, compliance, and subscription plans
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqData.map((faq, index) => (
            <details
              key={faq.question}
              className="group bg-card rounded-lg border border-border px-4 open:shadow-card"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none py-4 text-left font-medium text-foreground hover:text-primary transition-colors">
                <span>{index + 1}. {faq.question}</span>
                <ChevronDown className="w-4 h-4 flex-shrink-0 ml-2 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="text-muted-foreground pb-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
