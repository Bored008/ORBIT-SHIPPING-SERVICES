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
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number>(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1025px)",
        isTablet: "(min-width: 768px) and (max-width: 1024px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isTablet, isMobile } = context.conditions as {
          isDesktop: boolean;
          isTablet: boolean;
          isMobile: boolean;
        };

        const triggerStart = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 75%";

        // Header Animation
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
              once: true,
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "all",
          });
        }

        // Cards Container Animation
        if (cardsRef.current) {
          gsap.from(cardsRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
              once: true,
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            clearProps: "all",
          });
        }
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex justify-center bg-white overflow-hidden py-[2rem] md:py-[3rem] lg:py-[4rem] px-[1.25rem] md:px-[2.5rem] lg:px-[3.75rem]"
    >
      <div className="w-full max-w-[82.5rem] flex flex-col gap-[2.5rem] lg:gap-[4rem]">
        {/* Header Container */}
        <div
          ref={headerRef}
          className="w-full flex flex-col items-center text-center lg:flex-row lg:justify-between lg:items-end lg:text-left gap-[1rem] lg:gap-[1.5rem]"
        >
          <h2 className="w-full max-w-[44rem] lg:max-w-[47.5rem] font-sans font-medium text-black text-[2rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.5rem] leading-[1.15] tracking-[-0.025em] text-center lg:text-left">
            Everything Your{" "}
            <span style={{ color: "#067ACC" }}>Supply Chain</span> Needs, Under
            One Roof
          </h2>
          <p className="w-full max-w-[38rem] lg:max-w-[33.5rem] font-sans font-normal text-[0.875rem] md:text-[1rem] leading-[1.35] text-black/60 text-center lg:text-right shrink-0">
            From air, ocean, and road freight to warehousing, customs clearance,
            and project cargo — explore the full range of services Orbit Shipping
            Services uses to keep your business moving.
          </p>
        </div>

        {/* Main Solutions Section with Ship Background */}
        <div className="w-full min-h-[30rem] md:min-h-[27.5rem] lg:h-[24.8125rem] relative overflow-hidden rounded-[0.75rem] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/services_bg.png"
              alt="Services Background"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Cards Container */}
          <div
            ref={cardsRef}
            className="relative z-10 w-full h-full flex flex-col md:flex-row items-stretch"
          >
            {servicesData.map((service) => {
              const isActive = activeCard === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveCard(service.id)}
                  onMouseEnter={() => setActiveCard(service.id)}
                  className={`flex-1 h-full flex flex-col justify-center items-center p-[1rem] md:p-[1.25rem] lg:p-[2rem] gap-[0.75rem] lg:gap-[1.5rem] cursor-pointer transition-all duration-500 ease-in-out border-b md:border-b-0 md:border-r border-white/20 last:border-none ${
                    isActive
                      ? "bg-[#067ACC] md:flex-[1.4]"
                      : "bg-black/25 hover:bg-black/45"
                  }`}
                >
                  {/* Icon & Title */}
                  <div className="flex flex-col items-center gap-[0.5rem] md:gap-[0.75rem] transition-transform duration-500 ease-in-out">
                    <div className="flex justify-center items-center drop-shadow-md">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={service.iconWidth}
                        height={service.iconHeight}
                        className="transition-transform duration-500 w-[2rem] md:w-[2.25rem] h-[2.125rem] md:h-[2.375rem] object-contain brightness-0 invert"
                      />
                    </div>
                    <div className="flex flex-col items-center pb-[0.0625rem]">
                      <h3 className="font-sans font-bold text-center text-white whitespace-pre-line text-[1.125rem] md:text-[1.375rem] lg:text-[1.875rem] leading-[1.25] tracking-[-0.025em] drop-shadow-sm">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expandable Text & Action Link */}
                  <div
                    className={`flex flex-col items-center overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-[15rem] opacity-100 mt-0"
                        : "max-h-0 opacity-0 mt-[-1rem] pointer-events-none"
                    }`}
                  >
                    <p className="font-sans font-normal text-center mb-auto text-[0.8125rem] md:text-[0.875rem] lg:text-[1rem] leading-[1.3] tracking-[-0.03em] text-white/90 max-w-[18rem] lg:max-w-[20rem]">
                      {service.text}
                    </p>
                    <Link
                      href={`/services/${service.title
                        .toLowerCase()
                        .replace(/ & |\n| /g, "-")}`}
                      className="flex flex-row justify-center items-center gap-[0.375rem] mt-[0.75rem] lg:mt-[1.5rem] group"
                    >
                      <span className="font-sans font-normal text-white group-hover:underline text-[0.875rem] lg:text-[1rem] tracking-[-0.03em]">
                        Learn more
                      </span>
                      <Image
                        src="/images/arrow_top_right_white.svg"
                        alt="Learn more"
                        width={18}
                        height={18}
                        className="w-[1.125rem] h-[1.125rem] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
                      />
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
