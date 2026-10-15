import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AbstractPanel, SectionLabel } from "@/components/ui/Design";
import { getProject, projects } from "@/content/projects";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="section-pad mx-auto max-w-7xl pb-10 pt-32 md:pb-12 md:pt-40">
        <Reveal>
          <Link
            href="/work"
            className="text-[11px] uppercase tracking-[0.24em] text-muted transition-colors hover:text-foreground"
          >
            ← All work
          </Link>
          <SectionLabel className="mt-8" accent={project.accent}>
            {project.category} · {project.year}
          </SectionLabel>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <p className="mt-4 text-sm text-muted">
            Client: {project.client} · {project.services.join(" · ")}
          </p>
        </Reveal>
      </section>

      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl">
          <AbstractPanel
            accent={project.accent}
            label={project.title}
            className="min-h-[280px] rounded-none md:min-h-[420px]"
          />
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="section-pad mx-auto grid max-w-7xl gap-0 md:grid-cols-3">
          {[
            { label: "Challenge", body: project.challenge },
            { label: "Approach", body: project.approach },
            { label: "Outcome", body: project.outcome },
          ].map((block, i) => (
            <Reveal key={block.label} delay={i * 0.06}>
              <div
                className={cn(
                  "border-border py-12 md:px-8 md:py-16",
                  i < 2 && "border-b md:border-b-0 md:border-r",
                )}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
                  {block.label}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {block.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-pad mx-auto flex max-w-7xl flex-col gap-8 py-20 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.24em] text-muted">Next project</p>
          <Link
            href={`/work/${next.slug}`}
            className="font-display mt-3 block text-3xl font-semibold tracking-tight transition-colors hover:text-neon-teal-soft md:text-5xl"
          >
            {next.title} →
          </Link>
        </Reveal>
        <Button href="/contact" variant="secondary">
          Start your project
        </Button>
      </section>
    </>
  );
}
