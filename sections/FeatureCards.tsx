import { FEATURE_CARDS } from "@/lib/data";
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

export function FeatureCards() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why BG678"
          title="Why Choose BG678"
          description="Four reasons players trust BG678 over any other platform."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <GlassCard className="group h-full p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-shadow duration-300 ${glowClass[card.glow]}`}
                >
                  <Icon name={card.icon} size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
