"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Navbar } from "@/components/sections/Navbar";

export function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    }
  }, []);

  return (
    <section className="w-full flex flex-col items-center bg-white overflow-hidden">
      {/* Top Image Container (Contains Navbar and H1) */}
      <div className="relative w-full flex flex-col items-center pt-[1rem] sm:pt-[1.5rem] px-[1rem] sm:px-[2rem] md:px-[2.5rem] min-h-[16rem] sm:min-h-[19rem] md:min-h-[22rem] lg:min-h-[25rem] justify-between">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image 
            src="/images/footer_bg-701a59.png" 
            alt="Road Freight Background"
            fill
            priority
            className="object-cover object-[center_38%]"
          />
          {/* Subtle gradient to ensure navbar & title pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        </div>

        {/* Content over Image */}
        <div className="relative z-10 w-full max-w-[82.5rem] flex flex-col items-center justify-between flex-1">
          {/* Navbar Wrapper */}
          <div className="w-full">
            <Navbar />
          </div>

          {/* Hero Title */}
          <div 
            ref={textRef}
            className="flex flex-col items-center w-full max-w-[82.5rem] mt-8 sm:mt-12 md:mt-16 mb-[-0.45rem] sm:mb-[-1.25rem] md:mb-[-1.5rem] px-2"
          >
            <h1 
              className="w-full text-center font-sans font-bold text-white uppercase tracking-[-1px] md:tracking-[-2px] leading-[0.95] text-[2.5rem] xs:text-[3.25rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[7.5rem] xl:text-[9.25rem] select-none"
            >
              Road Freight
            </h1>
          </div>
        </div>
      </div>

      {/* Subtitle on White Background */}
      <div className="relative z-10 w-full max-w-[82.5rem] flex flex-col items-center pt-[2rem] sm:pt-[2.75rem] pb-[1.5rem] sm:pb-[2.5rem] md:pb-[3.5rem] px-4 sm:px-6">
        <p className="w-full max-w-[42rem] text-center font-sans font-medium text-[0.875rem] sm:text-[1rem] leading-[1.375rem] sm:leading-[1.5rem] text-dimgray">
          Full truckload and part-load road transport, planned around your cargo from pickup to delivery.
        </p>
      </div>
    </section>
  );
}

