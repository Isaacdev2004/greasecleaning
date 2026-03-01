import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TrapData } from "@/data/trapPricing";

const formatAed = (value: number) => `${value} AED`;

function CellValue({ value, isVip = false }: { value: string | boolean; isVip?: boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-success mx-auto" aria-label="Included" />
    ) : (
      <X className="w-5 h-5 text-destructive mx-auto" aria-label="Not included" />
    );
  }

  if (value === "FREE" || value === "Unlimited" || value.includes("Save")) {
    return (
      <span className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold",
        value === "FREE" || value === "Unlimited" 
          ? "bg-success-light text-success" 
          : "bg-gold-light text-gold-foreground"
      )}>
        {value === "FREE" || value === "Unlimited" ? <Check className="w-3 h-3" /> : null}
        {value}
      </span>
    );
  }

  return <span className="text-foreground">{value}</span>;
}

interface ComparisonTableProps {
  trap: TrapData;
}

export function ComparisonTable({ trap }: ComparisonTableProps) {
  const visitFrequency = trap.minimumRequirement.includes("1-2") ? "1-2/month" : "2-4/month";
  const comparisonData = [
    {
      feature: "Price/Visit",
      monthlyBasic: formatAed(trap.monthlyBasic.price),
      monthlyVip: formatAed(trap.monthlyVip.price),
      annualBasic: formatAed(trap.annualBasic.price),
      annualVip: formatAed(trap.annualVip.price),
    },
    {
      feature: "Visit Frequency",
      monthlyBasic: visitFrequency,
      monthlyVip: visitFrequency,
      annualBasic: visitFrequency,
      annualVip: visitFrequency,
    },
    { feature: "Scheduling", monthlyBasic: "Fixed by us", monthlyVip: "You choose", annualBasic: "Fixed by us", annualVip: "You choose" },
    { feature: "Timing", monthlyBasic: "Our availability", monthlyVip: "You choose", annualBasic: "Our availability", annualVip: "You choose" },
    { feature: "Rescheduling", monthlyBasic: false, monthlyVip: "Unlimited", annualBasic: false, annualVip: "Unlimited" },
    { feature: "Technical Assistance", monthlyBasic: "250 AED", monthlyVip: "FREE", annualBasic: "250 AED", annualVip: "FREE" },
    { feature: "Drain Blockage", monthlyBasic: "Chargeable", monthlyVip: "FREE", annualBasic: "Chargeable", annualVip: "FREE" },
    { feature: "Contract Term", monthlyBasic: "Monthly", monthlyVip: "Monthly", annualBasic: "12 Months", annualVip: "12 Months" },
    {
      feature: "Savings",
      monthlyBasic: "Standard",
      monthlyVip: "Premium",
      annualBasic: trap.annualBasic.savings?.replace(" vs Monthly Basic", "") ?? "-",
      annualVip: trap.annualVip.savings?.replace(" vs Monthly VIP", "") ?? "-",
    },
  ];

  const costExamples = trap.monthlyExampleRows.map((row) => ({
    visits: row.label.includes("Visit/Month") ? row.label : `${row.label}/Month`,
    monthlyBasic: formatAed(row.values[0]),
    monthlyVip: formatAed(row.values[1]),
    annualBasic: formatAed(row.values[2]),
    annualVip: formatAed(row.values[3]),
  }));

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Compare All Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            See exactly what's included in each plan at a glance
          </p>
        </div>

        {/* Feature Comparison */}
        <div className="relative overflow-x-auto mb-16">
          <div className="md:hidden text-xs text-muted-foreground text-center mb-2">Scroll horizontally to see all plans &rarr;</div>
          <table className="w-full min-w-[700px] bg-card rounded-xl shadow-card overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="text-left p-4 font-semibold text-foreground bg-muted/50">Feature</th>
                <th scope="col" className="p-4 font-semibold text-center bg-primary/5">
                  <div className="text-primary">Monthly Basic</div>
                </th>
                <th scope="col" className="p-4 font-semibold text-center bg-gold/10">
                  <div className="text-gold">Monthly VIP</div>
                </th>
                <th scope="col" className="p-4 font-semibold text-center bg-primary/5">
                  <div className="text-primary">Annual Basic</div>
                </th>
                <th scope="col" className="p-4 font-semibold text-center bg-gold/10 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-[10px] px-2 py-0.5 rounded-full font-bold">
                    BEST VALUE
                  </div>
                  <div className="text-gold">Annual VIP</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={cn(
                  "border-b border-border last:border-0",
                  index % 2 === 0 ? "bg-card" : "bg-muted/20"
                )}>
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-center text-sm"><CellValue value={row.monthlyBasic} /></td>
                  <td className="p-4 text-center text-sm bg-gold/5"><CellValue value={row.monthlyVip} isVip /></td>
                  <td className="p-4 text-center text-sm"><CellValue value={row.annualBasic} /></td>
                  <td className="p-4 text-center text-sm bg-gold/5"><CellValue value={row.annualVip} isVip /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Monthly Cost Examples */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Monthly Cost Examples
          </h3>
          <div className="relative overflow-x-auto">
            <div className="md:hidden text-xs text-muted-foreground text-center mb-2">Scroll horizontally to see all plans &rarr;</div>
            <table className="w-full min-w-[600px] bg-card rounded-xl shadow-card overflow-hidden">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th scope="col" className="text-left p-4 font-semibold text-foreground">Visits/Month</th>
                  <th scope="col" className="p-4 font-semibold text-center text-primary">Monthly Basic</th>
                  <th scope="col" className="p-4 font-semibold text-center text-gold">Monthly VIP</th>
                  <th scope="col" className="p-4 font-semibold text-center text-primary">Annual Basic</th>
                  <th scope="col" className="p-4 font-semibold text-center text-gold">Annual VIP</th>
                </tr>
              </thead>
              <tbody>
                {costExamples.map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-0">
                    <td className="p-4 font-medium text-foreground">{row.visits}</td>
                    <td className="p-4 text-center text-foreground">{row.monthlyBasic}</td>
                    <td className="p-4 text-center text-foreground bg-gold/5">{row.monthlyVip}</td>
                    <td className="p-4 text-center font-semibold text-success">{row.annualBasic}</td>
                    <td className="p-4 text-center font-semibold text-gold bg-gold/5">{row.annualVip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
