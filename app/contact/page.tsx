import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/icons";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE.name} team via live chat, WhatsApp, Telegram, or email.`,
  alternates: { canonical: "/contact" },
};

const CONTACT_CHANNELS = [
  {
    title: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/910000000000",
    icon: "whatsapp" as const,
  },
  {
    title: "Telegram",
    value: "@bg678_official",
    href: "https://t.me/bg678_official",
    icon: "telegram" as const,
  },
  {
    title: "Email",
    value: "support@bg678.netlify.app",
    href: "mailto:support@bg678.netlify.app",
    icon: "mail" as const,
  },
  {
    title: "Availability",
    value: "24×7, every day",
    href: null,
    icon: "clock" as const,
  },
];

export default function ContactPage() {
  return (
    <PageShell breadcrumb={{ name: "Contact Us", path: "/contact" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Contact Us"
            title="We're Here to Help"
            description="Pick whichever channel is fastest for you — our concierge team responds around the clock."
          />

          <Reveal className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {CONTACT_CHANNELS.map((channel) => {
              const content = (
                <GlassCard className="flex h-full items-center gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={channel.icon} size={22} />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-white">{channel.title}</span>
                    <span className="block text-sm text-muted">{channel.value}</span>
                  </span>
                </GlassCard>
              );

              return channel.href ? (
                <a key={channel.title} href={channel.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={channel.title}>{content}</div>
              );
            })}
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
