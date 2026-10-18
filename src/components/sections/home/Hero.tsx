"use client";

import { Navbar } from "@/components/sections/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroTextRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroTextRef.current && buttonsRef.current) {
        gsap.fromTo(
          heroTextRef.current.children,
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

        gsap.fromTo(
          buttonsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.8,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[32rem] md:h-[35.5rem] lg:h-[47.625rem] overflow-hidden flex flex-col items-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          src="/heroSection/OrbitShippingServices.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/heroSection/poster.webp"
          className="object-cover w-full h-full"
        />
        {/* Gradient Mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 1) 95%, rgba(255, 255, 255, 1) 100%)",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center h-full pt-[1.5rem] md:pt-[2rem] px-[1.25rem] md:px-[2.5rem] lg:px-[3.75rem] gap-[2.5rem] md:gap-[3.5rem] lg:gap-[8.25rem]">
        <Navbar />

        <div
          ref={heroTextRef}
          className="flex flex-col items-center text-center w-full max-w-[53.875rem] gap-[1rem] md:gap-[1.125rem]"
        >
          {/* Main Headline */}
          <h1 className="w-full font-heading font-bold text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-[-0.0313em] leading-[1.16] text-white">
            Your Complete Logistics Partner
            <br />
            <span style={{ color: "#FDF6E9" }}>
              <span className="whitespace-nowrap">— From</span>{" "}
              <span className="font-serif italic font-normal">
                Origin to Doorstep
              </span>
              .
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[0.875rem] md:text-[1rem] leading-[1.3] md:leading-[1.4] text-white/75 max-w-[41.5rem]">
            From air, ocean, and road freight to warehousing, customs clearance,
            and project cargo — Orbit Shipping Services manages every link in
            your supply chain, so you don&apos;t have to.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-row items-center gap-[0.75rem] sm:gap-[1rem] mt-[0.75rem] md:mt-[1.125rem]"
          >
            <Link
              href="/quote"
              className="flex justify-center items-center font-sans bg-[#067ACC] hover:bg-blue-600 text-white hover:scale-105 active:scale-95 transition-all duration-200 rounded-[1.4375rem] py-[0.437rem] px-[0.875rem] gap-[0.25rem] text-[0.875rem]"
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="flex justify-center items-center font-sans bg-white/[0.03] hover:bg-white/20 text-white hover:scale-105 active:scale-95 transition-all duration-200 group border-[0.03125rem] border-[#FDF6E9] backdrop-blur-[10px] rounded-[1.4375rem] py-[0.437rem] px-[0.875rem] gap-[0.25rem] text-[0.875rem]"
            >
              <span>Explore Services</span>
              <Image
                src="/images/top_right_arrow.svg"
                alt="Arrow Right"
                width={18}
                height={18}
                className="w-[1.125rem] h-[1.125rem] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
