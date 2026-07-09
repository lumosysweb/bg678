import { FEATURED_GAMES } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Ribbon } from "@/components/ui/Ribbon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function FeaturedGames() {
  return (
    <section id="featured-games" className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Featured"
          title="Featured Games"
          description="Hand-picked titles our members are playing right now."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {FEATURED_GAMES.map((game, i) => (
            <Reveal key={game.name} delay={(i % 4) * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-primary">
                <Ribbon label={game.ribbon} />
                <div
                  className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${game.gradient} sm:h-48`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full glass-strong text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 scale-90">
                    <Icon name="play" size={22} />
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {game.category}
                  </p>
                  <h3 className="mt-1 font-heading text-sm font-semibold text-white sm:text-base">
                    {game.name}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="glass"
            className="px-9 py-3.5"
            toastTitle="Full game library coming soon"
            toastDescription="This demo page showcases a preview of the catalog."
          >
            View All Games
          </Button>
        </div>
      </div>
    </section>
  );
}
