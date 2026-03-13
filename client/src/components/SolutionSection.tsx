import { motion } from "framer-motion";
import { Scale, Shield, BrainCircuit, Network, MapPin } from "lucide-react";

const solutions = [
  {
    icon: Scale,
    title: "Legal-backed agreements",
    description: "Jurisdiction-compliant contracts that turn digital handshakes into enforceable legal safety.",
    accent: "from-blue-500/10 to-indigo-500/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Zero-loss escrow",
    description: "Capital held in neutral custody — released only upon verified milestone completion, never before.",
    accent: "from-emerald-500/10 to-teal-500/5",
    iconColor: "text-emerald-600",
  },
  {
    icon: BrainCircuit,
    title: "AI verification engine",
    description: "Automated analysis validates that deliverables meet every requirement in the original contract.",
    accent: "from-violet-500/10 to-purple-500/5",
    iconColor: "text-violet-600",
  },
  {
    icon: Network,
    title: "Blockchain reputation ledger",
    description: "Immutable, cryptographic record of your professional history — impossible to fake or delete.",
    accent: "from-orange-500/10 to-amber-500/5",
    iconColor: "text-orange-600",
  },
  {
    icon: MapPin,
    title: "Proximity trust model",
    description: "Local discovery with physical verification that adds real-world accountability to every profile.",
    accent: "from-rose-500/10 to-pink-500/5",
    iconColor: "text-rose-600",
  }
];

export function SolutionSection() {
  return (
    <section id="solution-section" className="py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="pill-badge mb-6 inline-flex">The Solution</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Five Pillars of <br />Professional Trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive infrastructure engineered to eliminate every risk in the freelance economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {solutions.slice(0, 3).map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${s.accent} border border-border/50 hover:border-primary/15 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 ${s.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-bold font-display mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {solutions.slice(3).map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1 }}
              className={`group p-8 rounded-3xl bg-gradient-to-br ${s.accent} border border-border/50 hover:border-primary/15 hover:shadow-lg transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 ${s.iconColor} group-hover:scale-110 transition-transform duration-200`}>
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-bold font-display mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
