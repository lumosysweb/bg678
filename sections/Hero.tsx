import Image from "next/image";
import { TRUST_BADGES } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 lg:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_50%_at_15%_15%,rgba(123,58,237,0.18),transparent_60%),radial-gradient(ellipse_50%_45%_at_88%_10%,rgba(31,216,164,0.14),transparent_60%)]"
      />

      <div className="container-luxury">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="section-eyebrow">
                <Icon name="crown" size={14} /> BG678 — India's Most Premium Gaming Platform
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
                BG678 — The Art of <span className="text-gradient-primary">Winning</span>, Redefined.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
                Instant withdrawals, verified fairness, and a BG678 VIP experience crafted for
                players who expect nothing less than excellence. Login or register on BG678
                (Bg 678) in minutes and explore the full BG678 game catalog.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  className="px-9 py-4 text-base"
                  toastTitle="Welcome to BG678"
                  toastDescription="Registration flow is a demo on this landing page."
                >
                  Register Now
                </Button>
                <a href="#download">
                  <span className="btn-glass px-9 py-4 text-base">
                    <Icon name="download" size={18} /> Download App
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald/10 text-emerald">
                      <Icon name={badge.icon} size={15} />
                    </span>
                    <span className="text-xs font-medium text-muted sm:text-sm">{badge.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative mx-auto w-full max-w-lg">
              <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="animate-float-slow">
                <Image
                  src="/images/hero.webp"
                  alt="BG678 welcome bonus reward box surrounded by gold coins"
                  width={1100}
                  height={733}
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
