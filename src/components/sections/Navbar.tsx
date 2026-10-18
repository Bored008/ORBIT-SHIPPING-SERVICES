"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      className="flex justify-between items-center w-full max-w-[82.5rem] mx-auto h-[4.375rem] relative z-[100]"
    >
      {/* Logo */}
      <Link href="/" className="hover:opacity-80 transition-opacity shrink-0">
        <Image
          src="/images/logo.svg"
          alt="Orbit Logo"
          width={230}
          height={70}
          priority
          className="w-[9.5rem] sm:w-[11.5rem] md:w-[13rem] lg:w-[14.375rem] h-auto"
        />
      </Link>

      {/* Desktop / Tablet Navigation Links */}
      <nav
        className="hidden md:flex relative items-center bg-white/10 border-[0.02rem] border-white backdrop-blur-[9.3px] rounded-[3.1875rem] py-[0.375rem] px-[0.75rem] lg:px-[1rem] gap-[0.25rem] lg:gap-[0.5rem]"
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
              className={`relative flex items-center justify-center transition-colors duration-200 group z-10 py-[0.5rem] px-[0.625rem] lg:px-[0.75rem] text-[0.875rem] lg:text-[1rem] leading-[1.16] gap-[0.25rem] ${
                active ? "text-white" : "text-black/60 hover:text-black"
              }`}
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

              {/* Arrow for specific links (e.g., Services) */}
              {link.hasArrow && (
                <Image
                  src="/images/right_arrow.svg"
                  alt="Right Arrow"
                  width={18}
                  height={18}
                  className={`w-[1.125rem] h-[1.125rem] relative z-10 group-hover:translate-x-1 transition-transform duration-200 ${
                    active ? "invert brightness-0" : ""
                  }`}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right Actions: Contact Button & Mobile Menu Toggle */}
      <div className="flex items-center gap-[0.75rem]">
        <Link
          href="/contact"
          className="hidden sm:flex justify-center items-center bg-black hover:bg-gray-800 hover:scale-105 transition-all duration-200 active:scale-95 group text-white rounded-[1.4375rem] py-[0.437rem] px-[0.875rem] gap-[0.375rem] text-[0.875rem] lg:text-[1rem]"
        >
          <Image
            src="/images/phone_outlined.svg"
            alt="Phone"
            width={18}
            height={18}
            className="w-[1.125rem] h-[1.125rem] group-hover:scale-110 transition-transform duration-200"
          />
          <span>Contact Us</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-[2.5rem] h-[2.5rem] rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-[4.75rem] left-0 right-0 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-[1.25rem] p-[1.25rem] flex flex-col gap-[0.75rem] shadow-xl md:hidden z-50"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-[0.625rem] px-[1rem] rounded-[0.75rem] text-[1rem] ${
                    active ? "bg-black text-white font-medium" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.hasArrow && (
                    <Image
                      src="/images/right_arrow.svg"
                      alt="Right Arrow"
                      width={18}
                      height={18}
                      className={`w-[1.125rem] h-[1.125rem] ${active ? "invert brightness-0" : ""}`}
                    />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex justify-center items-center bg-[#067ACC] text-white py-[0.625rem] rounded-[0.75rem] font-medium text-[0.938rem] gap-[0.5rem] mt-2"
            >
              <Image
                src="/images/phone_outlined.svg"
                alt="Phone"
                width={18}
                height={18}
                className="w-[1.125rem] h-[1.125rem] brightness-0 invert"
              />
              <span>Contact Us</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
