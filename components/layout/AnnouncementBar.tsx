"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center gap-2 overflow-hidden bg-primary-gradient px-4 py-2 text-center text-xs font-semibold text-[#04231a] sm:text-sm">
      <Icon name="sparkle" size={16} strokeWidth={2} />
      <p>
        Welcome Bonus: Get up to <span className="font-heading">₹50,000</span> on your first
        deposit — limited time.
      </p>
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors hover:bg-black/10"
      >
        <Icon name="close" size={14} strokeWidth={2.5} />
      </button>
    </div>
  );
}
