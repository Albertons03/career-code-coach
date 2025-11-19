import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
