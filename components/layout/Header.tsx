"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/data";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-glass" : "bg-transparent"
      )}
    >
      <div className="container-luxury flex h-[76px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-gradient text-[#04231a] shadow-primary">
            <Icon name="diamond" size={18} strokeWidth={2} />
          </span>
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="glass" className="px-6 py-2.5" toastTitle="Login coming soon" toastDescription="This is a demo affiliate page — account login isn't wired up yet.">
            Login
          </Button>
          <Button className="px-6 py-2.5" toastTitle="Welcome to DiuWin" toastDescription="Registration flow is a demo on this landing page.">
            Register
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full glass text-white lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Icon name={mobileOpen ? "close" : "menu"} size={20} />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[76px] z-40 origin-top glass-strong transition-all duration-300 lg:hidden",
          mobileOpen ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        )}
      >
        <nav className="container-luxury flex flex-col gap-1 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex gap-3 px-3 pb-2">
            <Button variant="glass" className="flex-1 py-2.5" toastTitle="Login coming soon">
              Login
            </Button>
            <Button className="flex-1 py-2.5" toastTitle="Welcome to DiuWin">
              Register
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
