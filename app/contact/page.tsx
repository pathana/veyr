import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionLabel } from "@/components/ui/Design";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with VEYR — a two-person design and full-stack team building websites tailored to your needs.",
};

export default function ContactPage() {
  return (
    <div className="page-shell grain atmosphere" data-mark="CONTACT">
      <section className="section-pad relative z-10 mx-auto grid max-w-7xl gap-16 pb-28 pt-32 md:grid-cols-[1fr_1.05fr] md:gap-20 md:pt-40">
        <Reveal>
          <SectionLabel accent="red">Contact</SectionLabel>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Tell us what you’re building.
          </h1>
          <p className="mt-6 max-w-md text-muted leading-relaxed md:text-lg">
            Share a short brief — timeline, links, goals. We’ll follow up once our
            domain inbox is live. Until then, submissions are logged as placeholders.
          </p>
          <dl className="mt-12 space-y-6 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">Email</dt>
              <dd className="mt-2 text-foreground">{siteConfig.emailPlaceholder}</dd>
              <dd className="mt-1 text-xs text-muted">Placeholder — coming soon</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.24em] text-muted">Based</dt>
              <dd className="mt-2 text-foreground">Remote-friendly · US</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="border border-border bg-surface/80 p-6 backdrop-blur-sm md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
