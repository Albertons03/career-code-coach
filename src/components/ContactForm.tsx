import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300 backdrop-blur-sm">
            <Mail className="w-4 h-4" />
            <span>Lépj kapcsolatba velem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Foglald le az ingyenes konzultációt!
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            30 perces ingyenes beszélgetés, ahol feltérképezzük a céljaidat
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Miért érdemes írni?
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Az első konzultáción feltérképezzük a jelenlegi helyzeted,
                céljaidat, és megbeszéljük, hogyan tudlak segíteni. Nincs
                kötelezettség, teljesen ingyenes!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:info@careercoach.hu"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    info@careercoach.hu
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Telefon</h4>
                  <a
                    href="tel:+36301234567"
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    +36 30 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800/50 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Helyszín</h4>
                  <p className="text-slate-400">Online (Zoom, Google Meet)</p>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-cyan-400 mb-1">24h</div>
                <div className="text-xs text-slate-400">Válaszidő</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-emerald-400 mb-1">
                  100%
                </div>
                <div className="text-xs text-slate-400">Ingyenes</div>
              </div>
              <div className="text-center p-4 bg-slate-800/30 border border-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
                <div className="text-xs text-slate-400">Kötöttség</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Neved *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="Kovács János"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email cím *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="kovacs.janos@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Telefonszám
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500"
                      placeholder="+36 30 123 4567"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Üzeneted *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:ring-cyan-500 resize-none"
                      placeholder="Írd le röviden, hogy mivel tudok segíteni..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 group"
                  >
                    Üzenet küldése
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Köszönöm az üzeneted!
                  </h3>
                  <p className="text-slate-400">
                    24 órán belül válaszolok az email címedre.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
