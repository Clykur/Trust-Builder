import { motion } from "framer-motion";
import { Scale, Shield, BrainCircuit, Network, MapPin } from "lucide-react";

const solutions = [
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

export function SolutionSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">The Infrastructure of Trust</h2>
          <p className="text-lg text-muted-foreground">We've engineered a comprehensive solution to the fundamental problems of the freelance economy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border/50 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <s.icon size={28} />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
