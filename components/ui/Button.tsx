"use client";

import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass";
  toastTitle?: string;
  toastDescription?: string;
}

export function Button({
  variant = "primary",
  toastTitle,
  toastDescription,
  className,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      className={cn(variant === "primary" ? "btn-primary" : "btn-glass", className)}
      onClick={(e) => {
        onClick?.(e);
        if (toastTitle) showToast(toastTitle, toastDescription);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
