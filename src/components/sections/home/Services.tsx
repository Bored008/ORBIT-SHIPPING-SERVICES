"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 0,
    title: "Ocean Freight",
    icon: "/images/icon_ocean.svg",
    iconWidth: 35,
    iconHeight: 38,
    text: "From full container loads to LCL shipments, we manage your ocean freight door-to-port or door-to-door — with real-time tracking and a network built for on-time delivery",
  },
  {
    id: 1,
    title: "Air Freight",
    icon: "/images/icon_air.svg",
    iconWidth: 38,
    iconHeight: 38,
    text: "From express parcels to oversized cargo, our air freight solutions ensure rapid global delivery — minimizing transit times with unmatched reliability.",
  },
  {
    id: 2,
    title: "Road Freight &\nLogistics",
    icon: "/images/icon_road.svg",
    iconWidth: 43,
    iconHeight: 30,
    text: "Leverage our extensive ground network for seamless inland distribution, offering FTL and LTL services tailored to your supply chain timeline.",
  },
  {
    id: 3,
    title: "Warehousing &\nCustoms Clearance",
    icon: "/images/icon_warehouse.svg",
    iconWidth: 38,
    iconHeight: 38,
    text: "Streamline your inventory with our secure warehousing, while our experts navigate complex customs regulations to prevent costly delays.",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Cards Stagger Animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex justify-center bg-white overflow-hidden">
      <div className="w-[1320px] flex flex-col gap-[64px]">
        
        {/* Header Container */}
        <div ref={headerRef} className="w-full flex flex-row justify-between items-end">
          <h2 
            className="w-[760px] font-sans font-medium text-black"
            style={{
              fontSize: "56px",
              lineHeight: "56px",
              letterSpacing: "-0.025em"
            }}
          >
            Everything Your <span style={{ color: "#067ACC" }}>Supply Chain</span> Needs, Under One Roof
          </h2>
          <p 
            className="w-[536px] font-sans font-normal text-right"
            style={{
              fontSize: "16px",
              lineHeight: "1.16em",
              color: "rgba(0, 0, 0, 0.55)"
            }}
          >
            From air, ocean, and road freight to warehousing, customs clearance, and project cargo — explore the full range of services Orbit Shipping Services uses to keep your business moving.
          </p>
        </div>

        {/* Main Solutions Section */}
        <div 
          className="w-full h-[397px] relative overflow-hidden"
          style={{
            boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)"
          }}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/services_bg.png" 
              alt="Services Background" 
              fill 
              className="object-cover" 
            />
            {/* Dark overlay from Figma fills */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.2)]" />
          </div>

          {/* Cards Container */}
          <div ref={cardsRef} className="relative z-10 w-full h-full flex flex-row gap-[4px] items-stretch">
            
            {servicesData.map((service) => {
              const isActive = activeCard === service.id;

              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveCard(service.id)}
                  className={`flex-1 h-full flex flex-col justify-center items-center p-[32px] gap-[24px] cursor-pointer transition-colors duration-500 ease-in-out ${
                    isActive ? "bg-[#067ACC]" : "bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.4)]"
                  }`}
                >
                  <div className="flex flex-col items-center gap-[12px] transition-transform duration-500 ease-in-out">
                    <div 
                      className="flex justify-center items-center"
                      style={{ boxShadow: "0px 4px 3px 0px rgba(0, 0, 0, 0.07), 0px 2px 2px 0px rgba(0, 0, 0, 0.06)" }}
                    >
                      <Image 
                        src={service.icon} 
                        alt={service.title} 
                        width={service.iconWidth} 
                        height={service.iconHeight} 
                        className="transition-transform duration-500" 
                        style={{ width: service.iconWidth, height: service.iconHeight }}
                      />
                    </div>
                    <div className="flex flex-col items-center pb-[0.75px]">
                      <h3 
                        className="font-sans font-bold text-center text-white whitespace-pre-line"
                        style={{ fontSize: "30px", lineHeight: "37.5px", letterSpacing: "-0.025em" }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div 
                    className={`flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-[200px] opacity-100 mt-0" : "max-h-0 opacity-0 mt-[-24px]"
                    }`}
                  >
                    <p 
                      className="font-sans font-normal text-center mb-auto"
                      style={{ fontSize: "16px", lineHeight: "1.16em", letterSpacing: "-0.0469em", color: "rgba(255, 255, 255, 0.75)" }}
                    >
                      {service.text}
                    </p>
                    <Link href={`/services/${service.title.toLowerCase().replace(/ & |\n| /g, "-")}`} className="flex flex-row justify-center items-center gap-[6px] mt-[24px] group">
                      <span 
                        className="font-sans font-normal text-white group-hover:underline"
                        style={{ fontSize: "16px", lineHeight: "1.16em", letterSpacing: "-0.0469em" }}
                      >
                        Learn more
                      </span>
                      <Image src="/images/arrow_top_right_white.svg" alt="Learn more" width={18} height={18} className="w-[18px] h-[18px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
