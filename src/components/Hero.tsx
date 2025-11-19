import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";
import CountUp from "./CountUp";

const Hero = () => {
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

  const scrollToServices = () => {
    const element = document.getElementById("services");
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
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Profi Career Coaching IT Szakembereknek</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Váltsd valóra a
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 text-transparent bg-clip-text animate-gradient">
                  Tech Karriered
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl leading-relaxed">
                Személyre szabott mentorálás junioroktól seniorig. Valódi
                projektek, interjúfelkészítés, karrierváltás támogatás.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center space-y-1">
                <CountUp
                  end={150}
                  suffix="+"
                  className="text-3xl font-bold text-blue-400"
                />
                <div className="text-sm text-slate-400">Sikeres mentee</div>
              </div>
              <div className="text-center space-y-1">
                <CountUp
                  end={95}
                  suffix="%"
                  className="text-3xl font-bold text-emerald-400"
                />
                <div className="text-sm text-slate-400">Elhelyezkedés</div>
              </div>
              <div className="text-center space-y-1">
                <CountUp
                  end={8}
                  suffix="+"
                  className="text-3xl font-bold text-purple-400"
                />
                <div className="text-sm text-slate-400">Év tapasztalat</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
              >
                Ingyenes Konzultáció
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:border-slate-500 px-8 py-6 text-lg backdrop-blur-sm"
              >
                Tudj meg többet
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-400" />
                <span>100% személyre szabott</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Garantált fejlődés</span>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative animate-fade-in-delay">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
              <img
                src="/u1735675282_Hero_portr_-_professzionlis_coachprofessional_por_e5b06040-a3db-4938-a8ff-1fbdfc7a8446_2.png"
                alt="Career Coach Professional"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-60 animate-pulse delay-700"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-xl border border-slate-700 rounded-2xl p-4 shadow-xl animate-float hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Karrierváltás</div>
                  <div className="text-emerald-400 text-sm">
                    6-12 hónap alatt
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
