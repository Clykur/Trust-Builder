import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `FreeTrust Network, Inc. ("FreeTrust", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our platform services. By using FreeTrust, you agree to the practices described in this policy.\n\nIf you do not agree with the terms of this policy, please do not access the site or use our services.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly to us, including:\n\n• Identity Data: Full name, username, email address, city, industry, and professional role.\n• Contact Data: Email address, phone number, and city of residence.\n• Professional Data: Work history, skills, portfolio items, reviews, and reputation scores.\n• Financial Data: Payment method information processed through our regulated escrow partners. We do not store full card or bank details on our servers.\n• Transaction Data: Details about payments made to and from you through the platform.\n• Technical Data: IP address, browser type and version, device identifiers, operating system, and usage logs.\n• Usage Data: Information about how you use our platform, including pages visited, features used, and time spent.\n• Communications: Records of any correspondence you send us.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:\n\n• To register you as a user and maintain your account.\n• To process transactions and manage escrow payments.\n• To verify your identity and build your Trust Score.\n• To facilitate contracts between clients and freelancers.\n• To provide AI-powered delivery verification services.\n• To record and maintain your blockchain reputation ledger.\n• To send you service notifications, updates, and alerts.\n• To detect and prevent fraud, abuse, and unauthorized access.\n• To comply with legal obligations and regulatory requirements.\n• To improve our platform, conduct research, and develop new features.\n• To communicate marketing information where you have given consent.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `Where applicable under data protection law (including GDPR), we rely on the following legal bases for processing:\n\n• Contract Performance: Processing necessary to perform the contract we have entered into with you.\n• Legitimate Interests: Processing necessary for our legitimate business interests, such as fraud prevention, network security, and platform improvement.\n• Legal Obligation: Processing required to comply with applicable laws and regulations.\n• Consent: Processing based on your explicit consent, such as for marketing communications. You may withdraw consent at any time.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We do not sell your personal data. We share information only in the following circumstances:\n\n• Counterparties: With clients or freelancers as necessary to perform a contract you have entered into.\n• Service Providers: With trusted third-party vendors who assist us in operating our platform (payment processors, cloud infrastructure, AI verification services), bound by strict data processing agreements.\n• Blockchain Records: Certain transaction proofs are written to a public blockchain as part of our reputation ledger. These records contain cryptographic identifiers and do not include personally identifiable information.\n• Legal Requirements: When required by applicable law, regulation, legal process, or governmental request.\n• Business Transfers: In connection with a merger, acquisition, or sale of assets, subject to standard confidentiality protections.\n• Safety: When we believe disclosure is necessary to protect the rights, property, or safety of FreeTrust, our users, or the public.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data for as long as necessary to provide our services and comply with our legal obligations. Specifically:\n\n• Account data is retained for the duration of your account and for up to 7 years after account closure for legal and tax compliance purposes.\n• Transaction records are retained for a minimum of 7 years as required by financial regulations.\n• Blockchain reputation records are permanent by the nature of the technology and cannot be deleted once written.\n• Marketing communication preferences and consent records are retained until you withdraw consent.\n\nYou may request deletion of your account data, subject to retention obligations.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights:\n\n• Access: Request a copy of the personal data we hold about you.\n• Rectification: Request correction of inaccurate or incomplete data.\n• Erasure: Request deletion of your personal data, subject to legal retention requirements.\n• Restriction: Request that we limit our processing of your data in certain circumstances.\n• Portability: Receive your personal data in a structured, machine-readable format.\n• Objection: Object to processing based on legitimate interests or for direct marketing.\n• Withdraw Consent: Withdraw any previously given consent at any time.\n\nTo exercise any of these rights, contact us at privacy@freetrust.network. We will respond within 30 days.`,
  },
  {
    title: "8. Security",
    content: `We implement industry-standard security measures to protect your personal data, including:\n\n• TLS/SSL encryption for all data in transit.\n• AES-256 encryption for sensitive data at rest.\n• Multi-signature authentication for escrow vault operations.\n• Regular independent security audits and penetration testing.\n• Strict access controls and role-based permissions for internal systems.\n• Automated threat detection and intrusion prevention systems.\n\nNo method of transmission or storage is 100% secure. In the event of a data breach affecting your rights, we will notify you and relevant authorities as required by law.`,
  },
  {
    title: "9. Cookies",
    content: `We use essential cookies to operate our platform and analytics cookies (with your consent) to understand usage patterns. Essential cookies cannot be disabled as they are necessary for authentication, session management, and security. You may manage non-essential cookies through your browser settings or our consent manager. Disabling certain cookies may affect platform functionality.`,
  },
  {
    title: "10. International Transfers",
    content: `FreeTrust operates globally. Your data may be transferred to and processed in countries outside your home jurisdiction. When transferring data from the European Economic Area (EEA), we rely on Standard Contractual Clauses or adequacy by the European Commission to ensure appropriate safeguards are in place.`,
  },
  {
    title: "11. Children",
    content: `FreeTrust is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have collected data from a person under 18 without verifiable parental consent, we will delete that information promptly.`,
  },
  {
    title: "12. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our platform at least 30 days before the change takes effect. Continued use of the platform after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    title: "13. Contact",
    content: `For questions, concerns, or to exercise your rights, contact our Data Protection Officer:\n\nFreeTrust Network, Inc.\nPrivacy & Data Protection\nprivacy@freetrust.network\n\nFor EEA users, you also have the right to lodge a complaint with your local supervisory authority.`,
  },
];

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">Privacy Policy</h1>
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
            <Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link>
            <Link href="/security"><a className="hover:text-primary transition-colors">Security Protocol</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
