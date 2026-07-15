import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/icons";
import { SITE } from "@/lib/data";

export function BackHomeCta() {
  return (
    <GlassCard className="mt-14 flex flex-col items-center gap-4 p-8 text-center sm:p-10">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-gradient text-[#04231a] shadow-primary">
        <Icon name="diamond" size={20} />
      </span>
      <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
        Head Back to the {SITE.name} Home Page
      </h2>
      <p className="max-w-md text-sm leading-relaxed text-muted">
        Explore featured games, daily rewards, and the full VIP program from the {SITE.name} home page.
      </p>
      <a href={SITE.url} className="btn-primary mt-2 px-8 py-3.5">
        Go to {SITE.url.replace("https://", "")}
        <Icon name="external" size={16} />
      </a>
    </GlassCard>
  );
}
