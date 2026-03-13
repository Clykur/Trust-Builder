import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "100%", label: "Escrow Protection" },
  { value: "AI", label: "Verified Delivery" },
  { value: "Legal", label: "Binding Contracts" },
  { value: "0 Fees", label: "on Waitlist" },
];

export function Hero() {
  const scrollToWaitlist = () => {
    document.getElementById("validation-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,white,transparent)]" />
      
      {/* Large glow orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-80 h-80 bg-violet-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">

        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="pill-badge">
            <ShieldCheck size={12} />
            Institutional-Grade Freelance Protection
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-[5rem] font-bold font-display tracking-tight text-foreground mb-6 leading-[1.08]"
        >
          The Trust Layer <br />
          <span className="text-gradient-primary">Freelancing Deserves.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Legal contracts. Zero-loss escrow. AI-verified delivery. Blockchain reputation.<br className="hidden md:block" />
          FreeTrust eliminates counterparty risk from every professional engagement.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Button 
            size="lg"
            onClick={scrollToWaitlist}
            data-testid="button-join-freelancer"
            className="h-14 px-8 rounded-xl text-base font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <Briefcase size={18} className="mr-2" />
            Join as Freelancer
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={scrollToWaitlist}
            data-testid="button-join-client"
            className="h-14 px-8 rounded-xl text-base font-semibold border-border/60 bg-white/60 backdrop-blur-sm hover:bg-white hover:border-primary/30 transition-all duration-300 group"
          >
            <Users size={18} className="mr-2" />
            Join as Client
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="divider-gradient mb-0"
        />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden border border-border/40 mt-0"
        >
          {stats.map((stat, i) => (
            <div key={i} className="bg-background/80 backdrop-blur-sm py-6 px-4 flex flex-col items-center gap-1">
              <span className="text-2xl font-bold font-display text-foreground">{stat.value}</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
