import { motion } from "framer-motion";
import { Shield, BrainCircuit, Scale, Network } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Cryptographic Security",
    description: "Every contract, milestone, and deliverable is cryptographically hashed and stored immutably. Absolute proof of work and agreement."
  },
  {
    icon: Scale,
    title: "Legally Binding",
    description: "Digital agreements translated instantly into jurisdiction-compliant legal contracts. Protection without the prohibitive legal fees."
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Matching",
    description: "Our proprietary intelligence engine analyzes verified historical data to match the perfect talent with exact project requirements."
  },
  {
    icon: Network,
    title: "Network Reputation",
    description: "Build a portable, verified professional graph. Your successes are validated by cryptographic proof, not just subjective reviews."
  }
];

export function Features() {
  return (
    <section id="features-section" className="py-24 bg-background relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground"
          >
            The New Standard of Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            We're building the infrastructure for a trustless professional economy. 
            Focus on creating value, we handle the security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg shadow-black/[0.03] hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                <feature.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
