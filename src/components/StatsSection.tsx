"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Counter({ to, suffix = "", prefix = "" }: { to: number; suffix?: string; prefix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return ctrl.stop;
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{val}{suffix}
    </span>
  );
}

const stats = [
  {
    value: 48,
    suffix: "h",
    label: "Average Delivery",
    desc: "From your first message to a live website",
    color: "#1b9e8c",
  },
  {
    value: 100,
    suffix: "%",
    label: "Done For You",
    desc: "We handle everything — copy, design, hosting, domain",
    color: "#1a3a6e",
  },
  {
    value: 0,
    suffix: "",
    label: "Tech Knowledge Needed",
    desc: "If you can use a phone, you can work with us",
    color: "#7c3aed",
  },
  {
    value: 5,
    suffix: "★",
    label: "Star Rated Service",
    desc: "Real reviews from real plumbing businesses",
    color: "#d97706",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-black text-navy">
            The numbers speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 overflow-hidden group"
            >
              {/* Gradient top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: s.color }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${s.color}12 0%, transparent 70%)`,
                }}
              />

              <div
                className="text-4xl sm:text-5xl font-black mb-2"
                style={{ color: s.color }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-bold text-navy mb-1">{s.label}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
