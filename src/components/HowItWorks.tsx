import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  Map,
  CalendarCheck,
  Zap,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Ingyenes konzultáció",
    description:
      "30 perces beszélgetés, ahol feltérképezzük a céljaid, jelenlegi szinted és kihívásaid.",
    image:
      "/u1735675282_Coaching_action_shot_-_videhvs__mentoringprofessi_53b0d344-7f95-4357-ac1f-d1ccda8f67e4_0.png",
  },
  {
    number: "2",
    icon: Map,
    title: "Személyre szabott roadmap",
    description:
      "Egyedi fejlődési terv készítése a céljaidhoz igazítva, heti mérföldkövekkel és konkrét feladatokkal.",
    image:
      "/u1735675282_Digitlis_moodboard__career_roadmap_kpclean_flat_l_54fc1acb-f40e-480e-ab48-679854ef2f27_2.png",
  },
  {
    number: "3",
    icon: CalendarCheck,
    title: "Rendszeres mentoring",
    description:
      "Heti 1:1 találkozók, haladáskövetés, code review, problémamegoldás és folyamatos támogatás.",
    image:
      "/u1735675282_Projektpts_-_coding_scenedeveloper_writing_code_o_b8a2ad0f-2487-4985-a6f8-04b6e2a311f9_3.png",
  },
];

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-300 backdrop-blur-sm">
            <Zap className="w-4 h-4" />
            <span>Egyszerű és átlátható folyamat</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("howItWorks.title")}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Három lépésben a sikeres tech karrierig
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  !isEven ? "md:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? "md:col-start-2" : ""}`}>
                  <div className="flex items-start gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
                        <span className="text-2xl font-bold text-white">
                          {step.number}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <Icon className="h-8 w-8 text-cyan-400" />
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-lg text-slate-300 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Feature bullets */}
                      <div className="space-y-2 pt-4">
                        {index === 0 && (
                          <>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Nincs kötelezettség</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Online videóhívás</span>
                            </div>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Technológia kiválasztás</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Projekt ötletek</span>
                            </div>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Slack/Discord support</span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400">
                              <CheckCircle className="w-5 h-5 text-emerald-400" />
                              <span>Code review GitHub-on</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`${
                    !isEven ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline connector */}
        <div className="absolute left-1/2 top-32 bottom-32 w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HowItWorks;
