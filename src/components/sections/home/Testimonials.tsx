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

        const headerStart = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 80%";
        const cardsStart = isTablet ? "top 85%" : isMobile ? "top 90%" : "top 75%";

        // Header Animation
        if (headerRef.current) {
          gsap.from(headerRef.current, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: headerStart,
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

        // Cards Stagger Animation
        if (cardsRef.current) {
          gsap.from(cardsRef.current.children, {
            scrollTrigger: {
              trigger: sectionRef.current,
              start: cardsStart,
              toggleActions: "play none none none",
              once: true,
            },
            y: isMobile ? 30 : 40,
            x: isTablet ? 0 : 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
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
      className="w-full flex justify-center bg-white overflow-hidden py-[3rem] md:py-[4rem] lg:py-[5rem] px-[1.25rem] md:px-[2.5rem] lg:px-[4rem]"
    >
      <div className="w-full max-w-[82.5rem] flex flex-col gap-[2rem] md:gap-[2.5rem] items-center">
        {/* Header Container */}
        <div
          ref={headerRef}
          className="flex flex-col items-center text-center gap-[0.5rem]"
        >
          <h2 className="font-sans font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] leading-[1.15] text-gray-100">
            <span>Trusted by Businesses </span>
            <span className="text-cornflowerblue-100">worldwide!</span>
          </h2>
          <p className="font-sans text-[0.938rem] md:text-[1rem] text-dimgray max-w-[37.5rem]">
            “See why 30,000+ businesses rely on Orbit Shipping Services to move
            their cargo — on time, every time.”
          </p>
        </div>

        {/* Testimonial Cards */}
        <div
          ref={cardsRef}
          className="w-full flex flex-col md:flex-row items-stretch gap-[1.5rem] text-[0.875rem]"
        >
          {/* Card 1: Kanan */}
          <div className="flex-1 rounded-num-20 bg-white border border-cornflowerblue-100 flex flex-col justify-between p-[1.5rem] gap-[1.25rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.75rem]">
                  <Image
                    src="/images/kanan-4a0be7.png"
                    alt="Kanan"
                    width={40}
                    height={40}
                    className="h-[2.5rem] w-[2.5rem] rounded-num-20 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <div className="font-semibold text-gray-100 text-[1rem]">
                      Kanan
                    </div>
                    <div className="text-[0.75rem] text-dimgray">
                      Supply Chain Manager
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-gray-50 rounded-full">
                  <Image
                    src="/images/twitter_blue.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="w-[1rem] h-[1rem]"
                  />
                </div>
              </div>

              <p className="text-[0.875rem] leading-[1.375rem] text-dimgray">
                &ldquo;Orbit Shipping Services made our international logistics a
                breeze! Their team handled everything seamlessly, ensuring our
                shipments arrived on time every time.&rdquo;
              </p>
            </div>

            {/* Rating Stars & Date */}
            <div className="flex items-center justify-between pt-[0.75rem] border-t border-gainsboro-100/60">
              <div className="flex gap-[0.25rem]">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="w-[1rem] h-[1rem]"
                  />
                ))}
              </div>
              <span className="text-[0.75rem] text-dimgray">03/15/2025</span>
            </div>
          </div>

          {/* Card 2: Amar (Video Background) */}
          <div className="flex-1 rounded-num-20 flex flex-col justify-between p-[1.5rem] min-h-[14rem] md:min-h-[16rem] lg:min-h-[20rem] relative overflow-hidden bg-cover bg-no-repeat bg-top text-white group shadow-sm hover:shadow-md transition-shadow">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/amar_bg.png"
                alt="Amar Video Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex items-center justify-between gap-[1.25rem]">
              <div className="flex flex-col items-start">
                <div className="font-semibold text-[1rem] text-white">Amar</div>
                <div className="text-[0.75rem] text-white/80">Logistics Director</div>
              </div>
              <div className="h-[2rem] w-[2rem] rounded-num-16 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Image
                  src="/images/twitter_white.svg"
                  alt="Twitter"
                  width={16}
                  height={16}
                  className="w-[1rem] h-[1rem]"
                />
              </div>
            </div>

            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center z-10 pointer-events-none">
              <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-white flex items-center justify-center shadow-lg pointer-events-auto cursor-pointer group-hover:scale-110 active:scale-95 transition-transform">
                <Image
                  src="/images/play_icon.svg"
                  alt="Play"
                  width={16}
                  height={20}
                  className="w-[1rem] h-[1.25rem] ml-[0.2rem]"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between pt-[0.75rem]">
              <div className="flex gap-[0.25rem]">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="w-[1rem] h-[1rem]"
                  />
                ))}
              </div>
              <span className="text-[0.75rem] text-white/90">09/30/2024</span>
            </div>
          </div>

          {/* Card 3: Ishaan */}
          <div className="flex-1 rounded-num-20 bg-white border border-gainsboro-100 flex flex-col justify-between p-[1.5rem] gap-[1.25rem] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-[1rem]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[0.75rem]">
                  <Image
                    src="/images/ishaan-4a0be7.png"
                    alt="Ishaan"
                    width={40}
                    height={40}
                    className="h-[2.5rem] w-[2.5rem] rounded-num-20 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <div className="font-semibold text-gray-100 text-[1rem]">
                      Ishaan
                    </div>
                    <div className="text-[0.75rem] text-dimgray">
                      Operations Head
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-gray-50 rounded-full opacity-60">
                  <Image
                    src="/images/twitter_faded.svg"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="w-[1rem] h-[1rem]"
                  />
                </div>
              </div>

              <p className="text-[0.875rem] leading-[1.375rem] text-dimgray">
                &ldquo;We&rsquo;ve been working with Orbit Shipping Services for years
                now, and they&rsquo;ve consistently exceeded our expectations.&rdquo;
              </p>
            </div>

            {/* Rating Stars & Date */}
            <div className="flex items-center justify-between pt-[0.75rem] border-t border-gainsboro-100/60">
              <div className="flex gap-[0.25rem]">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="Star"
                    width={16}
                    height={16}
                    className="w-[1rem] h-[1rem]"
                  />
                ))}
              </div>
              <span className="text-[0.75rem] text-dimgray">01/22/2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
