"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, Minus, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What types of freight do you handle?",
    answer:
      "We handle all major types of freight including ocean, air, and road transport. Whether you need full container loads (FCL), less than container loads (LCL), or specialized cargo handling, our network is equipped to manage it seamlessly.",
  },
  {
    question: "How long does a typical shipment take?",
    answer:
      "Transit times depend on the freight mode and destination. Ocean freight typically takes 15–30 days depending on the route, while air freight can move within 2–5 days for time-critical shipments.\n\nRoad freight within the region is usually completed in 1–3 days.\n\nFor an exact timeline on your specific shipment, our team provides a detailed quote with estimated transit windows before booking.",
  },
  {
    question: "Do you handle customs clearance?",
    answer:
      "Yes, our dedicated customs brokerage team handles all necessary documentation and clearance procedures to ensure your shipments comply with international regulations and avoid unnecessary delays at borders.",
  },
  {
    question: "Can you handle time-sensitive or high-value cargo?",
    answer:
      "Absolutely. We offer expedited air freight and secure handling for high-value or time-sensitive shipments, complete with real-time tracking and dedicated security protocols from origin to destination.",
  },
  {
    question: "Do I need to arrange my own warehousing?",
    answer:
      "No, we offer comprehensive end-to-end logistics solutions, including secure warehousing, inventory management, and distribution services, so you don't need to coordinate with third-party providers.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1); // Default second item open matching Figma
  const sectionRef = useRef<HTMLElement>(null);
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

        const startPoint = isTablet ? "top 88%" : isMobile ? "top 90%" : "top 80%";

        gsap.from(containerRef.current?.children || [], {
          scrollTrigger: {
            trigger: containerRef.current,
            start: startPoint,
            toggleActions: "play none none reverse",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex justify-center bg-white overflow-hidden py-[3rem] md:py-[4rem] lg:py-[5rem] px-[1.25rem] md:px-[2.5rem] lg:px-[4rem]"
    >
      {/* Decorative Background Image */}
      <div className="absolute right-[-6.25rem] bottom-[6.25rem] w-[50rem] h-[26rem] pointer-events-none opacity-40 z-0">
        <Image
          src="/images/faq_bg-6a6763.png"
          alt="Decorative"
          fill
          className="object-cover"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[45rem] flex flex-col items-center gap-[2rem] md:gap-[2.5rem]"
      >
        {/* Header Container */}
        <div className="flex flex-col items-center text-center gap-[0.5rem]">
          <h2 className="font-sans font-semibold text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] leading-[1.15] text-gray-100">
            <span>Common </span>
            <span className="text-cornflowerblue-100">Questions</span>
          </h2>
          <p className="font-sans text-[0.938rem] md:text-[1rem] text-dimgray text-center max-w-[37.5rem]">
            Everything you need to know about shipping with Orbit — and if it&apos;s
            not here, we&apos;re one message away
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col items-start gap-[0.75rem] text-[0.875rem] text-dimgray">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`w-full flex flex-col rounded-num-16 transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? "bg-cornflowerblue-200 border border-cornflowerblue-100 p-[1.25rem] gap-[0.75rem] text-darkslategray"
                    : "bg-gainsboro-200 hover:bg-gainsboro-100/60 p-[1.125rem]"
                }`}
              >
                {/* Header Row */}
                <div className="w-full flex items-center justify-between gap-[1.25rem]">
                  <div className="flex items-center gap-[0.75rem] min-w-0">
                    <div className="rounded-md bg-white flex items-center justify-center py-[0.25rem] px-[0.625rem] shadow-xs shrink-0">
                      <b className="font-bold text-[0.875rem] text-darkslategray">
                        {index + 1}
                      </b>
                    </div>
                    <div
                      className={`text-[1rem] ${
                        isOpen
                          ? "font-semibold text-gray-100"
                          : "font-medium text-darkslategray"
                      }`}
                    >
                      {item.question}
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div
                    className={`h-[1.75rem] w-[1.75rem] rounded-[0.875rem] flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-white border border-gainsboro-100 text-gray-100"
                        : "bg-gray-100 text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-[1.125rem] w-[1.125rem]" />
                    ) : (
                      <Plus className="h-[1.125rem] w-[1.125rem]" />
                    )}
                  </div>
                </div>

                {/* Answer Content */}
                {isOpen && (
                  <div className="w-full flex items-start py-0 pl-[2.5rem] pr-[0.625rem] text-dimgray">
                    <p className="flex-1 text-[0.875rem] leading-[1.375rem] whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Question Help */}
        <div className="flex flex-col items-center gap-[0.25rem] mt-2">
          <span className="text-[0.875rem] text-dimgray">
            Have any other questions?
          </span>
          <Link
            href="/contact"
            className="flex items-center gap-[0.25rem] text-[0.875rem] text-cornflowerblue-100 hover:underline group"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-[0.875rem] h-[0.875rem] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
