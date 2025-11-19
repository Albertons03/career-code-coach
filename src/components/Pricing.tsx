import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, Crown, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter Coaching",
    price: "299",
    period: "hónap",
    features: [
      "Heti 1x 60 perces coaching",
      "Személyre szabott roadmap",
      "Code review GitHub-on",
      "Projekt feladatok",
      "Email támogatás",
      "Interjúkérdés gyakorlás",
    ],
    highlighted: false,
  },
  {
    name: "Pro Mentoring",
    price: "499",
    period: "hónap",
    features: [
      "Heti 2x 60 perces meeting",
      "Mélyreható projektépítés",
      "Folyamatos Slack/Discord support",
      "CV + LinkedIn optimalizálás",
      "Mock interview gyakorlás",
      "Portfólió website review",
      "Networking support",
    ],
    highlighted: true,
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 backdrop-blur-sm">
            <Crown className="w-4 h-4" />
            <span>Rugalmas díjcsomagok</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Befektetés a jövődbe
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Válaszd ki az élethelyzetedhez illő csomagot
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden backdrop-blur-xl transition-all duration-500 hover:scale-105 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                  : "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
              )}

              <CardHeader className="text-center pb-8 pt-8 relative z-10">
                {plan.highlighted && (
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
                      <Zap className="w-3 h-3 inline mr-1" />
                      Legkedveltebb
                    </span>
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span
                    className={`text-6xl font-bold ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"
                        : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="text-xl text-slate-400">€</span>
                    <span className="text-sm text-slate-500">
                      / {plan.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4 relative z-10">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 group">
                    <div className="mt-0.5 flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                          plan.highlighted
                            ? "bg-gradient-to-br from-blue-500 to-purple-500"
                            : "bg-emerald-500/20"
                        }`}
                      >
                        <Check
                          className={`h-4 w-4 ${
                            plan.highlighted ? "text-white" : "text-emerald-400"
                          }`}
                        />
                      </div>
                    </div>
                    <span className="text-slate-300 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="pt-8 pb-8 relative z-10">
                <Button
                  onClick={scrollToContact}
                  className={`w-full text-lg py-6 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                      : "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600"
                  } transition-all duration-300`}
                >
                  Ingyenes konzultáció
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-slate-400 mt-12 max-w-2xl mx-auto">
          💡 Első konzultáció mindig ingyenes! Nincsenek rejtett költségek,
          bármikor leállítható.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
