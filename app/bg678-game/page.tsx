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
import { CATEGORIES } from "@/lib/data";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 Game — Full Guide, Categories & How It Works",
  description:
    "A complete, independent BG678 game guide — what BG678 (BG 678) is, every game category available, how the platform works, and how to get started safely.",
  alternates: { canonical: "/bg678-game" },
};

const TOC = [
  { id: "overview", label: "What Is BG678 Game" },
  { id: "categories", label: "BG678 Game Categories" },
  { id: "how-it-works", label: "How BG678 Game Works" },
  { id: "safety", label: "Safety & Fair Play" },
  { id: "faq", label: "BG678 Game FAQ" },
];

const GAME_FAQ: FAQItem[] = [
  { question: "Is BG678 game free to explore?", answer: "Yes, browsing the BG678 game categories, reading this guide, and checking rules is completely free — no account is required just to explore." },
  { question: "What kind of games does BG678 offer?", answer: "The BG678 game catalog spans slots, crash games, lottery, fishing games, live casino tables, and original in-house titles." },
  { question: "Do I need to download anything to play BG678 game titles?", answer: "Most BG678 game categories run directly in the browser. An optional Android APK is available for a faster, app-based experience — see our APK Download Guide." },
  { question: "Is BG678 game suitable for beginners?", answer: "Yes. Start with the How To Play guide, which walks through account basics, bankroll management, and picking a category that matches your experience level." },
  { question: "How is fairness verified on BG678 game titles?", answer: "Game outcomes are generated using independently audited, provably fair mechanisms, and every session is logged for transparency." },
];

export default function Bg678GamePage() {
  return (
    <PageShell breadcrumb={{ name: "BG678 Game", path: "/bg678-game" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 Game Guide"
            title="BG678 Game — The Complete Guide"
            description="Everything you need to know about the BG678 (BG 678) game catalog — categories, mechanics, and how to get started, in one independent guide."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">What Is BG678 Game</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                  <p>
                    BG678 game refers to the full catalog of titles available on the BG678 platform — a
                    rewards-driven gaming experience covering slots, crash games, lottery draws, fishing
                    games, live casino tables, and BG678&apos;s own original releases. This page is an
                    independent, unofficial guide to help new players understand the BG678 (BG 678) game
                    ecosystem before they dive in.
                  </p>
                  <p>
                    Whether you search for &quot;BG678 game&quot;, &quot;BG 678 game&quot;, or just &quot;BG678&quot;, the
                    goal of the catalog is the same: fast rounds, transparent odds, and rewards that scale
                    with how often you play.
                  </p>
                </div>
              </Reveal>

              <Reveal id="categories" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 Game Categories</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  The BG678 game library is organized into eight core categories, each updated regularly
                  with new releases.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {CATEGORIES.map((cat) => (
                    <GlassCard key={cat.name} className="flex flex-col items-center gap-2 p-5 text-center">
                      <Icon name={cat.icon} size={22} className="text-primary" />
                      <span className="text-sm font-medium text-white">{cat.name}</span>
                      <span className="text-xs text-muted">{cat.count} titles</span>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal id="how-it-works" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">How BG678 Game Works</h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                  <p>
                    1. <Link href="/register" className="text-primary hover:underline">Register a BG678 account</Link> with a
                    valid username and email.
                  </p>
                  <p>2. Explore any BG678 game category and open a title to view its rules and odds.</p>
                  <p>3. Track your progress toward VIP tiers automatically as you play.</p>
                  <p>
                    4. Request a withdrawal any time — see the{" "}
                    <Link href="/withdrawal-guide" className="text-primary hover:underline">Withdrawal Guide</Link> for
                    typical processing times.
                  </p>
                </div>
              </Reveal>

              <Reveal id="safety" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Safety & Fair Play</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Every BG678 game category is backed by bank-grade 256-bit encryption and independently
                  audited fairness certification. Session activity is logged, and support is available
                  24×7 if you ever have a question about a result.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">BG678 Game FAQ</h2>
                <Accordion items={GAME_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
