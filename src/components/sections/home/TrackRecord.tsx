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
  style = {} 
}: { 
  value: number, 
  decimals?: number, 
  suffix?: string, 
  className?: string, 
  style?: React.CSSProperties 
}) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!nodeRef.current) return;
    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: nodeRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
      onUpdate: () => {
        if (nodeRef.current) {
          nodeRef.current.textContent = obj.val.toFixed(decimals) + suffix;
        }
      },
    });
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
    if (lineRef.current && fillRef.current && containerRef.current) {
      const length = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(fillRef.current, { width: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      });
      
      tl.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 2.5,
        ease: "power2.inOut",
      }, 0)
      .to(fillRef.current, {
        width: 400,
        duration: 2.5,
        ease: "power2.inOut",
      }, 0);
    }
  }, []);

  return (
    <div ref={containerRef} className="track-left-item flex flex-col w-[400px] h-[200px]">
      <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="paint0_linear_45_485" x1="0" y1="30" x2="0" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#067ACC" stopOpacity="0.2"/>
            <stop offset="1" stopColor="#067ACC" stopOpacity="0"/>
          </linearGradient>
          <clipPath id="revealMask">
            <rect ref={fillRef} x="0" y="0" width="400" height="200" fill="white" />
          </clipPath>
        </defs>
        
        {/* Fill with reveal mask */}
        <g clipPath="url(#revealMask)">
          <path d="M0 130C13.3333 123.333 26.6667 123.333 40 130C53.3333 136.667 61.8601 121.847 76 117C90.3697 112.075 97.8645 106.289 113 105C127.528 103.762 135.931 109.42 150 110C163.087 110.54 166.913 94.4603 180 95C194.069 95.5801 195.991 113.579 210 115C222.286 116.246 227.651 105 240 105C252.349 105 257.651 115 270 115C282.349 115 287.684 105.906 300 105C311.845 104.128 330 110 330 110C330 110 349.586 102.946 360 95C370.777 86.7768 383 69 383 69L400 0V200H0V130Z" fill="url(#paint0_linear_45_485)"/>
        </g>
        
        {/* Stroke line with dashoffset animation */}
        <path ref={lineRef} d="M0 130C13.3333 123.333 26.6667 123.333 40 130C53.3333 136.667 64.5752 120.556 80.5 115C92.1602 110.932 98.2454 106.528 110.5 105C125.929 103.077 135.931 109.42 150 110C163.087 110.54 166.913 94.4603 180 95C194.069 95.5801 195.991 113.579 210 115C222.286 116.246 227.651 105 240 105C252.349 105 257.651 115 270 115C282.349 115 287.684 105.906 300 105C311.845 104.128 318.228 111.579 330 110C342.982 108.258 349.856 103.287 360 95C369.683 87.0901 373.353 80.5894 380 70C396 44.5118 399.5 -4 399.5 -4" stroke="#067ACC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

export function TrackRecord() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Left side animations
      gsap.from(".track-left-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Right side hero stat animation
      gsap.from(".track-hero-stat", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      });

      // Right side grid stats animation
      gsap.from(".track-grid-stat", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full flex justify-center pt-[120px] pb-[60px] bg-white">
      <div
        ref={containerRef}
        className="w-[1216px] flex flex-row justify-center items-start gap-[144px]"
      >
        {/* Left Column (Text & Chart) */}
        <div className="flex flex-col w-[512px] gap-[64px]">
          {/* Text Content */}
          <div className="flex flex-col w-full gap-[24px]">
            <h2
              className="track-left-item font-sans font-medium"
              style={{
                fontSize: "56px",
                lineHeight: "56px",
                letterSpacing: "-0.025em",
                color: "#000000",
              }}
            >
              A Track Record Built on <span style={{ color: "#067ACC" }}>Reliability</span>
            </h2>

            <p
              className="track-left-item font-sans font-normal"
              style={{
                width: "384px",
                fontSize: "16px",
                lineHeight: "26px",
                color: "rgba(0, 0, 0, 0.75)",
              }}
            >
              Over a decade of moving cargo across air, ocean, and road — trusted
              by 30,000+ businesses to deliver on time, every time
            </p>

            <div className="track-left-item flex items-start">
              <Link
                href="/quote"
                className="flex justify-center items-center font-sans font-normal bg-[#000000] hover:bg-gray-800 text-[#FFFFFF] hover:scale-105 active:scale-95 transition-all duration-200 group"
                style={{
                  borderRadius: "23px",
                  padding: "7px 14px",
                  gap: "4px",
                  fontSize: "14px",
                }}
              >
                Request a Quote
                <Image
                  src="/images/arrow_right_white.svg"
                  alt="Arrow Right"
                  width={17}
                  height={17}
                  className="w-[17px] h-[17px] group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </div>
          </div>

          {/* Chart Area */}
          <AnimatedChart />
        </div>

        {/* Right Column (Statistics) */}
        <div className="flex flex-col w-[560px]">
          {/* Hero Stat */}
          <div
            className="track-hero-stat flex flex-col w-full"
            style={{
              paddingBottom: "64px",
              gap: "16px",
              borderBottom: "1px solid #E5E7EB",
            }}
          >
            <Counter 
              value={2.1} 
              decimals={1} 
              suffix=" Bn+" 
              className="font-sans font-semibold"
              style={{
                fontSize: "120px",
                lineHeight: "120px",
                letterSpacing: "-0.05em",
                color: "#067ACC",
              }}
            />
            <div
              className="font-sans font-medium"
              style={{
                fontSize: "18px",
                lineHeight: "28px",
                color: "rgba(0, 0, 0, 0.75)",
              }}
            >
              Parcels shipped since inception
            </div>
          </div>

          {/* Grid Stats */}
          <div
            className="grid"
            style={{
              paddingTop: "48px",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gridTemplateRows: "76px 76px",
              columnGap: "32px",
              rowGap: "48px",
            }}
          >
            {/* Stat Item 1 */}
            <div className="track-grid-stat flex flex-col gap-[12px]">
              <Counter 
                value={99.5} 
                decimals={1} 
                suffix="%" 
                className="font-sans font-medium"
                style={{ fontSize: "44px", lineHeight: "44px", color: "#067ACC" }}
              />
              <div
                className="font-sans font-normal"
                style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(0, 0, 0, 0.75)" }}
              >
                Population covered
              </div>
            </div>

            {/* Stat Item 2 */}
            <div className="track-grid-stat flex flex-col gap-[12px]">
              <Counter 
                value={30} 
                suffix="K+" 
                className="font-sans font-medium"
                style={{ fontSize: "44px", lineHeight: "44px", color: "#067ACC" }}
              />
              <div
                className="font-sans font-normal"
                style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(0, 0, 0, 0.75)" }}
              >
                Businesses served
              </div>
            </div>

            {/* Stat Item 3 */}
            <div className="track-grid-stat flex flex-col gap-[12px]">
              <Counter 
                value={18} 
                suffix=" Mn+" 
                className="font-sans font-medium"
                style={{ fontSize: "44px", lineHeight: "44px", color: "#067ACC" }}
              />
              <div
                className="font-sans font-normal"
                style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(0, 0, 0, 0.75)" }}
              >
                Sq. ft. logistics infrastructure
              </div>
            </div>

            {/* Stat Item 4 */}
            <div className="track-grid-stat flex flex-col gap-[12px]">
              <Counter 
                value={13} 
                suffix="+" 
                className="font-sans font-medium"
                style={{ fontSize: "44px", lineHeight: "44px", color: "#067ACC" }}
              />
              <div
                className="font-sans font-normal"
                style={{ fontSize: "14px", lineHeight: "20px", color: "rgba(0, 0, 0, 0.75)" }}
              >
                Years of experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
