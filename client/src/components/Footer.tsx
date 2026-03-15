import { ShieldCheck, Shield } from "lucide-react";
import { Link } from "wouter";

const platformLinks = [
  { label: "Problem", id: "problem-section" },
  { label: "Solution", id: "solution-section" },
  { label: "How It Works", id: "how-it-works-section" },
  { label: "Trust Layers", id: "trust-layers-section" },
  { label: "Use Cases", id: "use-cases-section" },
  { label: "FAQ", id: "faq-section" },
];

const companyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Security Protocol", href: "/security" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-card/30 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
                <ShieldCheck size={17} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground">FreeTrust</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The first comprehensive trust infrastructure for the professional economy. Legal protection, zero-loss escrow, and AI verification built for the future of work.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">Network Status: All systems operational</span>
            </div>
          </div>

          {/* Platform links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.12em]">Platform</h4>
            <ul className="space-y-2.5">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-xs uppercase tracking-[0.12em]">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <div className="text-xs text-muted-foreground flex items-center gap-2">
            <Shield size={12} className="text-primary" />
            <span>&copy; {new Date().getFullYear()} FreeTrust Network, Inc. All rights reserved.</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Cryptographically secured · Legally enforceable · AI-verified
          </div>
        </div>
      </div>
    </footer>
  );
}
