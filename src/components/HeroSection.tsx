"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const cardShadow = {
  boxShadow:
    "0 0 0 1px rgba(0,0,0,0.055), 0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
};

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const ctrl = animate(0, target, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return ctrl.stop;
  }, [active, target]);
  return val;
}

// ─── Panel 1: Professional Website ───────────────────────────────
function ProfessionalWebsiteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24, y: 8 }}
      animate={{ opacity: 1, x: 0, y: [0, -7, 0] }}
      transition={{
        opacity: { delay: 1.0, duration: 0.7, ease },
        x: { delay: 1.0, duration: 0.7, ease },
        y: { delay: 1.0, duration: 3.5, repeat: Infinity, ease: "easeInOut" },
      }}
      className="bg-white rounded-2xl p-4 w-[158px]"
      style={cardShadow}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <motion.div
          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
          style={{ backgroundColor: "#1b9e8c" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg style={{ width: 9, height: 9, color: "white" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <span className="text-[11px] font-semibold text-slate-700" style={{ textWrap: "balance" } as React.CSSProperties}>Professional Website</span>
      </div>

      <div className="flex justify-center mb-3">
        <div className="relative w-16 h-16">
          {/* Concentric: outer 16px, ghost same 16px, rings +4px and +10px */}
          <div className="absolute inset-0 rounded-2xl opacity-15" style={{ backgroundColor: "#1b9e8c" }} />
          <motion.div
            className="absolute rounded-[20px] border-2 border-dashed"
            style={{ inset: "-4px", borderColor: "#1b9e8c" }}
            animate={{ opacity: [0.4, 0, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-[26px] border"
            style={{ inset: "-10px", borderColor: "#1b9e8c" }}
            animate={{ opacity: [0.2, 0, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
          {/* Icon box: outer 16px − 8px inset = 8px → rounded-lg */}
          <div className="absolute inset-2 rounded-lg flex items-center justify-center shadow-lg overflow-hidden" style={{ backgroundColor: "#1b9e8c" }}>
            <motion.svg
              style={{ width: 24, height: 24, color: "white", willChange: "transform" }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
            </motion.svg>
          </div>
        </div>
      </div>

      <div className="h-1 bg-slate-100 rounded-full overflow-hidden mb-2">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: "#1b9e8c", willChange: "transform" }}
          animate={{ x: ["-100%", "0%", "0%", "100%"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", times: [0, 0.45, 0.55, 1] }}
        />
      </div>

      <p className="text-[12px] font-bold text-center tabular-nums" style={{ color: "#1b9e8c" }}>Live in 48 Hours</p>
    </motion.div>
  );
}

// ─── Panel 2: 98% Completion donut ───────────────────────────────
function CompletionCard({ active }: { active: boolean }) {
  const r = 34;
  const circ = 2 * Math.PI * r;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay: 1.15, duration: 0.7, ease },
        y: { delay: 1.15, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      className="bg-white rounded-2xl p-4 w-[168px]"
      style={cardShadow}
    >
      <div className="relative flex justify-center mb-2">
        <svg width="86" height="86" viewBox="0 0 86 86">
          <circle cx="43" cy="43" r={r} fill="none" stroke="#f1f5f9" strokeWidth="9" />
          <g transform="rotate(-90 43 43)">
            <motion.circle
              cx="43" cy="43" r={r}
              fill="none" stroke="#1b9e8c" strokeWidth="9" strokeLinecap="round"
              strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              animate={active ? { strokeDashoffset: circ * 0.02 } : { strokeDashoffset: circ }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "stroke-dashoffset" }}
            />
          </g>
          <g transform="rotate(353 43 43)">
            <motion.circle
              cx="43" cy="43" r={r}
              fill="none" stroke="#fb923c" strokeWidth="9" strokeLinecap="round"
              strokeDasharray={circ}
              initial={{ strokeDashoffset: circ }}
              animate={active ? { strokeDashoffset: circ * 0.97 } : { strokeDashoffset: circ }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </g>
          {active && (
            <motion.circle
              cx="43" cy={43 - r} r="5" fill="white"
              style={{ filter: "drop-shadow(0 0 4px #1b9e8c)", transformBox: "fill-box", transformOrigin: "43px 43px", willChange: "transform" }}
              animate={{ rotate: [0, 352] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2.2 }}
            />
          )}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="text-[22px] font-black text-slate-800 tabular-nums"
            animate={active ? { scale: [1, 1.08, 1] } : {}}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          >
            98%
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col gap-1 mb-2">
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: "#1b9e8c" }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-[9px] text-slate-500">On-Time Completion (98%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0" />
          <span className="text-[9px] text-slate-500">Delayed (2%)</span>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-2 text-center">
        <div className="text-[9px] text-slate-400 mb-0.5">Avg. Response Time</div>
        <motion.div
          className="text-[15px] font-black text-slate-800 tabular-nums"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {"< 2 Hours"}
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Panel 3: Revenue Growth bar chart ───────────────────────────
function RevenueCard({ active }: { active: boolean }) {
  const bars = [
    { month: "1", pct: 18, teal: false },
    { month: "3", pct: 38, teal: false },
    { month: "6", pct: 62, teal: false },
    { month: "12", pct: 100, teal: true },
  ];
  const maxH = 52;

  return (
    <motion.div
      initial={{ opacity: 0, x: 24, y: 8 }}
      animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.25, duration: 0.7, ease },
        x: { delay: 1.25, duration: 0.7, ease },
        y: { delay: 1.25, duration: 3.8, repeat: Infinity, ease: "easeInOut" },
      }}
      className="bg-white rounded-2xl p-4 w-[172px]"
      style={cardShadow}
    >
      <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide leading-tight mb-1">
        Average Client Revenue Growth
      </div>
      <motion.div
        className="text-[22px] font-black text-navy leading-none tabular-nums"
        animate={active ? { scale: [1, 1.06, 1] } : {}}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        +120%
      </motion.div>
      <div className="text-[9px] text-slate-400 mb-3">Ave. Revenue Increase</div>

      <div className="relative flex items-end gap-1.5 overflow-hidden" style={{ height: maxH + 14 }}>
        {bars.map((b, i) => (
          <div key={b.month} className="flex flex-col items-center flex-1">
            <div className="w-full flex items-end relative" style={{ height: maxH }}>
              <motion.div
                className="w-full rounded-t relative overflow-hidden"
                style={{ backgroundColor: b.teal ? "#1b9e8c" : "#93c5d4", willChange: "transform" }}
                initial={{ height: 0 }}
                animate={active ? { height: Math.round((b.pct / 100) * maxH) } : { height: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute inset-0 opacity-40"
                  style={{ background: "linear-gradient(90deg, transparent, white, transparent)", willChange: "transform" }}
                  animate={active ? { x: ["-100%", "200%"] } : {}}
                  transition={{ delay: 1.2 + i * 0.15, duration: 1, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
            <span className="text-[8px] text-slate-400 mt-1 tabular-nums">{b.month}</span>
          </div>
        ))}
        {active && (
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ backgroundColor: "rgba(27,158,140,0.4)", willChange: "transform" }}
            animate={{ bottom: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        )}
      </div>

      <div className="flex justify-end mt-1">
        <motion.span
          className="text-[8px] font-bold"
          style={{ color: "#1b9e8c" }}
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          15mo: &gt;120%
        </motion.span>
      </div>
    </motion.div>
  );
}

// ─── Panel 4: Clients Trusted ─────────────────────────────────────
function TrustCard({ active }: { active: boolean }) {
  const count = useCounter(200, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay: 1.35, duration: 0.7, ease },
        y: { delay: 1.35, duration: 4.2, repeat: Infinity, ease: "easeInOut" },
      }}
      className="bg-white rounded-2xl p-4 w-[172px]"
      style={cardShadow}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Over</div>
          <motion.div
            className="text-[20px] font-black text-navy leading-none tabular-nums"
            animate={active ? { scale: [1, 1.04, 1] } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            {active ? count.toLocaleString() : "200"}+
          </motion.div>
          <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">Plumbers Served</div>
        </div>
        <motion.svg
          style={{ width: 32, height: 32, color: "#1b9e8c", opacity: 0.7, flexShrink: 0, willChange: "transform" }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </motion.svg>
      </div>

      <div className="border-t border-slate-100 pt-2">
        <div className="text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">Average Rating:</div>
        <div className="text-[15px] font-black text-navy leading-none mb-1 tabular-nums">4.95 Stars</div>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              style={{ width: 13, height: 13, color: "#f59e0b", willChange: "transform, opacity" }}
              fill="currentColor" viewBox="0 0 20 20"
              initial={{ opacity: 0, scale: 0 }}
              animate={active ? { opacity: [1, 0.5, 1], scale: [1, 1.25, 1] } : { opacity: 0, scale: 0 }}
              transition={{
                opacity: { delay: 1.5 + i * 0.07, duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 },
                scale: { delay: 1.5 + i * 0.07, duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 },
              }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Metric toggle card ───────────────────────────────────────────
function MetricCard({ active }: { active: boolean }) {
  const [on, setOn] = useState(false);
  const count = useCounter(75, on);
  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setOn(true), 2400);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.85, duration: 0.7, ease }}
      className="bg-white rounded-2xl px-4 py-3.5 w-[200px] select-none cursor-pointer"
      style={cardShadow}
      onClick={() => setOn(!on)}
    >
      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2.5">Leads per month</div>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-3.5 rounded-full bg-slate-200 relative shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-white shadow absolute top-[2px] left-[2px]" />
          </div>
          <span className="text-[10px] text-slate-400">No website</span>
        </div>
        <span className="text-sm font-black text-slate-300 tabular-nums">8%</span>
      </div>
      <div className="h-px bg-slate-100 mb-2" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-3.5 rounded-full relative shrink-0" style={{ backgroundColor: "#1b9e8c" }}>
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-white shadow absolute top-[2px]"
              animate={{ left: on ? 15 : 2 }}
              transition={{ type: "spring", stiffness: 700, damping: 40, bounce: 0 }}
              style={{ willChange: "left" }}
            />
          </div>
          <span className="text-[10px] text-slate-700 font-semibold">Fixed Online</span>
        </div>
        <span className="text-sm font-black tabular-nums" style={{ color: "#1b9e8c" }}>
          {on ? count : 75}%
        </span>
      </div>
    </motion.div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────
export default function HeroSection() {
  const [started, setStarted] = useState(false);
  const rightRef = useRef(null);
  const inView = useInView(rightRef, { once: true });

  useEffect(() => { setStarted(true); }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden pt-16 antialiased"
      style={{ backgroundColor: "#eef2fb" }}
    >
      {/* Full-section video overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform" }}
        >
          <source src="/a.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Decorative background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[18, 36, 64, 82].map((pct) => (
          <div key={pct} className="absolute top-0 bottom-0 w-px border-l border-dashed border-slate-300/40"
            style={{ left: `${pct}%` }} />
        ))}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path d="M-100,300 Q300,80 700,320 T1500,200" stroke="#1b9e8c" strokeWidth="1.5" fill="none" opacity="0.12" />
          <path d="M0,600 Q400,400 800,580 T1600,460" stroke="#1b9e8c" strokeWidth="1" fill="none" opacity="0.08" />
          <line x1="0" y1="180" x2="400" y2="0" stroke="#1a3a6e" strokeWidth="1" opacity="0.08" strokeDasharray="6 4" />
          <line x1="1600" y1="200" x2="1200" y2="0" stroke="#1a3a6e" strokeWidth="1" opacity="0.08" strokeDasharray="6 4" />
          <line x1="0" y1="500" x2="300" y2="700" stroke="#1a3a6e" strokeWidth="1" opacity="0.06" strokeDasharray="4 6" />
          <line x1="1600" y1="500" x2="1300" y2="700" stroke="#1a3a6e" strokeWidth="1" opacity="0.06" strokeDasharray="4 6" />
          <path d="M100,0 Q200,300 50,550" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.07" />
          <path d="M600,0 Q500,200 700,350 T600,700" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.06" />
        </svg>
        <div className="absolute top-28 left-[17%] w-[19%] h-[58%] rounded-3xl border border-dashed border-slate-200/50" />
        <div className="absolute top-28 right-[17%] w-[19%] h-[58%] rounded-3xl border border-dashed border-slate-200/50" />
      </div>

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-6 pt-10 pb-16 min-h-[calc(100vh-4rem)]">

        {/* LEFT: Text */}
        <div className="flex-1 text-center lg:text-left lg:pr-4 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease }}>
            <span className="inline-flex items-center gap-2 bg-white text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm border border-slate-100">
              <motion.span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1b9e8c" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }} />
              Built exclusively for plumbers
            </span>
          </motion.div>

          {/* Ogilvy: short punchy contrast headline — clear positioning */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7, ease }}
            className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black leading-[1.1] tracking-tight mb-5 [text-wrap:balance]"
            style={{ color: "#0f172a" }}
          >
            We Build Plumber Websites.<br />
            You Fix Pipes.
          </motion.h1>

          {/* Ogilvy: opens with a vivid problem, closes with a specific promise */}
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6, ease }}
            className="text-slate-500 text-base sm:text-lg leading-relaxed mb-8 max-w-[460px] mx-auto lg:mx-0"
          >
            Right now, someone near you is searching &ldquo;plumber near me.&rdquo; If you don&apos;t have a website, they&apos;re calling your competitor. Fixed Online gets you a professional, SEO-ready site — built and live in 48 hours, done entirely for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44, duration: 0.55, ease }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
          >
            {/* Ogilvy: CTA names the benefit, not the action */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 500, damping: 35, bounce: 0 }}
            >
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3 rounded-full text-sm shadow-md"
                style={{ backgroundColor: "#1b9e8c" }}>
                Get My Free Quote
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 35, bounce: 0 }}
            >
              <a href="#our-work"
                className="inline-flex items-center justify-center font-semibold px-7 py-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-[border-color,box-shadow] text-sm shadow-sm">
                See a Live Example
              </a>
            </motion.div>
          </motion.div>

          <div className="flex justify-center lg:justify-start">
            <MetricCard active={started} />
          </div>
        </div>

        {/* RIGHT: Device + 4 panels */}
        <div ref={rightRef} className="relative flex-1 flex items-center justify-center w-full lg:max-w-[660px] py-8">
          <div className="absolute pointer-events-none" style={{
            inset: "-10%",
            background: "radial-gradient(ellipse 55% 55% at 55% 45%, rgba(27,158,140,0.12) 0%, transparent 65%)",
          }} />

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.9, ease }}
            className="relative z-10 w-full"
          >
            <Image
              src="/apple-screen.png"
              alt="Plumbing website on screen"
              width={640} height={640}
              className="w-full max-w-[540px] mx-auto"
              style={{ filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.14)) drop-shadow(0 4px 12px rgba(0,0,0,0.08))" }}
              priority
            />
          </motion.div>

          <div className="absolute top-[4%] left-[-2%] z-20 hidden lg:block">
            <ProfessionalWebsiteCard />
          </div>
          <div className="absolute bottom-[4%] left-[-2%] z-20 hidden lg:block">
            <CompletionCard active={inView} />
          </div>
          <div className="absolute top-[4%] right-[-2%] z-20 hidden lg:block">
            <RevenueCard active={inView} />
          </div>
          <div className="absolute bottom-[4%] right-[-2%] z-20 hidden lg:block">
            <TrustCard active={inView} />
          </div>
        </div>
      </div>

      {/* Mobile 2×2 grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6, ease }}
        className="relative z-10 grid grid-cols-2 lg:hidden gap-3 justify-items-center pb-10 px-5"
      >
        <ProfessionalWebsiteCard />
        <RevenueCard active={started} />
        <CompletionCard active={started} />
        <TrustCard active={started} />
      </motion.div>
    </section>
  );
}
