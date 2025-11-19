import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Bálint",
    role: "Frontend állás 3 hónap alatt",
    rating: 5,
    quote: "Pont az kellett, hogy valaki megmutassa a konkrét utat.",
  },
  {
    name: "Erika",
    role: "Juniorból Freelancer",
    rating: 5,
    quote: "Nem csak kódról szól – üzleti szemléletet is kaptam.",
  },
  {
    name: "Márk",
    role: "Első React állás",
    rating: 4,
    quote: "Interjúkon azonnal jobban teljesítettem.",
  },
  {
    name: "Dávid",
    role: "Junior Backend Developer",
    rating: 5,
    quote: "A code review-k voltak a legértékesebbek, rengeteget fejlődtem.",
  },
  {
    name: "Anna",
    role: "Career Switcher → Developer",
    rating: 5,
    quote: "Karrierváltás programozónak – 6 hónap alatt első állásban.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2>Valódi eredmények</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6 pb-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'fill-accent text-accent' : 'text-muted'}`}
                    />
                  ))}
                </div>
                
                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
