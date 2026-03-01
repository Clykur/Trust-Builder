import { motion } from "framer-motion";
import { Shield, BrainCircuit, Scale, Network, MapPin } from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Legal-backed agreements",
    description: "Jurisdiction-compliant contracts that turn digital handshakes into enforceable legal safety."
  },
  {
    icon: Shield,
    title: "Zero-loss escrow system",
    description: "Capital is held in neutral custody, ensuring no one loses money to scams or non-payment."
  },
  {
    icon: BrainCircuit,
    title: "AI verification engine",
    description: "Automated analysis of deliverables to ensure they match agreed-upon contract requirements."
  },
  {
    icon: Network,
    title: "Blockchain reputation ledger",
    description: "An immutable, cryptographic record of your professional successes and verified work history."
  },
  {
    icon: MapPin,
    title: "Nearby freelancer trust model",
    description: "Leveraging local proximity and physical verification to add an extra layer of real-world trust."
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
