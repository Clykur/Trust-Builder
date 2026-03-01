import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 lg:px-8 flex justify-center"
    >
      <div className="w-full max-w-5xl glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck size={20} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">FreeTrust</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <button onClick={() => document.getElementById("problem-section")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Problem</button>
          <button onClick={() => document.getElementById("solution-section")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Solution</button>
          <button onClick={() => document.getElementById("how-it-works-section")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">How it Works</button>
          <button onClick={() => document.getElementById("validation-section")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-foreground transition-colors">Validation</button>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            onClick={scrollToWaitlist}
            className="rounded-xl px-6 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            Request Access
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
