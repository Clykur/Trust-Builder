import { motion } from "framer-motion";
import { Building2, Briefcase, Users, Code, Palette, Scale, MapPin, Tv, FileText } from "lucide-react";

const useCases = [
  { icon: Code, title: "Developers & Engineers", desc: "Ship code with automatic payment on merge. No more chasing invoices." },
  { icon: Palette, title: "Designers & Creatives", desc: "Protect your intellectual property until final, verified payout." },
  { icon: Scale, title: "Legal & Consultants", desc: "Standardize every advisory engagement with a smart contract." },
  { icon: Building2, title: "Startups & SMBs", desc: "Scale quickly without the risk of scams, bad hires, or lost deposits." },
  { icon: Briefcase, title: "Agencies", desc: "Manage sub-contractors with automated verification and secure escrow." },
  { icon: Users, title: "Remote Teams", desc: "Collaborate across borders with absolute financial and legal security." },
  { icon: Tv, title: "Content Creators", desc: "Define scope, deliver, and get paid — with a contract that protects you." },
  { icon: MapPin, title: "Local Freelancers", desc: "Build reputation in your city backed by cryptographic proof." },
  { icon: FileText, title: "Writers & Researchers", desc: "Milestone-based payments tied to verified delivery — every time." },
];

export function UseCases() {
  return (
    <section id="use-cases-section" className="py-28 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="pill-badge mb-6 inline-flex">Use Cases</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Built for Every <br />Knowledge Worker
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FreeTrust adapts to how you work — regardless of your industry or role.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/6 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-200">
                <uc.icon size={20} />
              </div>
              <div>
                <div className="font-bold text-sm text-foreground mb-1">{uc.title}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{uc.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
