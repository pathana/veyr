import { Hero } from "@/components/home/Hero";
import {
  Positioning,
  SpeedStrip,
  ServicesTeaser,
  FoundersStrip,
  FinalCta,
} from "@/components/home/Sections";
import { WorkRail } from "@/components/home/WorkRail";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpeedStrip />
      <Positioning />
      <WorkRail />
      <ServicesTeaser />
      <FoundersStrip />
      <FinalCta />
    </>
  );
}
