import { cn } from "@/lib/utils";

const neonDots = [
  "bg-neon-teal",
  "bg-neon-lime",
  "bg-neon-magenta",
  "bg-neon-violet",
  "bg-neon-orange",
] as const;

type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: number;
};

export function Marquee({ items, className, speed = 36 }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border bg-[#0c0c0c] py-5",
        className,
      )}
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0c0c0c] to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0c0c0c] to-transparent md:w-32" />

      <div
        className="marquee-track flex w-max gap-12 whitespace-nowrap"
        style={{ animationDuration: `${speed}s` }}
      >
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display flex items-center gap-12 text-sm font-semibold uppercase tracking-[0.32em] text-foreground/55 md:text-base"
          >
            <span>{item}</span>
            <span className={cn("h-1.5 w-1.5 rounded-full", neonDots[i % neonDots.length])} />
          </span>
        ))}
      </div>
    </div>
  );
}
