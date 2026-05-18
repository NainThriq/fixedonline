"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/icon-clock.png",
    title: "Ready in 48 Hours",
    description:
      "We turn around your website fast. From your first message to going live, the whole process takes under two days.",
  },
  {
    icon: "/icon-mobile.png",
    title: "Mobile-Optimised",
    description:
      "Over 70% of plumbing searches happen on mobile. Your site will look great and load fast on every device.",
  },
  {
    icon: "/icon-location.png",
    title: "SEO Ready",
    description:
      "We build every site with local SEO best practices so new customers in your area can actually find you.",
  },
  {
    icon: "/icon-wrench.png",
    title: "Zero Tech Needed",
    description:
      "You don't need to know anything about websites. We handle everything — from design to going live.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
            Everything your business needs online
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            We handle the whole thing. You stay focused on the jobs that matter.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-[74px] h-[74px] sm:w-[92px] sm:h-[92px]">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={92}
                  height={92}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg font-semibold text-navy">
                {f.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
