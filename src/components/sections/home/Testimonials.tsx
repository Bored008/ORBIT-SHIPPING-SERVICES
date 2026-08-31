"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
          x: 400, // Slide in from right (like a train arriving)
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex justify-center bg-white overflow-hidden">
      <div className="w-full max-w-[1320px] flex flex-col gap-[64px] items-center">
        
        {/* Header Container */}
        <div ref={headerRef} className="flex flex-col items-center gap-[8px]">
          <h2 
            className="font-sans font-extrabold text-center"
            style={{
              fontSize: "56px",
              lineHeight: "56px",
              letterSpacing: "-0.0321em",
              color: "#111827"
            }}
          >
            Trusted by Businesses <span style={{ color: "#067ACC", fontWeight: 500 }}>worldwide!</span>
          </h2>
          <p 
            className="font-sans font-normal text-center"
            style={{
              fontSize: "16px",
              lineHeight: "1.16em",
              color: "rgba(0, 0, 0, 0.55)",
              maxWidth: "600px"
            }}
          >
            “See why 30,000+ businesses rely on Orbit Shipping Services to move their cargo — on time, every time.”
          </p>
        </div>

        {/* Testimonial Grid */}
        <div ref={cardsRef} className="relative w-full flex flex-row justify-center items-center gap-[32px]">
          
          {/* Card 1: Kanan */}
          <div className="relative w-[418px] h-[500px]">
            <div 
              className="flex flex-col justify-between p-[48px_32px] w-full h-full bg-[#FFFFFF] rounded-[24px] group hover:scale-[1.02] transition-transform duration-300"
              style={{
                border: "0.8px solid #067ACC",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex flex-col gap-[32px]">
                {/* Profile Header */}
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[12px]">
                    <Image src="/images/kanan-4a0be7.png" alt="Kanan" width={48} height={48} className="rounded-full object-cover w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#111827]">Kanan</span>
                      <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.75)]">Supply Chain Manager</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#F9FAFB] rounded-full">
                    <Image src="/images/twitter_blue.svg" alt="Twitter" width={16} height={16} />
                  </div>
                </div>
                
                {/* Text */}
                <p className="font-sans font-normal text-[14px] leading-[22.75px] text-[#4B5563] pr-[16px]">
                  Orbit Shipping Services made our international logistics a breeze! Their team handled everything seamlessly, ensuring our shipments arrived on time every time. Highly recommended!.
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-row justify-between items-center border-t border-gray-100 pt-[16px]">
                <div className="flex flex-row gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/images/star.svg" alt="Star" width={20} height={20} />
                  ))}
                </div>
                <span className="font-sans font-medium text-[14px] leading-[20px] text-[#6B7280]">
                  03/15/2025
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Amar (Video Background) */}
          <div className="relative w-[418px] h-[500px]">
            <div 
              className="relative flex flex-col justify-between p-[32px] w-full h-full rounded-[24px] overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              style={{
                border: "0.8px solid #067ACC"
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image src="/images/amar_bg.png" alt="Amar Video Background" fill className="object-cover" />
              </div>

              {/* Header */}
              <div className="relative z-10 flex flex-row justify-between items-start">
                <div className="flex flex-col">
                  <span className="font-sans font-semibold text-[18px] leading-[28px] text-[#000000]">Amar</span>
                  <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.75)]">Logistics Director</span>
                </div>
                <div className="flex justify-center items-center w-[32px] h-[32px] bg-[rgba(255,255,255,0.2)] backdrop-blur-[2px] rounded-full">
                  <Image src="/images/twitter_white.svg" alt="Twitter" width={16} height={16} />
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
                <div className="flex justify-center items-center w-[64px] h-[64px] bg-[#FFFFFF] rounded-full shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] pointer-events-auto cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200">
                  <Image src="/images/play_icon.svg" alt="Play" width={18} height={24} className="ml-[4px]" />
                </div>
              </div>

              {/* Footer */}
              <div className="relative z-10 flex flex-row justify-between items-end mt-auto">
                <div className="flex flex-row gap-[4px] drop-shadow-[0_4px_3px_rgba(0,0,0,0.07)]">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/images/star.svg" alt="Star" width={20} height={20} />
                  ))}
                </div>
                <span className="font-sans font-medium text-[14px] leading-[20px] text-[#E5E7EB] drop-shadow-md">
                  09/30/2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Ishaan (Faded) */}
          <div className="relative w-[418px] h-[500px]">
            {/* The Card */}
            <div 
              className="flex flex-col justify-between p-[48px_32px] w-full h-full bg-[#FFFFFF] rounded-[24px] group hover:scale-[1.02] transition-transform duration-300"
              style={{
                border: "0.8px solid #067ACC",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div className="flex flex-col gap-[32px]">
                {/* Profile Header */}
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[12px]">
                    <Image src="/images/ishaan-4a0be7.png" alt="Ishaan" width={48} height={48} className="rounded-full object-cover w-[48px] h-[48px]" />
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-[16px] leading-[24px] text-[#111827]">Ishaan</span>
                      <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.75)]">Operations Head</span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#F9FAFB] rounded-full opacity-40">
                    <Image src="/images/twitter_faded.svg" alt="Twitter" width={16} height={16} />
                  </div>
                </div>
                
                {/* Text */}
                <p className="font-sans font-normal text-[14px] leading-[22.75px] text-[#4B5563] pr-[48px]">
                  “We’ve been working with Orbit Shipping Services for years now, and they’ve consistently exceeded our expectations. Their attention to detail and dedication to customer satisfaction truly set them apart. A reliable partner for all our shipping needs.”
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-row justify-between items-center border-t border-gray-100 pt-[16px]">
                <div className="flex flex-row gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/images/star.svg" alt="Star" width={20} height={20} />
                  ))}
                </div>
                <span className="font-sans font-medium text-[14px] leading-[20px] text-[#9CA3AF] pr-[24px]">
                  01/22/2025
                </span>
              </div>
            </div>

            {/* Gradient Mask for fading out right side */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-[24px]"
              style={{
                background: "linear-gradient(90deg, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 100%)"
              }}
            />

            {/* Navigation Arrow */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 flex justify-center items-center w-[40px] h-[40px] rounded-full bg-[rgba(229,231,235,0.8)] cursor-pointer hover:bg-gray-300 hover:scale-110 active:scale-95 transition-all duration-200 z-20">
              <Image src="/images/nav_arrow_right.svg" alt="Next" width={20} height={20} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

