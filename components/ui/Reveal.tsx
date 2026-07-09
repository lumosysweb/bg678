"use client";

import type { ReactNode } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>({ threshold: 0.15, rootMargin: "-40px" });

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}s` : "0s" }}
      className={cn(
        "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
