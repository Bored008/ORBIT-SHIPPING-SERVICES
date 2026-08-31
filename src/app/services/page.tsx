import { Hero } from "@/components/sections/services/Hero";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[150px] pb-[150px] bg-white w-full overflow-hidden">
      <Hero />
      {/* We can add other sections like ServicesList, ContactCTA, etc. here as needed */}
    </main>
  );
}

