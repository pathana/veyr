"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { navLinks, siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "section-pad mx-auto transition-all duration-500",
          scrolled ? "pt-3 md:pt-4" : "pt-0",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between transition-all duration-500",
            scrolled
              ? "h-14 rounded-full border border-white/10 bg-background/75 px-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:h-16 md:px-7"
              : "h-16 border border-transparent bg-transparent md:h-20",
          )}
        >
          <Link
            href="/"
           
            className="font-display text-xl font-bold tracking-[0.18em] text-brand md:text-2xl"
            aria-label={`${siteConfig.name} home`}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                 
                  className={cn(
                    "group relative text-sm tracking-wide transition-colors",
                    active ? "text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px w-full origin-left bg-gradient-to-r from-accent-red to-accent-teal transition-transform duration-300 ease-out",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </Link>
              );
            })}
            <Button
              href="/contact"
              variant="secondary"
              className="!rounded-full !py-2 !px-5 text-xs uppercase tracking-[0.14em]"
            >
              Start a project
            </Button>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-px w-6 bg-foreground transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav className="section-pad flex flex-col gap-6 pt-28" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-display text-5xl font-semibold tracking-tight text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="/contact" variant="red" className="mt-6 w-full uppercase tracking-[0.14em]">
                Start a project
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
