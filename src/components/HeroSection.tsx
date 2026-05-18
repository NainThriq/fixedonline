"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

// ─── Dot grid background ────────────────────────────────────────
function DotGrid() {
  return (
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: 0.3,
      }}
    />
  );
}

// ─── Flowing accent paths ────────────────────────────────────────
function AccentPaths() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,250 Q500,80 1000,280 T2000,200" stroke="#1b9e8c" strokeWidth="1.5" fill="none" opacity="0.1" />
      <path d="M0,500 Q400,300 800,480 T1600,380" stroke="#1a3a6e" strokeWidth="1" fill="none" opacity="0.07" />
      <path d="M150,0 Q250,400 100,800" stroke="#1b9e8c" strokeWidth="1" fill="none" opacity="0.07" />
      <path d="M1300,0 Q1100,400 1350,800" stroke="#1a3a6e" strokeWidth="1" fill="none" opacity="0.06" />
    </svg>
  );
}

// ─── Avatar circle ───────────────────────────────────────────────
function Avatar({ color, label, size = 32 }: { color: string; label: string; size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center text-white font-bold shrink-0 ring-2 ring-white"
      style={{ width: size, height: size, backgroundColor: color, fontSize: size * 0.35 }}
    >
      {label}
    </div>
  );
}

// ─── Metric Card (left) ──────────────────────────────────────────
function MetricCard({ started }: { started: boolean }) {
  const [on, setOn] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => {
      setOn(true);
      let c = 0;
      const iv = setInterval(() => {
        c += 3;
        if (c >= 79) { setCount(79); clearInterval(iv); }
        else setCount(c);
      }, 28);
      return () => clearInterval(iv);
    }, 5600);
    return () => clearTimeout(t);
  }, [started]);

  const bars = [18, 30, 22, 42, 28, 55, 79];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 3.2, duration: 0.9, ease }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 w-full max-w-[220px]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Enquiries</span>
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setOn(!on)}>
          <span className="text-[9px] text-slate-400">{on ? "With FO" : "Without"}</span>
          <div className={`w-8 h-4 rounded-full relative transition-colors duration-300 ${on ? "bg-teal" : "bg-slate-200"}`} style={{ flexShrink: 0 }}>
            <motion.div
              className="w-3 h-3 rounded-full bg-white shadow-sm absolute"
              style={{ top: 2 }}
              animate={{ left: on ? 18 : 2 }}
              transition={{ type: "spring", stiffness: 600, damping: 35 }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-end gap-0.5 mb-1">
        <motion.span className="text-4xl font-black text-navy leading-none" key={String(on)}>
          {on ? count : 0}
        </motion.span>
        <span className="text-base font-bold text-teal mb-0.5">%</span>
      </div>
      <p className="text-[10px] text-slate-400 mb-3 leading-relaxed">
        {on ? "more calls with a website" : "online visibility — invisible to customers"}
      </p>

      <div className="flex items-end gap-0.5 h-10">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm origin-bottom"
            animate={{ height: on ? `${h * 0.5}px` : `${h * 0.1}px`, backgroundColor: on ? "#1b9e8c" : "#e2e8f0" }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Speed Badge Card (right) ────────────────────────────────────
function SpeedCard() {
  const features = ["Mobile-optimised", "SEO built in", "Google-ready", "Done for you"];
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 5, duration: 0.9, ease }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 w-full max-w-[200px]"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-xl bg-teal-light flex items-center justify-center">
          <svg className="w-4 h-4 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <div className="text-xs font-bold text-navy">Live in 48h</div>
          <div className="text-[9px] text-slate-400">Guaranteed delivery</div>
        </div>
      </div>

      <div className="space-y-1.5">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-1.5">
            <svg className="w-3 h-3 text-teal shrink-0" viewBox="0 0 12 12" fill="currentColor">
              <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
            </svg>
            <span className="text-[10px] text-slate-600">{f}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5 bg-teal-light rounded-lg px-2 py-1.5">
        <motion.div
          className="w-2 h-2 rounded-full bg-teal"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <span className="text-[9px] font-semibold text-teal">Secured & Professional</span>
      </div>
    </motion.div>
  );
}

