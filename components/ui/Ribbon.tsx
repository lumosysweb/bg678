import { cn } from "@/lib/utils";
import type { Ribbon as RibbonType } from "@/types";

const styles: Record<string, string> = {
  Trending: "bg-purple-glow text-white",
  Hot: "bg-danger text-white",
  New: "bg-emerald text-[#04150f]",
};

export function Ribbon({ label }: { label: RibbonType }) {
  if (!label) return null;
  return (
    <span
      className={cn(
        "absolute left-4 top-4 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-lg",
        styles[label]
      )}
    >
      {label}
    </span>
  );
}
