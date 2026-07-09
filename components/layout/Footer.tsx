import { FOOTER_LINKS, SITE, COMMUNITY_LINKS } from "@/lib/data";
import { Icon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#05070d]">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 font-heading text-xl font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-gradient text-[#04231a] shadow-primary">
                <Icon name="diamond" size={18} strokeWidth={2} />
              </span>
              {SITE.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-6 flex gap-3">
              {COMMUNITY_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full glass text-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:shadow-primary"
                >
                  <Icon name={link.icon} size={17} />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="max-w-xl leading-relaxed">
            18+ Only. Play Responsibly. {SITE.name} is an independent rewards and entertainment
            platform. Nothing on this site constitutes financial advice or a guarantee of winnings.
          </p>
        </div>
      </div>
    </footer>
  );
}
