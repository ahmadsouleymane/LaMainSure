import BackgroundShapes from "@/components/BackgroundShapes";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProSignup from "@/components/ProSignup";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import BuildInPublic from "@/components/BuildInPublic";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <BackgroundShapes />
      <Header />
      <Hero />
      <ProSignup />
      <Benefits />
      <HowItWorks />
      <FAQ />
      <BuildInPublic />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
