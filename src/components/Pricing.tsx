import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Alap csomag",
    price: "299",
    features: [
      "Heti 1 coaching meeting",
      "Roadmap + feladatok",
      "Code review",
      "Interjúkérdés gyakorlás",
    ],
    highlighted: false,
  },
  {
    name: "Profi csomag",
    price: "499",
    features: [
      "Heti 2 meeting",
      "Mély projektépítés",
      "CV + LinkedIn mentorálás",
      "Technikai interjú szimuláció",
    ],
    highlighted: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Mennyibe kerül?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border-2 ${plan.highlighted ? 'border-accent shadow-lg scale-105' : 'border-border shadow-sm'} transition-all`}
            >
              <CardHeader className="text-center pb-8 pt-8">
                {plan.highlighted && (
                  <div className="inline-block mb-2">
                    <span className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Népszerű
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-xl text-muted-foreground">€ / hónap</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </CardContent>
              
              <CardFooter className="pt-6 pb-8">
                <Button 
                  variant={plan.highlighted ? "accent" : "default"} 
                  size="lg" 
                  className="w-full"
                >
                  Foglalj ingyenes konzultációt
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
