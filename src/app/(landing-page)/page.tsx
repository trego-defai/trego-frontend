import Background from "@/components/landing/Background";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import TwitterSection from "@/components/landing/TwitterSection";

export default function LandingPage() {
  return (
    <Background>
      <Navbar />
      <Hero />
      <TwitterSection />
    </Background>
  );
}
