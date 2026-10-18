"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Counter({
  value,
  decimals = 0,
  suffix = "",
  className = "",
  style = {},
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const node = nodeRef.current;
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

        const startPoint = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 75%";
        const obj = { val: 0 };

        gsap.to(obj, {
          val: value,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: startPoint,
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            if (node) {
              node.textContent = obj.val.toFixed(decimals) + suffix;
            }
          },
        });
      }
    );

    return () => mm.revert();
  }, [value, decimals, suffix]);

  return (
    <div ref={nodeRef} className={className} style={style}>
      0{suffix}
    </div>
  );
}

function AnimatedChart() {
  const lineRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGRectElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lineRef.current || !fillRef.current || !containerRef.current) return;

    const line = lineRef.current;
    const fill = fillRef.current;
    const container = containerRef.current;
    const length = line.getTotalLength();

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

        const startPoint = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 75%";

        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.set(fill, { width: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: startPoint,
            toggleActions: "play none none reverse",
          },
        });

        tl.to(
          line,
          {
            strokeDashoffset: 0,
            duration: 2.5,
            ease: "power2.inOut",
          },
          0
        ).to(
          fill,
          {
            width: 400,
            duration: 2.5,
            ease: "power2.inOut",
          },
          0
        );
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="track-left-item flex flex-col w-full max-w-[28rem] h-[12.5rem] overflow-hidden"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="paint0_linear_track"
            x1="0"
            y1="30"
            x2="0"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#067ACC" stopOpacity="0.2" />
            <stop offset="1" stopColor="#067ACC" stopOpacity="0" />
          </linearGradient>
          <clipPath id="revealMask">
            <rect ref={fillRef} x="0" y="0" width="400" height="200" fill="white" />
          </clipPath>
        </defs>

        {/* Fill with reveal mask */}
        <g clipPath="url(#revealMask)">
          <path
            d="M0 130C13.3333 123.333 26.6667 123.333 40 130C53.3333 136.667 61.8601 121.847 76 117C90.3697 112.075 97.8645 106.289 113 105C127.528 103.762 135.931 109.42 150 110C163.087 110.54 166.913 94.4603 180 95C194.069 95.5801 195.991 113.579 210 115C222.286 116.246 227.651 105 240 105C252.349 105 257.651 115 270 115C282.349 115 287.684 105.906 300 105C311.845 104.128 330 110 330 110C330 110 349.586 102.946 360 95C370.777 86.7768 383 69 383 69L400 0V200H0V130Z"
            fill="url(#paint0_linear_track)"
          />
        </g>

        {/* Stroke line with dashoffset animation */}
        <path
          ref={lineRef}
          d="M0 130C13.3333 123.333 26.6667 123.333 40 130C53.3333 136.667 64.5752 120.556 80.5 115C92.1602 110.932 98.2454 106.528 110.5 105C125.929 103.077 135.931 109.42 150 110C163.087 110.54 166.913 94.4603 180 95C194.069 95.5801 195.991 113.579 210 115C222.286 116.246 227.651 105 240 105C252.349 105 257.651 115 270 115C282.349 115 287.684 105.906 300 105C311.845 104.128 318.228 111.579 330 110C342.982 108.258 349.856 103.287 360 95C369.683 87.0901 373.353 80.5894 380 70C396 44.5118 399.5 -4 399.5 -4"
          stroke="#067ACC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function TrackRecord() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

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

        const startPoint = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 75%";

        // Left side animations
        gsap.from(".track-left-item", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: startPoint,
            toggleActions: "play none none none",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          clearProps: "all",
        });

        // Right side hero stat animation
        gsap.from(".track-hero-stat", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: startPoint,
            toggleActions: "play none none none",
            once: true,
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "all",
        });

        // Right side grid stats animation
        gsap.from(".track-grid-stat", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: startPoint,
            toggleActions: "play none none none",
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.4,
          ease: "power3.out",
          clearProps: "all",
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section className="w-full flex justify-center bg-white py-[3rem] md:py-[4rem] lg:py-[5rem] px-[1.25rem] md:px-[2.5rem] lg:px-[4rem]">
      <div
        ref={containerRef}
        className="w-full max-w-[76rem] flex flex-col lg:flex-row justify-between items-start gap-[3rem] md:gap-[3.5rem] lg:gap-[9rem]"
      >
        {/* Left Column (Text & Chart) */}
        <div className="flex flex-col w-full lg:w-[28rem] gap-[2rem] md:gap-[2.5rem] lg:gap-[4rem] shrink-0">
          {/* Text Content */}
          <div className="flex flex-col w-full gap-[1.25rem] md:gap-[1.5rem]">
            <h2 className="track-left-item font-sans font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] leading-[1.15] tracking-[-0.025em] text-gray-100">
              A Track Record Built on{" "}
              <span className="text-cornflowerblue-100">Reliability</span>
            </h2>

            <p className="track-left-item font-sans font-normal text-[0.938rem] md:text-[1rem] leading-[1.375rem] text-darkslategray w-full max-w-[28rem]">
              Over a decade of moving cargo across air, ocean, and road — trusted
              by 30,000+ businesses to deliver on time, every time.
            </p>

            <div className="track-left-item flex items-start">
              <Link
                href="/quote"
                className="rounded-[1.4375rem] bg-gray-100 hover:bg-gray-800 text-white flex items-center justify-center py-[0.437rem] px-[0.875rem] gap-[0.25rem] text-[0.875rem] hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <span>Request a Quote</span>
                <Image
                  src="/images/arrow_right_white.svg"
                  alt="Arrow Right"
                  width={17}
                  height={17}
                  className="w-[1.063rem] h-[1.063rem] group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>

          {/* Chart Area */}
          <AnimatedChart />
        </div>

        {/* Right Column (Statistics) */}
        <div className="flex flex-col w-full lg:flex-1">
          {/* Hero Stat */}
          <div className="track-hero-stat flex flex-col w-full pb-[1.5rem] lg:pb-[4rem] gap-[0.5rem] md:gap-[1rem] border-b border-gainsboro-100">
            <Counter
              value={2.1}
              decimals={1}
              suffix=" Bn+"
              className="font-sans font-semibold text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[7.5rem] leading-[1] text-cornflowerblue-100 tracking-[-0.05em]"
            />
            <div className="font-sans font-medium text-[0.938rem] md:text-[1rem] text-darkslategray">
              Parcels shipped since inception
            </div>
          </div>

          {/* Grid Stats */}
          <div className="grid grid-cols-2 gap-[1.5rem] pt-[1.5rem] md:pt-[2rem] lg:pt-[3rem]">
            {/* Stat Item 1 */}
            <div className="track-grid-stat flex flex-col gap-[0.375rem] md:gap-[0.75rem]">
              <Counter
                value={99.5}
                decimals={1}
                suffix="%"
                className="font-sans font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[1] text-cornflowerblue-100"
              />
              <div className="font-sans text-[0.813rem] md:text-[0.875rem] text-darkslategray">
                Population covered
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="track-grid-stat flex flex-col gap-[0.375rem] md:gap-[0.75rem]">
              <Counter
                value={30}
                suffix="K+"
                className="font-sans font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[1] text-cornflowerblue-100"
              />
              <div className="font-sans text-[0.813rem] md:text-[0.875rem] text-darkslategray">
                Businesses served
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="track-grid-stat flex flex-col gap-[0.375rem] md:gap-[0.75rem]">
              <Counter
                value={18}
                suffix=" Mn+"
                className="font-sans font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[1] text-cornflowerblue-100"
              />
              <div className="font-sans text-[0.813rem] md:text-[0.875rem] text-darkslategray">
                Sq. ft. infrastructure
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="track-grid-stat flex flex-col gap-[0.375rem] md:gap-[0.75rem]">
              <Counter
                value={13}
                suffix="+"
                className="font-sans font-semibold text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] leading-[1] text-cornflowerblue-100"
              />
              <div className="font-sans text-[0.813rem] md:text-[0.875rem] text-darkslategray">
                Years of experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
