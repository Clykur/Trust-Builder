import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Introduction",
    content: `FreeTrust Network Private Limited ("FreeTrust", "we", "our", or "us") is a company incorporated under the Companies Act, 2013, with its registered office in Bengaluru, Karnataka, India. We are committed to protecting your personal information in accordance with applicable Indian law.\n\nThis Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you visit our website or use our platform services. This policy is governed by the Digital Personal Data Protection Act, 2023 ("DPDP Act"), the Information Technology Act, 2000 ("IT Act"), and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules").\n\nBy using FreeTrust, you ("Data Principal") consent to the practices described in this policy. If you do not agree, please do not access the site or use our services.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect information you provide directly to us, including:\n\n• Identity Data: Full name, username, email address, city, state, PAN number (for tax compliance), Aadhaar number (where applicable and consented to), and professional role.\n• Contact Data: Email address, Indian mobile number, and city/state of residence.\n• Professional Data: Work history, skills, portfolio items, reviews, and reputation scores.\n• Financial Data: Bank account details, UPI IDs, and payment information processed through our RBI-regulated escrow partners. We do not store full bank account or card details on our servers.\n• Transaction Data: Details about payments made to and from you through the platform, including amounts in Indian Rupees (INR).\n• KYC Data: Government-issued identity documents as required under the Prevention of Money Laundering Act, 2002 ("PMLA") and RBI KYC Master Directions.\n• Technical Data: IP address, browser type and version, device identifiers, operating system, and usage logs.\n• Usage Data: Information about how you use our platform, including pages visited, features used, and time spent.\n• Communications: Records of any correspondence you send us.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect for the following purposes:\n\n• To register you as a user and maintain your account.\n• To process transactions and manage escrow payments in Indian Rupees (INR).\n• To verify your identity and build your Trust Score.\n• To facilitate contracts between clients and freelancers.\n• To provide AI-powered delivery verification services.\n• To record and maintain your blockchain reputation ledger.\n• To send you service notifications, updates, and alerts.\n• To detect and prevent fraud, abuse, and unauthorized access.\n• To comply with legal obligations under the DPDP Act, IT Act, PMLA, and other applicable Indian regulations.\n• To fulfill reporting requirements to RBI, income tax authorities, and other Indian regulatory bodies.\n• To improve our platform, conduct research, and develop new features.\n• To communicate marketing information where you have given explicit consent.`,
  },
  {
    title: "4. Legal Basis for Processing",
    content: `Under the Digital Personal Data Protection Act, 2023, we process your personal data on the following grounds:\n\n• Consent: We rely on your explicit, informed, and free consent as the primary basis for processing personal data, including sensitive personal data as defined under the SPDI Rules, 2011.\n• Legitimate Uses: Processing necessary for purposes specified under the DPDP Act including compliance with law, legal proceedings, and functions of the State.\n• Contractual Necessity: Processing necessary to perform the contract entered into with you on the platform.\n• Legal Obligation: Processing required to comply with applicable Indian laws, regulatory directions from RBI, SEBI, CERT-In, or other competent authorities.\n\nYou may withdraw consent at any time. Withdrawal of consent will not affect the lawfulness of processing carried out prior to withdrawal, but may result in inability to access platform features that require such processing.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We do not sell your personal data to any third party. We share information only in the following circumstances:\n\n• Counterparties: With clients or freelancers as necessary to perform a contract you have entered into on the platform.\n• Service Providers: With trusted third-party vendors (data processors) who assist us in operating our platform — payment processors regulated by RBI, cloud infrastructure providers, and AI verification services — all bound by contractual data processing obligations.\n• Regulatory Authorities: With RBI, Financial Intelligence Unit-India (FIU-IND), income tax authorities, and other Indian regulatory or law enforcement bodies when required by applicable law or court order.\n• Blockchain Records: Certain transaction proofs are written to a distributed ledger as cryptographic hashes. These records do not include personally identifiable information.\n• Business Transfers: In connection with a merger, amalgamation, acquisition, or sale of assets under the Companies Act, 2013, subject to the acquirer maintaining equivalent data protection standards.\n• Safety: When disclosure is necessary to protect the rights, property, or safety of FreeTrust, our users, or the public.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data for as long as necessary to provide our services and comply with our legal obligations under Indian law. Specifically:\n\n• Account data is retained for the duration of your account and for up to 8 years after account closure for compliance with the Companies Act, 2013 and income tax laws.\n• Transaction and financial records are retained for a minimum of 5 years as required under the PMLA, 2002 and RBI guidelines.\n• KYC records are retained for 5 years after the business relationship ends, as mandated by RBI KYC Master Directions.\n• Blockchain reputation records are permanent by the nature of the technology and cannot be deleted once written to the ledger.\n• Marketing communication preferences and consent records are retained until you withdraw consent.\n\nYou may request deletion of your personal data by contacting our Grievance Officer, subject to retention obligations under applicable law.`,
  },
  {
    title: "7. Your Rights as a Data Principal",
    content: `Under the Digital Personal Data Protection Act, 2023, you have the following rights:\n\n• Right to Access: Request a summary of the personal data we hold about you and the purposes for which it has been processed.\n• Right to Correction: Request correction of inaccurate or incomplete personal data.\n• Right to Erasure: Request erasure of personal data that is no longer necessary for the purpose for which it was collected, subject to legal retention requirements.\n• Right to Grievance Redressal: Have your grievances addressed by our Grievance Officer within the prescribed timelines.\n• Right to Nominate: Nominate another individual to exercise your rights in the event of your death or incapacity.\n• Right to Withdraw Consent: Withdraw previously given consent at any time, with the consequences of such withdrawal communicated to you.\n\nTo exercise any of these rights, contact our Grievance Officer at info@clykur.com. We will respond within 72 hours of receipt. If your grievance is not resolved, you may approach the Data Protection Board of India established under the DPDP Act, 2023.`,
  },
  {
    title: "8. Sensitive Personal Data",
    content: `Certain categories of data we collect qualify as "Sensitive Personal Data or Information" (SPDI) under the IT (SPDI) Rules, 2011, including financial information, biometric data used for KYC, and identity documents. We handle SPDI with heightened protections:\n\n• SPDI is collected only with your explicit written consent.\n• SPDI is not shared with third parties without your consent, except as required by law.\n• SPDI is used only for the lawful purpose for which it was collected.\n• You may at any time review, correct, or withdraw consent for SPDI by contacting our Grievance Officer.`,
  },
  {
    title: "9. Security",
    content: `We implement security practices as required under Rule 8 of the IT (SPDI) Rules, 2011 and CERT-In guidelines, including:\n\n• TLS/SSL encryption for all data in transit.\n• AES-256 encryption for sensitive data at rest.\n• Multi-signature authentication for escrow vault operations.\n• Regular independent security audits and vulnerability assessments as per CERT-In advisories.\n• Strict access controls and role-based permissions for internal systems.\n• Automated threat detection and intrusion prevention systems.\n\nIn the event of a data breach, we will notify the affected Data Principals and CERT-In within the timeframes prescribed under applicable law.`,
  },
  {
    title: "10. Cookies",
    content: `We use essential cookies to operate our platform and analytics cookies (with your consent) to understand usage patterns. Essential cookies are necessary for authentication, session management, and security and cannot be disabled. You may manage non-essential cookies through your browser settings. Disabling certain cookies may affect platform functionality.`,
  },
  {
    title: "11. Cross-Border Data Transfers",
    content: `Where we transfer personal data outside India to service providers hosting infrastructure abroad, we ensure such transfers comply with the provisions of the Digital Personal Data Protection Act, 2023 and any rules or notifications issued by the Central Government regarding permissible cross-border data transfers. We do not transfer personal data to jurisdictions specifically restricted by the Government of India.`,
  },
  {
    title: "12. Children",
    content: `FreeTrust is not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. In compliance with the DPDP Act, 2023, we will implement verifiable parental or guardian consent before processing any data of children. If we become aware that we have collected data from a person under 18 without such consent, we will delete that information promptly.`,
  },
  {
    title: "13. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our platform at least 15 days before the change takes effect. Continued use of the platform after the effective date constitutes acceptance of the updated policy.`,
  },
  {
    title: "14. Grievance Officer",
    content: `In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023, we have appointed a Grievance Officer to address your concerns:\n\nGrievance Officer\nclykur\nBengaluru, Karnataka, India\ninfo@clykur.com\n\nYou may also approach the Data Protection Board of India for unresolved grievances once the Board is constituted and operational under the DPDP Act, 2023.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/50 bg-card/50">
        <div className="container mx-auto px-4 max-w-4xl py-5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
              <ShieldCheck size={17} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              FreeTrust
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl py-14 md:py-20">
        <div className="mb-12">
          <span className="pill-badge mb-5 inline-flex">Legal</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: March 15, 2026 · Governed by the laws of India
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="border-b border-border/40 pb-10 last:border-0"
            >
              <h2 className="text-xl font-bold font-display text-foreground mb-4">
                {sec.title}
              </h2>
              <div className="text-muted-foreground leading-relaxed text-sm space-y-3">
                {sec.content.split("\n\n").map((para, j) => (
                  <p key={j} className="whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-border/40 py-8 mt-8">
        <div className="container mx-auto px-4 max-w-4xl flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>
            &copy; {new Date().getFullYear()} clykur. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/security"
              className="hover:text-primary transition-colors"
            >
              Security Protocol
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
