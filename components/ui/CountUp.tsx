"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import { useCountUp } from "@/hooks/useCountUp";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ value, prefix = "", suffix = "", className }: CountUpProps) {
  const { ref, isVisible } = useOnScreen<HTMLSpanElement>();
  const count = useCountUp(value, isVisible);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
