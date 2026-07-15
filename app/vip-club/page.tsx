import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { BackHomeCta } from "@/components/ui/BackHomeCta";
import { Icon } from "@/components/icons";
import { VIP_LEVELS } from "@/lib/data";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 VIP Club — Tiers, Perks & How To Level Up",
  description:
    "A full breakdown of the BG678 VIP club — all five BG678 VIP tiers, perks at each level, and exactly how to move up the ladder.",
  alternates: { canonical: "/vip-club" },
};

const TOC = [
  { id: "overview", label: "What Is BG678 VIP" },
  { id: "tiers", label: "BG678 VIP Tiers" },
  { id: "how-to-earn", label: "How To Earn VIP Points" },
  { id: "perks", label: "Beyond Cashback" },
  { id: "faq", label: "VIP Club FAQ" },
];

const VIP_FAQ: FAQItem[] = [
  { question: "How do I join the BG678 VIP club?", answer: "Every BG678 account is automatically enrolled in the VIP program from VIP 1 — there's no separate signup, just play to progress." },
  { question: "How is BG678 VIP tier calculated?", answer: "BG678 VIP levels are based on lifetime play volume. Once you cross a tier's threshold, the upgrade applies automatically." },
  { question: "Can my BG678 VIP tier go down?", answer: "BG678 VIP tiers are based on lifetime play, so once earned, a tier is retained rather than reduced." },
  { question: "What's the biggest BG678 VIP perk?", answer: "Diamond Legacy (VIP 5) unlocks the highest cashback rate, unlimited limits, and bespoke rewards tailored to top players." },
  { question: "Does BG678 VIP affect withdrawal speed?", answer: "All verified withdrawals are processed quickly regardless of tier, though higher VIP levels get a dedicated support manager for priority handling." },
];

export default function VipClubPage() {
  return (
    <PageShell breadcrumb={{ name: "VIP Club", path: "/vip-club" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 VIP Club"
            title="BG678 VIP Club — Tiers & Perks Explained"
            description="Everything about the BG678 VIP program: five tiers, escalating cashback, and how lifetime play determines your rank."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">What Is BG678 VIP</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  The BG678 VIP club rewards consistent play with escalating cashback, priority support,
                  and exclusive perks. Every player starts at VIP 1 and climbs automatically based on
                  lifetime play across the BG678 game catalog.
                </p>
              </Reveal>

              <Reveal id="tiers" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 VIP Tiers</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {VIP_LEVELS.map((level) => (
                    <GlassCard key={level.level} className={`bg-gradient-to-br p-6 ${level.gradient}`}>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{level.level}</span>
                      <h3 className="mt-1 font-heading text-lg font-bold text-white">{level.name}</h3>
                      <p className="mt-1 text-xs text-muted">{level.requirement}</p>
                      <ul className="mt-4 flex flex-col gap-2">
                        {level.perks.map((perk) => (
                          <li key={perk} className="flex items-center gap-2 text-sm text-white/90">
                            <Icon name="check" size={14} className="text-primary" /> {perk}
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal id="how-to-earn" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">How To Earn VIP Points</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  BG678 VIP progress is tracked automatically from your lifetime play across every game
                  category — slots, crash, lottery, fishing, live casino, and originals all count toward
                  your next tier.{" "}
                  <Link href="/register" className="text-primary hover:underline">Register</Link> to start
                  tracking your BG678 VIP journey.
                </p>
              </Reveal>

              <Reveal id="perks" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Beyond Cashback</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Higher BG678 VIP tiers unlock more than cashback — think dedicated account managers,
                  birthday gifts, higher withdrawal limits, and bespoke rewards reserved for Diamond
                  Legacy members.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">VIP Club FAQ</h2>
                <Accordion items={VIP_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
