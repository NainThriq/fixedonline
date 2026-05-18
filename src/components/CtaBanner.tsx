"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="relative bg-teal py-20 overflow-hidden">
      {/* Plumbing pattern texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/pattern.jpeg')",
          backgroundSize: "600px auto",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
          Ready to grow your plumbing business?
        </h2>
        <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
          Join the plumbers already winning more jobs online. Get in touch today
          and we&apos;ll have your site live within 48 hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white hover:bg-gray-50 text-teal font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
          >
            Get Your Free Website
          </Link>
          <Link
            href="/about"
            className="border-2 border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            Learn More About Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
