import { GlassCard } from "@/components/ui/GlassCard";
import { Icon } from "@/components/icons";

export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <GlassCard className="p-6 sm:p-7">
      <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
        On This Page
      </h2>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <Icon name="chevron-down" size={13} className="-rotate-90 text-primary" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
