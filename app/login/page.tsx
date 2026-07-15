import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "BG678 Login",
  description:
    "BG678 login — sign in to your BG678 account to access instant withdrawals, daily bonuses, and exclusive VIP rewards on the BG678 game platform.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return (
    <PageShell breadcrumb={{ name: "Login", path: "/login" }}>
      <section className="py-20 sm:py-28">
        <div className="container-luxury">
          <SectionHeading
            eyebrow="BG678 Login"
            title="Login to Your BG678 Account"
            description={`Access your ${SITE.name} account to claim daily rewards, track your VIP tier, and manage instant withdrawals.`}
          />

          <Reveal className="mx-auto mt-12 max-w-md">
            <GlassCard className="p-7 sm:p-9">
              <div className="flex flex-col gap-5">
                <label className="flex flex-col gap-2 text-left">
                  <span className="text-xs font-medium text-muted">Username or Email</span>
                  <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <Icon name="mail" size={16} className="text-muted" />
                    <input
                      type="text"
                      name="identifier"
                      placeholder="Enter your BG678 username"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/70"
                    />
                  </span>
                </label>

                <label className="flex flex-col gap-2 text-left">
                  <span className="text-xs font-medium text-muted">Password</span>
                  <span className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <Icon name="shield" size={16} className="text-muted" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-muted/70"
                    />
                  </span>
                </label>

                <Button
                  className="mt-2 w-full py-3.5"
                  toastTitle="BG678 Login is a demo"
                  toastDescription="Account login isn't wired up on this landing page yet."
                >
                  Login to BG678
                </Button>
              </div>

              <p className="mt-6 text-center text-sm text-muted">
                New to {SITE.name}?{" "}
                <Link href="/#download" className="font-medium text-primary hover:underline">
                  Download the app
                </Link>{" "}
                to register.
              </p>
            </GlassCard>

            <p className="mt-6 text-center text-xs leading-relaxed text-muted">
              Having trouble logging in? Visit our{" "}
              <Link href="/support" className="text-primary hover:underline">
                Support Center
              </Link>{" "}
              for help.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
