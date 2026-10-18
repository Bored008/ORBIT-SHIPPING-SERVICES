<div align="center">

# 🚢 ORBIT Shipping Services

**Next-Generation Digital Logistics & Freight Management Web Platform**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-orange?style=for-the-badge)](https://lenis.darkroom.engineering/)

<p align="center">
  A modern, high-performance web application designed for a premier global shipping and logistics provider. Built with smooth page transitions, interactive quote calculators, fluid animations, and responsive service portals.
</p>

</div>

---

## 📖 Overview

**ORBIT Shipping Services** provides businesses worldwide with end-to-end global freight management, supply chain solutions, and cargo tracking. This web application delivers a seamless digital experience featuring interactive service discovery, customized quote request forms, animated service highlights, and modern corporate branding.

---

## ✨ Features

- **🌊 Dedicated Freight Portals**:
  - **Ocean Freight**: Full Container Load (FCL), Less than Container Load (LCL), non-containerized cargo, and global port routes.
  - **Road Freight**: Full Truckload (FTL), Less than Truckload (LTL), cross-border transport, and specialized fleet logistics.
  - **Air Freight & Warehousing**: Overview of high-speed air cargo, bonded storage, and customs clearance services.
- **⚡ Interactive Quote Calculators**: Dynamic quote forms tailored for each transport mode with cargo dimensions, route selection, and instant requirement submission.
- **🎯 Dynamic Navigation**: Interactive desktop dropdowns with icons and descriptions, plus a responsive mobile slide-out menu.
- **🚀 Advanced Animations & Smooth Scroll**:
  - Integrated **GSAP** & **ScrollTrigger** for scroll-driven animations and hero typography reveals.
  - **Lenis Smooth Scroll** synchronized with GSAP ScrollTrigger for buttery-smooth 60fps scrolling.
  - **Framer Motion** for micro-interactions and animated UI states.
- **📱 Fully Responsive**: Tailored fluid layouts optimized across mobile, tablet, laptop, and ultra-wide displays.
- **🎨 Custom Design System**: Polished aesthetic utilizing modern typography (**Geist**, **Oswald**, and **Instrument Serif**), Tailwind CSS v4 variables, and SVG iconography.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
|---|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router with Turbopack & React 19 support |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first CSS engine with CSS variables |
| **Animations** | [GSAP 3](https://greensock.com/gsap/) & [ScrollTrigger](https://greensock.com/scrolltrigger/) | Advanced timeline and scroll-based animations |
| **Smooth Scroll**| [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll synchronizer |
| **Micro-interactions** | [Framer Motion](https://www.framer.com/motion/) | Component transitions and dropdown gestures |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent icons |
| **Typography** | `next/font/google` | Geist Sans, Oswald, and Instrument Serif |

---

## 📂 Project Structure

```text
ORBIT/
├── public/                     # Static assets (images, icons, svgs)
│   └── images/                 # Freight illustrations, logos, icons
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with fonts, Lenis, and Footer
│   │   ├── page.tsx            # Landing page (Hero, TrackRecord, Services, FAQ)
│   │   ├── globals.css         # Global styles & Tailwind v4 design tokens
│   │   └── services/           # Service routes
│   │       ├── page.tsx        # Services index
│   │       ├── ocean-freight/  # Dedicated Ocean Freight page
│   │       └── road-freight/   # Dedicated Road Freight page
│   └── components/
│       ├── SmoothScroll.tsx    # Lenis + GSAP ScrollTrigger synchronization
│       └── sections/           # Modular UI sections
│           ├── Navbar.tsx      # Global responsive navigation with dropdowns
│           ├── Footer.tsx      # Comprehensive site footer
│           ├── home/           # Homepage-specific components
│           │   ├── Hero.tsx
│           │   ├── TrackRecord.tsx
│           │   ├── Services.tsx
│           │   ├── Testimonials.tsx
│           │   └── FAQ.tsx
│           └── services/       # Service-specific components
│               ├── Hero.tsx
│               ├── Intro.tsx
│               ├── WhatWeOffer.tsx
│               ├── QuoteForm.tsx
│               └── road-freight/ # Road Freight modular components
│                   ├── Hero.tsx
│                   ├── Intro.tsx
│                   ├── Specifications.tsx
│                   ├── WhatWeOffer.tsx
│                   └── QuoteForm.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.18+` or `20+` recommended)
- `npm`, `pnpm`, or `yarn`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bored008/ORBIT-SHIPPING-SERVICES.git
   cd ORBIT-SHIPPING-SERVICES
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Next.js development server with Turbopack |
| `npm run build` | Compiles and optimizes the production build |
| `npm run start` | Runs the compiled production server |
| `npm run lint` | Runs ESLint to check for code issues |

---

## 🚢 Service Modules

- **Ocean Freight (`/services/ocean-freight`)**:
  - Sea freight overview with port statistics and container options.
  - Interactive quote form with custom container options and destination routing.
- **Road Freight (`/services/road-freight`)**:
  - Full truckload and part-load freight specifications.
  - Truck fleet specifications (curtainsiders, box trucks, temperature-controlled trailers).
  - Streamlined quote generator for road cargo.

---

## 📄 License

This project is proprietary and built for **Orbit Shipping Services**. All rights reserved.
