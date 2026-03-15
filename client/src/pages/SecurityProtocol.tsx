import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Overview",
    content: `clykur operates from Bengaluru, Karnataka, India. Our platform is built on a security-first architecture designed to meet and exceed the standards prescribed by the Information Technology Act, 2000 ("IT Act"), the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ("SPDI Rules"), CERT-In guidelines, and RBI directions on payment system security.\n\nEvery layer of our platform — from client-side interfaces to escrow payment flows and blockchain reputation storage — has been designed with the assumption that threats exist and must be mitigated proactively. This document describes the technical and organisational security measures FreeTrust employs to protect user data, funds, and platform integrity.`,
  },
  {
    title: "2. Infrastructure Security",
    content: `FreeTrust's platform is hosted on enterprise-grade cloud infrastructure with data centres located in India in compliance with applicable data localisation requirements:\n\n• All production environments are isolated in dedicated virtual private clouds (VPCs) with strict network segmentation.\n• Public-facing services are protected by a web application firewall (WAF) that filters against OWASP Top 10 vulnerabilities including SQL injection, XSS, and CSRF attacks.\n• DDoS mitigation is provided at the network and application layers.\n• Infrastructure is deployed across multiple geographic availability zones within India to ensure resilience and uptime.\n• All infrastructure changes are version-controlled and deployed through automated CI/CD pipelines with mandatory security scanning.\n• Production access requires multi-factor authentication (MFA) and is granted on a least-privilege basis.\n• Our infrastructure practices are aligned with CERT-In security guidelines and advisories issued from time to time.`,
  },
  {
    title: "3. Data Encryption",
    content: `Encryption is applied at every stage of data handling, in compliance with Rule 8 of the SPDI Rules, 2011:\n\n• In Transit: All communication between clients and FreeTrust servers is encrypted using TLS 1.3. Certificates are managed via automated renewal with strict HSTS headers enforced.\n• At Rest: All database contents are encrypted using AES-256. Encryption keys are managed through a dedicated key management service (KMS) with hardware security module (HSM) backing.\n• Field-Level Encryption: Sensitive personal data and sensitive personal data or information (SPDI) — including financial data, KYC documents, and identity information — are encrypted at the application layer before being stored.\n• Blockchain Records: Transaction proofs are stored as cryptographic hashes on the distributed ledger. No personally identifiable information is written to the chain.`,
  },
  {
    title: "4. Escrow Vault Security",
    content: `The financial escrow system is the most sensitive component of FreeTrust and is protected accordingly, in line with RBI guidelines on payment aggregators, escrow accounts, and digital payment security:\n\n• Multi-Signature Authorisation: Escrow fund movements require cryptographic signatures from multiple independent parties. No single actor can authorise a transfer unilaterally.\n• Segregated Accounts: Client funds are held in segregated escrow accounts with RBI-licensed payment partners, completely separate from FreeTrust's operating capital.\n• Real-Time Monitoring: All escrow operations are monitored in real time with automated anomaly detection aligned with RBI fraud monitoring requirements. Unusual patterns trigger immediate alerts and may suspend the operation pending manual review.\n• Reconciliation: Daily automated reconciliation verifies that escrow ledger balances match corresponding RBI-regulated partner records.\n• Cold Storage Buffer: A portion of digital asset reserves is held in offline cold storage to reduce exposure to online attacks.\n• All payment transactions are processed in Indian Rupees (INR) through RBI-regulated channels.`,
  },
  {
    title: "5. KYC/AML Compliance",
    content: `All FreeTrust users undergo identity verification before accessing financial features, in compliance with the Prevention of Money Laundering Act, 2002 ("PMLA"), RBI KYC Master Directions, and FIU-IND reporting requirements:\n\n• Identity documents (Aadhaar, PAN, Passport, Voter ID, or Driving Licence) are verified against government databases using an accredited KYC provider empanelled in India.\n• Biometric liveness checks (where applicable) prevent the use of spoofed or fraudulent identity documents.\n• Sanctions screening is performed at registration and on an ongoing basis against OFAC, UN, and Government of India sanctions lists, as well as FIU-IND designated lists.\n• KYC data is stored by our licensed KYC partner and subject to their security certifications. FreeTrust stores only verification status tokens, not raw document images.\n• Suspicious transactions are reported to FIU-IND as required under the PMLA and applicable rules.\n• Enhanced due diligence (EDD) is applied to politically exposed persons (PEPs) and high-value accounts as per RBI guidelines.`,
  },
  {
    title: "6. Smart Contract Security",
    content: `Digital agreement templates and execution logic are subject to rigorous security and legal review:\n\n• All legal templates are drafted by qualified Indian legal professionals and reviewed for compliance with the Indian Contract Act, 1872, the IT Act, 2000, and relevant sector regulations.\n• Contract execution logic is independently audited by third-party security firms before deployment.\n• Contract parameters are immutable once executed by both parties via electronic signature under the IT Act. Any modification attempt is rejected and logged.\n• Edge case scenarios (non-delivery, partial delivery, force majeure under Indian law, lockdown events) are addressed explicitly in every template.\n• A formal verification process is applied to payment release logic to mathematically prove correctness before each release.`,
  },
  {
    title: "7. AI Verification Engine Security",
    content: `The AI delivery verification system is isolated and hardened:\n\n• The AI engine operates in a sandboxed environment with no direct internet access.\n• Deliverables submitted for verification are scanned for malware and malicious content before processing.\n• Model integrity is verified via cryptographic checksums before each evaluation run.\n• AI decisions are logged with full audit trails and can be reviewed by human arbitrators.\n• The model is regularly retrained and evaluated for adversarial robustness to prevent prompt injection or manipulation.\n• Human override capability is available for all AI determinations in dispute contexts, and the final decision in arbitration rests with a qualified human arbitrator under the Arbitration and Conciliation Act, 1996.`,
  },
  {
    title: "8. Application Security",
    content: `FreeTrust follows a secure software development lifecycle (SSDLC) aligned with CERT-In guidelines and international best practices:\n\n• Static Application Security Testing (SAST) is run on every code commit.\n• Dynamic Application Security Testing (DAST) is performed against staging environments before every production release.\n• Dependency scanning tools monitor all third-party libraries for known vulnerabilities (CVEs) with automated patching for non-breaking updates.\n• Authentication uses industry-standard protocols (OAuth 2.0, FIDO2/WebAuthn) with support for hardware security keys.\n• OTP-based two-factor authentication via Indian mobile numbers is supported and encouraged for all accounts.\n• Sessions are short-lived with refresh token rotation. Suspicious session activity triggers forced re-authentication.\n• Rate limiting and CAPTCHA are applied to all authentication and sensitive form endpoints to prevent brute-force attacks.`,
  },
  {
    title: "9. Access Control",
    content: `Internal access to production systems and data is tightly controlled:\n\n• All employee access follows the principle of least privilege. Engineers only have access to systems required for their specific role.\n• Production database access requires a just-in-time access request with manager approval and full audit logging.\n• All administrative actions are logged immutably for audit purposes.\n• Privileged access workstations (PAWs) are required for sensitive operations.\n• Access rights are reviewed quarterly and immediately revoked upon employee departure.\n• Background verification checks (BGV) are conducted on all employees with access to sensitive systems through NASSCOM-empanelled agencies.\n• All employees with access to personal data execute non-disclosure agreements and undergo annual data protection training.`,
  },
  {
    title: "10. Security Audits and Penetration Testing",
    content: `FreeTrust undergoes regular independent security assessments:\n\n• Full-scope penetration tests are conducted by empanelled CERT-In security auditors at least annually, in line with CERT-In's information security audit framework.\n• Smart contract and payment logic audits are conducted before each major update.\n• Ongoing bug bounty programme incentivises responsible disclosure from the security research community.\n• Audit reports (executive summaries) are available to enterprise clients upon request under a confidentiality agreement.\n• Critical findings are remediated within 72 hours. High severity findings are remediated within 14 days, consistent with CERT-In incident response timelines.`,
  },
  {
    title: "11. Incident Response and CERT-In Reporting",
    content: `FreeTrust maintains a formal Cyber Security Incident Response Plan aligned with CERT-In directions:\n\n• A dedicated security incident response team (SIRT) is on call 24/7.\n• Cyber security incidents are reported to CERT-In within 6 hours of detection, as mandated by the CERT-In Directions on Information Security Practices, April 2022.\n• Incidents are classified by severity (P1-P4) with defined response time SLAs.\n• P1 (Critical) incidents involving data exposure or fund risk trigger immediate containment measures, executive escalation, and regulatory notification.\n• All incidents are documented in a post-incident report, and lessons learned are incorporated into security controls.\n• Affected Data Principals are notified promptly in accordance with the DPDP Act, 2023 and IT Act requirements.`,
  },
  {
    title: "12. Responsible Disclosure",
    content: `We encourage security researchers to report vulnerabilities responsibly. If you discover a security issue in FreeTrust's platform:\n\n• Email info@clykur.com with a detailed description of the vulnerability.\n• Do not exploit the vulnerability or access user data beyond what is necessary to demonstrate the issue. Unauthorised access to computer systems is a criminal offence under Section 43 and Section 66 of the IT Act, 2000.\n• Give us reasonable time (90 days) to investigate and remediate before public disclosure.\n• We will acknowledge receipt within 24 hours and provide regular updates on remediation progress.\n• Researchers who report valid, in-scope vulnerabilities in good faith may be eligible for recognition in our security acknowledgements page.`,
  },
  {
    title: "13. Regulatory Compliance",
    content: `FreeTrust is designed to comply with applicable Indian regulations and international standards including:\n\n• Information Technology Act, 2000 and IT (Amendment) Act, 2008.\n• IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.\n• Digital Personal Data Protection Act, 2023 (DPDP Act).\n• Prevention of Money Laundering Act, 2002 (PMLA) and PMLA Rules.\n• RBI Master Directions on KYC, Payment Aggregators, and Digital Payment Security Controls.\n• CERT-In Directions on Cyber Security Incident Reporting (April 2022) and security audit framework.\n• Goods and Services Tax (GST) Act, 2017 for all platform transactions.\n• ISO/IEC 27001 Information Security Management System (ISMS) — certification in progress.\n\nFor compliance-related enquiries, contact info@clykur.com.`,
  },
];

export default function SecurityProtocol() {
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
          <span className="pill-badge mb-5 inline-flex">Security</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">
            Security Protocol
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
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
