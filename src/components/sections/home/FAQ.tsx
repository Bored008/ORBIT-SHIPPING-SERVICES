"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Plus, Minus, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What types of freight do you handle?",
    answer: "We handle all major types of freight including ocean, air, and road transport. Whether you need full container loads (FCL), less than container loads (LCL), or specialized cargo handling, our network is equipped to manage it seamlessly."
  },
  {
    question: "How long does a typical shipment take?",
    answer: "Transit times depend on the freight mode and destination. Ocean freight typically takes 15–30 days depending on the route, while air freight can move within 2–5 days for time-critical shipments.\n\nRoad freight within the region is usually completed in 1–3 days.\n\nFor an exact timeline on your specific shipment, our team provides a detailed quote with estimated transit windows before booking."
  },
  {
    question: "Do you handle customs clearance?",
    answer: "Yes, our dedicated customs brokerage team handles all necessary documentation and clearance procedures to ensure your shipments comply with international regulations and avoid unnecessary delays at borders."
  },
  {
    question: "Can you handle time-sensitive or high-value cargo?",
    answer: "Absolutely. We offer expedited air freight and secure handling for high-value or time-sensitive shipments, complete with real-time tracking and dedicated security protocols from origin to destination."
  },
  {
    question: "Do I need to arrange my own warehousing?",
    answer: "No, we offer comprehensive end-to-end logistics solutions, including secure warehousing, inventory management, and distribution services, so you don't need to coordinate with third-party providers."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(1); // Default second item open
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.from(container.children, {
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full flex justify-center py-[120px] bg-white overflow-hidden">
      
      {/* Decorative Background Image */}
      <div className="absolute right-[-100px] bottom-[100px] w-[801px] h-[416px] pointer-events-none opacity-40 z-0">
        <Image src="/images/faq_bg-6a6763.png" alt="Decorative" fill className="object-cover" />
      </div>

      <div ref={containerRef} className="relative z-10 w-full max-w-[768px] flex flex-col items-center gap-[48px]">
        
        {/* Header Container */}
        <div className="flex flex-col items-center gap-[8px]">
          <h2 className="font-sans font-extrabold text-[56px] leading-[56px] tracking-[-0.0214em] text-center text-[#111827]">
            Common <span className="text-[#067ACC] font-bold">Questions</span>
          </h2>
          <p className="font-sans font-normal text-[18px] leading-[1.16em] text-center text-[rgba(0,0,0,0.75)] max-w-[600px]">
            Everything you need to know about shipping with Orbit — and if it's not here, we're one message away
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="w-full flex flex-col gap-[16px]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`w-full flex flex-col transition-all duration-300 cursor-pointer group ${
                  isOpen 
                    ? "p-[24px] gap-[16px] bg-[rgba(6,122,204,0.05)] border border-[#067ACC] rounded-[24px]"
                    : "p-[24px] bg-[rgba(229,231,235,0.5)] border border-transparent rounded-[24px] hover:bg-gray-200"
                }`}
              >
                {/* Header Row */}
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-[16px]">
                    <div className={`px-[10px] py-[4px] rounded-[8px] flex items-center justify-center ${isOpen ? 'bg-[#F3F4F6]' : 'bg-[#FFFFFF]'}`}>
                      <span className={`font-sans font-bold text-[12px] leading-[16px] ${isOpen ? 'text-[#374151]' : 'text-[#4B5563]'}`}>
                        {index + 1}
                      </span>
                    </div>
                    <h3 className={`font-sans transition-colors duration-200 ${isOpen ? 'font-medium text-[18px] text-[#000000]' : 'font-normal text-[18px] text-[rgba(0,0,0,0.75)] group-hover:text-black'}`}>
                      {item.question}
                    </h3>
                  </div>

                  {/* Toggle Button */}
                  <div className={`flex justify-center items-center w-[32px] h-[32px] rounded-[16px] transition-colors duration-200 ${
                    isOpen 
                      ? 'bg-white border border-[#E5E7EB]'
                      : 'bg-[#111111] group-hover:bg-[#000000]'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-[16px] h-[16px] text-[#111111]" />
                    ) : (
                      <Plus className="w-[16px] h-[16px] text-white" />
                    )}
                  </div>
                </div>

                {/* Answer Content */}
                <div 
                  className={`pl-[48px] pr-[16px] overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                  }`}
                >
                  <p className="font-sans font-normal text-[14px] leading-[22.75px] text-[rgba(0,0,0,0.55)] whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Link */}
        <div className="flex flex-col items-center gap-[4px] mt-4">
          <span className="font-sans font-normal text-[14px] leading-[20px] text-[rgba(0,0,0,0.55)]">
            Have any other questions?
          </span>
          <div className="flex flex-row items-center gap-[4px] cursor-pointer group">
            <span className="font-sans font-normal text-[14px] leading-[20px] text-[#067ACC] underline group-hover:text-blue-800 transition-colors">
              Contact Us
            </span>
            <ArrowRight className="w-[14px] h-[14px] text-[#067ACC] group-hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200" />
          </div>
        </div>

      </div>
    </section>
  );
}

