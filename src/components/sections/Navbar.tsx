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
  { path: "/services", label: "Services", hasArrow: true, isDropdown: true },
  { path: "/about", label: "About Us" },
  { path: "/careers", label: "Careers" },
  { path: "/tools", label: "Tools" },
];

const SERVICE_OPTIONS = [
  {
    title: "Ocean Freight",
    description: "FCL, LCL & global port-to-port ocean cargo",
    path: "/services/ocean-freight",
    icon: "/images/icon_ocean.svg",
  },
  {
    title: "Road Freight",
    description: "Full truckload, LTL & cross-border trucking",
    path: "/services/road-freight",
    icon: "/images/icon_road.svg",
  },
];

export function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
    setHoveredPath("/services");
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setHoveredPath(null);
    }, 200);
  };

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
        onMouseLeave={() => {
          if (!servicesDropdownOpen) setHoveredPath(null);
        }}
      >
        {NAV_LINKS.map((link) => {
          const active = isActive(link.path);
          const hovered = hoveredPath === link.path;

          if (link.isDropdown) {
            return (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <Link
                  href="/services"
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

                  <Image
                    src="/images/right_arrow.svg"
                    alt="Dropdown Arrow"
                    width={18}
                    height={18}
                    className={`w-[1.125rem] h-[1.125rem] relative z-10 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-90" : "group-hover:translate-x-0.5"
                    } ${active ? "invert brightness-0" : ""}`}
                  />
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-[calc(100%+0.625rem)] left-1/2 -translate-x-1/2 w-[18rem] bg-white/95 backdrop-blur-xl border border-white/60 rounded-[1.25rem] p-[0.625rem] shadow-[0px_20px_40px_rgba(0,0,0,0.15)] flex flex-col gap-[0.375rem] z-50"
                      onMouseEnter={handleServicesMouseEnter}
                      onMouseLeave={handleServicesMouseLeave}
                    >
                      {SERVICE_OPTIONS.map((option) => {
                        const isOptionActive =
                          pathname === option.path ||
                          (option.path === "/services/ocean-freight" && pathname === "/services");

                        return (
                          <Link
                            key={option.path}
                            href={option.path}
                            onClick={() => setServicesDropdownOpen(false)}
                            className={`flex items-start gap-[0.75rem] p-[0.75rem] rounded-[0.875rem] transition-all group/item ${
                              isOptionActive
                                ? "bg-black text-white"
                                : "hover:bg-cornflowerblue/10 text-gray-900"
                            }`}
                          >
                            <div
                              className={`w-[2.25rem] h-[2.25rem] rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                                isOptionActive
                                  ? "bg-white/20"
                                  : "bg-cornflowerblue/10 group-hover/item:bg-cornflowerblue text-white"
                              }`}
                            >
                              <Image
                                src={option.icon}
                                alt={option.title}
                                width={20}
                                height={20}
                                className={`w-[1.25rem] h-[1.25rem] object-contain transition-all ${
                                  isOptionActive
                                    ? "brightness-0 invert"
                                    : "brightness-0 group-hover/item:invert"
                                }`}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span
                                className={`text-[0.938rem] font-medium leading-tight ${
                                  isOptionActive
                                    ? "text-white"
                                    : "text-gray-900 group-hover/item:text-cornflowerblue"
                                }`}
                              >
                                {option.title}
                              </span>
                              <span
                                className={`text-[0.75rem] leading-[1.25] mt-0.5 ${
                                  isOptionActive
                                    ? "text-white/70"
                                    : "text-gray-500"
                                }`}
                              >
                                {option.description}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          }

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

              if (link.isDropdown) {
                return (
                  <div key={link.path} className="flex flex-col gap-1">
                    <div
                      className={`flex items-center justify-between py-[0.625rem] px-[1rem] rounded-[0.75rem] text-[1rem] ${
                        active ? "bg-black text-white font-medium" : "text-gray-700 font-medium"
                      }`}
                    >
                      <span>{link.label}</span>
                    </div>
                    {/* Sub-items in mobile menu */}
                    <div className="pl-4 flex flex-col gap-1 border-l-2 border-gray-200 ml-3 my-1">
                      {SERVICE_OPTIONS.map((sub) => {
                        const isSubActive =
                          pathname === sub.path ||
                          (sub.path === "/services/ocean-freight" && pathname === "/services");
                        return (
                          <Link
                            key={sub.path}
                            href={sub.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-2 py-2 px-3 rounded-[0.5rem] text-[0.875rem] transition-colors ${
                              isSubActive
                                ? "bg-cornflowerblue text-white font-medium"
                                : "text-gray-600 hover:text-black hover:bg-gray-100"
                            }`}
                          >
                            <Image
                              src={sub.icon}
                              alt={sub.title}
                              width={16}
                              height={16}
                              className={`w-4 h-4 object-contain ${
                                isSubActive ? "brightness-0 invert" : "brightness-0"
                              }`}
                            />
                            <span>{sub.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

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
