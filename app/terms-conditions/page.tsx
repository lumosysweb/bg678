import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalContent } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The terms and conditions governing your use of ${SITE.name}.`,
  alternates: { canonical: "/terms-conditions" },
};

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      `By registering for or using ${SITE.name}, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.`,
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 years old, or the legal age in your jurisdiction, to create an account and use the platform.",
    ],
  },
  {
    heading: "3. Account Responsibility",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "4. Bonuses & Promotions",
    body: [
      "All bonuses, cashback, and promotional offers are subject to their own specific terms, including wagering requirements, and may be modified or withdrawn at our discretion.",
    ],
  },
  {
    heading: "5. Withdrawals",
    body: [
      "Withdrawals are processed once identity verification is complete. We reserve the right to request additional documentation to prevent fraud.",
    ],
  },
  {
    heading: "6. Prohibited Conduct",
    body: [
      "Use of bots, exploits, multiple accounts, or any form of collusion is strictly prohibited and may result in suspension or forfeiture of funds.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    body: [
      `${SITE.name} is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.`,
    ],
  },
  {
    heading: "8. Changes to Terms",
    body: [
      "We may update these terms from time to time. Continued use of the platform after changes take effect constitutes acceptance of the new terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <PageShell breadcrumb={{ name: "Terms & Conditions", path: "/terms-conditions" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Legal"
            title="Terms & Conditions"
            description="Please read these terms carefully before using the platform."
          />
          <div className="mt-12">
            <LegalContent sections={SECTIONS} updatedAt="July 2026" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
