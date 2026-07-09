import { CATEGORIES } from "@/lib/data";
import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function TrendingCategories() {
  return (
    <section id="categories" className="py-20 sm:py-28">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Explore"
          title="Popular Categories"
          description="Eight curated worlds of play, each tuned for a different kind of thrill."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-5">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.name} delay={(i % 6) * 0.06}>
              <a
                href="#featured-games"
                className={`group relative flex h-40 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${cat.gradient} bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 sm:h-48 sm:p-6`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl glass text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon name={cat.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-white sm:text-lg">{cat.name}</h3>
                  <p className="mt-1 text-xs text-muted">{cat.count} Games</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
