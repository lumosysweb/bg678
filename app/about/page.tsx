import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons";
import { SITE, TRUST_BADGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About BG678 — BG 678 Game Platform Overview",
  description:
    "Learn about BG678 (BG 678), a premium gaming rewards platform built for players who expect instant withdrawals, verified fairness, and an exclusive BG678 VIP experience.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    title: "Player-First",
    description: "Every feature we ship on BG678 is measured against one question: does this make play fairer and faster for our members.",
    icon: "users" as const,
  },
  {
    title: "Radical Transparency",
    description: "BG678 runs on independently audited fairness certification and clear terms, with nothing buried in fine print.",
    icon: "shield" as const,
  },
  {
    title: "Relentless Speed",
    description: "From BG678 onboarding to withdrawals, we obsess over shaving seconds off every step of the experience.",
    icon: "bolt" as const,
  },
  {
    title: "Rewarding Loyalty",
    description: "The longer you play with BG678, the more we give back — through VIP tiers, cashback, and exclusive perks.",
    icon: "gift" as const,
  },
];

export default function AboutPage() {
  return (
    <PageShell breadcrumb={{ name: "About BG678", path: "/about" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="About BG678"
            title={`The Story Behind ${SITE.name} (BG 678)`}
            description={SITE.description}
          />

          <Reveal className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <GlassCard key={badge.label} className="flex flex-col items-center gap-2 p-5 text-center">
                <Icon name={badge.icon} size={22} className="text-primary" />
                <span className="text-xs font-medium text-muted sm:text-sm">{badge.label}</span>
              </GlassCard>
            ))}
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <GlassCard className="h-full p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
