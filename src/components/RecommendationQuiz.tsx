import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, RotateCcw, Crown, Calendar, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_BASE = "https://wa.me/971585707110?text=";

const questions = [
  {
    id: 1,
    question: "How important is scheduling flexibility?",
    options: [
      { label: "Critical - I need to choose my own times", value: "vip" },
      { label: "Flexible - I can work with fixed schedules", value: "basic" },
    ],
  },
  {
    id: 2,
    question: "How often do you have drainage issues?",
    options: [
      { label: "Frequently - We need emergency support", value: "vip" },
      { label: "Rarely - Our drainage is reliable", value: "basic" },
    ],
  },
  {
    id: 3,
    question: "What's your budget planning preference?",
    options: [
      { label: "Annual budget - Lock in rates for the year", value: "annual" },
      { label: "Monthly cash flow - Pay as you go", value: "monthly" },
    ],
  },
  {
    id: 4,
    question: "What type of business do you operate?",
    options: [
      { label: "Restaurant / Hotel / Large kitchen", value: "vip" },
      { label: "Cafe / Bakery / Small food outlet", value: "basic" },
    ],
  },
];

const recommendations = {
  "vip-annual": {
    name: "Annual VIP",
    tagline: "Ultimate Value - Premium Annual Service",
    price: "130 AED/visit",
    description: "Perfect for busy restaurants and hotels needing both premium service and maximum savings.",
    isVip: true,
  },
  "vip-monthly": {
    name: "Monthly VIP",
    tagline: "Premium Service - Complete Peace of Mind",
    price: "150 AED/visit",
    description: "Ideal for businesses that need scheduling flexibility without a long-term commitment.",
    isVip: true,
  },
  "basic-annual": {
    name: "Annual Basic",
    tagline: "Lock in Savings - Essential Annual Service",
    price: "110 AED/visit",
    description: "Great for cost-conscious businesses with reliable drainage and flexible schedules.",
    isVip: false,
  },
  "basic-monthly": {
    name: "Monthly Basic",
    tagline: "Essential Service - Budget-Friendly Option",
    price: "125 AED/visit",
    description: "Perfect for new businesses or those testing our service with minimal commitment.",
    isVip: false,
  },
};

export function RecommendationQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const vipCount = Object.values(answers).filter((v) => v === "vip").length;
    const annualCount = Object.values(answers).filter((v) => v === "annual").length;

    const isVip = vipCount >= 2;
    const isAnnual = annualCount >= 1;

    const key = `${isVip ? "vip" : "basic"}-${isAnnual ? "annual" : "monthly"}` as keyof typeof recommendations;
    return recommendations[key];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const recommendation = getRecommendation();
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section id="recommendation" className="py-20 lg:py-28 bg-background">
      <div className="container-section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Plan Finder
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Plan is Right for You?
          </h2>
          <p className="text-lg text-muted-foreground">
            Answer 4 quick questions and we'll recommend the perfect plan for your business
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <div className="bg-card rounded-2xl shadow-card p-8">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}% complete</span>
                </div>
                <div
                  className="h-2 bg-muted rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={Math.round(progress)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Quiz progress"
                >
                  <div
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl font-bold text-foreground mb-6">
                {questions[currentQuestion].question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full text-left p-4 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground group-hover:text-primary">
                        {option.label}
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={cn(
              "rounded-2xl p-1 animate-fade-in",
              recommendation.isVip ? "bg-gradient-to-br from-gold via-gold/80 to-gold/60" : "bg-primary"
            )}>
              <div className="bg-card rounded-xl p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                  <Check className="w-8 h-8 text-success" />
                </div>

                <p className="text-muted-foreground mb-2">Based on your answers, we recommend:</p>

                <div className="flex items-center justify-center gap-2 mb-4">
                  {recommendation.isVip ? (
                    <Crown className="w-6 h-6 text-gold" />
                  ) : (
                    <Calendar className="w-6 h-6 text-primary" />
                  )}
                  <h3 className={cn(
                    "text-3xl font-bold",
                    recommendation.isVip ? "text-gold" : "text-primary"
                  )}>
                    {recommendation.name}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground mb-2">{recommendation.tagline}</p>
                <p className="text-2xl font-bold text-foreground mb-4">{recommendation.price}</p>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">{recommendation.description}</p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant={recommendation.isVip ? "gold" : "default"} size="lg" asChild>
                    <a
                      href={`${WHATSAPP_BASE}${encodeURIComponent(`I want grease trap cleaning - ${recommendation.name} plan`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Get Started with {recommendation.name}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" onClick={resetQuiz}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Retake Quiz
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
