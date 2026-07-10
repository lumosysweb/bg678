import type { ReactNode } from "react";
import Link from "next/link";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/floating/ScrollProgress";
import { BackToTop } from "@/components/floating/BackToTop";
import { FloatingContact } from "@/components/floating/FloatingContact";
import { breadcrumbSchema } from "@/lib/seo";
import { SITE } from "@/lib/data";

interface PageShellProps {
  children: ReactNode;
  breadcrumb?: { name: string; path: string };
}

export function PageShell({ children, breadcrumb }: PageShellProps) {
  return (
    <>
      <ScrollProgress />
      <AnnouncementBar />
      <Header />

      {breadcrumb && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                breadcrumbSchema([
                  { name: "Home", url: SITE.url },
                  { name: breadcrumb.name, url: `${SITE.url}${breadcrumb.path}` },
                ])
              ),
            }}
          />
          <nav aria-label="Breadcrumb" className="container-luxury pt-6 text-xs text-muted">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{breadcrumb.name}</span>
          </nav>
        </>
      )}

      <main className="pb-20 sm:pb-0">{children}</main>

      <Footer />

      <BackToTop />
      <FloatingContact />
    </>
  );
}
