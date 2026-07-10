import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/icons";
import { COMMUNITY_LINKS, FAQ_ITEMS, SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Support Center",
  description: `Get help from the ${SITE.name} concierge team, available 24×7 across live chat, WhatsApp, and Telegram.`,
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <PageShell breadcrumb={{ name: "Support Center", path: "/support" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="Support"
            title="How Can We Help?"
            description="Our concierge team is online 24×7. Reach us on any channel below for an instant response."
          />

          <Reveal className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {COMMUNITY_LINKS.filter((link) => link.name !== "Instagram" && link.name !== "YouTube").map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlassCard className="flex items-center gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={link.icon} size={20} />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-semibold text-white">{link.name}</span>
                    <span className="block text-xs text-muted">{link.handle}</span>
                  </span>
                </GlassCard>
              </a>
            ))}
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-3xl">
            <h2 className="mb-6 text-center font-heading text-xl font-semibold text-white">Common Questions</h2>
            <Accordion items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
