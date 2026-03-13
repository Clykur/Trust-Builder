import { motion } from "framer-motion";
import { UserCheck, FileKey, Coins, Briefcase, BrainCircuit, Users, Database } from "lucide-react";

const steps = [
  {
    icon: UserCheck,
    label: "Contract",
    title: "Client Creates a Smart Contract",
    description: "Use jurisdiction-compliant legal templates to define scope, milestones, deadlines, and exact payment terms. Every word is enforceable.",
  },
  {
    icon: FileKey,
    label: "Escrow",
    title: "Funds Are Locked in Escrow",
    description: "Payment is secured in a neutral, multi-signature escrow vault before any work begins. Neither party can touch it unilaterally.",
  },
  {
    icon: Briefcase,
    label: "Delivery",
    title: "Freelancer Delivers Milestones",
    description: "Work is submitted directly through the platform, timestamped, and linked to the contract scope for a complete audit trail.",
  },
  {
    icon: BrainCircuit,
    label: "AI Check",
    title: "AI Verifies the Submission",
    description: "Our verification engine analyzes the deliverable against each contract requirement, flagging gaps before human review.",
  },
  {
    icon: Users,
    label: "Approval",
    title: "Both Parties Confirm",
    description: "Client and freelancer review the AI assessment and give final approval. Disputes are escalated to legal arbitration if needed.",
  },
  {
    icon: Coins,
    label: "Payment",
    title: "Instant Payment Release",
    description: "The moment approval is confirmed, the smart contract executes and funds are transferred directly — no delays, no intermediaries.",
  },
  {
    icon: Database,
    label: "Reputation",
    title: "Reputation Token Is Minted",
    description: "A permanent, cryptographic proof of the collaboration is recorded on the blockchain — building an immutable professional history.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works-section" className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 max-w-2xl mx-auto"
        >
          <span className="pill-badge mb-6 inline-flex">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Seven Steps to <br />Zero-Risk Collaboration
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every FreeTrust engagement follows a rigorous, automated protocol designed to protect all parties at every stage.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className={`group flex gap-5 p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${
                index === 6 ? "md:col-span-2" : ""
              }`}
            >
              {/* Step number + icon */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-primary/6 border border-primary/15 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:border-primary/25 transition-all duration-200">
                    <step.icon size={22} strokeWidth={2} />
                  </div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{step.label}</span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className="step-number text-[2.2rem] leading-none">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-base font-bold font-display text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
