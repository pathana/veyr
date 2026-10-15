"use client";

import { motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export function Hero() {
  const reduce = useReducedMotion();
  const letters = siteConfig.name.split("");

  return (
    <section className="hero-shell relative flex min-h-[100svh] flex-col justify-end overflow-hidden atmosphere">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[18%] z-[1] section-pad mx-auto max-w-7xl"
      >
        <p className="font-display text-[clamp(3.5rem,14vw,11rem)] font-bold leading-[0.75] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_12%,transparent)]">
          STUDIO
        </p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-24 z-[2] section-pad mx-auto hidden max-w-7xl items-center justify-between text-[10px] uppercase tracking-[0.3em] text-muted/75 md:flex md:top-28">
        <span>Based remotely · US</span>
        <span className="font-accent normal-case tracking-wide text-foreground/50">
          design that moves
        </span>
        <span>Available for projects</span>
      </div>

      <div className="section-pad relative z-10 mx-auto w-full max-w-7xl pb-14 pt-36 md:pb-20 md:pt-48">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted"
        >
          <span className="h-px w-8 bg-accent-red" />
          Design + Development
        </motion.p>

        <h1
          className="font-display relative text-[clamp(5rem,20vw,15.5rem)] font-bold leading-[0.78] tracking-[-0.055em] text-brand"
          aria-label={siteConfig.name}
        >
          {letters.map((letter, i) => (
            <span key={`${letter}-${i}`} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className={letterClass(i)}
                initial={reduce ? false : { y: "120%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.05 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {letter}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:items-end">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-5"
          >
            <p className="max-w-md text-lg leading-relaxed text-foreground/88 md:text-xl">
              {siteConfig.tagline}.
            </p>
            <p className="mt-3 font-accent text-lg text-muted md:text-xl">
              Two people. Sharp taste. Zero fluff.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 md:col-span-4 md:col-start-9 md:justify-end"
          >
            <Button href="/work" variant="primary">
              View work
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border/80">
        <div className="section-pad mx-auto grid max-w-7xl grid-cols-2 gap-4 py-4 text-[10px] uppercase tracking-[0.22em] text-muted md:grid-cols-4 md:py-5">
          <span>Any kind of website</span>
          <span>Client-shaped builds</span>
          <span className="hidden md:inline">Typography-led</span>
          <span className="hidden text-right md:inline">Two-person team</span>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-accent-red via-white/20 to-accent-teal"
      />
    </section>
  );
}

function letterClass(i: number) {
  if (i === 0) return "inline-block text-accent-red";
  if (i === siteConfig.name.length - 1) return "inline-block text-accent-teal";
  return "inline-block";
}
