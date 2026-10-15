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
          "WordPress",
          "Custom builds",
          "Typography",
          "Performance",
          "Design systems",
          "Motion",
          "VEYR",
          "Signal red",
          "Teal code",
        ]}
        speed={36}
      />
      <HomeBelow />
    </>
  );
}
