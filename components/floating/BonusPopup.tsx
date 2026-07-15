"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

export function BonusPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bg678-bonus-seen")) return;
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem("bg678-bonus-seen", "1");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="gradient-border relative w-full max-w-md rounded-2xl bg-card p-8 text-center shadow-primary">
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-white"
        >
          <Icon name="close" size={16} />
        </button>
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-gradient text-[#04231a] shadow-primary">
          <Icon name="gift" size={26} />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-bold text-white">
          Exclusive <span className="text-gradient-primary">₹50,000</span> Bonus
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Register in the next few minutes and unlock a welcome bonus reserved for new members.
        </p>
        <Button
          className="mt-6 w-full py-3.5"
          onClick={close}
          toastTitle="Welcome to BG678"
          toastDescription="Registration flow is a demo on this landing page."
        >
          Claim My Bonus
        </Button>
      </div>
    </div>
  );
}
