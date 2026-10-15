import type { Accent } from "@/lib/accents";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  accent: Accent;
};

export const services: Service[] = [
  {
    slug: "websites",
    title: "Custom websites",
    summary:
      "Marketing sites, portfolios, product launches — built on whatever stack fits the goal, not a one-size platform.",
    details: [
      "End-to-end site design and build",
      "Stack chosen for the brief (modern frameworks, CMS, or hybrid)",
      "Performance, SEO foundations, and accessibility",
      "Handoff and training so you can keep moving",
    ],
    accent: "teal",
  },
  {
    slug: "design",
    title: "Brand & visual design",
    summary:
      "Identity, campaigns, and digital UI with a point of view — typography-led work that holds up past the first mockup.",
    details: [
      "Brand identity and visual systems",
      "Marketing and campaign creative",
      "UI design for web and product",
      "Design–dev collaboration from day one",
    ],
    accent: "magenta",
  },
  {
    slug: "apps",
    title: "Web apps & product",
    summary:
      "When a brochure site isn’t enough — dashboards, tools, integrations, and scoped builds that ship.",
    details: [
      "Full-stack web applications",
      "APIs, forms, and third-party integrations",
      "MVPs and internal tools",
      "Iterative launches with clear priorities",
    ],
    accent: "violet",
  },
  {
    slug: "care",
    title: "Ongoing care",
    summary:
      "Sites age. We keep yours sharp — updates, small features, and the quiet work that prevents fires.",
    details: [
      "Retainers for updates and support",
      "Security, backups, and dependency hygiene",
      "Content refreshes and A/B tweaks",
      "Priority when something breaks",
    ],
    accent: "lime",
  },
];
