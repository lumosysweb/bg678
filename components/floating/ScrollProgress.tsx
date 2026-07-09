"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-primary-gradient transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
