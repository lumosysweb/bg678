import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalContent } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses, and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: [
      "We collect information you provide directly, such as your name, contact details, and payment information when you register or make a transaction.",
      "We also collect technical data automatically, including device information, IP address, and gameplay activity, to keep the platform secure and improve your experience.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "Your information is used to process transactions, verify your identity, provide customer support, and personalize rewards and promotions.",
      `We may use aggregated, anonymized data to improve ${SITE.name}'s products and services.`,
    ],
  },
  {
    heading: "3. Data Security",
    body: [
      "All transactions are protected with bank-grade 256-bit encryption. Access to personal data is restricted to authorized personnel only, and monitored continuously for suspicious activity.",
    ],
  },
  {
    heading: "4. Sharing of Information",
    body: [
      "We do not sell your personal information. Data may be shared with payment processors, fraud-prevention partners, and regulators strictly to operate and secure the platform.",
    ],
  },
  {
    heading: "5. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal data at any time by contacting our support team through the Support Center.",
    ],
  },
  {
    heading: "6. Changes to This Policy",
    body: [
      "We may update this policy periodically. Continued use of the platform after changes are posted constitutes acceptance of the revised policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageShell breadcrumb={{ name: "Privacy Policy", path: "/privacy-policy" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description={`This policy explains how ${SITE.name} handles your personal information.`}
          />
          <div className="mt-12">
            <LegalContent sections={SECTIONS} updatedAt="July 2026" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
