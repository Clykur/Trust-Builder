import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Problem", id: "problem-section" },
  { label: "Solution", id: "solution-section" },
  { label: "How It Works", id: "how-it-works-section" },
  { label: "FAQ", id: "faq-section" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      if (window.scrollY > 32) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2"
      >
        <div
          className={`w-full max-w-5xl rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled || menuOpen
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
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all duration-200">
              <ShieldCheck size={17} strokeWidth={2.5} />
            </div>
            <span className="font-calegar font-normal text-lg tracking-tight text-foreground uppercase">
              F r e e T r u s t
            </span>
          </button>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile menu toggle */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => scrollTo("validation-section")}
              data-testid="button-request-access"
              className="hidden sm:flex rounded-xl px-5 h-9 text-sm font-semibold shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get Early Access
            </Button>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-foreground hover:bg-foreground/5 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute top-full left-4 right-4 mt-1 rounded-2xl glass-panel py-2 overflow-hidden"
            >
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/8 font-semibold"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="px-4 pb-3 pt-2 border-t border-border/40 mt-1">
                <Button
                  onClick={() => scrollTo("validation-section")}
                  className="w-full h-10 rounded-xl text-sm font-semibold"
                >
                  Get Early Access
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
