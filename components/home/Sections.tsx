"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { GiantIndex, SectionLabel } from "@/components/ui/Design";
import { services } from "@/content/services";
import { founders } from "@/content/team";
import { cn } from "@/lib/utils";

export function Positioning() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -right-8 top-10 font-display text-[28vw] font-bold leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_7%,transparent)] md:top-0">
        02
      </div>
      <div className="section-pad relative z-10 mx-auto max-w-7xl py-24 md:py-36">
        <div className="grid gap-10 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-4 md:pt-8">
            <SectionLabel accent="teal">Who we are</SectionLabel>
            <p className="mt-8 max-w-[12rem] text-xs uppercase leading-relaxed tracking-[0.22em] text-muted">
              Art direction + full-stack engineering
            </p>
          </Reveal>

          <div className="md:col-span-7 md:col-start-6">
            <TextReveal
              as="h2"
              delay={0.06}
              className="font-display text-3xl font-semibold leading-[1.02] tracking-tight md:text-5xl lg:text-[3.5rem]"
            >
              Two people. One sharp output.
            </TextReveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-muted md:text-lg">
                We build websites tailored to each client — brand, marketing,
                product, or something in between. Design-led, performance-minded,
                and allergic to template blandness.
              </p>
              <p className="mt-5 font-accent text-xl text-foreground/70 md:text-2xl">
                Craft over clutter. Motion with purpose.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesTeaser() {
  return (
    <section className="relative">
      <div className="section-pad mx-auto max-w-7xl py-20 md:py-28">
        <Reveal className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel accent="red">Services</SectionLabel>
            <h2 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              What we ship
            </h2>
          </div>
          <Button href="/services" variant="ghost" className="self-start md:self-auto">
            All services →
          </Button>
        </Reveal>
      </div>

      <div className="border-y border-border">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.04}>
            <Link
              href="/services"
             
              className={cn(
                "group relative block overflow-hidden border-b border-border last:border-b-0",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100",
                  service.accent === "red" && "bg-accent-red",
                  service.accent === "teal" && "bg-accent-teal",
                  service.accent === "neutral" && "bg-foreground",
                )}
              />
              <div className="section-pad relative z-10 mx-auto grid max-w-7xl gap-4 py-8 md:grid-cols-[auto_1fr_1.2fr_auto] md:items-center md:gap-10 md:py-10">
                <GiantIndex
                  value={String(i + 1).padStart(2, "0")}
                  className="!text-[3.5rem] transition-colors duration-300 group-hover:!text-transparent group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.55)] md:!text-[4.5rem]"
                />
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-white md:text-4xl">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80 md:text-base">
                  {service.summary}
                </p>
                <span className="hidden text-sm text-muted transition-colors duration-300 group-hover:text-white md:inline">
                  →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FoundersStrip() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-pad mx-auto max-w-7xl py-12 md:py-16">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>The duo</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Same wavelength.
            </h2>
          </div>
          <p className="font-accent max-w-xs text-lg italic text-muted">
            Art direction + engineering. No middleman energy.
          </p>
        </Reveal>
      </div>

      <div className="grid md:grid-cols-2">
        {founders.map((person, i) => (
          <Reveal key={person.name} delay={i * 0.08}>
            <div
              className={cn(
                "group relative min-h-[460px] overflow-hidden border-t border-border px-6 py-16 md:min-h-[560px] md:px-12 md:py-20",
                i === 0 ? "md:border-r" : "",
              )}
            >
              <div
                aria-hidden
                className={cn(
                  "absolute inset-0 opacity-90 transition-opacity duration-500",
                  person.accent === "red"
                    ? "bg-[radial-gradient(ellipse_at_15%_10%,color-mix(in_srgb,var(--accent-red)_22%,transparent),transparent_55%),linear-gradient(160deg,#0d0d0d,#090909)]"
                    : "bg-[radial-gradient(ellipse_at_85%_10%,color-mix(in_srgb,var(--accent-teal)_22%,transparent),transparent_55%),linear-gradient(200deg,#0d0d0d,#090909)]",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "pointer-events-none absolute -right-2 top-0 font-display text-[13rem] font-bold leading-none tracking-[-0.08em] transition-transform duration-700 md:text-[17rem]",
                  person.accent === "red" ? "text-accent-red/[0.1]" : "text-accent-teal/[0.1]",
                  "group-hover:-translate-y-2",
                )}
              >
                {person.name[0]}
              </span>

              <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-between gap-12 md:min-h-[460px]">
                <div>
                  <p
                    className={cn(
                      "text-[11px] uppercase tracking-[0.28em]",
                      person.accent === "red" ? "text-accent-red-soft" : "text-accent-teal-soft",
                    )}
                  >
                    {person.role}
                  </p>
                  <h3 className="font-display mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
                    {person.name}
                  </h3>
                  <div
                    className={cn(
                      "mt-6 h-1 w-16",
                      person.accent === "red" ? "bg-accent-red" : "bg-accent-teal",
                    )}
                  />
                </div>
                <div>
                  <p className="max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                    {person.bio[0]}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {person.traits.map((trait) => (
                      <li
                        key={trait}
                        className="text-[10px] uppercase tracking-[0.18em] text-muted"
                      >
                        {trait}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-4 border-y border-border py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Want the longer version?</p>
        <Button href="/about" variant="secondary">
          Meet the team
        </Button>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="grain relative overflow-hidden atmosphere content-auto">
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-25" />
      <p
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[28vw] font-bold leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_8%,transparent)]"
      >
        GO
      </p>

      <div className="section-pad relative z-10 mx-auto max-w-7xl py-32 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <SectionLabel className="justify-center" accent="red">
              Start a project
            </SectionLabel>
          </Reveal>
          <TextReveal
            as="h2"
            delay={0.08}
            className="font-display mt-6 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
          >
            Got a brief? Let’s make it move.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-lg font-accent text-xl italic text-muted">
              Marketing site, brand refresh, product build — we’ll shape it to fit.
            </p>
            <div className="mt-12">
              <Button href="/contact" variant="red">
                Get in touch
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
