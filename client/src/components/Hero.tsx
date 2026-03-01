import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("validation-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-multiply opacity-70 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply opacity-70" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-8"
        >
          <Lock size={14} />
          <span>Institutional-Grade Verification</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground mb-6 leading-tight"
        >
          Trust First. <br />
          <span className="text-gradient-primary">Work Without Fear.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          The professional validation network bridging the gap between clients, 
          freelancers, and investors with cryptographic proof and legal clarity.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            Join as Freelancer
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted transition-all duration-300"
          >
            Join as Client
          </Button>
          <Button 
            size="lg"
            variant="ghost"
            onClick={scrollToWaitlist}
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-xl hover:bg-primary/5 transition-all duration-300"
          >
            Request Early Access
          </Button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Immutable Records
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Verified Identities
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Smart Escrow
          </div>
        </motion.div>
      </div>
    </section>
  );
}
