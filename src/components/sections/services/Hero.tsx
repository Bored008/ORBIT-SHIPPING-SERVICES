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
      
      {/* Image Container (Hugs Navbar and H1) */}
      <div className="relative w-full flex flex-col items-center pt-[32px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/service_hero_bg-5bccd8.png" 
            alt="Ocean Freight Background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Content over Image */}
        <div className="relative z-10 w-full max-w-[1320px] flex flex-col items-center">
          {/* Navbar Wrapper */}
          <div className="w-full">
            <Navbar />
          </div>

          {/* Hero Text */}
          <div 
            ref={textRef}
            className="flex flex-col items-center mt-[150px] w-full max-w-[1164px]"
          >
            <h1 
              className="w-full text-center font-sans font-bold text-white uppercase"
              style={{
                fontSize: "148px",
                lineHeight: "1em",
                letterSpacing: "-0.0135em",
              }}
            >
              Ocean Freight
            </h1>
          </div>
        </div>
      </div>

      {/* Subtitle on White Background */}
      <div className="relative z-10 w-full max-w-[1164px] flex flex-col items-center pt-[12px] pb-[60px]">
        <p 
          className="w-full text-center font-sans font-medium"
          style={{
            fontSize: "16px",
            lineHeight: "1.16em",
            color: "rgba(0, 0, 0, 0.55)",
          }}
        >
          Full container and part-load ocean freight, moving your cargo reliably across every major trade route.
        </p>
      </div>
    </section>
  );
}

