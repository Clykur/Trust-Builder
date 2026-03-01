import { ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 py-12 mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <ShieldCheck size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">Valida</span>
          </div>
          
          <div className="text-sm text-muted-foreground flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Security Protocol</a>
          </div>
        </div>
        
        <div className="mt-8 text-center md:text-left text-sm text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Valida Network. All rights reserved. Cryptographically secured.
        </div>
      </div>
    </footer>
  );
}
