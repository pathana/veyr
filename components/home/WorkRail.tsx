"use client";

import Link from "next/link";
import { AbstractPanel, SectionLabel } from "@/components/ui/Design";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/content/projects";
import { accentText } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function WorkRail() {
  return (
    <section className="relative overflow-hidden border-y border-border py-20 content-auto md:py-28">
      <div className="section-pad mx-auto mb-12 flex max-w-7xl flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionLabel accent="teal">Selected work</SectionLabel>
          <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
            Recent projects
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted md:text-base">
            Swipe or scroll sideways through the work — structure ready for real launches.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/work" variant="ghost">
            All work →
          </Button>
        </Reveal>
      </div>

      <div className="work-rail flex gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] pb-4 md:gap-7">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group relative w-[78vw] max-w-[520px] shrink-0 md:w-[42vw]"
          >
            <div className="overflow-hidden">
              <AbstractPanel
                accent={project.accent}
                label={`${String(i + 1).padStart(2, "0")} · ${project.category}`}
                className="aspect-[4/5] min-h-[360px] transition-[clip-path] duration-500 [clip-path:inset(0)] group-hover:[clip-path:inset(3%)] md:min-h-[480px]"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
                  {project.services.join(" · ")}
                </p>
              </div>
              <span
                className={cn(
                  "mt-2 text-[10px] uppercase tracking-[0.24em]",
                  accentText[project.accent],
                )}
              >
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
