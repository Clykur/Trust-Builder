import { motion } from "framer-motion";
import { Landmark, Wallet, Cpu, Database, MapPin } from "lucide-react";

const layers = [
  {
    icon: Landmark,
    title: "Legal Trust",
    description: "Jurisdiction-compliant, legally binding agreements automatically generated for every engagement."
  },
  {
    icon: Wallet,
    title: "Financial Trust",
    description: "Zero-loss escrow system ensuring funds are only released upon verified milestone completion."
  },
  {
    icon: Cpu,
    title: "AI Trust",
    description: "Machine learning verification engine that validates delivery against contract requirements."
  },
  {
    icon: Database,
    title: "Blockchain Trust",
    description: "Immutable reputation ledger storing cryptographic proof of every successful collaboration."
  },
  {
    icon: MapPin,
    title: "Proximity Trust",
    description: "Nearby freelancer discovery model leveraging local social proof and physical proximity."
  }
];

export function TrustLayers() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Multi-Dimensional Trust</h2>
          <p className="text-lg text-muted-foreground">Five layers of security working in harmony to protect your work and capital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-primary/5 border border-primary/10 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <layer.icon size={24} />
              </div>
              <h3 className="font-bold mb-2 text-sm">{layer.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
