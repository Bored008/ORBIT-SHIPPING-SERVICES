"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function QuoteForm() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Road Freight & Logistics",
    message: "",
  });

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
      id="quote-section"
      ref={containerRef}
      className="w-full max-w-[82.5rem] mx-auto flex flex-col lg:flex-row items-stretch lg:items-start justify-between gap-[2.5rem] lg:gap-[4rem] xl:gap-[5rem] px-4 sm:px-6 md:px-10 lg:px-[3.75rem] py-6 sm:py-8 md:py-12"
    >
      {/* Left Column - Contact Info */}
      <div className="flex-1 lg:flex-[1.15] flex flex-col justify-between gap-[2rem] md:gap-[2.5rem]">
        {/* Header Content */}
        <div className="flex flex-col gap-[1rem]">
          <h2 className="font-sans font-medium md:font-bold text-gray-100 text-[1.875rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-[3.5rem] tracking-[-0.75px] leading-tight md:leading-[3.5rem]">
            Get a Quote for Your <span className="text-cornflowerblue">Shipment</span>
          </h2>
          <p className="font-sans font-normal text-dimgray text-[0.938rem] sm:text-[1rem] leading-[1.563rem] max-w-[36rem]">
            Tell us what you&apos;re shipping and where it&apos;s going — our team will get back to you with a tailored road freight quote.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-[1rem] sm:gap-[1.25rem] text-[0.938rem] sm:text-[1rem]">
          {/* Email */}
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] rounded-lg bg-whitesmoke flex items-center justify-center shrink-0">
              <Image 
                src="/images/icon_email_contact.svg" 
                alt="Email" 
                width={20} 
                height={20} 
                className="w-[1.25rem] h-[1.25rem]"
              />
            </div>
            <a 
              href="mailto:quotes@orbit-shipping.com"
              className="font-medium text-gray-100 hover:text-cornflowerblue transition-colors"
            >
              quotes@orbit-shipping.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] rounded-lg bg-whitesmoke flex items-center justify-center shrink-0">
              <Image 
                src="/images/icon_address_contact.svg" 
                alt="Address" 
                width={20} 
                height={20} 
                className="w-[1.25rem] h-[1.25rem]"
              />
            </div>
            <span className="font-medium text-gray-100">
              Orbit&apos;s actual office address, Dubai, UAE
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-[0.75rem]">
            <div className="w-[2.5rem] h-[2.5rem] rounded-lg bg-whitesmoke flex items-center justify-center shrink-0">
              <Image 
                src="/images/icon_phone_contact.svg" 
                alt="Phone" 
                width={18} 
                height={18} 
                className="w-[1.125rem] h-[1.125rem]"
              />
            </div>
            <a 
              href="tel:+971XXXXXXXX"
              className="font-medium text-gray-100 hover:text-cornflowerblue transition-colors"
            >
              +971 XX XXX XXXX
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-[1rem]">
          <Link href="#" className="hover:opacity-75 hover:scale-110 transition-all">
            <Image src="/images/icon_linkedin_blue.svg" alt="LinkedIn" width={22} height={22} className="w-[1.375rem] h-[1.375rem]" />
          </Link>
          <Link href="#" className="hover:opacity-75 hover:scale-110 transition-all">
            <Image src="/images/icon_twitter_blue.svg" alt="Twitter" width={22} height={22} className="w-[1.375rem] h-[1.375rem]" />
          </Link>
          <Link href="#" className="hover:opacity-75 hover:scale-110 transition-all">
            <Image src="/images/icon_instagram_blue.svg" alt="Instagram" width={22} height={22} className="w-[1.375rem] h-[1.375rem]" />
          </Link>
          <Link href="#" className="hover:opacity-75 hover:scale-110 transition-all">
            <Image src="/images/icon_facebook_blue.svg" alt="Facebook" width={22} height={22} className="w-[1.375rem] h-[1.375rem]" />
          </Link>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="flex-1 w-full rounded-[24px] bg-whitesmoke border border-gainsboro p-[1.5rem] sm:p-[2rem] md:p-[2.5rem] flex flex-col gap-[1.25rem] text-[0.875rem] shadow-sm">
        <form className="flex flex-col gap-[1.25rem] w-full" onSubmit={(e) => e.preventDefault()}>
          {/* Full Name */}
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-medium text-gray-900">
              Full Name
            </label>
            <input 
              type="text" 
              placeholder="Enter Your Name" 
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full rounded-num-12 bg-white border border-gainsboro p-[0.875rem] text-gray-900 placeholder:text-darkgray outline-none focus:border-cornflowerblue focus:ring-1 focus:ring-cornflowerblue transition-all"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-medium text-gray-900">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-num-12 bg-white border border-gainsboro p-[0.875rem] text-gray-900 placeholder:text-darkgray outline-none focus:border-cornflowerblue focus:ring-1 focus:ring-cornflowerblue transition-all"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-medium text-gray-900">
              Phone Number
            </label>
            <input 
              type="tel" 
              placeholder="Enter Your Phone Number" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full rounded-num-12 bg-white border border-gainsboro p-[0.875rem] text-gray-900 placeholder:text-darkgray outline-none focus:border-cornflowerblue focus:ring-1 focus:ring-cornflowerblue transition-all"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-medium text-gray-900">
              Subject
            </label>
            <input 
              type="text" 
              placeholder="Road Freight & Logistics" 
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-num-12 bg-white border border-gainsboro p-[0.875rem] text-gray-900 placeholder:text-darkgray outline-none focus:border-cornflowerblue focus:ring-1 focus:ring-cornflowerblue transition-all"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[0.5rem]">
            <label className="font-medium text-gray-900">
              Message
            </label>
            <textarea 
              rows={4}
              placeholder="Tell us about your route, cargo dimensions, weight and pickup / delivery requirements" 
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-num-12 bg-white border border-gainsboro p-[0.875rem] text-gray-900 placeholder:text-darkgray outline-none resize-none focus:border-cornflowerblue focus:ring-1 focus:ring-cornflowerblue transition-all"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full rounded-num-23 bg-cornflowerblue hover:bg-blue-600 active:scale-95 transition-all duration-200 text-white flex items-center justify-center p-[0.75rem] gap-[0.375rem] font-medium text-[0.875rem] sm:text-[1rem] group cursor-pointer"
          >
            <span>Request Call</span>
            <Image 
              src="/images/top_right_arrow.svg" 
              alt="Submit" 
              width={17} 
              height={17} 
              className="w-[1.063rem] h-[1.063rem] brightness-0 invert group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

