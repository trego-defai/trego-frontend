import Background from "@/components/landing/Background";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import TwitterSection from "@/components/landing/TwitterSection";
import Features from "@/components/landing/Features";
import BentoSection from "@/components/landing/BentoSection";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <Features />
      <BentoSection />
      <Footer />
    </Background>
  );
}
