import { Hero } from "@/components/sections/services/Hero";
import { Intro } from "@/components/sections/services/Intro";
import { WhatWeOffer } from "@/components/sections/services/WhatWeOffer";
import { QuoteForm } from "@/components/sections/services/QuoteForm";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[2.5rem] sm:gap-[3.5rem] md:gap-[4rem] lg:gap-[5rem] pb-[2.5rem] sm:pb-[3.5rem] md:pb-[4rem] lg:pb-[5rem] bg-white w-full overflow-hidden">
      <Hero />
      <Intro />
      <WhatWeOffer />
      <QuoteForm />
    </main>
  );
}
