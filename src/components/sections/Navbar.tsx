"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/services", label: "Services", hasArrow: true },
  { path: "/about", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/tools", label: "Tools" },
];

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
        className="relative flex items-center"
        style={{
          padding: "6px 24px",
          gap: "8px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "0.3px solid #FFFFFF",
          backdropFilter: "blur(9.3px)",
          borderRadius: "51px",
        }}
        onMouseLeave={() => setHoveredPath(null)}
      >
        {NAV_LINKS.map((link) => {
          const active = isActive(link.path);
          const hovered = hoveredPath === link.path;

          return (
            <Link
              key={link.path}
              href={link.path}
              onMouseEnter={() => setHoveredPath(link.path)}
              className={`relative flex items-center justify-center transition-colors duration-200 group z-10 ${
                active ? "text-white" : "text-[rgba(0,0,0,0.55)] hover:text-black"
              }`}
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                lineHeight: "1.16em",
                gap: "4px"
              }}
            >
              {/* Active Pill (Solid Black) */}
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-black rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              {/* Hover Pill (Faded Black) */}
              {hovered && !active && (
                <motion.div
                  layoutId="hover-pill"
                  className="absolute inset-0 bg-black/10 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}

              <span className="relative z-10">{link.label}</span>
              
              {/* Arrow for specific links (e.g., Services) when inactive */}
              {link.hasArrow && !active && (
                <Image
                  src="/images/right_arrow.svg"
                  alt="Right Arrow"
                  width={18}
                  height={18}
                  className="w-[18px] h-[18px] relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                />
              )}
            </Link>
          );
        })}
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
