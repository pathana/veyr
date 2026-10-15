import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Design";
import { founders } from "@/content/team";
import { accentDot, accentText, accentTextMuted } from "@/lib/accents";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sam and Pathana — the two-person team behind VEYR. Art direction and full-stack engineering for websites that fit the brief.",
};

export default function AboutPage() {
  return (
    <div className="page-shell" data-mark="ABOUT">
      <section className="section-pad relative z-10 mx-auto max-w-7xl pb-16 pt-32 md:pb-24 md:pt-40">
        <Reveal>
          <SectionLabel accent="magenta">About</SectionLabel>
          <h1 className="font-display mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            A two-person team. Design and engineering in lockstep.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            VEYR is Sam and Pathana — tomboy energy, sharp taste, and zero fluff.
            We build websites tailored to each client’s needs, on whatever stack
            makes the project better.
          </p>
        </Reveal>
      </section>

      <section className="relative z-10 border-y border-border">
        {founders.map((person, i) => (
          <div
            key={person.name}
            className={cn("relative overflow-hidden border-border", i > 0 && "border-t")}
            style={{
              background:
                person.accent === "magenta"
                  ? "radial-gradient(ellipse at 0% 0%, color-mix(in srgb, var(--neon-magenta) 16%, transparent), transparent 50%)"
                  : "radial-gradient(ellipse at 100% 0%, color-mix(in srgb, var(--neon-teal) 16%, transparent), transparent 50%)",
            }}
          >
            <span
              aria-hidden
              className={cn(
                "pointer-events-none absolute -right-6 top-6 font-display text-[10rem] font-bold leading-none tracking-[-0.08em] md:text-[14rem]",
                accentTextMuted[person.accent],
              )}
            >
              {person.name[0]}
            </span>
            <div className="section-pad relative z-10 mx-auto grid max-w-7xl gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-28">
              <Reveal>
                <p
                  className={cn(
                    "text-[11px] uppercase tracking-[0.28em]",
                    accentText[person.accent],
                  )}
                >
                  {person.role}
                </p>
                <h2 className="font-display mt-3 text-5xl font-semibold tracking-tight md:text-7xl">
                  {person.name}
                </h2>
                <div className={cn("mt-6 h-1 w-16", accentDot[person.accent])} />
                <ul className="mt-10 space-y-3">
                  {person.traits.map((trait) => (
                    <li key={trait} className="border-b border-border/70 pb-3 text-sm text-muted">
                      {trait}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08} className="space-y-5 self-center">
                {person.bio.map((para) => (
                  <p
                    key={para.slice(0, 24)}
                    className="text-base leading-relaxed text-foreground/85 md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      <section className="section-pad relative z-10 mx-auto max-w-7xl py-24 md:py-32">
        <Reveal>
          <SectionLabel accent="teal">Process</SectionLabel>
          <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            How we work
          </h2>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed md:text-lg">
            Design and engineering stay in the same conversation from day one —
            no thrown-over-the-wall mockups, no “it looked different in Figma.”
            We pick the tools that fit the brief, then ship something you can
            actually use and grow.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="secondary">
              Work with us
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
