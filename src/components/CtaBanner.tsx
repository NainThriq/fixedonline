"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaBanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative bg-teal py-20 overflow-hidden">
      {/* Animated mesh gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(26,58,110,0.25) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 20% 70%, rgba(26,58,110,0.25) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 80% 30%, rgba(26,58,110,0.25) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Plumbing pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "url('/pattern.jpeg')", backgroundSize: "600px auto", backgroundRepeat: "repeat" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: 4 + (i % 3) * 4,
            height: 4 + (i % 3) * 4,
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20, clipPath: "inset(100% 0 0 0)" }}
          animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="text-3xl sm:text-4xl font-bold text-white leading-tight"
        >
          Ready to grow your plumbing business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-white/80 text-lg max-w-xl mx-auto"
        >
          Join the plumbers already winning more jobs online. Get in touch today
          and we&apos;ll have your site live within 48 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.6, ease }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link href="/contact"
              className="inline-block bg-white hover:bg-gray-50 text-teal font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base">
              Get Your Free Website
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/about"
              className="inline-block border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base">
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
