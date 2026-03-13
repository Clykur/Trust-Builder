import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the FreeTrust platform ("Platform"), you agree to be bound by these Terms of Service ("Terms"), our Privacy Policy, and any additional terms applicable to specific services. If you do not agree to these Terms, you may not use the Platform.\n\nThese Terms constitute a legally binding agreement between you and FreeTrust Network, Inc. ("FreeTrust", "we", "our", or "us"). We reserve the right to update these Terms at any time with 30 days' notice.`,
  },
  {
    title: "2. Eligibility",
    content: `To use FreeTrust, you must:\n\n• Be at least 18 years of age.\n• Have the legal capacity to enter into binding contracts in your jurisdiction.\n• Not be prohibited from using our services under applicable law.\n• Complete identity verification (KYC) as required by our compliance procedures.\n\nBy registering, you represent and warrant that all information you provide is accurate, current, and complete.`,
  },
  {
    title: "3. Account Registration and Security",
    content: `You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You agree to:\n\n• Provide accurate and truthful registration information.\n• Keep your password secure and not share it with third parties.\n• Notify us immediately of any unauthorized use of your account.\n• Not create multiple accounts or accounts on behalf of others without authorization.\n\nFreeTrust is not liable for any loss or damage arising from your failure to comply with these obligations.`,
  },
  {
    title: "4. Smart Contracts and Agreements",
    content: `Every engagement on FreeTrust is governed by a smart contract ("Agreement") generated from our legal templates. By initiating or accepting an Agreement, you acknowledge that:\n\n• The Agreement constitutes a legally binding contract under applicable law.\n• You have read, understood, and agreed to all terms contained in the Agreement before signing.\n• Milestones, deliverables, payment amounts, and deadlines are as specified in the Agreement.\n• The Agreement cannot be modified after both parties have signed, except through our formal amendment process.\n• FreeTrust-generated agreements are designed to be enforceable in major jurisdictions but you are responsible for ensuring they meet your specific legal requirements.`,
  },
  {
    title: "5. Escrow Services",
    content: `FreeTrust provides escrow services through licensed payment partners. The following terms apply:\n\n• Client funds are deposited into escrow before any work begins.\n• Funds are released to the freelancer upon verified milestone completion and mutual approval.\n• Neither party may unilaterally access escrowed funds except through the platform's release or dispute processes.\n• FreeTrust charges a service fee on each transaction as disclosed at the time of contract creation.\n• In the event of a dispute, funds remain in escrow pending resolution.\n• FreeTrust is not a bank or regulated financial institution and does not guarantee the solvency of escrow partners.`,
  },
  {
    title: "6. Dispute Resolution",
    content: `If a dispute arises regarding a milestone or deliverable:\n\n1. Either party may initiate a dispute through the platform's dispute center.\n2. FreeTrust's AI verification engine will re-analyze the deliverable against the contract scope.\n3. If the AI assessment does not resolve the dispute, the matter proceeds to human arbitration.\n4. Arbitration is conducted by an independent third-party arbitrator selected by FreeTrust.\n5. The arbitrator's decision is final and binding, as agreed upon when the contract was executed.\n6. FreeTrust charges an arbitration fee, which may be allocated to the losing party at the arbitrator's discretion.\n\nThis dispute resolution process does not prevent either party from seeking emergency injunctive relief from a court of competent jurisdiction.`,
  },
  {
    title: "7. Prohibited Conduct",
    content: `You agree not to:\n\n• Submit false, misleading, or fraudulent information or deliverables.\n• Circumvent the platform's escrow system by arranging payments outside FreeTrust.\n• Create fake reviews, manipulate reputation scores, or engage in review fraud.\n• Impersonate another person or entity.\n• Use the platform to facilitate illegal activity, money laundering, or sanctions evasion.\n• Attempt to hack, scrape, reverse-engineer, or disrupt the platform.\n• Harass, threaten, or abuse other users.\n• Violate any applicable law or regulation.\n\nViolation of these prohibitions may result in immediate account suspension, termination, forfeiture of escrowed funds, and legal action.`,
  },
  {
    title: "8. Intellectual Property",
    content: `Unless otherwise agreed in the smart contract:\n\n• Work product created by a freelancer for a client becomes the client's intellectual property upon full payment.\n• Prior to full payment, intellectual property remains with the freelancer.\n• FreeTrust's platform, technology, trademarks, and content are the exclusive property of FreeTrust Network, Inc.\n• You grant FreeTrust a non-exclusive, royalty-free license to use your profile information for platform operations and marketing (with your consent).`,
  },
  {
    title: "9. Fees",
    content: `FreeTrust charges service fees for platform use. Current fees are disclosed on our pricing page and within the contract creation flow. Fees are:\n\n• Deducted automatically from escrowed funds at the time of payment release.\n• Non-refundable except in cases of platform error.\n• Subject to change with 30 days' notice to existing users.\n\nAll fees are exclusive of applicable taxes, which you are responsible for paying.`,
  },
  {
    title: "10. Limitation of Liability",
    content: `To the fullest extent permitted by law:\n\n• FreeTrust's total liability to you for any claims arising from these Terms or your use of the platform shall not exceed the greater of the fees you paid to FreeTrust in the 12 months preceding the claim or $100.\n• FreeTrust is not liable for indirect, incidental, consequential, punitive, or special damages.\n• FreeTrust does not guarantee that the platform will be uninterrupted, error-free, or secure at all times.\n\nSome jurisdictions do not allow the exclusion of certain warranties or limitations on liability. In such jurisdictions, our liability is limited to the maximum extent permitted by law.`,
  },
  {
    title: "11. Indemnification",
    content: `You agree to indemnify and hold harmless FreeTrust and its officers, directors, employees, and agents from any claims, damages, losses, and expenses (including legal fees) arising from:\n\n• Your use of the platform.\n• Your breach of these Terms.\n• Your violation of any third-party rights.\n• Any content you submit or any agreement you enter into through the platform.`,
  },
  {
    title: "12. Termination",
    content: `Either party may terminate these Terms at any time. FreeTrust may suspend or terminate your account immediately without notice if you violate these Terms, engage in fraudulent activity, or if we are required to do so by law.\n\nUpon termination:\n• Active contracts must be completed or cancelled in accordance with their terms.\n• Pending escrowed funds will be disbursed according to contract terms or dispute resolution.\n• Your profile and data will be retained as required by our Privacy Policy.\n• Sections that by their nature should survive termination will continue to apply.`,
  },
  {
    title: "13. Governing Law",
    content: `These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any legal proceedings not subject to the arbitration clause shall be brought exclusively in the federal or state courts located in Delaware.\n\nFor users in the European Union, mandatory consumer protection laws of your country of residence also apply.`,
  },
  {
    title: "14. Contact",
    content: `For questions about these Terms, contact us at:\n\nFreeTrust Network, Inc.\nlegal@freetrust.network`,
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl py-5 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
                <ShieldCheck size={17} strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">FreeTrust</span>
            </a>
          </Link>
          <Link href="/">
            <a className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={15} />
              Back to home
            </a>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
        <div className="mb-12">
          <span className="pill-badge mb-5 inline-flex">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 13, 2026</p>
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

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-8">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} FreeTrust Network, Inc. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link>
            <Link href="/security"><a className="hover:text-primary transition-colors">Security Protocol</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
