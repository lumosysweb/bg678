import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { BackHomeCta } from "@/components/ui/BackHomeCta";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 Register — Create Your BG678 Account",
  description:
    "Step-by-step BG678 register guide — how to sign up for a BG678 (BG 678) account, what details you need, and how to claim your welcome bonus.",
  alternates: { canonical: "/register" },
};

const TOC = [
  { id: "overview", label: "Why Register on BG678" },
  { id: "steps", label: "BG678 Register Steps" },
  { id: "requirements", label: "Requirements" },
  { id: "welcome-bonus", label: "Welcome Bonus" },
  { id: "faq", label: "Register FAQ" },
];

const REGISTER_FAQ: FAQItem[] = [
  { question: "Is BG678 register free?", answer: "Yes, creating a BG678 account is completely free. There is no signup fee at any step of the registration process." },
  { question: "What details do I need to register on BG678?", answer: "You'll typically need a username, a valid email or phone number, and a secure password to complete BG678 register." },
  { question: "How long does BG678 register take?", answer: "The BG678 register process usually takes under two minutes when you have your details ready." },
  { question: "Can I register on BG678 from the app?", answer: "Yes, you can register from either the browser or the BG678 Android app — see the APK Download Guide for app-based signup." },
  { question: "Is there a minimum age to register on BG678?", answer: "Yes, BG678 register is strictly limited to players aged 18 and above, in line with the Responsible Gaming policy." },
];

export default function RegisterPage() {
  return (
    <PageShell breadcrumb={{ name: "Register", path: "/register" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 Register"
            title="How To Register on BG678"
            description="A plain-language BG678 register guide covering every step, requirement, and bonus tied to signing up for a new BG678 (BG 678) account."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Why Register on BG678</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Registering a BG678 account unlocks the full BG678 game catalog, daily bonuses, the
                  five-tier VIP rewards program, and instant withdrawals. This guide walks through BG678
                  register in plain steps — no jargon, no confusion.
                </p>
              </Reveal>

              <Reveal id="steps" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 Register Steps</h2>
                <div className="mt-6 flex flex-col gap-4">
                  {[
                    { step: "1", title: "Open the register form", body: "Tap Register on the BG678 home page or use the quick form below." },
                    { step: "2", title: "Enter your details", body: "Provide a username, email or phone number, and create a secure password." },
                    { step: "3", title: "Verify your account", body: "Confirm via the OTP or email link sent to you to activate your BG678 account." },
                    { step: "4", title: "Claim your welcome bonus", body: "New accounts are automatically eligible for the BG678 welcome bonus on first login." },
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

              <Reveal className="mx-auto w-full max-w-md">
                <GlassCard className="p-7 sm:p-9">
                  <h3 className="text-center font-heading text-lg font-semibold text-white">
                    Quick BG678 Register Form
                  </h3>
                  <div className="mt-5 flex flex-col gap-4">
                    <label className="flex flex-col gap-2 text-left">
                      <span className="text-xs font-medium text-muted">Username</span>
                      <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <Icon name="users" size={16} className="text-muted" />
                        <input
                          type="text"
                          name="username"
                          placeholder="Choose a BG678 username"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/70"
                        />
                      </span>
                    </label>
                    <label className="flex flex-col gap-2 text-left">
                      <span className="text-xs font-medium text-muted">Email or Phone</span>
                      <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <Icon name="mail" size={16} className="text-muted" />
                        <input
                          type="text"
                          name="identifier"
                          placeholder="you@example.com"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/70"
                        />
                      </span>
                    </label>
                    <label className="flex flex-col gap-2 text-left">
                      <span className="text-xs font-medium text-muted">Password</span>
                      <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                        <Icon name="shield" size={16} className="text-muted" />
                        <input
                          type="password"
                          name="password"
                          placeholder="Create a secure password"
                          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/70"
                        />
                      </span>
                    </label>
                    <Button
                      className="mt-2 w-full py-3.5"
                      toastTitle="BG678 Register is a demo"
                      toastDescription="Account creation isn't wired up on this guide page yet."
                    >
                      Create My BG678 Account
                    </Button>
                  </div>
                  <p className="mt-6 text-center text-sm text-muted">
                    Already registered?{" "}
                    <Link href="/login" className="font-medium text-primary hover:underline">
                      Login to BG678
                    </Link>
                  </p>
                </GlassCard>
              </Reveal>

              <Reveal id="requirements" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Requirements</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  To complete BG678 register you need to be 18 years or older, have access to a valid
                  email address or phone number for verification, and agree to the Terms & Conditions and
                  Responsible Gaming policy.
                </p>
              </Reveal>

              <Reveal id="welcome-bonus" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Welcome Bonus</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  Every new account created through BG678 register is eligible for a one-time welcome
                  bonus, visible immediately after your first login. See{" "}
                  <Link href="/bonus-offers" className="text-primary hover:underline">Bonus Offers</Link> for
                  full terms.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">Register FAQ</h2>
                <Accordion items={REGISTER_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
