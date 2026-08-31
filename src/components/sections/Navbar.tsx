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
      <Link href="/">
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
          className="flex justify-center items-center"
          style={{
            padding: "8px 12px",
            gap: "10px",
            backgroundColor: "#000000",
            borderRadius: "25px",
            color: "#FFFFFF",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Home
        </Link>
        <Link
          href="/services"
          className="flex items-center"
          style={{
            gap: "4px",
            color: "rgba(0, 0, 0, 0.55)",
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
            className="w-[18px] h-[18px]"
          />
        </Link>
        <Link
          href="/about"
          style={{
            color: "rgba(0, 0, 0, 0.55)",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          About Us
        </Link>
        <Link
          href="/careers"
          style={{
            color: "rgba(0, 0, 0, 0.55)",
            fontSize: "16px",
            lineHeight: "1.16em",
          }}
        >
          Careers
        </Link>
        <Link
          href="/tools"
          style={{
            color: "rgba(0, 0, 0, 0.55)",
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
        className="flex justify-center items-center"
        style={{
          padding: "7px 14px",
          gap: "6px",
          backgroundColor: "#000000",
          borderRadius: "23px",
        }}
      >
        <Image
          src="/images/phone_outlined.svg"
          alt="Phone"
          width={18}
          height={18}
          className="w-[18px] h-[18px]"
        />
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "16px",
          }}
        >
          Contact Us
        </span>
      </Link>
    </div>
  );
}

