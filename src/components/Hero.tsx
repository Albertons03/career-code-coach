import { Button } from "@/components/ui/button";
import coachPortrait from "@/assets/coach-portrait.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="leading-tight">
                IT Karrier Mentorálás – Valódi segítség, valódi eredmények
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Segítek elindulni vagy szintet lépni a programozói karrierben. Gyakorlati útmutatás, projektépítés, interjúfelkészítés.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="accent" className="group">
                Foglalj ingyenes konzultációt
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="xl" variant="outline">
                Tudd meg, hogyan működik
              </Button>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={coachPortrait} 
                alt="IT Karrier Mentor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
