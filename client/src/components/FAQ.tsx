import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is my money actually safe with FreeTrust?",
    a: "Yes. Funds are held in a neutral, multi-signature escrow vault. Neither party can access the funds unilaterally. They are only released when milestones are AI-verified and approved by both parties, or resolved through our legal arbitration protocol."
  },
  {
    q: "How does FreeTrust build a trust score?",
    a: "Your Trust Score is a composite of verified identity (KYC), on-chain work history, dispute record, and real-world proximity validation. It's permanently stored on the blockchain and cannot be deleted or purchased."
  },
  {
    q: "What happens if there's a dispute?",
    a: "Disputes go through a two-stage process. First, our AI engine re-analyzes the deliverable against the contract scope. If parties remain unaligned, the dispute escalates to legally-binding arbitration whose outcome was agreed upon when the contract was signed."
  },
  {
    q: "How are fake reviews prevented?",
    a: "A review on FreeTrust can only exist if there is a corresponding cryptographic proof of payment on the blockchain. No verified transaction means no review. Bot-farming is structurally impossible."
  },
  {
    q: "Are contracts legally enforceable?",
    a: "Yes. Every FreeTrust agreement is a legally binding contract structured to be enforceable in the major jurisdictions where our users operate. You get legal clarity with digital speed."
  },
  {
    q: "Who is FreeTrust for?",
    a: "FreeTrust is built for independent freelancers, agencies, enterprise clients, and investors who need verifiable, legally protected professional relationships at scale. If you do knowledge work remotely, this is for you."
  },
];

export function FAQ() {
  return (
    <section id="faq-section" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="pill-badge mb-6 inline-flex">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-5 mt-4">
            Questions Answered
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know before you join.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <AccordionItem 
                value={`item-${i}`} 
                className="border border-border/60 rounded-2xl px-2 bg-card data-[state=open]:border-primary/20 transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold py-5 px-4 hover:no-underline text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 px-4 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
