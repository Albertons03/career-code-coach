import { Card, CardContent } from "@/components/ui/card";
import {
  AlertCircle,
  Compass,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

const problems = [
  {
    icon: Compass,
    text: "Elkezdted a tanulást, de nem tudod, mi a következő lépés?",
  },
  {
    icon: AlertCircle,
    text: "Túl sok infó, nem tudod, mi fontos a karrieredhez?",
  },
  {
    icon: Users,
    text: "Nincs mentorod vagy valós visszajelzésed?",
  },
  {
    icon: Target,
    text: "Félsz az első tech állásinterjútól?",
  },
];

const solutions = [
  "Egyértelmű, személyre szabott roadmap",
  "Valós projektek és portfólió építés",
  "Heti mentoring és code review",
  "Interjú gyakorlás és CV optimalizálás",
];

const ProblemSolution = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ismerős valamelyik probléma?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ha igen, nem vagy egyedül. Ezeken dolgozunk együtt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-red-400" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {problem.text}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Solution section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  A megoldás: Személyre szabott mentorálás
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Nem általános kurzus, hanem egyéni coaching. A te célodhoz,
                  tempódhoz és szintedhez igazítva.
                </p>
                <img
                  src="/u1735675282_Coaching_action_shot_-_videhvs__mentoringprofessi_53b0d344-7f95-4357-ac1f-d1ccda8f67e4_2.png"
                  alt="Coaching Session"
                  className="rounded-2xl shadow-xl border border-slate-700"
                />
              </div>

              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-200 font-medium pt-1">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
