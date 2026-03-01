import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is my money safe?",
    a: "Yes. Funds are held in a neutral, multi-signature escrow account. They are only released when milestones are verified by AI and approved by both parties, or via our legal dispute resolution protocol."
  },
  {
    q: "How is trust built?",
    a: "Trust is built through a combination of identity verification (KYC), historical performance data stored on-chain, and real-world proximity validation. We call this the FreeTrust Trust Score."
  },
  {
    q: "How are disputes handled?",
    a: "Our system uses a dual-layer approach. First, AI analyzes the work against the contract scope. If unresolved, it escalates to a legally-backed arbitration process defined in the contract itself."
  },
  {
    q: "What prevents fake reviews?",
    a: "Unlike traditional platforms, a review can only be left if there is a corresponding cryptographic proof of payment and work delivery on the blockchain. No payment, no review."
  },
  {
    q: "Is it legally valid?",
    a: "Yes. Every agreement on FreeTrust is a legally binding contract formatted to be enforceable in most major jurisdictions, combining digital efficiency with traditional legal safety."
  }
];

export function FAQ() {
  return (
    <section id="faq-section" className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">FAQ</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about the trust infrastructure.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-left font-bold py-6 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
