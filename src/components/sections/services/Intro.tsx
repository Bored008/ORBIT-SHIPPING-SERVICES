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
      className="w-full max-w-[1440px] mx-auto flex flex-row justify-between items-start"
      style={{
        padding: "0px 60px",
      }}
    >
      {/* Left Column: Heading */}
      <h2 
        className="font-sans font-medium text-[#000000]"
        style={{
          width: "537px",
          fontSize: "56px",
          lineHeight: "56px",
          letterSpacing: "-0.025em",
        }}
      >
        Ocean Freight, Built Around <span className="text-[#067ACC]">Your Cargo</span>
      </h2>

      {/* Right Column: Paragraph */}
      <p 
        className="font-sans font-normal"
        style={{
          width: "650px",
          fontSize: "16px",
          lineHeight: "1.16em",
          color: "rgba(0, 0, 0, 0.75)",
        }}
      >
        Whether you&apos;re shipping a single pallet or a full container load, Orbit Shipping Services manages your ocean freight from origin to destination — port-to-port, or fully door-to-door. With established partnerships across major shipping lines and a network covering every major global route, we handle the complexity so your cargo arrives on schedule, every time.
      </p>
    </section>
  );
}
