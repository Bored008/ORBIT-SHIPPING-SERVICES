"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full max-w-[82.5rem] mx-auto flex flex-col lg:flex-row lg:justify-between items-start gap-[1.5rem] lg:gap-[4rem] px-4 sm:px-6 md:px-10 lg:px-[3.75rem] py-6 sm:py-8 md:py-12 lg:py-16"
    >
      {/* Left Column / Heading */}
      <h2 
        className="font-sans font-medium text-gray-100 tracking-[-1px] md:tracking-[-1.4px] text-[1.875rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] leading-[1.2] md:leading-[3rem] lg:leading-[3.5rem] lg:max-w-[34rem] shrink-0"
      >
        Road Freight, Built Around <span className="text-cornflowerblue">Your Cargo</span>
      </h2>

      {/* Right Column / Paragraph */}
      <p 
        className="font-sans font-normal text-dimgray text-[0.938rem] sm:text-[1rem] leading-[1.563rem] lg:max-w-[40rem]"
      >
        Whether you&apos;re moving a single pallet or a full truckload, Orbit Shipping Services helps plan your road shipment from origin to destination. From vehicle selection and loading requirements to cross-border documentation and delivery arrangements, we bring the details together around your cargo, route and schedule.
      </p>
    </section>
  );
}

