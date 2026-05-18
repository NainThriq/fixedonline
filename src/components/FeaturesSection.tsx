"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  {
    num: "01",
    stat: "48h",
    icon: "/icon-clock.png",
    title: "Ready in 48 Hours",
    description:
      "From your first message to a fully live website — the whole process takes under two days. Fastest delivery in the industry.",
    bg: "from-teal-light to-white",
    accent: "#1b9e8c",
    numColor: "rgba(27,158,140,0.07)",
  },
  {
    num: "02",
    stat: "70%+",
    icon: "/icon-mobile.png",
    title: "Mobile-Optimised",
    description:
      "Over 70% of plumbing searches happen on mobile. Your site looks great and loads fast on every device — phones, tablets, desktops.",
    bg: "from-blue-50 to-white",
    accent: "#1a3a6e",
    numColor: "rgba(26,58,110,0.07)",
  },
  {
    num: "03",
    stat: "#1",
    icon: "/icon-location.png",
    title: "SEO Ready",
    description:
      "Every site we build is optimised for Google from day one — local keywords, fast load speed, structured data. Get found by nearby customers.",
    bg: "from-violet-50 to-white",
    accent: "#7c3aed",
    numColor: "rgba(124,58,237,0.07)",
  },
  {
    num: "04",
    stat: "$0",
    icon: "/icon-wrench.png",
    title: "Zero Tech Needed",
    description:
      "You don't touch a single thing. We write the copy, set up hosting, connect your domain, and hand you a finished, live website.",
    bg: "from-amber-50 to-white",
    accent: "#d97706",
    numColor: "rgba(217,119,6,0.07)",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16 overflow-hidden">
          <motion.h2
            initial={{ opacity: 0, y: 32, clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
            transition={{ duration: 0.75, ease }}
            className="text-2xl sm:text-4xl font-black text-navy"
          >
            Everything your business needs online
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.6, ease }}
            className="mt-3 text-slate-500 max-w-xl mx-auto"
          >
            We handle the whole thing. You stay focused on the jobs that matter.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              whileHover={{ y: -8, transition: { duration: 0.22, ease } }}
              className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Hover colour fill from bottom */}
              <motion.div
                className="absolute inset-0 origin-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(to top, ${f.accent}10 0%, transparent 60%)`,
                }}
              />

              {/* Coloured top bar — draws in on scroll */}
              <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden">
                <motion.div
                  className="h-full origin-left"
                  style={{ backgroundColor: f.accent }}
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.7, ease }}
                />
              </div>

              {/* Icon area */}
              <div
                className={`relative px-6 pt-8 pb-5 bg-gradient-to-br ${f.bg}`}
              >
                {/* Big ghost number */}
                <div
                  className="absolute top-4 right-4 text-5xl font-black leading-none select-none"
                  style={{ color: f.numColor }}
                >
                  {f.num}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="w-16 h-16 relative z-10"
                >
                  <Image
                    src={f.icon}
                    alt={f.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Stat */}
                <div
                  className="text-3xl font-black mt-3 leading-none relative z-10"
                  style={{ color: f.accent }}
                >
                  {f.stat}
                </div>
              </div>

              {/* Text */}
              <div className="px-6 pt-4 pb-6 flex-1 relative z-10">
                <h3 className="text-base font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>

              {/* Bottom arrow — appears on hover */}
              <div className="px-6 pb-5 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 0 }}
                  className="flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ color: f.accent }}
                >
                  Learn more
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
