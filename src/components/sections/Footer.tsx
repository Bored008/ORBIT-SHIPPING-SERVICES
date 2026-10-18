import Image from "next/image";
import Link from "next/link";
import { Copyright, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full min-h-[48rem] md:min-h-[56rem] lg:min-h-[64rem] bg-transparent overflow-hidden flex flex-col items-center justify-end pt-28 sm:pt-36 pb-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_bg-701a59.png"
          alt="Delivery Truck"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* White Gradient Overlay to blend with the section above */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 2%, rgba(255,255,255,0.96) 4%, rgba(255,255,255,0.93) 5%, rgba(255,255,255,0.87) 7%, rgba(255,255,255,0.8) 9%, rgba(255,255,255,0.7) 10%, rgba(255,255,255,0.58) 12%, rgba(255,255,255,0.42) 14%, rgba(255,255,255,0.23) 17%, rgba(255,255,255,0) 21%)",
        }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-[82.5rem] flex flex-col gap-[2rem] sm:gap-[2.5rem] lg:gap-[3rem] px-[1.5rem] md:px-[2.5rem] lg:px-[3.75rem]">
        {/* Top: CTA Banner */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[1.25rem]">
          <div className="max-w-[28rem] flex flex-col items-start gap-[0.5rem]">
            <h3 className="font-sans font-bold text-white text-[1.5rem] sm:text-[1.75rem] leading-tight">
              Ready to Optimise Your Shipping?
            </h3>
            <p className="font-sans font-normal text-[0.875rem] leading-[1.25rem] text-white/70">
              Contact our logistics experts today for a tailored global solution.
            </p>
          </div>
          <Link
            href="/quote"
            className="rounded-num-23 bg-cornflowerblue hover:bg-blue-600 transition-colors py-[0.437rem] px-[0.875rem] gap-[0.25rem] text-[0.875rem] text-white flex items-center justify-center shrink-0 group self-start sm:self-auto"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-[1.063rem] h-[1.063rem] text-white group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.063rem] bg-white/30" />

        {/* Mid: Logo & Navigation */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-[2.5rem] lg:gap-[1.5rem]">
          {/* Logo & Socials */}
          <div className="flex flex-col gap-[1.5rem] lg:gap-[2rem] w-max">
            <div className="py-[0.375rem]">
              <Image
                src="/images/footer_logo.svg"
                alt="Orbit Shipping Services"
                width={274}
                height={103}
                className="w-[12rem] lg:w-[17.125rem] h-auto"
              />
            </div>

            <div className="flex flex-row items-center gap-[1rem] lg:gap-[1.25rem]">
              <span className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white whitespace-nowrap">
                Follow us on :
              </span>
              <div className="flex flex-row items-center gap-[1rem] lg:gap-[1.5rem]">
                <Link
                  href="#"
                  className="hover:scale-110 hover:opacity-80 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/images/icon_linkedin.svg"
                    alt="LinkedIn"
                    width={25}
                    height={25}
                    className="w-[1.5625rem] h-[1.5625rem]"
                  />
                </Link>
                <Link
                  href="#"
                  className="hover:scale-110 hover:opacity-80 transition-all duration-200"
                  aria-label="Twitter"
                >
                  <Image
                    src="/images/icon_twitter.svg"
                    alt="Twitter"
                    width={25}
                    height={25}
                    className="w-[1.5625rem] h-[1.5625rem]"
                  />
                </Link>
                <Link
                  href="#"
                  className="hover:scale-110 hover:opacity-80 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <Image
                    src="/images/icon_instagram.svg"
                    alt="Instagram"
                    width={25}
                    height={25}
                    className="w-[1.5625rem] h-[1.5625rem]"
                  />
                </Link>
                <Link
                  href="#"
                  className="hover:scale-110 hover:opacity-80 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <Image
                    src="/images/icon_facebook.svg"
                    alt="Facebook"
                    width={25}
                    height={25}
                    className="w-[1.5625rem] h-[1.5625rem]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[2rem] lg:gap-[2.5rem] w-full lg:w-[54.5rem] justify-between">
            {/* Column 1 */}
            <div className="flex flex-col gap-[1.125rem]">
              <h4 className="font-sans font-medium text-[1.125rem] leading-[1.2] tracking-[-0.02em] text-white">
                COMPANY
              </h4>
              <Link
                href="/about"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/press"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Press
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[1.125rem]">
              <h4 className="font-sans font-medium text-[1.125rem] leading-[1.2] tracking-[-0.02em] text-white">
                SERVICES
              </h4>
              <Link
                href="/services/air-freight"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Air Freight
              </Link>
              <Link
                href="/services/ocean-freight"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Ocean Freight
              </Link>
              <Link
                href="/services/road-freight"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Road Freight & Logistics
              </Link>
              <Link
                href="/services/warehousing"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Warehousing
              </Link>
              <Link
                href="/services/customs-clearance"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Customs Clearance
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[1.125rem]">
              <h4 className="font-sans font-medium text-[1.125rem] leading-[1.2] tracking-[-0.02em] text-white">
                RESOURCES
              </h4>
              <Link
                href="/track"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Track Your Shipment
              </Link>
              <Link
                href="/quote"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Get a Quote
              </Link>
              <Link
                href="/faq"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                FAQs
              </Link>
              <Link
                href="/guides"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200"
              >
                Shipping Guides
              </Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[1.125rem]">
              <h4 className="font-sans font-medium text-[1.125rem] leading-[1.2] tracking-[-0.02em] text-white">
                CONTACT
              </h4>
              <span className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75">
                Dubai, UAE
              </span>
              <a
                href="mailto:info@orbit-shipping.com"
                className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200 underline"
              >
                info@orbit-shipping.com
              </a>
              <span className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1.2] tracking-[-0.02em] text-white/75">
                +971 XX XXX XXXX
              </span>

              <Link
                href="/quote"
                className="mt-2 flex flex-row items-center justify-center gap-[0.5rem] py-[0.437rem] px-[0.875rem] bg-[#067ACC] hover:bg-blue-600 transition-colors duration-200 rounded-[1.4375rem] group w-fit"
              >
                <span className="font-sans font-normal text-[0.875rem] text-white">
                  Request a Quote
                </span>
                <ArrowRight className="w-[1.0625rem] h-[1.0625rem] text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom: Divider & Copyright */}
        <div className="flex flex-col gap-[1.125rem]">
          <div className="w-full h-[0.0625rem] bg-white/55 opacity-75" />

          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-[1rem]">
            <div className="flex flex-row items-center gap-[0.5rem]">
              <Copyright className="w-[1.25rem] h-[1.25rem] text-white/75" />
              <span className="font-sans font-normal text-[0.938rem] lg:text-[1rem] leading-[1] text-white/75">
                2026 ORBIT SHIPPING SERVICES. All Rights Reserved
              </span>
            </div>

            <div className="flex flex-row items-center gap-[1.125rem]">
              <Link
                href="/privacy-policy"
                className="font-sans font-normal text-[0.875rem] lg:text-[0.9375rem] text-white/75 hover:text-white transition-colors duration-200 underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="font-sans font-normal text-[0.875rem] lg:text-[0.9375rem] text-white/75 hover:text-white transition-colors duration-200 underline"
              >
                Terms of Service
              </Link>
              <Link
                href="/user-agreement"
                className="font-sans font-normal text-[0.875rem] lg:text-[0.9375rem] text-white/75 hover:text-white transition-colors duration-200 underline"
              >
                User Agreement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
