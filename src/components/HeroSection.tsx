"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Tile from "./Tile";

const NUM_COLS = 14;
// 50 rows — covers full height on all screens including tall mobiles
const NUM_TILES = NUM_COLS * 50;

const PULSE_INDICES = new Set([
  12, 37, 58, 89, 103, 134, 167, 191, 214, 245, 268, 299, 322, 347,
  371, 398, 421, 456, 489, 512, 534, 567, 601, 623, 645, 678, 712, 745,
  778, 801, 834, 867, 889, 912, 945, 967,
]);
const getPulseDelay = (i: number): number | undefined => {
  if (!PULSE_INDICES.has(i)) return undefined;
  return (i % 11) * 0.45;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroSection() {
  return (
    // overflow-x-hidden clips the laptop if it bleeds right; tiles need overflow-hidden too
    <section className="relative min-h-screen flex items-center overflow-x-hidden bg-white pt-16">

      {/* Tile grid — own overflow wrapper so tiles never poke outside */}
      <div className="absolute inset-0 overflow-hidden pointer-events-auto">
        <div
          className="w-full h-full"
          style={{ display: "grid", gridTemplateColumns: `repeat(${NUM_COLS}, 1fr)` }}
        >
          {Array.from({ length: NUM_TILES }).map((_, i) => (
            <Tile key={i} pulseDelay={getPulseDelay(i)} />
          ))}
        </div>
      </div>

      {/* Soft teal glow top */}
      <div
        className="absolute inset-x-0 top-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(27,158,140,0.06) 0%, transparent 100%)",
        }}
      />

      {/* ─── Text content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full pointer-events-none">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:max-w-[42%] text-center lg:text-left"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-5 sm:mb-6">
                <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                Websites delivered in 48 hours
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy leading-[1.08] tracking-tight"
            >
              We Build Websites.
              <br />
              <span className="text-teal">You Fix Pipes.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Fixed Online gets your plumbing business online fast —
              professional, mobile-ready, and found on Google. No tech knowledge
              required.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pointer-events-auto"
            >
              <Link
                href="/contact"
                className="bg-teal hover:bg-teal-dark text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5 text-sm sm:text-base text-center"
              >
                Get Your Free Website
              </Link>
              <a
                href="#how-it-works"
                className="border-2 border-navy/20 text-navy hover:border-teal hover:text-teal font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all duration-200 text-sm sm:text-base text-center bg-white/70 backdrop-blur-sm"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-sm mx-auto lg:mx-0 sm:max-w-none"
            >
              {[
                { value: "48h", label: "Delivery time" },
                { value: "100%", label: "Mobile-ready" },
                { value: "SEO", label: "Optimised" },
                { value: "$0", label: "Tech knowledge" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-teal">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>


        </div>
      </div>

      {/* ─── Desktop laptop ───────────────────────────────────────────────────── */}
      {/* Absolutely positioned at section level — completely free of max-w-6xl   */}
      {/* w-[50vw] = 50% of viewport, e.g. 720px on 1440px screen                */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[50vw] max-w-[820px] pointer-events-none"
      >
        <Image
          src="/hero_section.png"
          alt="Plumbing website on a laptop"
          width={900}
          height={610}
          className="w-full h-auto drop-shadow-2xl"
          priority
        />
      </motion.div>

    </section>
  );
}
