import { TIMELINE } from "@/lib/data";
import { Icon } from "@/components/icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why DiuWin"
          title="Built For Players Who Expect More"
          description="Every detail of the platform is engineered around speed, security, and a genuinely premium experience."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <GlassCard className="group relative h-full overflow-hidden p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30">
                <span className="font-numbers absolute -right-2 -top-4 text-6xl font-bold text-white/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-shadow duration-300 group-hover:shadow-primary">
                  <Icon name={item.icon} size={22} />
                </span>
                <h3 className="relative mt-5 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
