import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  accent,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "red" | "teal" | "none";
}) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-muted",
        className,
      )}
    >
      {accent && accent !== "none" ? (
        <span
          className={cn(
            "h-px w-8",
            accent === "red" ? "bg-accent-red" : "bg-accent-teal",
          )}
          aria-hidden
        />
      ) : null}
      {children}
    </p>
  );
}

export function GiantIndex({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "font-display pointer-events-none select-none text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_color-mix(in_srgb,var(--foreground)_14%,transparent)]",
        className,
      )}
    >
      {value}
    </span>
  );
}

export function AbstractPanel({
  accent = "red",
  label,
  className,
}: {
  accent?: "red" | "teal";
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("media-panel aspect-[16/10] w-full md:aspect-[5/3]", className)}
      style={
        {
          "--panel-accent":
            accent === "red" ? "var(--accent-red)" : "var(--accent-teal)",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 z-[2] flex items-end justify-between p-5 md:p-7">
        <span className="font-display text-xs uppercase tracking-[0.28em] text-white/70">
          {label ?? "VEYR"}
        </span>
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            accent === "red" ? "bg-accent-red" : "bg-accent-teal",
          )}
        />
      </div>
      <div className="absolute right-[-8%] top-[-12%] z-[1] font-display text-[8rem] font-bold leading-none tracking-[-0.08em] text-white/[0.06] md:text-[11rem]">
        V
      </div>
    </div>
  );
}
