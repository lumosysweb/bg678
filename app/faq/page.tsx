import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { BackHomeCta } from "@/components/ui/BackHomeCta";
import type { FAQItem } from "@/types";

export const metadata: Metadata = {
  title: "BG678 FAQ — Frequently Asked Questions",
  description:
    "The complete BG678 FAQ — answers on BG678 login, BG678 register, the BG678 app, withdrawals, bonuses, and the VIP club, all in one place.",
  alternates: { canonical: "/faq" },
};

const TOC = [
  { id: "account", label: "Account & Login" },
  { id: "register", label: "Registration" },
  { id: "app", label: "App & APK" },
  { id: "payments", label: "Payments & Withdrawals" },
  { id: "games", label: "BG678 Game" },
  { id: "vip", label: "VIP & Bonuses" },
  { id: "safety", label: "Safety & Support" },
];

const GROUPS: { id: string; title: string; items: FAQItem[] }[] = [
  {
    id: "account",
    title: "Account & Login",
    items: [
      { question: "How do I log in to BG678?", answer: "Go to the BG678 Login page, enter your username or email and password, and sign in. See the dedicated Login guide for a full walkthrough." },
      { question: "I forgot my BG678 password. What now?", answer: "Use the password recovery option on the login screen, or contact the Support Center if you no longer have access to your recovery email." },
      { question: "Can I have more than one BG678 account?", answer: "No, each player should hold a single BG678 account to keep VIP tracking, bonuses, and withdrawals accurate." },
    ],
  },
  {
    id: "register",
    title: "Registration",
    items: [
      { question: "How does BG678 register work?", answer: "Provide a username, email or phone number, and password. Full steps are in the BG678 Register guide." },
      { question: "Is BG678 register free?", answer: "Yes, creating a BG678 account has no signup cost." },
      { question: "What's the minimum age for BG678 register?", answer: "You must be 18 or older to register on BG678, per the Responsible Gaming policy." },
    ],
  },
  {
    id: "app",
    title: "App & APK",
    items: [
      { question: "Can I download the BG678 app?", answer: "Yes, the BG678 Android app is available as a direct APK download — see the APK Download Guide for steps." },
      { question: "Is the BG678 app free?", answer: "Yes, downloading and installing the BG678 app carries no cost." },
      { question: "Does BG678 have an iOS app?", answer: "BG678 currently offers an Android apk; iOS players can use the full browser experience instead." },
    ],
  },
  {
    id: "payments",
    title: "Payments & Withdrawals",
    items: [
      { question: "How fast is a BG678 withdrawal?", answer: "Verified withdrawals typically land in under 60 seconds — see the Withdrawal Guide for the full process." },
      { question: "What payment methods does BG678 support?", answer: "Standard bank transfer and popular payment rails are supported; options are shown at checkout." },
      { question: "Is there a withdrawal limit on BG678?", answer: "Limits scale with your BG678 VIP tier — higher tiers unlock higher withdrawal limits." },
    ],
  },
  {
    id: "games",
    title: "BG678 Game",
    items: [
      { question: "What games are on BG678?", answer: "Slots, crash games, lottery, fishing, live casino, and originals — see the BG678 Game guide for the full catalog." },
      { question: "Are BG678 game results fair?", answer: "Yes, all BG678 game outcomes use independently audited, provably fair mechanisms." },
      { question: "Can beginners play BG678 game titles?", answer: "Yes, see the How To Play guide for a beginner-friendly walkthrough." },
    ],
  },
  {
    id: "vip",
    title: "VIP & Bonuses",
    items: [
      { question: "How do BG678 VIP tiers work?", answer: "Tiers are based on lifetime play and unlock escalating cashback and perks — see the VIP Club guide." },
      { question: "What BG678 bonus offers are available?", answer: "Daily bonuses, referral rewards, weekly cashback, lucky spins, gift codes, and festival offers — see Bonus Offers." },
      { question: "Do BG678 bonuses expire?", answer: "Most time-based bonuses like daily rewards and spins reset every 24 hours if unclaimed." },
    ],
  },
  {
    id: "safety",
    title: "Safety & Support",
    items: [
      { question: "Is BG678 secure?", answer: "Yes, BG678 uses bank-grade 256-bit encryption and continuous fraud monitoring across every transaction." },
      { question: "How do I contact BG678 support?", answer: "Reach the concierge team 24×7 via live chat, WhatsApp, or Telegram from the Support Center." },
      { question: "Is this site officially affiliated with BG678?", answer: "No, this is a free, independent guide and is not officially affiliated with, endorsed by, or operated on behalf of any official BG678 brand or trademark owner." },
    ],
  },
];

export default function FaqPage() {
  return (
    <PageShell breadcrumb={{ name: "FAQ", path: "/faq" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 FAQ"
            title="BG678 FAQ — Every Common Question, Answered"
            description="Login, register, app downloads, withdrawals, games, VIP, and safety — the complete BG678 FAQ in one independent guide."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              {GROUPS.map((group) => (
                <Reveal key={group.id} id={group.id} className="scroll-mt-24">
                  <h2 className="mb-6 font-heading text-2xl font-bold text-white">{group.title}</h2>
                  <Accordion items={group.items} />
                </Reveal>
              ))}

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
