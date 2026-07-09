import { REWARD_CARDS } from "@/lib/data";
import { Icon } from "@/components/icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const glowClass: Record<string, string> = {
  primary: "text-primary bg-primary/10 group-hover:shadow-primary",
  purple: "text-purple-glow bg-purple-glow/10 group-hover:shadow-purple",
  emerald: "text-emerald bg-emerald/10 group-hover:shadow-emerald",
  blue: "text-blue-accent bg-blue-accent/10 group-hover:shadow-[0_0_40px_-8px_rgba(45,140,255,0.45)]",
};

export function Rewards() {
  return (
    <section id="rewards" className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Rewards Center"
          title="A New Reason To Log In, Every Day"
          description="Six ongoing reward streams stacked on top of your regular play — all in one place."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REWARD_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 3) * 0.08}>
              <GlassCard className="group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-shadow duration-300 ${glowClass[card.glow]}`}
                >
                  <Icon name={card.icon} size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-white"
                >
                  {card.cta}
                  <Icon name="external" size={14} strokeWidth={2} />
                </button>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
