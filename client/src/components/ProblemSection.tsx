import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, ShieldAlert, UserX, Ghost, Lock, Zap, LayoutPanelLeft } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Freelancers fear non-payment",
    description: "Weeks of work with no guarantee of compensation after delivery."
  },
  {
    icon: ShieldAlert,
    title: "Clients fear scams",
    description: "Paying upfront only to receive low-quality work or face disappearance."
  },
  {
    icon: Ghost,
    title: "Fake reviews",
    description: "Bot-generated testimonials and manipulated rating systems."
  },
  {
    icon: AlertCircle,
    title: "Platform manipulation",
    description: "Algorithmic bias and high fees that favor the platform, not the users."
  },
  {
    icon: Lock,
    title: "No legal safety",
    description: "Standard terms of service that offer zero protection in real disputes."
  },
  {
    icon: LayoutPanelLeft,
    title: "No real trust layer",
    description: "The internet lacks a native infrastructure for professional validation."
  }
];

export function ProblemSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">The Trust Gap</h2>
          <p className="text-lg text-muted-foreground">The current freelance economy is built on shaky foundations. We're fixing the fundamental flaws.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/5 text-destructive flex items-center justify-center mb-4">
                <p.icon size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
