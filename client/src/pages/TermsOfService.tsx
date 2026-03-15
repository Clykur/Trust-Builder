import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the FreeTrust platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any additional terms applicable to specific services. If you do not agree to these Terms, you may not use the Platform.\n\nThese Terms constitute a legally binding agreement between you and FreeTrust Network Private Limited ("FreeTrust", "we", "our", or "us"), a company incorporated under the Companies Act, 2013, with its registered office in Bengaluru, Karnataka, India. We reserve the right to update these Terms at any time with 15 days' prior notice.`,
  },
  {
    title: "2. Eligibility",
    content: `To use FreeTrust, you must:\n\n• Be at least 18 years of age and competent to contract under the Indian Contract Act, 1872.\n• Be an Indian resident or a foreign national legally permitted to enter into contracts and receive or make payments in India under applicable FEMA regulations.\n• Not be prohibited from using our services under any applicable Indian law.\n• Complete Know Your Customer (KYC) verification as required by RBI KYC Master Directions and the Prevention of Money Laundering Act, 2002 ("PMLA").\n• Not be on any sanctions list issued by the United Nations, Government of India, or Financial Intelligence Unit-India (FIU-IND).\n\nBy registering, you represent and warrant that all information you provide is accurate, current, and complete.`,
  },
  {
    title: "3. Account Registration and Security",
    content: `You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to:\n\n• Provide accurate and truthful registration information, including a valid Indian mobile number and PAN/Aadhaar as required.\n• Keep your password and OTP credentials secure and not share them with third parties.\n• Notify us immediately at support@freetrust.network of any unauthorised use of your account.\n• Not create multiple accounts or accounts on behalf of others without authorisation.\n• Comply with all applicable cyber security practices as recommended by CERT-In.\n\nFreeTrust is not liable for any loss or damage arising from your failure to comply with these obligations.`,
  },
  {
    title: "4. Smart Contracts and Agreements",
    content: `Every engagement on FreeTrust is governed by a digital agreement ("Agreement") generated from our legally vetted templates. By initiating or accepting an Agreement, you acknowledge that:\n\n• The Agreement constitutes a legally binding contract under the Indian Contract Act, 1872 and the Information Technology Act, 2000, which recognises electronic contracts and digital signatures.\n• You have read, understood, and agreed to all terms contained in the Agreement before executing it electronically.\n• Milestones, deliverables, payment amounts in Indian Rupees (INR), and deadlines are as specified in the Agreement.\n• The Agreement cannot be modified after both parties have executed it, except through our formal amendment process.\n• FreeTrust-generated agreements are designed to be enforceable in Indian courts. You are responsible for ensuring they meet your specific legal requirements.`,
  },
  {
    title: "5. Escrow Services",
    content: `FreeTrust provides escrow services through payment partners licensed and regulated by the Reserve Bank of India ("RBI"). The following terms apply:\n\n• Client funds are deposited into escrow before any work begins, in accordance with RBI guidelines on payment aggregators and escrow accounts.\n• Funds are released to the freelancer in Indian Rupees (INR) upon verified milestone completion and mutual approval.\n• Neither party may unilaterally access escrowed funds except through the platform's release or dispute processes.\n• FreeTrust charges a service fee (inclusive of applicable GST) on each transaction as disclosed at the time of contract creation.\n• In the event of a dispute, funds remain in escrow pending resolution through our dispute process.\n• FreeTrust is not a bank or NBFC and does not accept deposits. Escrow services are provided solely through RBI-regulated partners.\n• TDS deductions applicable under the Income Tax Act, 1961 (including Section 194C or 194J as applicable) will be handled in accordance with law.`,
  },
  {
    title: "6. Dispute Resolution",
    content: `If a dispute arises regarding a milestone or deliverable:\n\n1. Either party may initiate a dispute through the platform's dispute centre.\n2. FreeTrust's AI verification engine will re-analyse the deliverable against the contract scope.\n3. If the AI assessment does not resolve the dispute, the matter proceeds to arbitration.\n4. Arbitration shall be conducted in accordance with the Arbitration and Conciliation Act, 1996 (as amended), by a sole arbitrator appointed by FreeTrust from a panel of qualified professionals.\n5. The seat and venue of arbitration shall be Bengaluru, Karnataka, India. Proceedings shall be conducted in English.\n6. The arbitrator's award is final and binding on both parties.\n7. FreeTrust charges an arbitration fee, which may be allocated to the losing party at the arbitrator's discretion.\n\nNothing in this clause prevents either party from seeking urgent interim relief from a competent court in Bengaluru.`,
  },
  {
    title: "7. Prohibited Conduct",
    content: `You agree not to:\n\n• Submit false, misleading, or fraudulent information or deliverables.\n• Circumvent the platform's escrow system by arranging payments outside FreeTrust.\n• Create fake reviews, manipulate reputation scores, or engage in review fraud.\n• Impersonate another person or entity.\n• Use the platform to facilitate any activity that violates Indian law, including the IT Act, PMLA, Foreign Exchange Management Act (FEMA), or any RBI regulation.\n• Engage in or facilitate money laundering, hawala transactions, or sanctions evasion.\n• Attempt to hack, scrape, reverse-engineer, or disrupt the platform in violation of the IT Act, 2000.\n• Harass, threaten, or abuse other users in violation of applicable law.\n\nViolation of these prohibitions may result in immediate account suspension, termination, forfeiture of escrowed funds, reporting to FIU-IND or CERT-In, and civil or criminal legal action.`,
  },
  {
    title: "8. Intellectual Property",
    content: `Unless otherwise agreed in the contract:\n\n• Work product created by a freelancer for a client becomes the client's intellectual property upon full payment, in accordance with the Copyright Act, 1957 and the Patents Act, 1970.\n• Prior to full payment, intellectual property remains with the freelancer.\n• FreeTrust's platform, technology, trademarks, and content are the exclusive property of FreeTrust Network Private Limited and protected under the Trade Marks Act, 1999 and Copyright Act, 1957.\n• You grant FreeTrust a non-exclusive, royalty-free licence to use your profile information for platform operations and marketing (with your consent), limited to the territory of India and international jurisdictions where FreeTrust operates.`,
  },
  {
    title: "9. Fees and Taxation",
    content: `FreeTrust charges service fees for platform use. Current fees are disclosed on our pricing page and within the contract creation flow. Fees are:\n\n• Inclusive of applicable Goods and Services Tax (GST) as per the CGST Act, 2017, unless stated otherwise.\n• Deducted automatically from escrowed funds at the time of payment release.\n• Non-refundable except in cases of platform error.\n• Subject to change with 15 days' notice to existing users.\n\nYou are solely responsible for payment of all applicable income taxes, professional taxes, and other levies on amounts received through the platform. FreeTrust will provide transaction statements to assist with your tax filing as required.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the fullest extent permitted by applicable Indian law:\n\n• FreeTrust's total liability to you for any claims arising from these Terms or your use of the platform shall not exceed the greater of the fees you paid to FreeTrust in the 12 months preceding the claim or ₹5,000 (Indian Rupees Five Thousand).\n• FreeTrust is not liable for indirect, incidental, consequential, punitive, or special damages.\n• FreeTrust does not guarantee that the platform will be uninterrupted, error-free, or secure at all times.\n\nNothing in these Terms excludes liability for death, personal injury, or fraud, or any other liability that cannot be excluded under the Consumer Protection Act, 2019 or other mandatory Indian law.`,
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify and hold harmless FreeTrust and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including reasonable legal fees) arising from:\n\n• Your use of the platform.\n• Your breach of these Terms.\n• Your violation of any third-party rights, including intellectual property rights.\n• Any content you submit or any agreement you enter into through the platform.\n• Your violation of any applicable Indian law or regulation.`,
  },
  {
    title: "12. Termination",
    content: `Either party may terminate these Terms at any time with reasonable notice. FreeTrust may suspend or terminate your account immediately without notice if you violate these Terms, engage in fraudulent activity, or if we are required to do so by a competent authority or under applicable Indian law.\n\nUpon termination:\n• Active contracts must be completed or cancelled in accordance with their terms.\n• Pending escrowed funds will be disbursed according to contract terms or dispute resolution outcomes.\n• Your profile and data will be retained as required by our Privacy Policy and applicable Indian law.\n• Provisions that by their nature survive termination (including dispute resolution, intellectual property, and limitation of liability) will continue to apply.`,
  },
  {
    title: "13. Governing Law and Jurisdiction",
    content: `These Terms are governed by and construed in accordance with the laws of India, including but not limited to the Indian Contract Act, 1872, the Information Technology Act, 2000, the Companies Act, 2013, and applicable RBI regulations.\n\nSubject to the arbitration clause in Section 6, the courts of competent jurisdiction in Bengaluru, Karnataka, India shall have exclusive jurisdiction to resolve any dispute arising out of or in connection with these Terms.\n\nFor consumer disputes not subject to arbitration, you may also approach the appropriate Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019.`,
  },
  {
    title: "14. Contact",
    content: `For questions about these Terms, contact us at:\n\nFreeTrust Network Private Limited\nBengaluru, Karnataka, India\nlegal@freetrust.network`,
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
              <ShieldCheck size={17} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">FreeTrust</span>
          </Link>
          <Link href="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
        <div className="mb-12">
          <span className="pill-badge mb-5 inline-flex">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 15, 2026 · Governed by the laws of India</p>
        </div>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <div key={i} className="border-b border-border/40 pb-10 last:border-0">
              <h2 className="text-xl font-bold font-display text-foreground mb-4">{sec.title}</h2>
              <div className="text-muted-foreground leading-relaxed text-sm space-y-3">
                {sec.content.split("\n\n").map((para, j) => (
                  <p key={j} className="whitespace-pre-line">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/40 py-8 mt-8">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} FreeTrust Network Private Limited. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/security" className="hover:text-primary transition-colors">Security Protocol</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
