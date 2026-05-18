"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
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

  return <span ref={ref} className="tabular-nums">{val}{suffix}</span>;
}

const stats = [
  { value: 48, suffix: "h", label: "Average Delivery", sub: "Fastest in the industry" },
  { value: 100, suffix: "%", label: "Done For You", sub: "We handle everything" },
  { value: 0, suffix: "", label: "Tech Knowledge\nNeeded", sub: "Zero learning curve" },
  { value: 5, suffix: "★", label: "Star Rated", sub: "Real plumber reviews" },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 sm:py-20"
      style={{ backgroundColor: "#07111e" }}
    >
      {/* Subtle teal gradient top */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1b9e8c60, transparent)" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1b9e8c30, transparent)" }}
      />
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(27,158,140,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">

        {/* Label above */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-teal mb-10"
        >
          The numbers speak for themselves
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.65, ease }}
              className="relative text-center px-6 py-6 group"
            >
              {/* Vertical divider (not on first) */}
              {i > 0 && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-white/8 hidden lg:block" />
              )}
              {/* Mobile: horizontal divider for second row */}
              {(i === 2) && (
                <div className="absolute top-0 left-0 right-0 h-px bg-white/8 lg:hidden" />
              )}

              {/* Big number */}
              <div
                className="text-5xl sm:text-6xl font-black leading-none mb-3"
                style={{ color: "#1b9e8c" }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>

              {/* Label */}
              <div className="text-sm font-bold text-white mb-1 whitespace-pre-line leading-snug">
                {s.label}
              </div>

              {/* Sub */}
              <div className="text-xs text-slate-500">{s.sub}</div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(27,158,140,0.07) 0%, transparent 70%)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
