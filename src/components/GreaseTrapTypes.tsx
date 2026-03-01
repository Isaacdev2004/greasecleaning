import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Shield, MessageCircle, ImageIcon } from "lucide-react";
import { trapTypes } from "@/data/trapPricing";

const WHATSAPP_URL = `https://wa.me/971585707110?text=${encodeURIComponent("I want grease trap cleaning - I have multiple grease traps")}`;

interface GreaseTrapTypesProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function GreaseTrapTypes({ activeTab, onTabChange }: GreaseTrapTypesProps) {
  const activeTrap = trapTypes.find((t) => t.id === activeTab) ?? trapTypes[0];

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Municipality Approved Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Grease Trap Type Pricing by Plan
          </h2>
          <p className="text-lg text-muted-foreground">
            Click each tab to view complete pricing details, comparisons, and cost examples for that grease trap type.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {trapTypes.map((trap) => (
            <button
              key={trap.id}
              onClick={() => onTabChange(trap.id)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border-2",
                activeTab === trap.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-card text-foreground border-border hover:border-primary/40 hover:bg-primary/5"
              )}
            >
              {trap.tab}
            </button>
          ))}
        </div>

        <div className="max-w-6xl mx-auto bg-card rounded-2xl shadow-card border border-border overflow-hidden mb-10">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-2">{activeTrap.name}</h3>
              <p className="text-sm text-primary font-semibold mb-1">Size: {activeTrap.size}</p>
              <p className="text-sm text-muted-foreground mb-6">
                Minimum Requirement: {activeTrap.minimumRequirement}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pricing details in the sections below update automatically based on your selected grease trap type.
                This lets you compare the right plan numbers for each trap without confusion.
              </p>
            </div>
            <div className="bg-muted/50 flex items-center justify-center p-8 lg:p-10 min-h-[300px]">
              <div className="w-full max-w-sm aspect-[4/3] rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted-foreground">
                <ImageIcon className="w-12 h-12" />
                <p className="text-sm font-medium">{activeTrap.name}</p>
                <p className="text-xs">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="max-w-2xl mx-auto mt-6">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">
              If your restaurant has multiple grease traps
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Contact us directly and we will build one custom package that covers all trap types under one service schedule.
            </p>
            <Button variant="heroOutline" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Direct Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
