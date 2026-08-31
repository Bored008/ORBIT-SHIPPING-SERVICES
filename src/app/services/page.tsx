import { Hero } from "@/components/sections/services/Hero";
import { Intro } from "@/components/sections/services/Intro";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[150px] pb-[150px] bg-white w-full overflow-hidden">
      <Hero />
      <Intro />
    </main>
  );
}