// ─── Network Hub ─────────────────────────────────────────────────
function NetworkHub() {
  const plumbers = [
    { x: 60, y: 40, label: "J", color: "#1a3a6e" },
    { x: 160, y: 25, label: "M", color: "#0f766e" },
    { x: 260, y: 40, label: "R", color: "#1a3a6e" },
  ];
  const customers = [
    { x: 60, y: 185, label: "K", color: "#475569" },
    { x: 160, y: 200, label: "S", color: "#334155" },
    { x: 260, y: 185, label: "D", color: "#475569" },
  ];
  const hub = { x: 160, y: 112 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.8, duration: 1, ease }}
      className="relative flex flex-col items-center"
    >
      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Plumbers</div>

      <svg width="320" height="230" viewBox="0 0 320 230" className="overflow-visible">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b9e8c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#1b9e8c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Lines plumbers → hub */}
        {plumbers.map((p, i) => (
          <motion.line
            key={`p${i}`}
            x1={p.x} y1={p.y} x2={hub.x} y2={hub.y}
            stroke="#1b9e8c" strokeWidth="1.5" strokeDasharray="4 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, strokeDashoffset: [0, -28] }}
            transition={{ delay: 4.2 + i * 0.1, opacity: { duration: 0.3 }, strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" } }}
          />
        ))}

        {/* Lines hub → customers */}
        {customers.map((c, i) => (
          <motion.line
            key={`c${i}`}
            x1={hub.x} y1={hub.y} x2={c.x} y2={c.y}
            stroke="#1a3a6e" strokeWidth="1.5" strokeDasharray="4 3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, strokeDashoffset: [0, -28] }}
            transition={{ delay: 4.5 + i * 0.1, opacity: { duration: 0.3 }, strokeDashoffset: { duration: 1.2, repeat: Infinity, ease: "linear" } }}
          />
        ))}

        {/* Hub glow */}
        <circle cx={hub.x} cy={hub.y} r="28" fill="url(#hubGlow)" />

        {/* Pulse ring */}
        <motion.circle
          cx={hub.x} cy={hub.y} r="22"
          stroke="#1b9e8c" strokeWidth="1.5" fill="none"
          animate={{ r: [22, 30], opacity: [0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Hub node */}
        <circle cx={hub.x} cy={hub.y} r="18" fill="#1b9e8c" />
        <text x={hub.x} y={hub.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">FO</text>

        {/* Plumber avatars */}
        {plumbers.map((p, i) => (
          <g key={`pa${i}`}>
            <circle cx={p.x} cy={p.y} r="14" fill={p.color} />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">{p.label}</text>
          </g>
        ))}

        {/* Customer avatars */}
        {customers.map((c, i) => (
          <g key={`ca${i}`}>
            <circle cx={c.x} cy={c.y} r="14" fill={c.color} />
            <text x={c.x} y={c.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="700">{c.label}</text>
          </g>
        ))}

        {/* Pulse dots plumber → hub */}
        {plumbers.map((p, i) => (
          <motion.circle
            key={`pd${i}`}
            r="3" fill="#1b9e8c"
            animate={{ cx: [p.x, hub.x], cy: [p.y, hub.y] }}
            transition={{ delay: 4.5 + i * 0.4, duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
          />
        ))}

        {/* Pulse dots hub → customers */}
        {customers.map((c, i) => (
          <motion.circle
            key={`cd${i}`}
            r="3" fill="#1a3a6e"
            animate={{ cx: [hub.x, c.x], cy: [hub.y, c.y] }}
            transition={{ delay: 5 + i * 0.4, duration: 1.2, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
          />
        ))}
      </svg>

      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">New Customers</div>
    </motion.div>
  );
}

// ─── Plumber card (bottom left) ──────────────────────────────────
function PlumberCard() {
  const plumbers = [
    { label: "J", name: "Jason M.", city: "Melbourne", color: "#1a3a6e" },
    { label: "L", name: "Liam T.", city: "Sydney", color: "#0f766e" },
    { label: "N", name: "Nathan R.", city: "Brisbane", color: "#1a3a6e" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 3.5, duration: 0.9, ease }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-full max-w-[220px]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Business</span>
        <span className="text-[9px] text-teal font-semibold">3 Active</span>
      </div>
      <div className="space-y-2">
        {plumbers.map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <Avatar color={p.color} label={p.label} size={28} />
            <div>
              <div className="text-[11px] font-semibold text-navy">{p.name}</div>
              <div className="text-[9px] text-slate-400">{p.city}</div>
            </div>
            <motion.div
              className="ml-auto w-1.5 h-1.5 rounded-full bg-teal"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Customer card (bottom right) ────────────────────────────────
function CustomerCard() {
  const customers = [
    { label: "S", name: "Sarah K.", action: "Viewing site", color: "#475569" },
    { label: "M", name: "Mike D.", action: "Sent enquiry", color: "#334155" },
    { label: "A", name: "Amy W.", action: "Called now", color: "#475569" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, y: 40 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 5.2, duration: 0.9, ease }}
      className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 w-full max-w-[200px]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Customers</span>
        <span className="text-[9px] text-navy font-semibold bg-navy/10 px-1.5 py-0.5 rounded-full">Online</span>
      </div>
      <div className="space-y-2">
        {customers.map((c, i) => (
          <div key={c.name} className="flex items-center gap-2">
            <Avatar color={c.color} label={c.label} size={28} />
            <div>
              <div className="text-[11px] font-semibold text-navy">{c.name}</div>
              <div className="text-[9px] text-teal">{c.action}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main Hero ───────────────────────────────────────────────────
export default function HeroSection() {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    setStarted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden bg-slate-50 pt-16">
      <DotGrid />
      <AccentPaths />

      {/* Hero text */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-6 pt-16 sm:pt-20 pb-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7, ease }}
        >
          <span className="inline-flex items-center gap-2 bg-teal-light text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <motion.span
              className="w-1.5 h-1.5 bg-teal rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            Websites for Australian Plumbers — Live in 48 Hours
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.08] tracking-tight mb-5"
        >
          We Build Websites.
          <br />
          <span className="text-teal">You Fix Pipes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.7, ease }}
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-8"
        >
          Fixed Online builds professional, mobile-ready websites for plumbing businesses
          across Australia. Get found on Google and start getting calls — no tech knowledge needed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-teal/25 transition-colors text-sm"
            >
              Get started
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400 }}>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-navy hover:text-teal font-semibold px-7 py-3.5 rounded-xl border-2 border-slate-200 hover:border-teal bg-white transition-all text-sm"
            >
              View live demo
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 pb-16">
        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
          {/* Left col */}
          <div className="flex flex-col gap-4 items-end">
            <MetricCard started={started} />
            <PlumberCard />
          </div>

          {/* Center col — network hub */}
          <div className="flex justify-center">
            <NetworkHub />
          </div>

          {/* Right col */}
          <div className="flex flex-col gap-4 items-start">
            <SpeedCard />
            <CustomerCard />
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="lg:hidden flex flex-col items-center gap-4">
          <NetworkHub />
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            <MetricCard started={started} />
            <SpeedCard />
          </div>
          <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
            <PlumberCard />
            <CustomerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
