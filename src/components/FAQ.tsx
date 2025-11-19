import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Elég junior tudással kezdeni?",
    answer:
      "Igen! A mentorálás pont azért hasznos, mert a te szintedtől indulunk. Akár most kezded a kódolást, akár már van tapasztalatod, személyre szabom a programot. Legyen szó HTML/CSS alapokról vagy már meglévő projektek továbbfejlesztéséről.",
  },
  {
    question: "Mennyit kell tanulni hetente?",
    answer:
      "Ajánlott minimum heti 10-15 óra gyakorlás a coaching mellett. Ez rugalmas, de a rendszeres munka kulcsfontosságú a fejlődéshez. Ha kevesebb időd van, az is működhet, csak lassabb lesz a haladás. Beszéljük meg az első konzultáción!",
  },
  {
    question: "Kaphatok projektfeladatokat?",
    answer:
      "Abszolút! Minden mentorálás során valódi projekteken dolgozunk, amiket a portfóliódba is tehetsz. Ezek nem tutorial projektek, hanem használható alkalmazások, amikkel állásinterjúkon is büszkén tudsz mutatkozni.",
  },
  {
    question: "Beléphetek bármikor?",
    answer:
      "Igen, folyamatosan fogadok új mentorálottakat, de korlátozott helyszámmal dolgozom, hogy mindenki megkapja a kellő figyelmet. Az első ingyenes konzultáció után rugalmasan indulhatunk.",
  },
  {
    question: "Online történik a coaching?",
    answer:
      "Igen, minden találkozó online zajlik Google Meet-en vagy Zoom-on. Így bárhonnan csatlakozhatsz, és könnyen beilleszthető az időbeosztásodba. Screen sharinggel nézzük a kódot, és valós időben dolgozunk együtt.",
  },
  {
    question: "Mi történik, ha nem tudok részt venni egy alkalmon?",
    answer:
      "Nincs gond! Rugalmasan átütemezhetjük a meetinget, ha előre jelzed. A lényeg, hogy hosszú távon fenntartható legyen és illeszkedjen az életedbe.",
  },
];

const FAQ = () => {
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
      id="faq"
      className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300 backdrop-blur-sm">
            <HelpCircle className="w-4 h-4" />
            <span>{t("faq.badge")}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t("faq.title")}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ha nem találod meg a választ, írj nyugodtan!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/50 border border-slate-700 rounded-xl px-6 backdrop-blur-sm hover:bg-slate-800/70 hover:border-slate-600 transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group">
                  <span className="font-semibold text-white text-lg group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6 text-lg">További kérdésed van?</p>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            Írj nekem most
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
