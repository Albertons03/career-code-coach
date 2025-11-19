import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Map, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Ingyenes felmérő beszélgetés",
    description: "Megnézzük a céljaid, jelenlegi szinted.",
  },
  {
    number: "2",
    icon: Map,
    title: "Egyéni mentorprogram tervezése",
    description: "Heti célok, feladatok, tananyagtérkép.",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "1:1 találkozók heti rendszerességgel",
    description: "Haladáskövetés, fejlődés, kódelemzés.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Hogyan működik?</h2>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-none shadow-sm h-full">
                  <CardContent className="pt-8 pb-8 text-center space-y-4">
                    <div className="relative inline-flex items-center justify-center">
                      <div className="absolute inset-0 w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
                      <div className="relative w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent-foreground">{step.number}</span>
                      </div>
                    </div>
                    <Icon className="h-8 w-8 text-primary mx-auto" />
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
