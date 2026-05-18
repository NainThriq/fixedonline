"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const values = [
  {
    icon: "✦",
    title: "Simplicity",
    description:
      "No jargon, no complicated processes. We make getting online as easy as calling a plumber.",
  },
  {
    icon: "⚡",
    title: "Speed",
    description:
      "We know your time is money. Every website we deliver is built and live within 48 hours.",
  },
  {
    icon: "📈",
    title: "Results",
    description:
      "A website is only valuable if it brings in work. Everything we build is designed to generate enquiries.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Hero heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy leading-tight">
              We believe every tradesperson
              <br />
              deserves to be found online.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fixed Online was built by a young entrepreneur who saw great
              plumbers losing work simply because they weren&apos;t online.
              He decided to fix that.
            </p>
          </motion.div>

          {/* Founder story — photo left, story right */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/5]">
                <Image
                  src="/about-photo.jpeg"
                  alt="Hasnain Raza — founder of Fixed Online"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              {/* Floating name card */}
              <div className="absolute -bottom-5 -right-4 bg-white rounded-xl shadow-lg px-4 py-3">
                <div className="text-sm font-bold text-navy">Hasnain Raza</div>
                <div className="text-xs text-teal font-medium">Founder, Fixed Online</div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl font-bold text-navy mb-5">
                Hi, I&apos;m Hasnain.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I started Fixed Online with one simple goal: to help
                  hardworking plumbers compete in a world that&apos;s moved
                  online. I kept seeing the same thing — skilled, reliable
                  tradespeople losing jobs to competitors who had a basic
                  website, not because they were better, but simply because
                  they could be found.
                </p>
                <p>
                  As a young entrepreneur with a background in web design, I
                  knew I could solve this. I built a system that takes the
                  entire process off your plate — from writing the copy to
                  setting up your domain — and delivers a professional,
                  Google-ready website in 48 hours.
                </p>
                <p>
                  Plumbers are the backbone of every home and business. They
                  deserve an online presence that reflects the quality of
                  their work. That&apos;s what Fixed Online is here to do.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { value: "48h", label: "Average delivery time" },
                  { value: "100%", label: "Done-for-you service" },
                  { value: "SEO", label: "Built in from day one" },
                  { value: "$0", label: "Tech knowledge needed" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface rounded-xl p-4">
                    <div className="text-xl font-bold text-teal">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <span className="text-teal text-3xl font-bold">{v.icon}</span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mt-4 text-blue-200 text-lg">
            It takes less than 2 minutes to fill in our contact form.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Your Free Website
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
