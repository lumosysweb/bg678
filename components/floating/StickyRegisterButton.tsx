import { Button } from "@/components/ui/Button";

export function StickyRegisterButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <Button
        className="w-full py-3"
        toastTitle="Welcome to DiuWin"
        toastDescription="Registration flow is a demo on this landing page."
      >
        Register Now — Claim Bonus
      </Button>
    </div>
  );
}
