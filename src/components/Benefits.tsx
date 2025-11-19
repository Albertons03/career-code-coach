import { Card, CardContent } from "@/components/ui/card";
import { Target, Code, Eye, Briefcase, Rocket, BookOpen } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Személyre szabott roadmap",
    description:
      "A te céljaidhoz és szintedhez igazított fejlődési terv, lépésről lépésre.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code,
    title: "Valós projektek",
    description:
      "Nem tutorialok, hanem portfólióba tehető, működő alkalmazások építése.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Code review és feedback",
    description:
      "Heti rendszerességgel nézem át a kódod, konkrét fejlesztési javaslatokkal.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    title: "Interjúfelkészítés",
    description:
      "Gyakorlati kérdések, mock interview, CV és LinkedIn optimalizálás.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Rocket,
    title: "Karrierváltás support",
    description:
      "Segítség a pozíciók kiválasztásában, networking, önéletrajz írás.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Tech stack guidance",
    description:
      "Melyik technológiát érdemes tanulnod, és hogyan sajátítsd el hatékonyan.",
    color: "from-cyan-500 to-blue-500",
  },
];

const Benefits = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgyVjZoNFY0aC00ek02IDM0di00SDR2NEgwdjJoNHY0aDJ2LTRoNHYtMkg2ek02IDRWMEg0djRIMHYyaDR2NGgyVjZoNFY0SDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-blue-300 backdrop-blur-sm">
            <Rocket className="w-4 h-4" />
            <span>Komplett coaching csomag</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Mit kapsz a mentorálástól?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Minden eszköz, amit a sikeres tech karrierhez szükséged van
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <CardContent className="pt-8 pb-8 space-y-4 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom image section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/u1735675282_Projektpts_-_coding_scenedeveloper_writing_code_o_b8a2ad0f-2487-4985-a6f8-04b6e2a311f9_2.png"
              alt="Coding Project"
              className="rounded-2xl shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-500"
            />
            <img
              src="/u1735675282_Interj_felkszts_fot__illusztrcisoftware_developer_3a1c417b-7507-45b8-9dd4-0abb486d351e_3.png"
              alt="Interview Preparation"
              className="rounded-2xl shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
