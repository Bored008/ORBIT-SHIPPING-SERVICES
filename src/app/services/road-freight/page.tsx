import { Hero } from "@/components/sections/services/road-freight/Hero";
import { Intro } from "@/components/sections/services/road-freight/Intro";
import { WhatWeOffer } from "@/components/sections/services/road-freight/WhatWeOffer";
import { Specifications } from "@/components/sections/services/road-freight/Specifications";
import { QuoteForm } from "@/components/sections/services/road-freight/QuoteForm";

export const metadata = {
  title: "Road Freight & Logistics | Orbit Shipping Service",
  description:
    "Full truckload and part-load road transport, planned around your cargo from pickup to delivery.",
};

export default function RoadFreightPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[2.5rem] sm:gap-[3.5rem] md:gap-[4rem] lg:gap-[5rem] pb-[2.5rem] sm:pb-[3.5rem] md:pb-[4rem] lg:pb-[5rem] bg-white w-full overflow-hidden">
      <Hero />
      <Intro />
      <WhatWeOffer />
      <Specifications />
      <QuoteForm />
    </main>
  );
}

