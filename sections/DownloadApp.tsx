import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

const APP_HIGHLIGHTS = [
  "Lightweight APK, installs in under 30 seconds",
  "Biometric login and encrypted local storage",
  "Push alerts for bonuses and VIP perks",
  "Same instant withdrawals as the web platform",
];

export function DownloadApp() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="container-luxury">
        <div className="grid grid-cols-1 items-center gap-10 rounded-hero-xl border border-white/10 bg-luxury-radial bg-[#0b0f1c] p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <Reveal>
            <span className="section-eyebrow">
              <Icon name="android" size={14} /> Android App
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Take the <span className="text-gradient-primary">Full Experience</span> Anywhere
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
              Download the BG678 app directly as an APK — no store required — and carry every
              game, reward, and VIP perk in your pocket.
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {APP_HIGHLIGHTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Icon name="check" size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-emerald" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                className="px-8 py-3.5"
                toastTitle="Download starting soon"
                toastDescription="APK distribution is a demo action on this landing page."
              >
                <Icon name="download" size={18} /> Download APK
              </Button>
              <a href="#faq">
                <span className="btn-glass px-8 py-3.5">Installation Guide</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard strong className="mx-auto flex w-full max-w-xs flex-col items-center gap-5 p-8">
              <div className="flex h-40 w-40 items-center justify-center rounded-2xl bg-white/95 text-[#0b0f1c]">
                <Icon name="qr" size={110} strokeWidth={1.2} />
              </div>
              <div className="text-center">
                <p className="font-heading text-sm font-semibold text-white">Scan to Download</p>
                <p className="mt-1 text-xs text-muted">Point your camera at the code</p>
              </div>
              <div className="flex w-full items-center justify-between border-t border-white/10 pt-4 text-xs text-muted">
                <span>Version 2.4.1</span>
                <span>28 MB</span>
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
