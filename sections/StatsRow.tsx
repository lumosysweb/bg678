import { STATS } from "@/lib/data";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

export function StatsRow() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-luxury">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-card/40 p-6 sm:grid-cols-4 sm:gap-6 sm:p-10">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1.5 text-center sm:gap-2">
                <p className="font-numbers text-3xl font-bold text-gradient-primary sm:text-4xl lg:text-5xl">
                  <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-xs font-medium text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
