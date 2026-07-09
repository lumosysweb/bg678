import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean;
}

export function GlassCard({ strong, className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        strong ? "glass-strong" : "glass",
        "rounded-2xl shadow-glass transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
