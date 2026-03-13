import { motion } from "framer-motion";
import { Landmark, Wallet, Cpu, Database, MapPin } from "lucide-react";

const layers = [
  {
    icon: Landmark,
    title: "Legal Trust",
    tagline: "Enforceable by law",
    description: "Jurisdiction-compliant contracts give every engagement the force of a formal legal agreement.",
    color: "from-blue-500/15 to-blue-500/5",
    iconClass: "text-blue-600 bg-blue-50",
  },
  {
    icon: Wallet,
    title: "Financial Trust",
    tagline: "Zero-loss guarantee",
    description: "Funds are held in neutral escrow and released automatically upon verified delivery.",
    color: "from-emerald-500/15 to-emerald-500/5",
    iconClass: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Cpu,
    title: "AI Trust",
    tagline: "Automated verification",
    description: "Machine learning validates every delivery against the exact contract specifications.",
    color: "from-violet-500/15 to-violet-500/5",
    iconClass: "text-violet-600 bg-violet-50",
  },
  {
    icon: Database,
    title: "Blockchain Trust",
    tagline: "Immutable history",
    description: "Cryptographic proof of each collaboration recorded permanently on a public ledger.",
    color: "from-orange-500/15 to-orange-500/5",
    iconClass: "text-orange-600 bg-orange-50",
  },
  {
    icon: MapPin,
    title: "Proximity Trust",
    tagline: "Real-world accountability",
    description: "Physical proximity and local social proof add a layer no digital system can fake.",
    color: "from-rose-500/15 to-rose-500/5",
    iconClass: "text-rose-600 bg-rose-50",
  }
];

export function TrustLayers() {
  return (
    <section id="trust-layers-section" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-foreground/[0.022]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="pill-badge mb-6 inline-flex">Trust Architecture</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Five Dimensions <br />of Protection
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every FreeTrust engagement is secured by five independently operating trust layers — simultaneously.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group p-6 rounded-3xl bg-gradient-to-b ${layer.color} border border-border/60 hover:shadow-lg hover:border-transparent transition-all duration-300 text-center`}
            >
              <div className={`w-12 h-12 rounded-2xl ${layer.iconClass} flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                <layer.icon size={22} />
              </div>
              <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2">{layer.tagline}</div>
              <h3 className="font-bold text-sm text-foreground mb-2">{layer.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{layer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
