import { Hero } from "@/components/sections/home/Hero";
import { TrackRecord } from "@/components/sections/home/TrackRecord";
import { Services } from "@/components/sections/home/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <TrackRecord />
      <Services />
    </main>
  );
}
