import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LegalContent } from "@/components/ui/LegalContent";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Responsible Gaming",
  description: `${SITE.name}'s commitment to responsible gaming, self-exclusion tools, and player wellbeing.`,
  alternates: { canonical: "/responsible-gaming" },
};

const SECTIONS = [
  {
    heading: "Our Commitment",
    body: [
      `${SITE.name} is committed to promoting responsible play. Gaming should always be entertaining and never a source of financial or emotional harm.`,
    ],
  },
  {
    heading: "Age Restriction",
    body: [
      "The platform is strictly for players aged 18 and above. We reserve the right to request age verification at any time.",
    ],
  },
  {
    heading: "Setting Limits",
    body: [
      "Players can request deposit limits, loss limits, and session time reminders from the Support Center to help manage play within their means.",
    ],
  },
  {
    heading: "Self-Exclusion",
    body: [
      "If you feel you need a break, you can request temporary or permanent self-exclusion at any time by contacting support. Once activated, account access will be restricted for the chosen period.",
    ],
  },
  {
    heading: "Signs to Watch For",
    body: [
      "Chasing losses, spending more than you can afford, neglecting responsibilities, or feeling anxious about play are signs it may be time to take a break or seek help.",
    ],
  },
  {
    heading: "Getting Help",
    body: [
      "If you or someone you know needs support, reach out to a licensed problem-gambling helpline in your region, or contact our support team confidentially for assistance.",
    ],
  },
];

export default function ResponsibleGamingPage() {
  return (
    <PageShell breadcrumb={{ name: "Responsible Gaming", path: "/responsible-gaming" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Player Safety"
            title="Responsible Gaming"
            description="Tools and guidance to help you stay in control of your play."
          />
          <div className="mt-12">
            <LegalContent sections={SECTIONS} updatedAt="July 2026" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
