import { motion } from "framer-motion";
import { Building2, Briefcase, Users, Code, Palette, Scale, MapPin } from "lucide-react";

const useCases = [
  { icon: MapPin, title: "Local Freelancers", desc: "Connect with trusted experts in your immediate vicinity." },
  { icon: Users, title: "Remote Teams", desc: "Collaborate across borders with absolute financial security." },
  { icon: Building2, title: "Startups", desc: "Scale quickly without the risk of bad hires or lost deposits." },
  { icon: Briefcase, title: "Agencies", desc: "Manage sub-contractors with automated verification." },
  { icon: Code, title: "Developers", desc: "Code with the certainty of automatic payment release." },
  { icon: Palette, title: "Designers", desc: "Protect your intellectual property until final payout." },
  { icon: Scale, title: "Legal Consultants", desc: "Standardize your advisory agreements with smart contracts." }
];

export function UseCases() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Built for Every Professional</h2>
          <p className="text-lg text-muted-foreground">Valida powers trust across the entire professional services spectrum.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-6 py-4 rounded-full bg-card border border-border shadow-sm flex items-center gap-3"
            >
              <uc.icon size={18} className="text-primary" />
              <span className="font-medium text-sm">{uc.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
