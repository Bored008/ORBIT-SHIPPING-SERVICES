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

  useEffect(() => {
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
  }, []);

  return (
    <section className="relative w-full h-[762px] overflow-hidden flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          src="/heroSection/OrbitShippingServices.mp4"
          autoPlay
          muted
          loop
          playsInline
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
      <div
        className="relative z-10 w-full flex flex-col items-center h-full"
        style={{
          padding: "32px 60px 0px",
          gap: "132px",
        }}
      >
        <Navbar />

        <div
          ref={heroTextRef}
          className="flex flex-col items-center text-center"
          style={{ gap: "18px", width: "862px" }}
        >
          {/* Main Headline */}
          <h1
            className="w-full font-heading font-bold"
            style={{
              fontSize: "64px",
              letterSpacing: "-0.0313em",
              lineHeight: "1.16em",
              color: "#FFFFFF",
            }}
          >
            Your Complete Logistics Partner —<br />
            <span style={{ color: "#FDF6E9" }}>
              From{" "}
              <span className="font-serif italic font-normal">
                Origin to Doorstep
              </span>
              .
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="font-sans"
            style={{
              width: "664px",
              fontSize: "16px",
              lineHeight: "1.16em",
              color: "rgba(255, 255, 255, 0.75)",
            }}
          >
            From air, ocean, and road freight to warehousing, customs clearance,
            and project cargo — Orbit Shipping Services manages every link in
            your supply chain, so you don&apos;t have to.
          </p>

          {/* Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-row"
            style={{ gap: "16px", marginTop: "18px" }}
          >
            <Link
              href="/quote"
              className="flex justify-center items-center font-sans bg-[#067ACC] hover:bg-blue-600 text-[#FFFFFF] hover:scale-105 active:scale-95 transition-all duration-200"
              style={{
                borderRadius: "23px",
                padding: "7px 14px",
                gap: "4px",
                fontSize: "14px",
              }}
            >
              Request a Quote
            </Link>

            <Link
              href="/services"
              className="flex justify-center items-center font-sans bg-[rgba(255,255,255,0.03)] hover:bg-white/20 text-[#FFFFFF] hover:scale-105 active:scale-95 transition-all duration-200 group"
              style={{
                border: "0.5px solid #FDF6E9",
                backdropFilter: "blur(10px)",
                borderRadius: "23px",
                padding: "7px 14px",
                gap: "4px",
                fontSize: "14px",
              }}
            >
              Explore Services
              <Image
                src="/images/top_right_arrow.svg"
                alt="Arrow Right"
                width={18}
                height={18}
                className="w-[18px] h-[18px] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

