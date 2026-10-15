import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/ui/Marquee";

const HomeBelow = dynamic(() => import("@/components/home/HomeBelow"), {
  loading: () => <div className="min-h-[60vh]" aria-hidden />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Custom websites",
          "Brand design",
          "Full-stack builds",
          "Typography",
          "Performance",
          "Campaigns",
          "VEYR",
          "Client-shaped",
          "Two-person team",
        ]}
        speed={36}
      />
      <HomeBelow />
    </>
  );
}
