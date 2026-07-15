import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalContent } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "BG678 Disclaimer",
  description: `Important disclaimer information regarding the use of BG678 (BG 678), an independent ${SITE.name} guide.`,
  alternates: { canonical: "/disclaimer" },
};

const SECTIONS = [
  {
    heading: "General Information",
    body: [
      `The content on ${SITE.name} is provided for general informational purposes only as an independent BG678 (BG 678) guide. While we strive for accuracy, we make no guarantees about the completeness or reliability of any information on this site.`,
    ],
  },
  {
    heading: "No Financial Advice",
    body: [
      "Nothing on this BG678 platform constitutes financial or investment advice. Any decisions you make regarding deposits, withdrawals, or play are made at your own discretion and risk.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "This BG678 platform may contain links to third-party websites and social channels. We are not responsible for the content, accuracy, or practices of any external sites.",
    ],
  },
  {
    heading: "Assumption of Risk",
    body: [
      "Gaming involves financial risk. By using BG678, you acknowledge and accept that outcomes are not guaranteed and that you play at your own risk.",
    ],
  },
  {
    heading: "Regulatory Compliance",
    body: [
      "It is your responsibility to ensure that using BG678 is legal in your jurisdiction. We do not knowingly permit access from regions where such use is prohibited.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <PageShell breadcrumb={{ name: "BG678 Disclaimer", path: "/disclaimer" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Legal"
            title="BG678 Disclaimer"
            description="Please read this BG678 disclaimer carefully before using the platform."
          />
          <div className="mt-12">
            <LegalContent sections={SECTIONS} updatedAt="July 2026" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
