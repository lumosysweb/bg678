"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { Icon } from "@/components/icons";

interface ToastMessage {
  id: number;
  title: string;
  description?: string;
}

interface ToastContextValue {
  showToast: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((title: string, description?: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, title, description }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="pointer-events-none fixed bottom-24 left-1/2 z-[100] flex w-[90%] max-w-sm -translate-x-1/2 flex-col gap-2.5 sm:bottom-8 sm:left-auto sm:right-6 sm:translate-x-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="glass-strong pointer-events-auto flex animate-fade-up items-start gap-3 rounded-xl px-4 py-3.5 shadow-glass"
          >
            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald/20 text-emerald">
              <Icon name="check" size={14} strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{toast.title}</p>
              {toast.description && (
                <p className="mt-0.5 text-xs text-muted">{toast.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
