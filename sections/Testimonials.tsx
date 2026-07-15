import { TESTIMONIALS } from "@/lib/data";
import { Icon } from "@/components/icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="BG678 Members Speak"
          title="Trusted By Thousands Of BG678 Players"
          description="Real experiences from BG678 members across every VIP tier."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.08}>
              <GlassCard className="flex h-full flex-col p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Icon
                      key={idx}
                      name="star"
                      size={15}
                      className={idx < t.rating ? "text-primary" : "text-white/15"}
                      fill={idx < t.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-white/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-gradient font-heading text-sm font-bold text-[#04231a]">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      {t.verified && (
                        <Icon name="check-badge" size={14} className="text-emerald" />
                      )}
                    </div>
                    <p className="text-xs text-muted">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
