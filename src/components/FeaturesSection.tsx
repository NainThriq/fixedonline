"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: "/icon-clock.png", title: "Ready in 48 Hours", description: "We turn around your website fast. From your first message to going live, the whole process takes under two days.", color: "#1b9e8c" },
  { icon: "/icon-mobile.png", title: "Mobile-Optimised", description: "Over 70% of plumbing searches happen on mobile. Your site will look great and load fast on every device.", color: "#1a3a6e" },
  { icon: "/icon-location.png", title: "SEO Ready", description: "We build every site with local SEO best practices so new customers in your area can actually find you.", color: "#7c3aed" },
  { icon: "/icon-wrench.png", title: "Zero Tech Needed", description: "You don't need to know anything about websites. We handle everything — from design to going live.", color: "#d97706" },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-surface py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Section header with clip-path reveal */}
        <div className="text-center mb-10 sm:mb-14 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40, clipPath: "inset(100% 0 0 0)" }}
            animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
              Everything your business needs online
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto"
          >
            We handle the whole thing. You stay focused on the jobs that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease }}
              whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
              className="relative bg-white rounded-2xl p-5 sm:p-7 shadow-sm group overflow-hidden cursor-default"
            >
              {/* Gradient border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${f.color}20 0%, transparent 60%)`,
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-opacity-100 transition-all duration-300"
                style={{ borderColor: `${f.color}30` }}
              />

              {/* Top color line */}
              <motion.div
                className="absolute top-0 left-0 h-0.5 rounded-t-2xl"
                style={{ backgroundColor: f.color }}
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ delay: 0.5 + i * 0.12, duration: 0.6, ease }}
              />

              <div className="relative z-10">
                <div className="w-[74px] h-[74px] sm:w-[92px] sm:h-[92px] mb-4">
                  <Image src={f.icon} alt={f.title} width={92} height={92} className="w-full h-full object-contain" />
                </div>
                <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-navy">{f.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
