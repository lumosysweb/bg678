import { Icon } from "@/components/icons";

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3 sm:bottom-8">
      <a
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald text-[#04150f] shadow-emerald transition-transform duration-300 hover:scale-110"
      >
        <Icon name="whatsapp" size={22} />
      </a>
      <a
        href="https://t.me/diuwin_official"
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat on Telegram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-accent text-white shadow-[0_0_30px_-6px_rgba(45,140,255,0.6)] transition-transform duration-300 hover:scale-110"
      >
        <Icon name="telegram" size={20} />
      </a>
    </div>
  );
}
