"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AbstractPanel } from "@/components/ui/Design";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Design";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function WorkRail() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-35%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-y border-border py-20 md:py-28">
      <div className="section-pad mx-auto mb-12 flex max-w-7xl flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionLabel accent="teal">Selected work</SectionLabel>
          <h2 className="font-display mt-4 max-w-xl text-4xl font-semibold tracking-tight md:text-6xl">
            Recent projects
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted md:text-base">
            Scroll sideways through the work — structure ready for real launches.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Button href="/work" variant="ghost">
            All work →
          </Button>
        </Reveal>
      </div>

      <motion.div
        ref={trackRef}
        style={reduce ? undefined : { x }}
        className="flex w-max gap-5 px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] md:gap-7"
      >
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
                className="aspect-[4/5] min-h-[360px] transition-[clip-path] duration-700 [clip-path:inset(0)] group-hover:[clip-path:inset(3%)] md:min-h-[480px]"
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
                  project.accent === "red" ? "text-accent-red-soft" : "text-accent-teal-soft",
                )}
              >
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
