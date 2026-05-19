"use client";

import Image from "next/image";
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

// ─── Animated plumbing pipe SVG ───────────────────────────────────
function PlumbingPipe({ inView }: { inView: boolean }) {
  return (
    <div className="relative w-full h-16 mb-8 hidden lg:block">
      <svg className="w-full h-full" viewBox="0 0 1200 64" preserveAspectRatio="none">
        {/* Main horizontal pipe */}
        <line x1="60" y1="48" x2="1140" y2="48" stroke="rgba(27,158,140,0.2)" strokeWidth="5" strokeLinecap="round" />

        {/* Animated water flow */}
        <motion.line
          x1="60" y1="48" x2="1140" y2="48"
          stroke="rgba(27,158,140,0.55)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="18 14"
          animate={inView ? { strokeDashoffset: [0, -96] } : {}}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "stroke-dashoffset" }}
        />

        {/* 4 vertical branch pipes up to stats */}
        {[168, 408, 792, 1032].map((x, i) => (
          <g key={i}>
            {/* Branch pipe */}
            <line x1={x} y1="48" x2={x} y2="8" stroke="rgba(27,158,140,0.2)" strokeWidth="4" strokeLinecap="round" />
            <motion.line
              x1={x} y1="48" x2={x} y2="8"
              stroke="rgba(27,158,140,0.5)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 8"
              animate={inView ? { strokeDashoffset: [0, -36] } : {}}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear", delay: i * 0.15 }}
            />
            {/* Joint at bottom of branch */}
            <circle cx={x} cy="48" r="7" fill="#07111e" stroke="rgba(27,158,140,0.5)" strokeWidth="2.5" />
            <motion.circle
              cx={x} cy="48" r="3.5"
              fill="#1b9e8c"
              animate={inView ? { opacity: [0.6, 1, 0.6], r: [3, 4.5, 3] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
            {/* Cap at top */}
            <rect x={x - 8} y="4" width="16" height="8" rx="3" fill="rgba(27,158,140,0.25)" />
            <motion.rect
              x={x - 8} y="4" width="16" height="8" rx="3"
              fill="rgba(27,158,140,0.0)"
              stroke="rgba(27,158,140,0.6)"
              strokeWidth="1.5"
              animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          </g>
        ))}

        {/* Elbow caps at pipe ends */}
        <circle cx="60" cy="48" r="6" fill="rgba(27,158,140,0.3)" />
        <circle cx="1140" cy="48" r="6" fill="rgba(27,158,140,0.3)" />

        {/* Wrench icon at center of pipe */}
        <g transform="translate(570, 30)">
          <motion.g
            animate={inView ? { rotate: [0, 15, -10, 5, 0] } : {}}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            style={{ transformOrigin: "0px 0px" }}
          >
            <circle cx="0" cy="0" r="11" fill="#07111e" stroke="rgba(27,158,140,0.4)" strokeWidth="1.5" />
            <text x="0" y="4.5" textAnchor="middle" fill="#1b9e8c" fontSize="11" fontWeight="800">⚙</text>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}

// ─── Trust row ────────────────────────────────────────────────────
const avatars = [1, 2, 3, 4, 5];

function TrustRow({ inView }: { inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6, duration: 0.7, ease }}
      className="mt-10 pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-6"
    >
      {/* Left: Avatars + trusted count */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          {avatars.map((n, i) => (
            <motion.div
              key={n}
              className="w-9 h-9 rounded-full ring-2 ring-[#07111e] overflow-hidden"
              style={{ marginLeft: i > 0 ? -10 : 0, zIndex: avatars.length - i }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4, ease }}
            >
              <Image
                src={`/reviewer-${n}.png`}
                alt="Plumber"
                width={36} height={36}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          <motion.div
            className="w-9 h-9 rounded-full ring-2 ring-[#07111e] flex items-center justify-center text-[10px] font-bold text-teal"
            style={{ marginLeft: -10, backgroundColor: "rgba(27,158,140,0.15)", zIndex: 0 }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.4, ease }}
          >
            200+
          </motion.div>
        </div>
        <div>
          <div className="text-sm font-bold text-white">Trusted by 200+ plumbing businesses</div>
          <div className="text-xs text-slate-500 mt-0.5">Across the UK, US & Australia</div>
        </div>
      </div>

      {/* Center: Plumbing icon badge */}
      <motion.div
        className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-white/10"
        style={{ backgroundColor: "rgba(27,158,140,0.08)" }}
        animate={inView ? { scale: [1, 1.03, 1] } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <svg style={{ width: 28, height: 28, color: "#1b9e8c" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
        <div>
          <div className="text-xs font-bold text-white">Specialist Agency</div>
          <div className="text-[10px] text-slate-500">100% focused on plumbers</div>
        </div>
      </motion.div>

      {/* Right: Rating */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-sm font-bold text-white">4.95 / 5 Rating</div>
          <div className="flex gap-0.5 justify-end mt-0.5">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                style={{ width: 12, height: 12, color: "#f59e0b" }}
                fill="currentColor" viewBox="0 0 20 20"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + i * 0.06, duration: 0.3, ease }}
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">From verified reviews</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-14 sm:py-20"
      style={{ backgroundColor: "#07111e" }}
    >
      {/* Top / bottom teal lines */}
      <div className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1b9e8c60, transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, #1b9e8c30, transparent)" }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 80% at 50% 50%, rgba(27,158,140,0.06) 0%, transparent 70%)" }} />

      {/* Water drop particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 3 + (i % 3),
            height: 3 + (i % 3),
            backgroundColor: "rgba(27,158,140,0.25)",
            left: `${12 + i * 14}%`,
            top: `${20 + (i % 2) * 50}%`,
          }}
          animate={{ y: [-6, 6, -6], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease }}
          className="text-center text-xs font-bold uppercase tracking-[0.2em] text-teal mb-8"
        >
          The numbers speak for themselves
        </motion.p>

        {/* Plumbing pipe connecting stats */}
        <PlumbingPipe inView={inView} />

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
              {i > 0 && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-white/8 hidden lg:block" />
              )}
              {i === 2 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-white/8 lg:hidden" />
              )}

              <div className="text-5xl sm:text-6xl font-black leading-none mb-3" style={{ color: "#1b9e8c" }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-bold text-white mb-1 whitespace-pre-line leading-snug">{s.label}</div>
              <div className="text-xs text-slate-500">{s.sub}</div>

              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(27,158,140,0.07) 0%, transparent 70%)" }} />
            </motion.div>
          ))}
        </div>

        {/* Trust row */}
        <TrustRow inView={inView} />
      </div>
    </section>
  );
}
