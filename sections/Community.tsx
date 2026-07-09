import { COMMUNITY_LINKS } from "@/lib/data";
import { Icon } from "@/components/icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Community"
          title="Join The Conversation"
          description="Live drops, exclusive gift codes, and a community of players who talk strategy, not just spins."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {COMMUNITY_LINKS.map((link, i) => (
            <Reveal key={link.name} delay={i * 0.07}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block h-full"
              >
                <GlassCard className="group flex h-full flex-col items-center gap-3 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                    <Icon name={link.icon} size={22} />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-white">{link.name}</p>
                    <p className="mt-1 text-xs text-muted">{link.handle}</p>
                  </div>
                </GlassCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
