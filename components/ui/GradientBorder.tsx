import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GradientBorder({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("gradient-border rounded-2xl", className)} {...props}>
      {children}
    </div>
  );
}
