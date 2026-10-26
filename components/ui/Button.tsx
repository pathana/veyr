import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "red" | "teal" | "lime" | "magenta";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-white border border-transparent",
  secondary:
    "bg-transparent text-foreground border border-border hover:border-foreground/60 hover:bg-white/[0.03]",
  ghost:
    "bg-transparent text-muted hover:text-foreground border border-transparent px-0",
  red: "bg-neon-magenta text-white hover:bg-neon-magenta-soft border border-transparent",
  magenta:
    "bg-neon-magenta text-white hover:bg-neon-magenta-soft border border-transparent",
  teal: "bg-neon-teal text-black hover:bg-neon-teal-soft border border-transparent",
  lime: "bg-neon-lime text-black hover:bg-neon-lime-soft border border-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    "btn-shine relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-[0.08em] uppercase transition-[background-color,border-color,color] duration-300 disabled:opacity-50",
    variant !== "ghost" && "clip-chamfer",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
