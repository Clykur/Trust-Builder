import { Link } from "wouter";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "1. Overview",
    content: `FreeTrust is built on a security-first architecture. Every layer of our platform, from client-side interfaces to smart contract execution and blockchain reputation storage, has been designed with the assumption that threats exist and must be mitigated proactively.\n\nThis document describes the technical and organizational security measures FreeTrust employs to protect user data, funds, and platform integrity.`,
  },
  {
    title: "2. Infrastructure Security",
    content: `FreeTrust's platform is hosted on enterprise-grade cloud infrastructure with the following controls:\n\n• All production environments are isolated in dedicated virtual private clouds (VPCs) with strict network segmentation.\n• Public-facing services are protected by a web application firewall (WAF) that filters against OWASP Top 10 vulnerabilities including SQL injection, XSS, and CSRF attacks.\n• DDoS mitigation is provided at the network and application layers.\n• Infrastructure is deployed across multiple geographic availability zones to ensure resilience and uptime.\n• All infrastructure changes are version-controlled and deployed through automated CI/CD pipelines with mandatory security scanning.\n• Production access requires multi-factor authentication (MFA) and is granted on a least-privilege basis.`,
  },
  {
    title: "3. Data Encryption",
    content: `Encryption is applied at every stage of data handling:\n\n• In Transit: All communication between clients and FreeTrust servers is encrypted using TLS 1.3. Certificates are managed via automated renewal with strict HSTS headers enforced.\n• At Rest: All database contents are encrypted using AES-256. Encryption keys are managed through a dedicated key management service (KMS) with hardware security module (HSM) backing.\n• Field-Level Encryption: Particularly sensitive fields (payment references, identity documents) are encrypted at the application layer before being stored, providing an additional protection layer even against internal access.\n• Blockchain Records: Transaction proofs are stored as cryptographic hashes on the public ledger. No personally identifiable information is written to the chain.`,
  },
  {
    title: "4. Escrow Vault Security",
    content: `The financial escrow system is the most sensitive component of FreeTrust and is protected accordingly:\n\n• Multi-Signature Authorization: Escrow fund movements require cryptographic signatures from multiple independent parties. No single actor can authorize a transfer unilaterally.\n• Cold Storage Buffer: A portion of escrowed funds are held in offline cold storage to reduce exposure to online attacks.\n• Segregated Accounts: Client funds are held in segregated accounts, completely separate from FreeTrust's operating capital, with licensed payment partners.\n• Real-Time Monitoring: All escrow operations are monitored in real time with automated anomaly detection. Unusual patterns trigger immediate alerts and may suspend the operation pending manual review.\n• Reconciliation: Daily automated reconciliation verifies that escrow ledger balances match corresponding financial institution records.`,
  },
  {
    title: "5. Identity Verification (KYC/AML)",
    content: `All FreeTrust users undergo identity verification before accessing financial features:\n\n• Identity documents are verified against government databases using an accredited KYC provider.\n• Biometric liveness checks prevent the use of spoofed or fraudulent identity documents.\n• Sanctions screening is performed at registration and on an ongoing basis against OFAC, EU, and UN sanctions lists.\n• KYC data is stored by our licensed KYC partner and subject to their security certifications. FreeTrust stores only verification status tokens, not raw document images.\n• Enhanced due diligence (EDD) is applied to high-value accounts and transactions.`,
  },
  {
    title: "6. Smart Contract Security",
    content: `Smart contracts and legal agreement templates are subject to rigorous security review:\n\n• All legal templates are drafted by qualified legal professionals and reviewed for ambiguity that could be exploited.\n• Smart contract execution logic is independently audited by third-party security firms before deployment.\n• Contract parameters are immutable once signed by both parties. Any modification attempt is rejected and logged.\n• Edge case scenarios (non-delivery, partial delivery, force majeure) are addressed explicitly in every template.\n• A formal verification process is applied to payment logic to mathematically prove correctness before release.`,
  },
  {
    title: "7. AI Verification Engine Security",
    content: `The AI delivery verification system is isolated and hardened:\n\n• The AI engine operates in a sandboxed environment with no direct internet access.\n• Inputs (deliverables) are scanned for malware and malicious content before being processed.\n• Model integrity is verified via cryptographic checksums before each evaluation run.\n• AI decisions are logged with full audit trails and can be reviewed by human arbitrators.\n• The model is regularly retrained and evaluated for adversarial robustness to prevent prompt injection or manipulation attempts by users.\n• Human override capability is available for all AI determinations in dispute contexts.`,
  },
  {
    title: "8. Application Security",
    content: `FreeTrust follows secure software development lifecycle (SSDLC) practices:\n\n• Static Application Security Testing (SAST) is run on every code commit.\n• Dynamic Application Security Testing (DAST) is performed against staging environments before every release.\n• Dependency scanning tools monitor all third-party libraries for known vulnerabilities (CVEs) with automated patching for non-breaking updates.\n• Authentication uses industry-standard protocols with support for hardware security keys (FIDO2/WebAuthn).\n• Sessions are short-lived with refresh token rotation. Suspicious session activity triggers forced re-authentication.\n• Rate limiting and CAPTCHA are applied to all authentication and sensitive form endpoints.`,
  },
  {
    title: "9. Access Control",
    content: `Internal access to production systems and data is tightly controlled:\n\n• All employee access follows the principle of least privilege. Engineers only have access to systems required for their role.\n• Production database access requires a just-in-time access request with manager approval and full audit logging.\n• All administrative actions are logged immutably for audit purposes.\n• Privileged access workstations (PAWs) are required for sensitive operations.\n• Access is reviewed quarterly, and access rights are immediately revoked upon employee departure.\n• Background checks are performed on all employees with access to sensitive systems.`,
  },
  {
    title: "10. Security Audits and Penetration Testing",
    content: `FreeTrust undergoes regular independent security assessments:\n\n• Full-scope penetration tests are conducted by accredited third-party security firms at least annually.\n• Smart contract audits are conducted before each major contract template update.\n• Ongoing bug bounty program incentivizes responsible disclosure from the security research community.\n• Audit reports (executive summaries) are available to enterprise clients upon request under NDA.\n• Critical findings are remediated within 72 hours. High severity findings are remediated within 14 days.`,
  },
  {
    title: "11. Incident Response",
    content: `FreeTrust maintains a formal incident response plan (IRP):\n\n• A dedicated security incident response team (SIRT) is on call 24/7.\n• Incidents are classified by severity (P1-P4) with defined response time SLAs.\n• P1 (Critical) incidents involving data exposure or fund risk trigger immediate containment measures, executive escalation, and regulatory notification within 72 hours.\n• All incidents are documented in a post-mortem report, and lessons learned are incorporated into security controls.\n• Affected users are notified promptly in accordance with applicable data breach notification laws.`,
  },
  {
    title: "12. Responsible Disclosure",
    content: `We encourage security researchers to report vulnerabilities responsibly. If you discover a security issue in FreeTrust's platform:\n\n• Email security@freetrust.network with a detailed description of the vulnerability.\n• Do not exploit the vulnerability or access user data beyond what is necessary to demonstrate the issue.\n• Give us reasonable time (90 days) to investigate and remediate before public disclosure.\n• We will acknowledge receipt within 24 hours and provide regular updates on remediation progress.\n• Researchers who report valid, in-scope vulnerabilities may be eligible for recognition in our security acknowledgments page.`,
  },
  {
    title: "13. Compliance",
    content: `FreeTrust is designed to comply with applicable regulations including:\n\n• General Data Protection Regulation (GDPR) for European users.\n• California Consumer Privacy Act (CCPA) for California residents.\n• Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements under applicable financial regulations.\n• Payment Card Industry Data Security Standard (PCI-DSS) for payment data handling.\n• SOC 2 Type II audit is ongoing. Certification report available to enterprise clients under NDA.\n\nFor compliance-related inquiries, contact compliance@freetrust.network.`,
  },
];

export default function SecurityProtocol() {
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
          <span className="pill-badge mb-5 inline-flex">Security</span>
          <h1 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-4">Security Protocol</h1>
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
            <Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
