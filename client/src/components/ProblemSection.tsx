import { motion } from "framer-motion";
import { AlertCircle, ShieldAlert, UserX, Ghost, Lock, LayoutPanelLeft } from "lucide-react";

const problems = [
  {
    icon: UserX,
    title: "Freelancers fear non-payment",
    description: "Weeks of skilled work delivered with zero guarantee of compensation."
  },
  {
    icon: ShieldAlert,
    title: "Clients fall victim to scams",
    description: "Paying upfront only to receive substandard work — or nothing at all."
  },
  {
    icon: Ghost,
    title: "Fake reviews everywhere",
    description: "Bot-generated testimonials and manipulated ratings erode trust at scale."
  },
  {
    icon: AlertCircle,
    title: "Platforms exploit both sides",
    description: "Algorithmic bias, high fees, and opaque systems that serve the platform first."
  },
  {
    icon: Lock,
    title: "Zero legal recourse",
    description: "Generic terms of service that offer no real protection when disputes arise."
  },
  {
    icon: LayoutPanelLeft,
    title: "No native trust infrastructure",
    description: "The internet was never built with professional accountability in mind."
  }
];

export function ProblemSection() {
  return (
    <section id="problem-section" className="py-28 relative overflow-hidden">
      {/* Subtle dark band */}
      <div className="absolute inset-0 bg-foreground/[0.022]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="pill-badge mb-6 inline-flex">The Problem</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            The Freelance Economy<br />is Broken by Design
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Six structural failures that cost freelancers and clients billions every year.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-7 rounded-2xl bg-card border border-border hover:border-destructive/20 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-destructive/6 text-destructive/70 flex items-center justify-center mb-5 group-hover:bg-destructive/10 group-hover:text-destructive transition-all duration-200">
                <p.icon size={22} />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
