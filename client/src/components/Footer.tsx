import { ShieldCheck, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 py-16 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-foreground">FreeTrust</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              The first comprehensive trust infrastructure for the decentralized professional economy. Legal protection, zero-loss escrow, and AI verification.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#problem-section" className="hover:text-primary transition-colors">Problem</a></li>
              <li><a href="#solution-section" className="hover:text-primary transition-colors">Solution</a></li>
              <li><a href="#how-it-works-section" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#trust-layers-section" className="hover:text-primary transition-colors">Trust Layers</a></li>
              <li><a href="#use-cases-section" className="hover:text-primary transition-colors">Use Cases</a></li>
              <li><a href="#validation-section" className="hover:text-primary transition-colors">Early Access</a></li>
              <li><a href="#faq-section" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground flex items-center gap-2">
            <Shield size={14} className="text-primary" />
            <span>&copy; {new Date().getFullYear()} FreeTrust Network. Cryptographically secured.</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Network Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
