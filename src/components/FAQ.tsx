import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Elég junior tudással kezdeni?",
    answer: "Igen! A mentorálás pont azért hasznos, mert a te szintedtől indulunk. Akár most kezded a kódolást, akár már van tapasztalatod, személyre szabom a programot.",
  },
  {
    question: "Mennyit kell tanulni hetente?",
    answer: "Ajánlott minimum heti 10-15 óra gyakorlás a coaching mellett. Ez rugalmas, de a rendszeres munka kulcsfontosságú a fejlődéshez.",
  },
  {
    question: "Kaphatok projektfeladatokat?",
    answer: "Abszolút! Minden mentorálás során valódi projekteken dolgozunk, amiket a portfóliódba is tehetsz. Ezek nem tutorial projektek, hanem használható alkalmazások.",
  },
  {
    question: "Beléphetek bármikor?",
    answer: "Igen, folyamatosan fogadok új mentorálottakat. Az első ingyenes konzultáció után pedig rugalmasan indulhatunk.",
  },
  {
    question: "Online történik a coaching?",
    answer: "Igen, minden találkozó online zajlik Zoom-on vagy Google Meet-en. Így bárhonnan csatlakozhatsz, és könnyen beilleszthető az időbeosztásodba.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Gyakori kérdések</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
