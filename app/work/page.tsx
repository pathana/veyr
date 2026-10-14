import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { AbstractPanel, SectionLabel } from "@/components/ui/Design";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected projects from VEYR — design and development case studies.",
};

export default function WorkPage() {
  return (
    <div className="page-shell" data-mark="WORK">
      <section className="section-pad relative z-10 mx-auto max-w-7xl pb-12 pt-32 md:pb-20 md:pt-40">
        <Reveal>
          <SectionLabel accent="red">Work</SectionLabel>
          <h1 className="font-display mt-5 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            Selected projects
          </h1>
          <p className="mt-6 max-w-xl text-muted md:text-lg">
            Placeholder case studies with real structure — swap in launches,
            screenshots, and results as they land.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 border-y border-border pb-4">
        <div className="mx-auto max-w-7xl">
          {projects.map((project, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={project.slug} delay={i * 0.04}>
                <Link
                  href={`/work/${project.slug}`}
                  className={cn(
                    "group grid border-b border-border last:border-b-0 md:grid-cols-2",
                    reverse && "md:[&>*:first-child]:order-2",
                  )}
                >
                  <AbstractPanel
                    accent={project.accent}
                    label={project.category}
                    className="min-h-[260px] md:min-h-[360px] md:border-r md:border-border"
                  />
                  <div className="flex flex-col justify-between gap-8 p-7 md:p-10 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-display text-xs tracking-[0.2em] text-muted tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "text-[10px] uppercase tracking-[0.24em]",
                            project.accent === "red"
                              ? "text-accent-red-soft"
                              : "text-accent-teal-soft",
                          )}
                        >
                          {project.year}
                        </span>
                      </div>
                      <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight md:text-5xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
                        {project.summary}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-border pt-5">
                      <span className="text-xs uppercase tracking-[0.18em] text-muted">
                        {project.services.join(" · ")}
                      </span>
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
