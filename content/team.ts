import type { Accent } from "@/lib/accents";

export type Founder = {
  name: string;
  role: string;
  accent: Accent;
  bio: string[];
  traits: string[];
};

export const founders: Founder[] = [
  {
    name: "Sam",
    role: "Art Director",
    accent: "magenta",
    bio: [
      "Samantha Harrington is the visual force behind VEYR. With a BFA in Graphic Design and over a decade across brand identity, campaigns, web design, print, and large-format work, she shapes how a brand looks, feels, and shows up everywhere it needs to.",
      "Her background spans creative project management at Millennium Agency, design for brands like Harley-Davidson and Planet Fitness, and ongoing digital/SEO work — plus photography when the story needs a lens. Off the clock she’s on two wheels, knows cars inside out, and wears a lot of black (not goth — just cool).",
    ],
    traits: ["Brand identity", "Campaigns & web design", "Photography"],
  },
  {
    name: "Pathana",
    role: "Full Stack Engineer",
    accent: "teal",
    bio: [
      "Pathana builds the product side of the brief — front end to back end, modern stacks, and the quiet engineering that keeps a site fast, solid, and easy to grow.",
      "She and Sam share the same tomboy energy: practical, curious, and allergic to fluff. Together they ship websites that look intentional and run clean.",
    ],
    traits: ["Full-stack builds", "Performance-minded", "Flexible stacks"],
  },
];
