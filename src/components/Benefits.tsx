import { Card, CardContent } from "@/components/ui/card";
import { Target, Code, Eye, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Személyre szabott fejlődési terv",
    description: "A szintedhez és célodhoz igazítva.",
  },
  {
    icon: Code,
    title: "Projektfeladatok, amiket portfólióba tehetsz",
    description: "Nem tutorial → valódi termékek.",
  },
  {
    icon: Eye,
    title: "Kód review és gyakorlati visszajelzés",
    description: "Hol hibázol → mit javíts → hogyan fejlődj.",
  },
  {
    icon: Briefcase,
    title: "Interjúfelkészítés",
    description: "Junior → mid útvonal, gyakorlati kérdésekkel.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Mit kapsz a coachingtól</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-none shadow-sm bg-card">
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
