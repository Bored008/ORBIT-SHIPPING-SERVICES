"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SPEC_ITEMS = [
  {
    title: "Cargo dimensions & weight",
    desc: "Provide packed length × width × height for every item in cm or mm, plus gross weight per piece and total shipment weight in kg. Include packaging, overhangs and any uneven weight distribution.",
  },
  {
    title: "Pallet & load information",
    desc: "Share pallet count and footprint, cartons or pieces per pallet, loaded height and weight. Confirm whether goods are stackable, fragile or non-palletised, and how the load must be secured.",
  },
  {
    title: "Temperature requirements",
    desc: "Where relevant, specify the product, required set point and acceptable temperature range in °C. Note pre-cooling, monitoring or recording needs and any loading-time restrictions.",
  },
  {
    title: "Pickup & delivery requirements",
    desc: "Provide full addresses, site contacts, ready date and receiving windows. Flag access or height limits, loading docks, forklift or crane availability, and any tail-lift or appointment needs.",
  },
  {
    title: "Route & special handling",
    desc: "State origin, destination and any border crossings. Share cargo description and available shipping documents; flag hazardous goods, lifting points or permits that may need review.",
  },
];

export function Specifications() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Header animation
    gsap.fromTo(
      el.querySelector(".spec-header"),
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

    // Left card animation
    if (leftCardRef.current) {
      gsap.fromTo(
        leftCardRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Right list animation
    if (rightListRef.current) {
      gsap.fromTo(
        rightListRef.current.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightListRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full max-w-[82.5rem] mx-auto flex flex-col items-start gap-[2rem] md:gap-[2.5rem] px-4 sm:px-6 md:px-10 lg:px-[3.75rem]"
    >
      {/* Header */}
      <div className="spec-header flex flex-col gap-[0.75rem] max-w-[50rem]">
        <h2 
          className="font-sans font-medium md:font-bold text-black text-[1.875rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] tracking-[-0.75px] leading-tight md:leading-[3.5rem]"
        >
          Truck & Shipment <span className="text-cornflowerblue">Specifications</span>
        </h2>
        <p 
          className="font-sans font-normal text-dimgray text-[0.938rem] sm:text-[1rem] leading-[1.563rem]"
        >
          Help us match the transport to your shipment. Include the details below with your enquiry — final vehicle suitability, load limits and route requirements are confirmed during planning.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-[1.5rem] lg:gap-[2rem]">
        {/* Left Card: Vehicle types to discuss */}
        <div 
          ref={leftCardRef}
          className="w-full lg:w-[26.75rem] rounded-[24px] border border-cornflowerblue/20 p-[1.75rem] sm:p-[2rem] flex flex-col gap-[1.25rem] sm:gap-[1.5rem] shrink-0 shadow-sm"
          style={{
            background: "linear-gradient(180deg, #f8fcff 0%, #d3e7f4 100%)",
          }}
        >
          <div className="w-[3rem] h-[3rem] relative">
            <Image 
              src="/images/icon_road.svg" 
              alt="Vehicle Types" 
              width={48} 
              height={48} 
              className="w-[3rem] h-[3rem] object-contain brightness-0"
            />
          </div>

          <h3 className="font-sans text-[1.5rem] sm:text-[1.875rem] font-medium text-gray-900 leading-tight">
            Vehicle types to discuss
          </h3>

          <div className="flex flex-col gap-[0.875rem]">
            <div className="flex flex-col gap-[0.25rem]">
              <h4 className="font-sans font-medium text-[1rem] sm:text-[1.125rem] text-gray-900">
                Box truck / enclosed trailer
              </h4>
              <p className="font-sans text-[0.875rem] sm:text-[0.938rem] leading-[1.45] text-dimgray">
                For packaged goods needing an enclosed load space.
              </p>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <h4 className="font-sans font-medium text-[1rem] sm:text-[1.125rem] text-gray-900">
                Curtain-side / flatbed
              </h4>
              <p className="font-sans text-[0.875rem] sm:text-[0.938rem] leading-[1.45] text-dimgray">
                For side-loaded, top-loaded or irregular cargo; discuss weather protection and securing.
              </p>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <h4 className="font-sans font-medium text-[1rem] sm:text-[1.125rem] text-gray-900">
                Refrigerated vehicle
              </h4>
              <p className="font-sans text-[0.875rem] sm:text-[0.938rem] leading-[1.45] text-dimgray">
                For cargo with an agreed temperature range and handling plan.
              </p>
            </div>

            <div className="flex flex-col gap-[0.25rem]">
              <h4 className="font-sans font-medium text-[1rem] sm:text-[1.125rem] text-gray-900">
                Low-bed / specialist trailer
              </h4>
              <p className="font-sans text-[0.875rem] sm:text-[0.938rem] leading-[1.45] text-dimgray">
                For oversized or heavy project cargo, subject to route and equipment review.
              </p>
            </div>
          </div>

          <p className="mt-auto pt-2 text-[0.8125rem] sm:text-[0.875rem] leading-[135%] text-gray-600 border-t border-cornflowerblue/20">
            Illustrative vehicle categories, not a fleet specification. Equipment and availability are confirmed for each enquiry.
          </p>
        </div>

        {/* Right List: Specification items */}
        <div 
          ref={rightListRef}
          className="flex-1 flex flex-col justify-between"
        >
          {SPEC_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              className="py-[1.25rem] sm:py-[1.5rem] border-b border-cornflowerblue/20 last:border-b-0 flex flex-col gap-[0.5rem] group hover:pl-2 transition-all duration-200"
            >
              <h4 className="font-sans font-medium text-gray-900 text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] group-hover:text-cornflowerblue transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-[0.875rem] sm:text-[1rem] leading-[1.563rem] text-dimgray">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

