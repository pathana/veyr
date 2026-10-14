export type Founder = {
  name: string;
  role: string;
  accent: "red" | "teal";
  bio: string[];
  traits: string[];
};

export const founders: Founder[] = [
  {
    name: "Sam",
    role: "Web Designer",
    accent: "red",
    bio: [
      "Sam designs with precision and attitude. She cares deeply about typography, hierarchy, and the latest visual trends — the kind of polish you feel before you can name it.",
      "By day she works in a multimedia studio shooting video, recording audio, and producing commercials. Off the clock she’s on two wheels, knows cars inside out, and wears a lot of black (not goth — just cool).",
    ],
    traits: ["Typography obsessive", "Multimedia studio", "Motorcycles & cars"],
  },
  {
    name: "Pathana",
    role: "Web Developer",
    accent: "teal",
    bio: [
      "Pathana builds the systems behind the look — fast, modern stacks that feel as sharp as the design. From WordPress to custom apps, the code keeps up with the vision.",
      "She and Sam share the same tomboy energy: practical, curious, and allergic to fluff. Together they ship sites that look current and run clean.",
    ],
    traits: ["Modern web stacks", "WordPress specialist", "Performance-minded"],
  },
];
