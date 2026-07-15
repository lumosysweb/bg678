import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { BackHomeCta } from "@/components/ui/BackHomeCta";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 Withdrawal Guide — Fast, Secure Payouts",
  description:
    "How BG678 withdrawal works — processing times, verification steps, security measures, and what to do if a BG678 withdrawal is delayed.",
  alternates: { canonical: "/withdrawal-guide" },
};

const TOC = [
  { id: "overview", label: "BG678 Withdrawal Overview" },
  { id: "steps", label: "How To Withdraw" },
  { id: "speed", label: "Processing Speed" },
  { id: "security", label: "Security & Verification" },
  { id: "faq", label: "Withdrawal FAQ" },
];

const WITHDRAWAL_FAQ: FAQItem[] = [
  { question: "How fast is a BG678 withdrawal?", answer: "Verified BG678 withdrawal requests are typically processed automatically in under 60 seconds, 24 hours a day." },
  { question: "Is there a minimum BG678 withdrawal amount?", answer: "Minimum withdrawal thresholds apply and are shown directly in your account's withdrawal screen before you confirm a request." },
  { question: "Why was my BG678 withdrawal delayed?", answer: "Delays are usually caused by pending identity verification or unusual account activity flagged for manual review by the security team." },
  { question: "Does BG678 VIP tier affect withdrawal limits?", answer: "Higher BG678 VIP tiers unlock higher withdrawal limits and, at top tiers, a dedicated manager for priority handling." },
  { question: "What payment methods support BG678 withdrawal?", answer: "BG678 withdrawal supports standard bank transfer and popular payment rails; available options are shown at checkout." },
];

export default function WithdrawalGuidePage() {
  return (
    <PageShell breadcrumb={{ name: "Withdrawal Guide", path: "/withdrawal-guide" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 Withdrawal"
            title="BG678 Withdrawal Guide — How Payouts Work"
            description="A clear walkthrough of the BG678 withdrawal process, from request to payout, including speed and security details."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 Withdrawal Overview</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  A BG678 withdrawal moves your balance from your account to your chosen payment method.
                  The process is automated for verified accounts and designed to be one of the fastest
                  parts of using BG678.
                </p>
              </Reveal>

              <Reveal id="steps" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">How To Withdraw</h2>
                <div className="mt-6 flex flex-col gap-4">
                  {[
                    { step: "1", title: "Open your wallet", body: "Log in to your BG678 account and open the withdrawal screen." },
                    { step: "2", title: "Choose an amount", body: "Enter the amount you'd like to withdraw, within your current limit." },
                    { step: "3", title: "Confirm your method", body: "Select or confirm your saved payment method for the payout." },
                    { step: "4", title: "Submit and track", body: "Submit the BG678 withdrawal request and track its status in real time." },
                  ].map((item) => (
                    <GlassCard key={item.step} className="flex items-start gap-4 p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-gradient font-heading text-sm font-bold text-[#04231a]">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{item.body}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </Reveal>

              <Reveal id="speed" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Processing Speed</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Most BG678 withdrawal requests complete in under 60 seconds for verified accounts.
                  First-time withdrawals may take slightly longer while identity checks run.
                </p>
              </Reveal>

              <Reveal id="security" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Security & Verification</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Every BG678 withdrawal is protected by bank-grade 256-bit encryption and continuous
                  fraud monitoring. If a request is flagged, our{" "}
                  <Link href="/support" className="text-primary hover:underline">Support Center</Link> can
                  help you resolve it quickly.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">Withdrawal FAQ</h2>
                <Accordion items={WITHDRAWAL_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
