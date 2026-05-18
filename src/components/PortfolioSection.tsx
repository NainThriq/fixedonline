"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

function PortfolioCard({ site }: { site: Site }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white group">
      {/* Browser chrome */}
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-3 border-b border-gray-200">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400 truncate border border-gray-200">
          🔒 {site.url}
        </div>
        <a
          href={site.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-teal font-medium hover:underline shrink-0"
        >
          Visit →
        </a>
      </div>

      {/* Screenshot with hover overlay */}
      <div className="relative overflow-hidden">
        <Image
          src={site.screenshot}
          alt={`${site.name} website`}
          width={640}
          height={400}
          className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <a
          href={site.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-navy/0 hover:bg-navy/50 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100"
        >
          <span className="bg-white text-navy text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg">
            Explore Site →
          </span>
        </a>
      </div>

      {/* Tags */}
      <div className="px-4 py-3 flex flex-wrap gap-1.5">
        {site.tags.map((t) => (
          <span key={t} className="text-[10px] bg-teal-light text-teal font-medium px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
            Websites we&apos;ve built for plumbers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Every site is custom-built to represent your business — clean,
            professional, and optimised to convert visitors into enquiries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {sites.map((site, i) => (
            <motion.div
              key={site.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard site={site} />
              <div className="mt-4 px-1 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-navy">{site.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{site.location}</div>
                </div>
                <a
                  href={site.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-teal hover:text-teal-dark font-semibold transition-colors"
                >
                  View Site →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-400">
            Want yours to look this good?{" "}
            <a href="/contact" className="text-teal font-semibold hover:underline">
              Get in touch →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
