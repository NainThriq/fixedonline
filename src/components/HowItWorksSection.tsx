"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: "/icon-message.png",
    title: "You reach out",
    description:
      "Fill in our short contact form. Tell us your business name, service area, and what you want on your site.",
  },
  {
    number: "02",
    icon: "/icon-laptop-rocket.png",
    title: "We build your site",
    description:
      "Our team designs and builds your website in 48 hours. We handle copywriting, images, and all the tech.",
  },
  {
    number: "03",
    icon: "/icon-globe.png",
    title: "You go live",
    description:
      "We hand over your finished, fully live website. New customers can start finding you right away.",
  },
  {
    number: "04",
    icon: "/icon-headphone.png",
    title: "Ongoing support",
    description:
      "We don't disappear after launch. If anything breaks or needs updating, we handle it — fast and hassle-free.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-surface py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy [text-wrap:balance]">
            Your website. Live in 48 hours.
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Here&apos;s exactly what happens after you reach out — no surprises, no delays.
          </p>
        </div>

        <div className="relative">
          {/* Animated connector line */}
          <div className="hidden lg:block absolute top-[55px] left-[12.5%] right-[12.5%] h-px bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-teal origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with icon */}
                <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-full bg-teal-light flex items-center justify-center mb-4 sm:mb-6 z-10">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={80}
                    height={80}
                    className="w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] object-contain"
                  />
                </div>
                <div className="text-xs font-bold text-teal mb-1 tracking-wide">
                  STEP {step.number}
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-navy mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
