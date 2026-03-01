import { motion } from "framer-motion";
import { UserCheck, FileKey, Coins, ArrowDown } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "1. Identity & Skill Verification",
    description: "Complete our institutional-grade KYC/KYB. We cryptographically verify credentials, past work, and financial standing."
  },
  {
    icon: FileKey,
    title: "2. Smart Contract Generation",
    description: "Define scope, milestones, and payment terms. We automatically generate a binding legal contract backed by code."
  },
  {
    icon: Coins,
    title: "3. Escrow & Execution",
    description: "Funds are locked securely in neutral escrow. Payouts trigger automatically upon validated milestone completion."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works-section" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
            Frictionless Validation
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to eliminating counterparty risk.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`flex-1 w-full md:text-${index % 2 === 1 ? 'left' : 'right'}`}>
                  <div className="p-8 rounded-3xl bg-card border border-border shadow-md relative z-10 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold font-display text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="w-16 h-16 rounded-full bg-background border-4 border-card flex items-center justify-center shadow-lg relative z-20 text-primary">
                  <step.icon size={24} strokeWidth={2.5} />
                </div>
                
                <div className="flex-1 w-full hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
