import { VIP_LEVELS } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { GradientBorder } from "@/components/ui/GradientBorder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function VIPProgram() {
  return (
    <section id="vip" className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="BG678 VIP Club"
          title="BG678 VIP — Five Tiers of Exclusive Privilege"
          description="Climb the BG678 VIP ranks through lifetime play and unlock escalating cashback, dedicated support, and bespoke rewards."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {VIP_LEVELS.map((tier, i) => {
            const isTop = i === VIP_LEVELS.length - 1;
            const card = (
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 bg-gradient-to-b ${tier.gradient} ${
                  isTop ? "border-primary/40 shadow-primary" : "border-white/10"
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl glass ${
                    isTop ? "text-primary" : "text-muted"
                  }`}
                >
                  <Icon name="crown" size={20} />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  {tier.level}
                </p>
                <h3 className="mt-1 font-heading text-xl font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-xs text-muted">{tier.requirement}</p>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-white/90">
                      <Icon name="check" size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-emerald" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            );

            return (
              <Reveal key={tier.level} delay={i * 0.07} className="h-full">
                {isTop ? <GradientBorder className="h-full">{card}</GradientBorder> : card}
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            className="px-9 py-3.5"
            toastTitle="Welcome to BG678"
            toastDescription="Registration flow is a demo on this landing page."
          >
            Join VIP Club
          </Button>
        </div>
      </div>
    </section>
  );
}
