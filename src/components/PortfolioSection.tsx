"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cardShadow = {
  boxShadow:
    "0 0 0 1px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
};

const cardShadowHover = {
  boxShadow:
    "0 0 0 1px rgba(0,0,0,0.06), 0 4px 8px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)",
};

type Site = {
  name: string;
  url: string;
  liveUrl: string;
  location: string;
  screenshot: string;
  tags: string[];
};

const sites: Site[] = [
  {
    name: "Ross Richdale Plumbers",
    url: "rossrichdale.co.nz",
    liveUrl: "https://ross-richdale-plumbers.vercel.app",
    location: "Christchurch, NZ",
    screenshot: "/portfolio-1.png",
    tags: ["Residential", "Commercial", "Gas Fitting", "24/7 Emergency"],
  },
  {
    name: "Peninsula Plumbers Ltd",
    url: "peninsulaplumbers.co.nz",
    liveUrl: "https://peninsula-plumbers-ltd.vercel.app",
    location: "Otago Peninsula, NZ",
    screenshot: "/portfolio-2.png",
    tags: ["Plumbing", "Bathrooms", "Emergency Call-Outs", "Free Quotes"],
  },
];

function PortfolioCard({ site, delay }: { site: Site; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.7, ease }}
    >
      {/* Card — hover lifts, shadow upgrades */}
      <motion.div
        className="rounded-2xl overflow-hidden bg-white"
        style={cardShadow}
        whileHover={{ y: -6, ...cardShadowHover }}
        transition={{ type: "spring", stiffness: 360, damping: 30, bounce: 0 }}
      >
        {/* Browser chrome — concentric: card rounded-2xl (16px), chrome is flush top so no inner radius needed */}
        <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-3"
          style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          {/* Address bar — rounded-md (6px) inside px-3 (12px) padding: 16−12 = fine at 6px */}
          <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 truncate"
            style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }}>
            🔒 {site.url}
          </div>
          {/* Hit area: px-3 py-2 gives 40px height comfortably */}
          <a
            href={site.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-teal font-semibold shrink-0 px-3 py-2 -my-2 rounded-md hover:bg-teal-light transition-[background-color] duration-150"
          >
            Visit →
          </a>
        </div>

        {/* Screenshot */}
        <div className="relative overflow-hidden">
          <Image
            src={site.screenshot}
            alt={`${site.name} website`}
            width={640}
            height={400}
            className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            style={{
              willChange: "transform",
              outline: "1px solid rgba(0,0,0,0.06)",
            }}
          />
          {/* Overlay — transition specific properties only */}
          <a
            href={site.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: "rgba(15,23,42,0)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(15,23,42,0)")}
          >
            <motion.span
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 500, damping: 35, bounce: 0 }}
              className="bg-white text-navy text-sm font-semibold px-5 py-2.5 rounded-xl"
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.18)" }}
            >
              Explore Site →
            </motion.span>
          </a>
        </div>

        {/* Tags — rounded-full inside 12px padding: fine */}
        <div className="px-4 py-3 flex flex-wrap gap-1.5">
          {site.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] bg-teal-light text-teal font-medium px-2.5 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Card info — staggered after card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.12, duration: 0.5, ease }}
        className="mt-4 px-1 flex items-center justify-between"
      >
        <div>
          <div className="text-sm font-semibold text-navy">{site.name}</div>
          <div className="text-xs text-gray-400 mt-0.5">{site.location}</div>
        </div>
        {/* Hit area: py-2 -my-2 for 40px tap target */}
        <a
          href={site.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-teal font-semibold transition-[color] duration-150 hover:text-teal-dark py-2 -my-2 px-1"
        >
          View Site →
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="our-work" className="bg-white py-16 sm:py-24 antialiased">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">

        {/* Header — split and staggered */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
          >
            Our Work
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6, ease }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy [text-wrap:balance]"
          >
            Websites we&apos;ve built for plumbers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.55, ease }}
            className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto [text-wrap:pretty]"
          >
            Our plumbing website design is custom-built to represent your business — clean,
            professional, and optimised to convert visitors into enquiries.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {sites.map((site, i) => (
            <PortfolioCard key={site.name} site={site} delay={i * 0.12} />
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-400">
            Want yours to look this good?{" "}
            <a
              href="/contact"
              className="text-teal font-semibold transition-[color] duration-150 hover:text-teal-dark underline-offset-2 hover:underline"
            >
              Get in touch →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
