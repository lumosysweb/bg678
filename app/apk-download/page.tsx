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
  title: "BG678 APK Download — Install the BG678 App Guide",
  description:
    "How to download and install the BG678 app (APK) on Android — step-by-step BG678 apk download guide, permissions, troubleshooting, and safety tips.",
  alternates: { canonical: "/apk-download" },
};

const TOC = [
  { id: "overview", label: "BG678 APK Overview" },
  { id: "android-steps", label: "Android Install Steps" },
  { id: "permissions", label: "Permissions Explained" },
  { id: "troubleshooting", label: "Troubleshooting" },
  { id: "faq", label: "APK Download FAQ" },
];

const APK_FAQ: FAQItem[] = [
  { question: "Is the BG678 apk download safe?", answer: "Only download the BG678 apk directly from the official Download App section on the BG678 home page to avoid tampered third-party files." },
  { question: "Why do I need to enable 'Unknown Sources' for BG678 apk?", answer: "Android blocks app installs from outside the Play Store by default. Enabling this setting for your browser lets you install the BG678 apk directly." },
  { question: "Is BG678 available on iOS?", answer: "BG678 currently ships as an Android apk. iOS players can use the full browser version with the same features." },
  { question: "How much storage does the BG678 app need?", answer: "The BG678 app is lightweight and typically needs under 50MB of free storage to install." },
  { question: "What if the BG678 apk download fails?", answer: "Check your internet connection, clear browser cache, and retry. If the issue persists, contact Support for a fresh download link." },
];

export default function ApkDownloadPage() {
  return (
    <PageShell breadcrumb={{ name: "APK Download", path: "/apk-download" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="APK Download Guide"
            title="BG678 APK Download — Step-by-Step Install Guide"
            description="An independent guide to downloading and installing the BG678 app on Android, covering every step, permission, and common issue."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <TableOfContents items={TOC} />
            </div>

            <div className="flex flex-col gap-14">
              <Reveal id="overview" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">BG678 APK Overview</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  The BG678 apk is a direct-install Android package that gives you app-based access to the
                  full BG678 game catalog, bonuses, and VIP program — no app store required. This page
                  explains the BG678 apk download process from start to finish.
                </p>
              </Reveal>

              <Reveal id="android-steps" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Android Install Steps</h2>
                <div className="mt-6 flex flex-col gap-4">
                  {[
                    { step: "1", title: "Open Download App", body: "Go to the Download App section on the BG678 home page from your Android browser." },
                    { step: "2", title: "Download the apk file", body: "Tap the download button to save the BG678 apk file to your device." },
                    { step: "3", title: "Allow installs from your browser", body: "If prompted, enable 'Install unknown apps' for your browser in Android settings." },
                    { step: "4", title: "Install and open", body: "Open the downloaded file, tap Install, then launch BG678 and log in or register." },
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
                <Link href="/#download" className="btn-glass mt-6 inline-flex px-7 py-3">
                  <Icon name="download" size={16} /> Go To Download Section
                </Link>
              </Reveal>

              <Reveal id="permissions" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Permissions Explained</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  During BG678 apk download and install, Android may ask for storage and network
                  permissions. These are used only to save app data locally and connect securely to BG678
                  servers — nothing else is accessed on your device.
                </p>
              </Reveal>

              <Reveal id="troubleshooting" className="scroll-mt-24">
                <h2 className="font-heading text-2xl font-bold text-white">Troubleshooting</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  If the BG678 apk download stalls or the app won&apos;t open after install, try clearing
                  your browser cache, freeing up storage space, or re-downloading the file. Still stuck?
                  Visit the{" "}
                  <Link href="/support" className="text-primary hover:underline">Support Center</Link>{" "}
                  for live help.
                </p>
              </Reveal>

              <Reveal id="faq" className="scroll-mt-24">
                <h2 className="mb-6 font-heading text-2xl font-bold text-white">APK Download FAQ</h2>
                <Accordion items={APK_FAQ} />
              </Reveal>

              <BackHomeCta />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
