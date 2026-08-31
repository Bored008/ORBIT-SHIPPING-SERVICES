"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "Full Container Load (FCL)",
    desc: "Dedicated containers for larger shipments, giving you full control over loading and space.",
    icon: "/images/icon_barrel.svg",
    theme: "blue",
    gradient: "",
  },
  {
    title: "Less than Container Load (LCL)",
    desc: "Cost-effective shared container space for smaller shipments.",
    icon: "/images/icon_boxes.svg",
    theme: "light",
    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(255, 255, 255, 0.15) 12%, rgba(180, 215, 240, 0.16) 36%, rgba(6, 122, 204, 0.17) 100%)",
  },
  {
    title: "Port-to-Port & Door-to-Door",
    desc: "Flexible delivery options based on how much of the journey you want us to manage.",
    icon: "/images/icon_route.svg",
    theme: "light",
    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 3%, rgba(255, 255, 255, 0.15) 21%, rgba(153, 200, 234, 0.16) 38%, rgba(6, 122, 204, 0.17) 100%)",
  },
  {
    title: "Real-Time Tracking",
    desc: "Visibility into your shipment's location and status at every stage of transit.",
    icon: "/images/icon_radar.svg",
    theme: "light",
    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(255, 255, 255, 0.15) 18%, rgba(143, 195, 232, 0.16) 50%, rgba(6, 122, 204, 0.17) 100%)",
  },
  {
    title: "Customs Documentation Support",
    desc: "Paperwork and compliance handled alongside your shipment, not as an afterthought.",
    icon: "/images/icon_filecheck.svg",
    theme: "light",
    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(255, 255, 255, 0.15) 18%, rgba(143, 195, 232, 0.16) 50%, rgba(6, 122, 204, 0.17) 100%)",
  },
  {
    title: "Specialized & Project Cargo",
    desc: "Oversized, high-value, or complex cargo handled with tailored logistics planning.",
    icon: "/images/icon_star.svg",
    theme: "light",
    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(255, 255, 255, 0.15) 18%, rgba(143, 195, 232, 0.16) 50%, rgba(6, 122, 204, 0.17) 100%)",
  },
];

export function WhatWeOffer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const cardsEl = cardsRef.current;
    if (!el || !cardsEl) return;

    // Header animation
    gsap.fromTo(
      el.querySelector(".section-header"),
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cards animation
    gsap.fromTo(
      cardsEl.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full max-w-[1440px] mx-auto flex flex-col items-center"
      style={{
        padding: "0px 60px",
        gap: "32px",
      }}
    >
      {/* Header Row */}
      <div className="section-header w-full flex flex-row justify-between items-end">
        <div className="flex flex-col gap-[8px] w-[787px]">
          <h2 
            className="font-sans font-bold text-[#000000]"
            style={{
              fontSize: "56px",
              lineHeight: "56px",
              letterSpacing: "-0.0134em",
            }}
          >
            What We <span className="text-[#067ACC]">Offer ?</span>
          </h2>
          <p 
            className="font-sans font-normal"
            style={{
              fontSize: "16px",
              lineHeight: "1.16em",
              color: "rgba(0, 0, 0, 0.75)",
            }}
          >
            From single pallets to full container loads, our ocean freight service is built to flex around how you ship — not the other way around.
          </p>
        </div>

        {/* Book Now Button */}
        <Link
          href="/quote"
          className="flex justify-center items-center bg-[#067ACC] hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200 text-white group"
          style={{
            padding: "7px 14px",
            gap: "4px",
            borderRadius: "23px",
            fontSize: "14px",
            lineHeight: "1.16em",
          }}
        >
          Book Now
          <Image 
            src="/images/top_right_arrow.svg" 
            alt="Book Now" 
            width={17} 
            height={17} 
            className="w-[17px] h-[17px] brightness-0 invert group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Bento Grid */}
      <div 
        ref={cardsRef}
        className="w-full grid grid-cols-3 gap-[20px]"
      >
        {CARDS.map((card, index) => {
          const bgGradient = card.gradient || "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(255, 255, 255, 0.15) 12%, rgba(180, 215, 240, 0.16) 36%, rgba(6, 122, 204, 0.17) 100%)";
          
          return (
            <div 
              key={index}
              className="relative overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
              style={{
                width: "100%",
                height: "309.5px",
                borderRadius: "24px",
                border: "0.5px solid rgba(0, 0, 0, 0.23)",
              }}
            >
              {/* Inactive Gradient Background */}
              <div 
                className="absolute inset-0 z-0"
                style={{ background: bgGradient }}
              />

              {/* Active Blue Background (Rises from bottom) */}
              <div 
                className="absolute bottom-0 left-0 right-0 z-0 bg-[#067ACC] transition-all duration-500 ease-in-out h-0 group-hover:h-full"
              />

              {/* Content Wrapper */}
              <div className="relative z-10 flex flex-col justify-between h-full w-full" style={{ padding: "32px 54px" }}>
                {/* Icon */}
                <div>
                  <Image 
                    src={card.icon}
                    alt={card.title}
                    width={63}
                    height={63}
                    className="w-[63px] h-[63px] transition-all duration-500 brightness-0 group-hover:brightness-100"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-[13px]">
                  <h3 
                    className="font-sans font-medium transition-colors duration-500 text-[#000000] group-hover:text-white"
                    style={{
                      fontSize: card.title.length > 28 ? "29px" : "32px",
                      lineHeight: "1.16em",
                      letterSpacing: card.title.length > 28 ? "-0.0259em" : "-0.0234em",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p 
                    className="font-sans font-normal transition-colors duration-500 text-[rgba(0,0,0,0.75)] group-hover:text-[rgba(255,255,255,0.75)]"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.16em",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
