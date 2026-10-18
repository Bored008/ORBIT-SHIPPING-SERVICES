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
      className="w-full max-w-[82.5rem] mx-auto flex flex-col items-center gap-[2rem] md:gap-[2.5rem] px-4 sm:px-6 md:px-10 lg:px-[3.75rem]"
    >
      {/* Header Row */}
      <div className="section-header w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 md:gap-6">
        <div className="flex flex-col gap-[0.5rem] max-w-[37.5rem]">
          <h2 
            className="font-sans font-medium md:font-bold text-black text-[1.875rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] tracking-[-0.75px] leading-tight md:leading-[3rem]"
          >
            What We <span className="text-cornflowerblue">Offer ?</span>
          </h2>
          <p 
            className="font-sans font-normal text-dimgray text-[0.938rem] sm:text-[1rem] leading-[1.375rem]"
          >
            From single pallets to full container loads, our ocean freight service is built to flex around how you ship — not the other way around.
          </p>
        </div>

        {/* Book Now Button */}
        <Link
          href="/quote"
          className="rounded-num-23 bg-cornflowerblue hover:bg-blue-600 hover:scale-105 active:scale-95 transition-all duration-200 text-white flex items-center justify-center py-[0.437rem] px-[0.875rem] gap-[0.25rem] text-[0.875rem] w-fit shrink-0 group self-start sm:self-auto"
        >
          <span>Book Now</span>
          <Image 
            src="/images/top_right_arrow.svg" 
            alt="Book Now" 
            width={17} 
            height={17} 
            className="w-[1.063rem] h-[1.063rem] brightness-0 invert group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Bento Grid */}
      <div 
        ref={cardsRef}
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 text-gray-100"
      >
        {CARDS.map((card, index) => {
          const isFeatured = index === 0;

          return (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-num-16 border box-border flex flex-col justify-between p-[1.5rem] sm:p-[1.75rem] min-h-[14rem] sm:min-h-[15.5rem] md:min-h-[16.5rem] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer ${
                isFeatured
                  ? "bg-cornflowerblue border-transparent text-white shadow-md"
                  : "bg-white/80 border-gray-600/30 hover:border-transparent text-gray-100 hover:bg-cornflowerblue hover:text-white"
              }`}
            >
              {/* Background gradient for unhovered standard cards */}
              {!isFeatured && (
                <div 
                  className="absolute inset-0 pointer-events-none -z-10 opacity-70 group-hover:opacity-0 transition-opacity duration-300"
                  style={{
                    background: card.gradient || "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 1%, rgba(180, 215, 240, 0.16) 50%, rgba(6, 122, 204, 0.12) 100%)",
                  }}
                />
              )}

              {/* Icon Container */}
              <div className="w-[3rem] h-[3rem] relative shrink-0">
                <Image 
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className={`w-[3rem] h-[3rem] object-contain transition-all duration-300 ${
                    isFeatured
                      ? "brightness-0 invert"
                      : "brightness-0 group-hover:brightness-0 group-hover:invert"
                  }`}
                />
              </div>

              {/* Text Information */}
              <div className="flex flex-col gap-[0.5rem] pt-6">
                <h3 
                  className={`font-sans font-medium text-[1.25rem] sm:text-[1.375rem] leading-[1.2] transition-colors duration-300 ${
                    isFeatured ? "text-white" : "text-gray-100 group-hover:text-white"
                  }`}
                >
                  {card.title}
                </h3>
                <p 
                  className={`font-sans text-[0.875rem] leading-[1.35rem] transition-colors duration-300 ${
                    isFeatured ? "text-white/80" : "text-dimgray group-hover:text-white/85"
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
