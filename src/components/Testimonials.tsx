import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bálint K.",
    role: "Frontend Developer @ Tech Startup",
    rating: 5,
    quote:
      "3 hónap mentorálás után kaptam meg az első React fejlesztői állásom. A projekt-alapú tanulás és a code review-k nélkülözhetetlenek voltak.",
    image:
      "/u1735675282_Success__transformation_testimonial_imageprofessi_67ae2d64-1f0f-4560-abd2-359f33ec0a50_2.png",
  },
  {
    name: "Erika M.",
    role: "Freelance Full-Stack Developer",
    rating: 5,
    quote:
      "Nem csak a kódolást tanultam meg, hanem azt is, hogyan építsek ki ügyfeleket és dolgozzak önállóan. Fantasztikus befektetés volt!",
  },
  {
    name: "Márk T.",
    role: "Junior React Developer",
    rating: 5,
    quote:
      "Az interjúfelkészítés elképesztő volt. Magabiztosan válaszoltam a technikai kérdésekre, és azonnal fel is vettek.",
  },
  {
    name: "Dávid L.",
    role: "Backend Developer @ Fintech",
    rating: 5,
    quote:
      "A rendszeres code review-k teljesen megváltoztatták a gondolkodásomat. Tankönyvi tudásból production-ready kódot írok.",
  },
  {
    name: "Anna S.",
    role: "Career Switcher → Full-Stack Dev",
    rating: 5,
    quote:
      "Teljesen más területről váltottam át. 6 hónap alatt sikerült első dev állásomba kerülni. A personal guidance felbecsülhetetlen.",
  },
  {
    name: "Péter N.",
    role: "Mid-Level Frontend Developer",
    rating: 5,
    quote:
      "Junior szintről mid-re léptem. A mentor segített azonosítani a fejlődési területeket és konkrét megoldásokat adott.",
  },
];

const Testimonials = () => {
  const { t } = useTranslation();
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
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-300 backdrop-blur-sm">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9/5 átlagos értékelés</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Valódi eredmények, valódi történetek
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Mentee-k, akik elérték a céljukat
          </p>
        </div>

        {/* Featured testimonial with image */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 backdrop-blur-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12 space-y-6">
                  <Quote className="w-12 h-12 text-blue-400 opacity-50" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-emerald-400 text-emerald-400"
                      />
                    ))}
                  </div>

                  <p className="text-xl text-slate-200 leading-relaxed italic">
                    "{testimonials[0].quote}"
                  </p>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="font-bold text-lg text-white">
                      {testimonials[0].name}
                    </p>
                    <p className="text-slate-400">{testimonials[0].role}</p>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] md:min-h-[500px]">
                  <img
                    src={testimonials[0].image}
                    alt="Success Story"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900/50"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grid of testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.slice(1).map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8 space-y-6 relative">
                <Quote className="w-8 h-8 text-blue-400 opacity-30 absolute top-4 right-4" />

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-emerald-400 text-emerald-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-slate-700">
                  <p className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg mb-6">
            Légy te a következő sikertörténet
          </p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105"
          >
            Ingyenes konzultáció foglalása
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
