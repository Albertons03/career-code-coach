import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "5 tipp a sikeres karrierváltáshoz programozónak",
    excerpt:
      "Ha most kezded a tanulást vagy váltani szeretnél, ezek a lépések segítenek elindulni az IT karrierben.",
    category: "Karriertanácsok",
    date: "2024 Nov 15",
    readTime: "5 perc",
    image:
      "/u1735675282_Digitlis_moodboard__career_roadmap_kpclean_flat_l_54fc1acb-f40e-480e-ab48-679854ef2f27_0.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Hogyan készíts portfóliót junior fejlesztőként?",
    excerpt:
      "A portfólió a legfontosabb eszköz az álláskeresésben. Mutatom, mit tegyél bele és mit ne.",
    category: "Fejlesztés",
    date: "2024 Nov 10",
    readTime: "8 perc",
    image:
      "/u1735675282_Projektpts_-_coding_scenedeveloper_writing_code_o_b8a2ad0f-2487-4985-a6f8-04b6e2a311f9_2.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Tech interjúra való felkészülés: A teljes útmutató",
    excerpt:
      "Algoritmusok, rendszertervezés, viselkedési kérdések - minden, amit tudnod kell az interjúhoz.",
    category: "Interjú",
    date: "2024 Nov 5",
    readTime: "10 perc",
    image:
      "/u1735675282_Interj_felkszts_fot__illusztrcisoftware_developer_3a1c417b-7507-45b8-9dd4-0abb486d351e_3.png",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const BlogSection = () => {
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
      id="blog"
      className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 backdrop-blur-sm">
            <Tag className="w-4 h-4" />
            <span>Legfrissebb blogbejegyzések</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Blog & Karriertanácsok
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Hasznos tippek, útmutatók és tapasztalatok az IT karrieredhez
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-500 hover:scale-105 hover:shadow-2xl group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${post.gradient} text-white text-xs font-semibold rounded-full shadow-lg`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="pt-6 pb-6 space-y-4">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more button */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/btn transition-colors"
                >
                  <span>Értesíts a megjelenéskor</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center">
          <p className="text-slate-400 text-lg mb-6">
            Hamarosan több cikk! Iratkozz fel, hogy értesülj az újdonságokról
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group"
          >
            Feliratkozom a frissítésekre
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
