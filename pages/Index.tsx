import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/ui/fade-in";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FadeIn delay={0.2}><TrustBar /></FadeIn>
      <FadeIn><ProblemSection /></FadeIn>
      <FadeIn><ProcessSection /></FadeIn>
      <FadeIn><WhyUsSection /></FadeIn>
      <FadeIn><TestimonialSection /></FadeIn>
      <FadeIn><FAQSection /></FadeIn>
      <FadeIn><ContactForm /></FadeIn>
      <Footer />
    </div>
  );
};

export default Index;
