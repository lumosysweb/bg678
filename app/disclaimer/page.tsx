import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalContent } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: `Important disclaimer information regarding the use of ${SITE.name}.`,
  alternates: { canonical: "/disclaimer" },
};

const SECTIONS = [
  {
    heading: "General Information",
    body: [
      `The content on ${SITE.name} is provided for general informational purposes only. While we strive for accuracy, we make no guarantees about the completeness or reliability of any information on this site.`,
    ],
  },
  {
    heading: "No Financial Advice",
    body: [
      "Nothing on this platform constitutes financial or investment advice. Any decisions you make regarding deposits, withdrawals, or play are made at your own discretion and risk.",
    ],
  },
  {
    heading: "Third-Party Links",
    body: [
      "Our platform may contain links to third-party websites and social channels. We are not responsible for the content, accuracy, or practices of any external sites.",
    ],
  },
  {
    heading: "Assumption of Risk",
    body: [
      "Gaming involves financial risk. By using the platform, you acknowledge and accept that outcomes are not guaranteed and that you play at your own risk.",
    ],
  },
  {
    heading: "Regulatory Compliance",
    body: [
      "It is your responsibility to ensure that using this platform is legal in your jurisdiction. We do not knowingly permit access from regions where such use is prohibited.",
    ],
  },
];

export default function DisclaimerPage() {
  return (
    <PageShell breadcrumb={{ name: "Disclaimer", path: "/disclaimer" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Legal"
            title="Disclaimer"
            description="Please read this disclaimer carefully before using the platform."
          />
          <div className="mt-12">
            <LegalContent sections={SECTIONS} updatedAt="July 2026" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
