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
import { REWARD_CARDS } from "@/lib/data";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 Bonus Offers — Daily, Referral & Cashback Rewards",
  description:
    "Every BG678 bonus explained — daily bonuses, referral rewards, weekly cashback, lucky spins, gift codes, and festival offers on BG678.",
  alternates: { canonical: "/bonus-offers" },
};

const TOC = [
  { id: "overview", label: "BG678 Bonus Overview" },
  { id: "bonus-types", label: "Types of BG678 Bonus" },
  { id: "terms", label: "General Bonus Terms" },
  { id: "tips", label: "Tips To Maximize Rewards" },
  { id: "faq", label: "Bonus FAQ" },
];

const BONUS_FAQ: FAQItem[] = [
  { question: "How do I claim a BG678 bonus?", answer: "Most BG678 bonus offers appear automatically in your rewards dashboard after login — tap Claim to add it to your balance." },
  { question: "Do BG678 bonus offers expire?", answer: "Yes, most BG678 bonus offers, including daily bonuses and lucky spins, reset every 24 hours if unclaimed." },
  { question: "Is there a BG678 referral bonus?", answer: "Yes, inviting friends earns you a lifetime share of their play through the BG678 referral program." },
  { question: "How often does BG678 cashback pay out?", answer: "BG678 weekly cashback is calculated and credited automatically once a week based on your net play." },
  { question: "Where do I find BG678 gift codes?", answer: "BG678 gift codes are shared across official community channels — Telegram, Discord, and Instagram." },
];

export default function BonusOffersPage() {
  return (
    <PageShell breadcrumb={{ name: "Bonus Offers", path: "/bonus-offers" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 Bonus"
            title="BG678 Bonus Offers — Full Rewards Breakdown"
            description="A complete guide to every BG678 bonus type — how to claim it, how often it refreshes, and how to get the most out of it."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 Bonus Overview</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  BG678 bonus offers stack across daily logins, referrals, cashback, and seasonal
                  promotions. This guide breaks down every BG678 bonus type so you never miss a reward.
                </p>
              </Reveal>

              <Reveal id="bonus-types" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Types of BG678 Bonus</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {REWARD_CARDS.map((card) => (
                    <GlassCard key={card.title} className="p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon name={card.icon} size={20} />
                      </span>
                      <h3 className="mt-4 font-heading text-base font-semibold text-white">{card.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{card.description}</p>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal id="terms" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">General Bonus Terms</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Every BG678 bonus is subject to the platform&apos;s{" "}
                  <Link href="/terms-conditions" className="text-primary hover:underline">Terms & Conditions</Link>.
                  Bonuses are non-transferable, tied to the account they were issued to, and may have
                  reasonable playthrough requirements before withdrawal.
                </p>
              </Reveal>

              <Reveal id="tips" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Tips To Maximize Rewards</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Log in daily to keep streak-based BG678 bonus offers active, invite friends early to
                  compound referral earnings over time, and check community channels regularly for
                  limited-time gift codes.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">Bonus FAQ</h2>
                <Accordion items={BONUS_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
