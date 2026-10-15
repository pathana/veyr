"use client";

import {
  Positioning,
  ServicesTeaser,
  FoundersStrip,
  FinalCta,
} from "@/components/home/Sections";
import { WorkRail } from "@/components/home/WorkRail";

export default function HomeBelow() {
  return (
    <>
      <Positioning />
      <WorkRail />
      <ServicesTeaser />
      <FoundersStrip />
      <FinalCta />
    </>
  );
}
