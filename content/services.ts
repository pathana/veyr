export type Service = {
  slug: string;
  title: string;
  summary: string;
  details: string[];
  accent: "red" | "teal" | "neutral";
};

export const services: Service[] = [
  {
    slug: "wordpress",
    title: "WordPress builds",
    summary:
      "Our specialty. Custom themes, editor-friendly sites, and launches that clients can actually manage.",
    details: [
      "Custom theme & block development",
      "Performance and Core Web Vitals tuning",
      "Migrations, redesigns, and rebuilds",
      "Training so your team owns the CMS",
    ],
    accent: "teal",
  },
  {
    slug: "design",
    title: "Design systems & UI",
    summary:
      "Typography-led interfaces with a point of view — brand systems that hold up past the first mockup.",
    details: [
      "Visual identity for digital products",
      "UI kits and component libraries",
      "Landing pages and marketing sites",
      "Design–dev handoff that actually sticks",
    ],
    accent: "red",
  },
  {
    slug: "custom",
    title: "Custom web apps",
    summary:
      "Need something beyond WordPress? We adapt — Next.js, headless setups, and whatever fits the brief.",
    details: [
      "Next.js and modern JAMstack builds",
      "Headless WordPress + custom frontends",
      "Integrations, forms, and tooling",
      "Scoped MVPs for new products",
    ],
    accent: "teal",
  },
  {
    slug: "care",
    title: "Ongoing care",
    summary:
      "Sites age. We keep yours sharp — updates, small features, and the quiet work that prevents fires.",
    details: [
      "Retainers for updates and support",
      "Security patches and backups",
      "Content refreshes and A/B tweaks",
      "Priority when something breaks",
    ],
    accent: "neutral",
  },
];
