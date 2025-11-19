import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Compass, Users, Target } from "lucide-react";

const problems = [
  {
    icon: Compass,
    text: "Elkezdted a tanulást, de nem tudod, mi a következő lépés?",
  },
  {
    icon: AlertCircle,
    text: "Túl sok infó, nem tudod, mi fontos?",
  },
  {
    icon: Users,
    text: "Nincs mentorod vagy visszajelzésed?",
  },
  {
    icon: Target,
    text: "Félsz az első állásinterjútól?",
  },
];

const ProblemSolution = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Ismerős valamelyik?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6 pb-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {problem.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-foreground">
            A mentorálásban megmutatom a biztos utat a fejlődéshez.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
