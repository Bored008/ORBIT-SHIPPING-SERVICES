import Image from "next/image";
import Link from "next/link";
import { Copyright, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full h-[1348px] bg-black overflow-hidden flex flex-col items-center justify-end">
      {/* Background Image with Fade Mask */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          WebkitMaskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 100%)",
          maskImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 21%, rgba(0,0,0,1) 100%)"
        }}
      >
        <Image 
          src="/images/footer_bg-701a59.png" 
          alt="Delivery Truck" 
          fill 
          className="object-cover"
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 w-full max-w-[1320px] flex flex-col gap-[64px] pb-[32px]">
        
        {/* Top: Logo & Navigation */}
        <div className="w-full flex flex-row justify-between items-end">
          
          {/* Logo & Socials */}
          <div className="flex flex-col gap-[32px] w-[287px]">
            <div className="py-[6px]">
              <Image 
                src="/images/footer_logo.svg" 
                alt="Orbit Shipping Services" 
                width={274} 
                height={103} 
                className="w-auto h-auto"
              />
            </div>
            
            <div className="flex flex-row items-center gap-[20px]">
              <span className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white">
                Follow us on :
              </span>
              <div className="flex flex-row items-center gap-[24px]">
                <Link href="#" className="hover:scale-110 hover:opacity-80 transition-all duration-200">
                  <Image src="/images/icon_linkedin.svg" alt="LinkedIn" width={20} height={20} className="w-[20px] h-[20px]" />
                </Link>
                <Link href="#" className="hover:scale-110 hover:opacity-80 transition-all duration-200">
                  <Image src="/images/icon_twitter.svg" alt="Twitter" width={20} height={20} className="w-[20px] h-[20px]" />
                </Link>
                <Link href="#" className="hover:scale-110 hover:opacity-80 transition-all duration-200">
                  <Image src="/images/icon_instagram.svg" alt="Instagram" width={20} height={20} className="w-[20px] h-[20px]" />
                </Link>
                <Link href="#" className="hover:scale-110 hover:opacity-80 transition-all duration-200">
                  <Image src="/images/icon_facebook.svg" alt="Facebook" width={20} height={20} className="w-[20px] h-[20px]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-row justify-between w-[873px]">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-[18px]">
              <h4 className="font-sans font-medium text-[18px] leading-[21.6px] tracking-[-0.02em] text-white">
                COMPANY
              </h4>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">About Us</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Careers</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Blog</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Press</Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[18px]">
              <h4 className="font-sans font-medium text-[18px] leading-[21.6px] tracking-[-0.02em] text-white">
                SERVICES
              </h4>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Air Freight</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Ocean Freight</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Road Freight & Logistics</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Warehousing</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Customs Clearance</Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[18px]">
              <h4 className="font-sans font-medium text-[18px] leading-[21.6px] tracking-[-0.02em] text-white">
                RESOURCES
              </h4>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Track Your Shipment</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Get a Quote</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">FAQs</Link>
              <Link href="#" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200">Shipping Guides</Link>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-[18px]">
              <h4 className="font-sans font-medium text-[18px] leading-[21.6px] tracking-[-0.02em] text-white">
                CONTACT
              </h4>
              <span className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75">Dubai, UAE</span>
              <a href="mailto:info@orbit-shipping.com" className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75 hover:text-white transition-colors duration-200 underline">info@orbit-shipping.com</a>
              <span className="font-sans font-normal text-[16px] leading-[19.2px] tracking-[-0.02em] text-white/75">+971 XX XXX XXXX</span>
              
              <Link 
                href="/quote" 
                className="mt-2 flex flex-row items-center justify-center gap-[8px] py-[7px] px-[14px] bg-[#067ACC] hover:bg-blue-600 transition-colors duration-200 rounded-[23px] group"
              >
                <span className="font-sans font-normal text-[14px] text-white">Request a Quote</span>
                <ArrowRight className="w-[17px] h-[17px] text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom: Divider & Copyright */}
        <div className="flex flex-col gap-[18px]">
          <div className="w-full h-[1px] bg-white/55 opacity-75" />
          
          <div className="w-full flex flex-row justify-between items-end">
            <div className="flex flex-row items-center gap-[8px]">
              <Copyright className="w-[20px] h-[20px] text-white/75" />
              <span className="font-sans font-normal text-[16px] leading-[0.82em] text-white/75 mt-1">
                2026 ORBIT SHIPPING SERVICES. All Rights Reserved
              </span>
            </div>

            <div className="flex flex-row items-center gap-[18px]">
              <Link href="#" className="font-sans font-normal text-[15px] leading-[14.97px] text-white/75 hover:text-white transition-colors duration-200 underline">Privacy Policy</Link>
              <Link href="#" className="font-sans font-normal text-[15px] leading-[14.97px] text-white/75 hover:text-white transition-colors duration-200 underline">Terms of Service</Link>
              <Link href="#" className="font-sans font-normal text-[15px] leading-[14.97px] text-white/75 hover:text-white transition-colors duration-200 underline">User Agreement</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

