"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div
      ref={navRef}
      className="flex justify-between items-center w-full max-w-[1320px] mx-auto h-[70px]"
    >
      {/* Logo */}
      <Link href="/" className="hover:opacity-80 transition-opacity">
        <Image
          src="/images/logo.svg"
          alt="Orbit Logo"
          width={230}
          height={70}
          priority
          className="w-[230px] h-[70px]"
        />
      </Link>

      {/* Navigation Links */}
      <nav
        className="flex items-center"
        style={{
          padding: "6px 24px 6px 7px",
          gap: "36px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "0.3px solid #FFFFFF",
          backdropFilter: "blur(9.3px)",
          borderRadius: "51px",
        }}
      >
        <Link
          href="/"
          className="flex justify-center items-center hover:opacity-80 hover:scale-105 transition-all duration-200 active:scale-95 bg-[#000000] text-[#FFFFFF]"
          style={{
            padding: "8px 12px",
            gap: "10px",
            borderRadius: "25px",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="flex items-center text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100 transition-colors duration-200 group"
          style={{
            gap: "4px",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Services
          <Image
            src="/images/right_arrow.svg"
            alt="Right Arrow"
            width={18}
            height={18}
            className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
        <Link
          href="/about"
          className="text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100 transition-colors duration-200"
          style={{
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          About Us
        </Link>
        <Link
          href="/careers"
          className="text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100 transition-colors duration-200"
          style={{
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Careers
        </Link>
        <Link
          href="/tools"
          className="text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100 transition-colors duration-200"
          style={{
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Tools
        </Link>
      </nav>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="flex justify-center items-center bg-[#000000] hover:bg-gray-800 hover:scale-105 transition-all duration-200 active:scale-95 group text-[#FFFFFF]"
        style={{
          padding: "7px 14px",
          gap: "6px",
          borderRadius: "23px",
        }}
      >
        <Image
          src="/images/phone_outlined.svg"
          alt="Phone"
          width={18}
          height={18}
          className="w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-200"
        />
        <span
          style={{
            fontSize: "16px",
          }}
        >
          Contact Us
        </span>
      </Link>
    </div>
  );
}
