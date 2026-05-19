"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const info = [
  {
    icon: "✉",
    label: "Email us",
    value: "hello@getfixedonline.uk",
    href: "mailto:hello@getfixedonline.uk",
  },
  {
    icon: "⏱",
    label: "Response time",
    value: "Within a few hours",
    href: null,
  },
  {
    icon: "⚡",
    label: "Delivery",
    value: "Your site live in 48 hours",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <div className="flex justify-center mb-6">
              <Image
                src="/illustration.jpeg"
                alt="Get in touch illustration"
                width={280}
                height={180}
                className="w-48 sm:w-64 h-auto object-contain"
              />
            </div>
            <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy [text-wrap:balance]">
              Get your plumbing website built in 48 hours
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
              Tell us about your business and we&apos;ll get back to you within a few hours. No hard sell, no obligation — just a straight answer about what we can build for you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="space-y-4"
            >
              {info.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface rounded-2xl p-6 flex items-start gap-4"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 text-sm font-medium text-teal hover:text-teal-dark underline underline-offset-2 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-sm font-medium text-navy">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div className="bg-navy/5 rounded-2xl p-5 text-sm text-slate-600">
                <p className="font-semibold text-navy mb-2">Trusted by 200+ plumbing businesses</p>
                <p>We&apos;ve built websites for plumbers across the UK, US and Australia. Every site is professional, mobile-ready, and optimised for Google from day one. You don&apos;t need to prepare anything — just tell us your business name and service area and we handle the rest.</p>
                <p className="mt-3 text-xs text-slate-400">We never share your details. Read our <a href="/privacy" className="text-teal hover:underline">privacy policy</a>.</p>
              </div>

              <div className="bg-teal rounded-2xl p-6 text-white">
                <h2 className="text-lg font-bold mb-2">
                  What happens next?
                </h2>
                <ol className="space-y-2">
                  {[
                    "We review your message",
                    "We reach out to confirm details",
                    "We build your site in 48h",
                    "You go live 🎉",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-teal-light/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
