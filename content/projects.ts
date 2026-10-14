export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  accent: "red" | "teal";
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "northline-motors",
    title: "Northline Motors",
    client: "Placeholder client",
    category: "Automotive retail",
    year: "2025",
    summary:
      "A high-contrast inventory site with editorial type and a booking flow that doesn’t feel like a dealership form from 2009.",
    challenge:
      "The brand needed to feel premium online without losing the grit of the shop floor — fast load times, clear inventory, zero clutter.",
    approach:
      "Custom WordPress theme, typography-forward layout, and a filtered inventory experience tuned for mobile shoppers.",
    outcome:
      "Placeholder metrics — structure ready for real case-study numbers once the project ships.",
    accent: "red",
    services: ["WordPress", "UI design"],
  },
  {
    slug: "signal-audio",
    title: "Signal Audio",
    client: "Placeholder client",
    category: "Creative studio",
    year: "2025",
    summary:
      "A multimedia studio site that leads with sound and motion — portfolio-first, contact-second.",
    challenge:
      "Show reel energy without a heavy video homepage that tanks performance on mobile.",
    approach:
      "Lightweight motion, curated stills, and selective autoplay with solid fallbacks. Built on a modern stack for speed.",
    outcome:
      "Placeholder — swap in real reel embeds and results when available.",
    accent: "teal",
    services: ["Custom web", "Design system"],
  },
  {
    slug: "ember-atelier",
    title: "Ember Atelier",
    client: "Placeholder client",
    category: "Lifestyle brand",
    year: "2024",
    summary:
      "An e‑commerce-adjacent brand site with a quiet black base and a single loud accent — product storytelling over catalog noise.",
    challenge:
      "Translate a tactile offline brand into a digital presence that still feels handmade.",
    approach:
      "WordPress + carefully constrained type scale, large imagery, and editor blocks the team can update without breaking the look.",
    outcome:
      "Placeholder case study awaiting real launch data.",
    accent: "red",
    services: ["WordPress", "Brand UI"],
  },
  {
    slug: "kiln-collective",
    title: "Kiln Collective",
    client: "Placeholder client",
    category: "Events & community",
    year: "2024",
    summary:
      "Event landing system with reusable templates — one design language, many drops.",
    challenge:
      "Ship campaign pages fast without reinventing the grid every time.",
    approach:
      "Componentized templates, clear type hierarchy, and a handover playbook for their in-house team.",
    outcome:
      "Placeholder — ready for screenshots and testimonials.",
    accent: "teal",
    services: ["Design system", "Ongoing care"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
