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
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "How To Play BG678 — Beginner's Getting Started Guide",
  description:
    "New to BG678? This beginner's guide covers getting started, choosing a BG678 game category, managing your bankroll, and smart play tips.",
  alternates: { canonical: "/how-to-play" },
};

const TOC = [
  { id: "getting-started", label: "Getting Started" },
  { id: "choosing-games", label: "Choosing a BG678 Game" },
  { id: "bankroll", label: "Managing Your Bankroll" },
  { id: "tips", label: "Smart Play Tips" },
  { id: "faq", label: "How To Play FAQ" },
];

const HOWTO_FAQ: FAQItem[] = [
  { question: "What's the first step to play BG678?", answer: "Register a free BG678 account, verify your details, and explore the game categories before placing your first play." },
  { question: "Which BG678 game category is best for beginners?", answer: "Slots and mini games are typically the easiest BG678 game categories to start with, given their simple, fast rounds." },
  { question: "How do I set a budget on BG678?", answer: "Use the deposit limit tools in your account settings, available from the Support Center, to set a budget before you start playing BG678." },
  { question: "Can I switch between BG678 game categories freely?", answer: "Yes, you can move between slots, crash, lottery, fishing, live casino, and originals at any time from the same account." },
  { question: "What should I do if I'm not enjoying a session?", answer: "Take a break. BG678 supports responsible play — see the Responsible Gaming page for limits and self-exclusion tools." },
];

export default function HowToPlayPage() {
  return (
    <PageShell breadcrumb={{ name: "How To Play", path: "/how-to-play" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Beginner's Guide"
            title="How To Play BG678 — Getting Started"
            description="A friendly, independent walkthrough for players who are brand new to BG678 (BG 678) and want to start on the right foot."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="getting-started" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Getting Started</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Before you play BG678, you&apos;ll need an account. Follow the{" "}
                  <Link href="/register" className="text-primary hover:underline">Register</Link> guide,
                  claim your welcome bonus, and take a few minutes to browse the BG678 game categories.
                </p>
              </Reveal>

              <Reveal id="choosing-games" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Choosing a BG678 Game</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Each BG678 game category suits a different style: slots for quick, casual rounds; crash
                  games for fast-paced multipliers; lottery for simple number-based draws; fishing and
                  live casino for a more social feel; and originals for something unique to BG678.
                </p>
              </Reveal>

              <Reveal id="bankroll" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Managing Your Bankroll</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {[
                    { icon: "wallet" as const, title: "Set a budget", body: "Decide how much you're comfortable playing with before you start." },
                    { icon: "clock" as const, title: "Set a time limit", body: "Play in defined sessions rather than open-ended stretches." },
                    { icon: "shield" as const, title: "Know your limits", body: "Use deposit and loss limits from the Support Center any time." },
                  ].map((tip) => (
                    <GlassCard key={tip.title} className="p-6 text-center">
                      <Icon name={tip.icon} size={22} className="mx-auto text-primary" />
                      <h3 className="mt-3 font-heading text-sm font-semibold text-white">{tip.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted">{tip.body}</p>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal id="tips" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Smart Play Tips</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Claim your daily bonus every day to build streak rewards, track your progress toward the
                  next BG678 VIP tier, and withdraw winnings regularly rather than letting balances sit
                  idle.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">How To Play FAQ</h2>
                <Accordion items={HOWTO_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
