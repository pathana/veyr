import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { GiantIndex, SectionLabel } from "@/components/ui/Design";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, brand & visual design, web apps, and ongoing care from VEYR — tailored to each client’s needs.",
};

export default function ServicesPage() {
  return (
    <div className="page-shell" data-mark="SERVICES">
      <section className="section-pad relative z-10 mx-auto max-w-7xl pb-16 pt-32 md:pb-24 md:pt-40">
        <Reveal>
          <SectionLabel accent="teal">Services</SectionLabel>
          <h1 className="font-display mt-5 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Built around your brief. Not a default stack.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Tell us the goal — we’ll recommend the approach, design the experience,
            and engineer the site that fits.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 border-t border-border">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.04}>
            <article
              id={service.slug}
              className="group relative overflow-hidden border-b border-border"
            >
              <div className="section-pad mx-auto grid max-w-7xl gap-8 py-16 md:grid-cols-[auto_1fr_1.1fr] md:gap-12 md:py-20">
                <GiantIndex
                  value={String(i + 1).padStart(2, "0")}
                  className="!text-[5rem] md:!text-[7rem]"
                />
                <div>
                  <span
                    className={cn(
                      "mb-5 block h-px w-14",
                      service.accent === "red" && "bg-accent-red",
                      service.accent === "teal" && "bg-accent-teal",
                      service.accent === "neutral" && "bg-muted",
                    )}
                  />
                  <h2 className="font-display text-3xl font-semibold tracking-tight md:text-5xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-md text-muted leading-relaxed">{service.summary}</p>
                </div>
                <ul className="space-y-0 self-center">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="border-b border-border/70 py-4 text-sm text-foreground/90 first:border-t first:border-border/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="section-pad relative z-10 mx-auto max-w-7xl py-24">
        <Reveal className="flex flex-col gap-8 border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <p className="font-display max-w-xl text-2xl font-semibold tracking-tight md:text-4xl">
            Not sure where to start? Tell us the goal — we’ll map the path.
          </p>
          <Button href="/contact" variant="teal">
            Talk through a project
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
