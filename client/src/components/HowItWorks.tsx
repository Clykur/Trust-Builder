import { motion } from "framer-motion";
import { UserCheck, FileKey, Coins, Briefcase, BrainCircuit, Users, Database } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    title: "1. Client creates contract",
    description: "Define scope, milestones, and payment terms using our jurisdiction-compliant legal templates."
  },
  {
    icon: FileKey,
    title: "2. Funds locked in escrow",
    description: "Capital is secured in our neutral zero-loss escrow system before work begins."
  },
  {
    icon: Briefcase,
    title: "3. Freelancer delivers work",
    description: "The freelancer works on the defined milestones and submits deliverables through the platform."
  },
  {
    icon: BrainCircuit,
    title: "4. AI verifies delivery",
    description: "Our AI engine analyzes the submission against the contract scope to ensure all requirements are met."
  },
  {
    icon: Users,
    title: "5. Mutual approval",
    description: "Both parties review the verified deliverables for final confirmation."
  },
  {
    icon: Coins,
    title: "6. Auto payment release",
    description: "Upon approval, the smart contract triggers the immediate release of funds from escrow."
  },
  {
    icon: Database,
    title: "7. Reputation token minted",
    description: "A cryptographic proof of the successful collaboration is added to the blockchain reputation ledger."
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
