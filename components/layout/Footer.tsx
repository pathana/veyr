import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";
import { founders } from "@/content/team";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[-18%] flex justify-center font-display text-[28vw] font-bold leading-none tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_8%,transparent)]"
      >
        {siteConfig.name}
      </div>

      <div className="section-pad relative z-10 mx-auto grid max-w-7xl gap-14 py-20 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="font-display text-3xl font-bold tracking-[0.18em] text-brand"
          >
            {siteConfig.name}
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline}. A two-person team — art direction + full-stack
            engineering — building whatever your project calls for.
          </p>
          <div className="mt-8 flex gap-3">
            <span className="h-1 w-10 bg-neon-magenta" />
            <span className="h-1 w-10 bg-neon-teal" />
            <span className="h-1 w-10 bg-neon-lime" />
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">Navigate</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-foreground/90 transition-colors hover:text-neon-teal-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-muted">The team</p>
          <ul className="mt-5 space-y-3">
            {founders.map((person) => (
              <li key={person.name} className="text-sm">
                <span className="text-foreground">{person.name}</span>
                <span className="text-muted"> — {person.role}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            {siteConfig.emailPlaceholder}
            <span className="mt-1 block text-xs text-muted/70">
              Inbox coming soon
            </span>
          </p>
        </div>
      </div>

      <div className="section-pad relative z-10 mx-auto flex max-w-7xl flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="tracking-wide">Built with Next.js · Designed in-house</p>
      </div>
    </footer>
  );
}
