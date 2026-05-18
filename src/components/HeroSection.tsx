"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, animate } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Animated counter ────────────────────────────────────────────
function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    const ctrl = animate(0, target, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return ctrl.stop;
  }, [active, target]);
  return val;
}

// ─── Metric card ─────────────────────────────────────────────────
function MetricCard({ started }: { started: boolean }) {
  const [on, setOn] = useState(false);
  const count = useCounter(75, on);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setOn(true), 1800);
    return () => clearTimeout(t);
  }, [started]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 px-5 py-4 w-[200px] select-none"
    >
      {/* Row 1 — without */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-2xl font-black text-slate-300">8</span>
          <span className="text-xs font-bold text-slate-300">%</span>
        </div>
        <span className="text-[11px] text-slate-400 font-medium">Without Fixed Online</span>
        <div className="w-9 h-5 rounded-full bg-slate-200 relative ml-2 shrink-0">
          <div className="w-3.5 h-3.5 rounded-full bg-white shadow absolute top-[3px] left-[3px]" />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-slate-100 mb-3" />

      {/* Row 2 — with */}
      <div className="flex items-center justify-between" onClick={() => setOn(!on)}>
        <div>
          <span className="text-2xl font-black text-teal tabular-nums">{on ? count : 75}</span>
          <span className="text-xs font-bold text-teal">%</span>
        </div>
        <span className="text-[11px] text-slate-600 font-medium">With Fixed Online</span>
        <div
          className="w-9 h-5 rounded-full relative ml-2 shrink-0 cursor-pointer transition-colors duration-300"
          style={{ backgroundColor: "#1b9e8c" }}
        >
          <motion.div
            className="w-3.5 h-3.5 rounded-full bg-white shadow absolute top-[3px]"
            animate={{ left: on ? 18 : 3 }}
            transition={{ type: "spring", stiffness: 700, damping: 40 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Security badge card ──────────────────────────────────────────
function SecurityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 px-4 py-4 w-[170px]"
    >
      <p className="text-[10px] font-semibold text-slate-400 mb-3 flex items-center gap-1">
        <svg className="w-3 h-3 text-teal" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Professional Website
      </p>
      {/* Glowing dot visual */}
      <div className="flex items-center justify-center py-2">
        <div className="relative">
          <div className="w-14 h-14 rounded-xl bg-teal-light flex items-center justify-center">
            <motion.div
              className="w-10 h-10 rounded-lg bg-teal flex items-center justify-center shadow-lg shadow-teal/40"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
              </svg>
            </motion.div>
          </div>
          <motion.div
            className="absolute -inset-2 rounded-xl border border-teal/20"
            animate={{ opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>
      </div>
      <p className="text-[10px] text-center text-teal font-semibold mt-2">Live in 48 Hours</p>
    </motion.div>
  );
}

// ─── Plumber photo grid ("Your Customers" left card) ─────────────
function PlumberGrid() {
  const photos = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 w-[180px]"
    >
      <p className="text-[11px] font-semibold text-slate-500 mb-3">Your Plumbing Businesses</p>
      <div className="grid grid-cols-2 gap-2">
        {photos.map((n) => (
          <div key={n} className="aspect-square rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={`/reviewer-${n}.png`}
              alt=""
              width={80}
              height={80}
              className="w-full h-full object-cover object-top"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── CX Team grid ("Your CX Team" right card) ────────────────────
function CustomerGrid() {
  const avatars = [
    { label: "S", color: "#1a3a6e", name: "Sarah" },
    { label: "M", color: "#0f766e", name: "Mike" },
    { label: "A", color: "#475569", name: "Amy" },
    { label: "D", color: "#334155", name: "Dave" },
    { label: "L", color: "#1a3a6e", name: "Lisa" },
    { label: "R", color: "#0f766e", name: "Ryan" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.6, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 p-4 w-[180px]"
    >
      <div className="flex items-center gap-1.5 mb-3">
        <svg className="w-3.5 h-3.5 text-teal" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
        <p className="text-[11px] font-semibold text-slate-500">Your Customers</p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {avatars.map((a, i) => (
          <motion.div key={a.name}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 + i * 0.06, duration: 0.35, ease }}
            className="flex flex-col items-center gap-1"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold ring-2 ring-white shadow-sm"
              style={{ backgroundColor: a.color }}
            >
              {a.label}
            </div>
            <span className="text-[8px] text-slate-400 font-medium">{a.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Network Hub center visualization ────────────────────────────
function NetworkCenter() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, duration: 0.8, ease }}
      className="relative flex items-center justify-center"
    >
      <svg width="220" height="80" viewBox="0 0 220 80">
        {/* Left arrows */}
        <motion.path d="M30,40 H88" stroke="#cbd5e1" strokeWidth="1.5" fill="none"
          strokeDasharray="4 3"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <polygon points="86,36 94,40 86,44" fill="#cbd5e1" />

        {/* Right arrows */}
        <motion.path d="M132,40 H190" stroke="#1b9e8c" strokeWidth="1.5" fill="none"
          strokeDasharray="4 3"
          animate={{ strokeDashoffset: [0, -28] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <polygon points="188,36 196,40 188,44" fill="#1b9e8c" />

        {/* Dot on right arrow */}
        <motion.circle r="4" fill="#1b9e8c"
          animate={{ cx: [132, 188], cy: [40, 40], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
        />
        <motion.circle r="4" fill="#94a3b8"
          animate={{ cx: [86, 30], cy: [40, 40], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.6 }}
        />
      </svg>

      {/* Hub pill */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <motion.div
          className="flex items-center gap-2 bg-navy text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg"
          animate={{ boxShadow: ["0 4px 20px rgba(26,58,110,0.3)", "0 4px 32px rgba(26,58,110,0.5)", "0 4px 20px rgba(26,58,110,0.3)"] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-4 h-4 rounded-full bg-teal flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          Fixed Online
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────────
export default function HeroSection() {
  const [started, setStarted] = useState(false);
  useEffect(() => { setStarted(true); }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden pt-16"
      style={{ backgroundColor: "#eef2fb" }}
    >
      {/* Dashed structural columns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[18, 36, 64, 82].map((pct) => (
          <div
            key={pct}
            className="absolute top-0 bottom-0 w-px border-l border-dashed border-slate-300/50"
            style={{ left: `${pct}%` }}
          />
        ))}
        {/* Subtle rounded rectangles as decorators */}
        <div className="absolute top-32 left-[17%] w-[19%] h-[55%] rounded-3xl border border-dashed border-slate-200/60" />
        <div className="absolute top-32 right-[17%] w-[19%] h-[55%] rounded-3xl border border-dashed border-slate-200/60" />
      </div>

      {/* ── Hero text ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-6 pt-16 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}>
          <span className="inline-flex items-center gap-2 bg-white text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6 shadow-sm border border-slate-100">
            <motion.span className="w-1.5 h-1.5 bg-teal rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }} />
            Websites for Local Plumbers — Live in 48 Hours
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight mb-5"
          style={{ color: "#0f172a" }}
        >
          We Build Websites.<br />
          <span style={{ color: "#1b9e8c" }}>You Fix Pipes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8"
        >
          Fixed Online builds professional, mobile-ready websites for small plumbing
          businesses. Get found on Google and start getting more calls — no tech knowledge needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.55, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3 rounded-full text-sm transition-colors"
              style={{ backgroundColor: "#1b9e8c" }}>
              Get started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 35 }}>
            <a href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 font-semibold px-7 py-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-all text-sm shadow-sm">
              View live demo
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating top cards ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 hidden lg:flex justify-between items-start mb-4 px-20">
        <MetricCard started={started} />
        <SecurityCard />
      </div>

      {/* ── Bottom card row ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 pb-20">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <PlumberGrid />
          <NetworkCenter />
          <CustomerGrid />
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          <NetworkCenter />
          <div className="flex gap-3 flex-wrap justify-center">
            <MetricCard started={started} />
            <SecurityCard />
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <PlumberGrid />
            <CustomerGrid />
          </div>
        </div>
      </div>
    </section>
  );
}
