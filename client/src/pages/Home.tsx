import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      {/* Global Background Dot Pattern - highly subtle */}
      <div className="fixed inset-0 bg-dot-pattern opacity-[0.2] pointer-events-none z-0" />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <WaitlistForm />
      </div>
      
      <Footer />
    </main>
  );
}
