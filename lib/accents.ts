export type Accent =
  | "teal"
  | "lime"
  | "magenta"
  | "violet"
  | "orange"
  | "red";

/** Marathon-inspired neon tokens → Tailwind utility fragments */
export const accentBg: Record<Accent, string> = {
  teal: "bg-neon-teal",
  lime: "bg-neon-lime",
  magenta: "bg-neon-magenta",
  violet: "bg-neon-violet",
  orange: "bg-neon-orange",
  red: "bg-neon-magenta",
};

export const accentText: Record<Accent, string> = {
  teal: "text-neon-teal-soft",
  lime: "text-neon-lime",
  magenta: "text-neon-magenta-soft",
  violet: "text-neon-violet-soft",
  orange: "text-neon-orange-soft",
  red: "text-neon-magenta-soft",
};

export const accentTextMuted: Record<Accent, string> = {
  teal: "text-neon-teal/[0.12]",
  lime: "text-neon-lime/[0.12]",
  magenta: "text-neon-magenta/[0.12]",
  violet: "text-neon-violet/[0.12]",
  orange: "text-neon-orange/[0.12]",
  red: "text-neon-magenta/[0.12]",
};

export const accentDot: Record<Accent, string> = {
  teal: "bg-neon-teal",
  lime: "bg-neon-lime",
  magenta: "bg-neon-magenta",
  violet: "bg-neon-violet",
  orange: "bg-neon-orange",
  red: "bg-neon-magenta",
};

/** Hover wipe fills — lime needs dark type for contrast */
export const accentHoverFill: Record<Accent, string> = {
  teal: "bg-neon-teal",
  lime: "bg-neon-lime",
  magenta: "bg-neon-magenta",
  violet: "bg-neon-violet",
  orange: "bg-neon-orange",
  red: "bg-neon-magenta",
};

export const accentHoverText: Record<Accent, string> = {
  teal: "group-hover:text-black",
  lime: "group-hover:text-black",
  magenta: "group-hover:text-white",
  violet: "group-hover:text-white",
  orange: "group-hover:text-black",
  red: "group-hover:text-white",
};

export const accentHoverMuted: Record<Accent, string> = {
  teal: "group-hover:text-black/70",
  lime: "group-hover:text-black/70",
  magenta: "group-hover:text-white/80",
  violet: "group-hover:text-white/80",
  orange: "group-hover:text-black/70",
  red: "group-hover:text-white/80",
};

export const accentCssVar: Record<Accent, string> = {
  teal: "var(--neon-teal)",
  lime: "var(--neon-lime)",
  magenta: "var(--neon-magenta)",
  violet: "var(--neon-violet)",
  orange: "var(--neon-orange)",
  red: "var(--neon-magenta)",
};

export const accentStrokeHover: Record<Accent, string> = {
  teal: "group-hover:[-webkit-text-stroke:1px_rgba(0,0,0,0.35)]",
  lime: "group-hover:[-webkit-text-stroke:1px_rgba(0,0,0,0.35)]",
  magenta: "group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.55)]",
  violet: "group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.55)]",
  orange: "group-hover:[-webkit-text-stroke:1px_rgba(0,0,0,0.35)]",
  red: "group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.55)]",
};
