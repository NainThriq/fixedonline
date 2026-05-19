"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    icon: "✦",
    title: "Simplicity",
    description: "No jargon, no complicated processes. We make getting online as easy as calling a plumber.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description: "We know your time is money. Every website we deliver is built and live within 48 hours.",
  },
  {
    icon: "📈",
    title: "Results",
    description: "A website is only valuable if it brings in work. Everything we build is designed to generate enquiries.",
  },
];

const stats = [
  { value: "48h", label: "Delivery time" },
  { value: "100%", label: "Done for you" },
  { value: "SEO", label: "Built in" },
  { value: "$0", label: "Tech needed" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">

      {/* ── Premium Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-28">

        {/* Dot grid */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.28,
          }}
        />

        {/* Accent paths */}
        <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none" preserveAspectRatio="none">
          <path d="M0,180 Q400,60 900,220 T1800,150" stroke="#1b9e8c" strokeWidth="1.5" fill="none" opacity="0.1" />
          <path d="M0,380 Q350,200 700,360 T1400,280" stroke="#1a3a6e" strokeWidth="1" fill="none" opacity="0.07" />
          <path d="M100,0 Q200,350 80,700" stroke="#1b9e8c" strokeWidth="1" fill="none" opacity="0.06" />
          <path d="M1300,0 Q1100,350 1320,700" stroke="#1a3a6e" strokeWidth="1" fill="none" opacity="0.06" />
        </svg>

        <div className="max-w-6xl mx-auto px-5 sm:px-6">

          {/* Badge + headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <motion.span
                className="w-1.5 h-1.5 bg-teal rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.08] tracking-tight [text-wrap:balance]">
              The agency built exclusively
              <br />
              <span className="text-teal">for plumbers who want more calls.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Fixed Online was built to level the playing field for small plumbing businesses
              — giving them a professional online presence without the tech headaches.
            </p>
          </motion.div>

          {/* Photo + story */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Photo column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5] ring-1 ring-slate-200">
                <Image
                  src="/about-photo.jpeg"
                  alt="Hasnain Raza — founder of Fixed Online"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Founder name card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease }}
                className="absolute -bottom-5 -right-4 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100"
              >
                <div className="text-sm font-bold text-navy">Hasnain Raza</div>
                <div className="text-xs text-teal font-semibold">Founder, Fixed Online</div>
              </motion.div>

              {/* Floating 48h badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, ease }}
                className="absolute -top-4 -left-4 bg-teal rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <div className="text-white text-xs font-bold leading-none">Live in 48h</div>
                  <div className="text-white/70 text-[9px]">Guaranteed</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Story column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5">
                Hi, I&apos;m Hasnain.
              </h2>

              <div className="space-y-4 text-slate-500 leading-relaxed text-[15px]">
                <p>
                  I started Fixed Online with one simple goal: to help small plumbing
                  businesses compete in a world that&apos;s moved online. I kept seeing
                  the same thing — skilled, reliable plumbers losing jobs to competitors
                  with a basic website, not because they were better, but simply because
                  they could be found.
                </p>
                <p>
                  As a young entrepreneur with a background in web design, I knew I
                  could solve this. I built a system that takes the entire process off
                  your plate — from writing the copy to setting up your domain — and
                  delivers a professional, Google-ready website in 48 hours.
                </p>
                <p>
                  Plumbers are the backbone of every home and business. They deserve
                  an online presence that reflects the quality of their work.
                  That&apos;s what Fixed Online is here to do.
                </p>
              </div>

              {/* Stats grid */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.5, ease }}
                    className="bg-white rounded-xl border border-slate-100 shadow-sm p-3.5 text-center"
                  >
                    <div className="text-xl font-black text-teal">{s.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-7 flex flex-col sm:flex-row gap-3"
              >
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md shadow-teal/20 transition-colors"
                  >
                    Get your free website
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-navy">What we stand for</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.6, ease }}
                className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-md transition-shadow"
              >
                <span className="text-teal text-3xl font-bold">{v.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "url('/pattern.jpeg')", backgroundSize: "600px auto", backgroundRepeat: "repeat" }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative z-10 max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-blue-200 text-lg">
            It takes less than 2 minutes to fill in our contact form.
          </p>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
            <Link
              href="/contact"
              className="inline-block bg-teal hover:bg-teal-dark text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg shadow-teal/20"
            >
              Get Your Free Website
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
