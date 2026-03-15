import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustLayers } from "@/components/TrustLayers";
import { UseCases } from "@/components/UseCases";
import { FAQ } from "@/components/FAQ";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";
import { SplashScreen } from "@/components/SplashScreen";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/15 selection:text-primary">
      <SplashScreen />
      {/* Subtle dot background */}
      <div className="fixed inset-0 bg-dot-pattern pointer-events-none z-0" />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <TrustLayers />
        <UseCases />
        <FAQ />
        <WaitlistForm />
      </div>

      <Footer />
    </main>
  );
}
