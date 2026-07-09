"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-24 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full glass-strong text-primary shadow-glass transition-all duration-300 hover:-translate-y-1 hover:shadow-primary sm:bottom-8",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  );
}
