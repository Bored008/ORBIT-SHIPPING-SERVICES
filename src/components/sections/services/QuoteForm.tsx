"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function QuoteForm() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="w-full max-w-[1440px] mx-auto flex flex-row items-start justify-between"
      style={{
        padding: "0px 60px",
        gap: "81px",
      }}
    >
      {/* Left Column - Contact Info */}
      <div 
        className="flex flex-col justify-center"
        style={{ width: "589px", gap: "44px" }}
      >
        {/* Header Content */}
        <div className="flex flex-col gap-[16px]">
          <h2 
            className="font-sans font-bold text-[#000000]"
            style={{
              fontSize: "56px",
              lineHeight: "56px",
              letterSpacing: "-0.0134em",
            }}
          >
            Get a Quote for Your <span className="text-[#067ACC]">Shipment</span>
          </h2>
          <p 
            className="font-sans font-normal text-[#6B7280]"
            style={{
              fontSize: "18px",
              lineHeight: "1.16em",
            }}
          >
            Tell us what you&apos;re shipping and where it&apos;s going — our team will get back to you with a tailored freight quote within 24 hours.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-[24px]">
          {/* Email */}
          <div className="flex flex-row items-center w-full">
            <div className="flex justify-center items-center bg-[#F3F4F6] rounded-[8px] w-[40px] h-[40px]">
              <Image src="/images/icon_email_contact.svg" alt="Email" width={20} height={20} />
            </div>
            <div className="pl-[16px]">
              <span className="font-sans font-medium text-[#111827] text-[16px] leading-[24px]">
                quotes@orbit-shipping.com
              </span>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-row items-center w-full">
            <div className="flex justify-center items-center bg-[#F3F4F6] rounded-[8px] w-[40px] h-[40px]">
              <Image src="/images/icon_address_contact.svg" alt="Address" width={20} height={20} />
            </div>
            <div className="pl-[16px]">
              <span className="font-sans font-medium text-[#111827] text-[16px] leading-[24px]">
                Orbit&apos;s actual office address, Dubai, UAE
              </span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-row items-center w-full">
            <div className="flex justify-center items-center bg-[#F3F4F6] rounded-[8px] w-[40px] h-[40px]">
              <Image src="/images/icon_phone_contact.svg" alt="Phone" width={20} height={20} />
            </div>
            <div className="pl-[16px]">
              <span className="font-sans font-medium text-[#111827] text-[16px] leading-[24px]">
                +971 XX XXX XXXX
              </span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row items-center gap-[24px]">
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image src="/images/icon_linkedin.svg" alt="LinkedIn" width={25} height={25} />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image src="/images/icon_twitter.svg" alt="Twitter" width={25} height={25} />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image src="/images/icon_instagram.svg" alt="Instagram" width={25} height={25} />
          </Link>
          <Link href="#" className="hover:opacity-70 transition-opacity">
            <Image src="/images/icon_facebook.svg" alt="Facebook" width={25} height={25} />
          </Link>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div 
        className="flex-1 flex flex-col bg-[#F4F4F5] rounded-[24px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
        style={{
          padding: "40px",
          border: "1px solid #F3F4F6"
        }}
      >
        <form className="flex flex-col gap-[24px] w-full" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-medium text-[#374151] text-[14px] leading-[20px]">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="|" 
              className="w-full bg-[#FFFFFF] border-[1px] border-[#067ACC] rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none font-sans font-normal text-[16px] text-[#9CA3AF] placeholder:text-[#9CA3AF] px-[16px] py-[14px] focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-medium text-[#374151] text-[14px] leading-[20px]">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="w-full bg-[#FFFFFF] border-[1px] border-transparent rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none font-sans font-normal text-[16px] text-[#9CA3AF] placeholder:text-[#9CA3AF] px-[16px] py-[14px] focus:border-[#067ACC] focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-medium text-[#374151] text-[14px] leading-[20px]">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="Enter Your Phone Number" 
              className="w-full bg-[#FFFFFF] border-[1px] border-transparent rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none font-sans font-normal text-[16px] text-[#9CA3AF] placeholder:text-[#9CA3AF] px-[16px] py-[14px] focus:border-[#067ACC] focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-medium text-[#374151] text-[14px] leading-[20px]">
              Subject
            </label>
            <input 
              type="text" 
              placeholder="Enter Your Purpose of Your Contact" 
              className="w-full bg-[#FFFFFF] border-[1px] border-transparent rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none font-sans font-normal text-[16px] text-[#9CA3AF] placeholder:text-[#9CA3AF] px-[16px] py-[14px] focus:border-[#067ACC] focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[8px]">
            <label className="font-sans font-medium text-[#374151] text-[14px] leading-[20px]">
              Message
            </label>
            <textarea 
              placeholder="Write Your Message Here" 
              className="w-full bg-[#FFFFFF] border-[1px] border-transparent rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline-none font-sans font-normal text-[16px] leading-[24px] text-[#9CA3AF] placeholder:text-[#9CA3AF] px-[16px] pt-[12px] pb-[84px] resize-none focus:border-[#067ACC] focus:ring-2 focus:ring-blue-200 transition-all"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="flex self-start justify-center items-center bg-[#067ACC] hover:bg-blue-600 active:scale-95 transition-all duration-200 text-white rounded-[23px] group"
            style={{
              padding: "7px 14px",
              gap: "4px",
            }}
          >
            <span className="font-sans font-normal text-[14px]">Request Call</span>
            <Image 
              src="/images/right_arrow.svg" 
              alt="Request Call" 
              width={17} 
              height={17} 
              className="w-[17px] h-[17px] brightness-0 invert group-hover:translate-x-0.5 transition-transform duration-200"
            />
          </button>
        </form>
      </div>
    </section>
  );
}
