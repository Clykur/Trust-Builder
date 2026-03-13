import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problem", id: "problem-section" },
  { label: "Solution", id: "solution-section" },
  { label: "How It Works", id: "how-it-works-section" },
  { label: "FAQ", id: "faq-section" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2"
    >
      <div
        className={`w-full max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass-panel"
            : "bg-transparent border border-transparent shadow-none"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
          data-testid="link-logo"
        >
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
            <ShieldCheck size={17} strokeWidth={2.5} />
          </div>
          <span className="font-display font-bold text-lg tracking-tight text-foreground">FreeTrust</span>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-150"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <Button
          onClick={() => scrollTo("validation-section")}
          data-testid="button-request-access"
          className="rounded-xl px-5 h-9 text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
        >
          Get Early Access
        </Button>
      </div>
    </motion.header>
  );
}
