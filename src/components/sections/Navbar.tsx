"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { usePathname } from "next/navigation";

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname?.startsWith(path);
  };

  return (
    <div
      ref={navRef}
      className="flex justify-between items-center w-full max-w-[1320px] mx-auto h-[70px] relative z-[100]"
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
          className={`flex justify-center items-center hover:scale-105 transition-all duration-200 active:scale-95 ${isActive("/") ? "bg-[#000000] text-[#FFFFFF]" : "text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100"}`}
          style={{
            padding: isActive("/") ? "8px 12px" : "0",
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
          className={`flex justify-center items-center hover:scale-105 transition-all duration-200 active:scale-95 group ${isActive("/services") ? "bg-[#000000] text-[#FFFFFF]" : "text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100"}`}
          style={{
            padding: isActive("/services") ? "8px 12px" : "0",
            gap: "4px",
            borderRadius: "25px",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Services
          {!isActive("/services") && (
            <Image
              src="/images/right_arrow.svg"
              alt="Right Arrow"
              width={18}
              height={18}
              className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform duration-200"
            />
          )}
        </Link>
        <Link
          href="/about"
          className={`flex justify-center items-center hover:scale-105 transition-all duration-200 active:scale-95 ${isActive("/about") ? "bg-[#000000] text-[#FFFFFF]" : "text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100"}`}
          style={{
            padding: isActive("/about") ? "8px 12px" : "0",
            borderRadius: "25px",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          About Us
        </Link>
        <Link
          href="/careers"
          className={`flex justify-center items-center hover:scale-105 transition-all duration-200 active:scale-95 ${isActive("/careers") ? "bg-[#000000] text-[#FFFFFF]" : "text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100"}`}
          style={{
            padding: isActive("/careers") ? "8px 12px" : "0",
            borderRadius: "25px",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Careers
        </Link>
        <Link
          href="/tools"
          className={`flex justify-center items-center hover:scale-105 transition-all duration-200 active:scale-95 ${isActive("/tools") ? "bg-[#000000] text-[#FFFFFF]" : "text-[rgba(0,0,0,0.55)] hover:!text-black hover:opacity-100"}`}
          style={{
            padding: isActive("/tools") ? "8px 12px" : "0",
            borderRadius: "25px",
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
