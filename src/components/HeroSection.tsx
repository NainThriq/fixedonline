"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

// ─── Rich background: colored lines + floating cards ─────────────
function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dashed structural columns */}
      {[18, 36, 64, 82].map((pct) => (
        <div key={pct} className="absolute top-0 bottom-0 w-px border-l border-dashed border-slate-300/40"
          style={{ left: `${pct}%` }} />
      ))}

      {/* Colored diagonal + curved lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Teal long curves */}
        <path d="M-100,300 Q300,80 700,320 T1500,200" stroke="#1b9e8c" strokeWidth="1.5" fill="none" opacity="0.12" />
        <path d="M0,600 Q400,400 800,580 T1600,460" stroke="#1b9e8c" strokeWidth="1" fill="none" opacity="0.08" />
        {/* Navy diagonal lines */}
        <line x1="0" y1="180" x2="400" y2="0" stroke="#1a3a6e" strokeWidth="1" opacity="0.08" strokeDasharray="6 4" />
        <line x1="1600" y1="200" x2="1200" y2="0" stroke="#1a3a6e" strokeWidth="1" opacity="0.08" strokeDasharray="6 4" />
        <line x1="0" y1="500" x2="300" y2="700" stroke="#1a3a6e" strokeWidth="1" opacity="0.06" strokeDasharray="4 6" />
        <line x1="1600" y1="500" x2="1300" y2="700" stroke="#1a3a6e" strokeWidth="1" opacity="0.06" strokeDasharray="4 6" />
        {/* Violet accent curves */}
        <path d="M1400,0 Q1300,250 1450,500" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.07" />
        <path d="M100,0 Q200,300 50,550" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.07" />
        {/* Amber warm line */}
        <path d="M600,0 Q500,200 700,350 T600,700" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.06" />
        {/* Dot grid top-right quadrant */}
        <circle cx="80%" cy="25%" r="1.5" fill="#1b9e8c" opacity="0.2" />
        <circle cx="83%" cy="32%" r="1.5" fill="#1b9e8c" opacity="0.15" />
        <circle cx="77%" cy="38%" r="1.5" fill="#1b9e8c" opacity="0.12" />
        <circle cx="20%" cy="72%" r="1.5" fill="#1a3a6e" opacity="0.15" />
        <circle cx="15%" cy="65%" r="1.5" fill="#1a3a6e" opacity="0.1" />
      </svg>

      {/* Rounded rectangle frame decorators */}
      <div className="absolute top-28 left-[17%] w-[19%] h-[58%] rounded-3xl border border-dashed border-slate-200/50" />
      <div className="absolute top-28 right-[17%] w-[19%] h-[58%] rounded-3xl border border-dashed border-slate-200/50" />

      {/* Top mini-cards — desktop only */}
      <motion.div
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6, ease }}
        className="absolute top-28 left-[6%] bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 items-center gap-2 hidden lg:flex"
      >
        <div className="w-6 h-6 rounded-lg bg-teal-light flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-teal" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-navy leading-none">5-Star Rated</div>
          <div className="text-[8px] text-slate-400">15+ reviews</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.6, ease }}
        className="absolute top-28 right-[6%] bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 items-center gap-2 hidden lg:flex"
      >
        <div className="w-6 h-6 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-navy leading-none">SEO Ready</div>
          <div className="text-[8px] text-slate-400">Google optimised</div>
        </div>
      </motion.div>

      {/* Bottom mini-cards — desktop only (mobile handled inline below hub) */}
      <motion.div
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.0, duration: 0.6, ease }}
        className="absolute bottom-32 left-[4%] bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 items-center gap-2 hidden lg:flex"
      >
        <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-bold text-navy leading-none">Mobile Ready</div>
          <div className="text-[8px] text-slate-400">All devices</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3.2, duration: 0.6, ease }}
        className="absolute bottom-32 right-[4%] bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 items-center gap-2 hidden lg:flex"
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-teal shrink-0"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        />
        <div>
          <div className="text-[10px] font-bold text-navy leading-none">Site Live</div>
          <div className="text-[8px] text-slate-400">48h delivery</div>
        </div>
      </motion.div>
    </div>
  );
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
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 px-5 py-4 w-[200px] select-none"
    >
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="text-2xl font-black text-slate-300">8</span>
          <span className="text-xs font-bold text-slate-300">%</span>
        </div>
        <span className="text-[10px] text-slate-400 font-medium">Without Fixed Online</span>
        <div className="w-9 h-5 rounded-full bg-slate-200 relative ml-2 shrink-0">
          <div className="w-3.5 h-3.5 rounded-full bg-white shadow absolute top-[3px] left-[3px]" />
        </div>
      </div>
      <div className="h-px bg-slate-100 mb-3" />
      <div className="flex items-center justify-between cursor-pointer" onClick={() => setOn(!on)}>
        <div>
          <span className="text-2xl font-black text-teal tabular-nums">{on ? count : 75}</span>
          <span className="text-xs font-bold text-teal">%</span>
        </div>
        <span className="text-[10px] text-slate-600 font-medium">With Fixed Online</span>
        <div className="w-9 h-5 rounded-full relative ml-2 shrink-0" style={{ backgroundColor: "#1b9e8c" }}>
          <motion.div className="w-3.5 h-3.5 rounded-full bg-white shadow absolute top-[3px]"
            animate={{ left: on ? 18 : 3 }}
            transition={{ type: "spring", stiffness: 700, damping: 40 }} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Security card ────────────────────────────────────────────────
function SecurityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.7, ease }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 px-4 py-4 w-[170px]"
    >
      <p className="text-[10px] font-semibold text-slate-400 mb-3 flex items-center gap-1">
        <svg className="w-3 h-3 text-teal" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        Professional Website
      </p>
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
          <motion.div className="absolute -inset-2 rounded-xl border border-teal/20"
            animate={{ opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }} />
        </div>
      </div>
      <p className="text-[10px] text-center text-teal font-semibold mt-2">Live in 48 Hours</p>
    </motion.div>
  );
}

// ─── Restored SVG network hub ─────────────────────────────────────
function NetworkHub() {
  const plumbers = [
    { x: 70, y: 44, label: "J", color: "#1a3a6e" },
    { x: 190, y: 26, label: "M", color: "#0f766e" },
    { x: 310, y: 44, label: "R", color: "#1a3a6e" },
  ];
  const customers = [
    { x: 70, y: 216, label: "K", color: "#475569" },
    { x: 190, y: 234, label: "S", color: "#334155" },
    { x: 310, y: 216, label: "D", color: "#475569" },
  ];
  const hub = { x: 190, y: 130 };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.9, ease }}
      className="flex flex-col items-center"
    >
      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Your Plumbers</div>

      <svg width="380" height="268" viewBox="0 0 380 268" className="overflow-visible">
        <defs>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b9e8c" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1b9e8c" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Lines plumbers → hub */}
        {plumbers.map((p, i) => (
          <motion.line key={`pl${i}`}
            x1={p.x} y1={p.y} x2={hub.x} y2={hub.y}
            stroke="#1b9e8c" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, strokeDashoffset: [0, -36] }}
            transition={{
              opacity: { delay: 1.8, duration: 0.4 },
              strokeDashoffset: { delay: 1.8, duration: 1.4, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}

        {/* Lines hub → customers */}
        {customers.map((c, i) => (
          <motion.line key={`cl${i}`}
            x1={hub.x} y1={hub.y} x2={c.x} y2={c.y}
            stroke="#1a3a6e" strokeWidth="1.5" strokeDasharray="5 4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, strokeDashoffset: [0, -36] }}
            transition={{
              opacity: { delay: 2.1, duration: 0.4 },
              strokeDashoffset: { delay: 2.1, duration: 1.4, repeat: Infinity, ease: "linear" },
            }}
          />
        ))}

        {/* Hub glow */}
        <circle cx={hub.x} cy={hub.y} r="34" fill="url(#hubGlow)" />

        {/* Pulse rings */}
        <motion.circle cx={hub.x} cy={hub.y} r="22" stroke="#1b9e8c" strokeWidth="1.5" fill="none"
          animate={{ r: [22, 36], opacity: [0.7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 2 }} />
        <motion.circle cx={hub.x} cy={hub.y} r="22" stroke="#1b9e8c" strokeWidth="1" fill="none"
          animate={{ r: [22, 44], opacity: [0.4, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 2.6 }} />

        {/* Hub node */}
        <circle cx={hub.x} cy={hub.y} r="20" fill="#1b9e8c" />
        <text x={hub.x} y={hub.y + 4} textAnchor="middle" fill="white" fontSize="9" fontWeight="800">FO</text>

        {/* Plumber nodes */}
        {plumbers.map((p, i) => (
          <motion.g key={`pn${i}`}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 + i * 0.08, duration: 0.45, ease }}>
            <circle cx={p.x} cy={p.y} r="16" fill={p.color} filter="url(#shadow)" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{p.label}</text>
          </motion.g>
        ))}

        {/* Customer nodes */}
        {customers.map((c, i) => (
          <motion.g key={`cn${i}`}
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 + i * 0.08, duration: 0.45, ease }}>
            <circle cx={c.x} cy={c.y} r="16" fill={c.color} />
            <text x={c.x} y={c.y + 5} textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{c.label}</text>
          </motion.g>
        ))}

        {/* Pulse dots plumber → hub */}
        {plumbers.map((p, i) => (
          <motion.circle key={`pp${i}`} r="4" fill="#1b9e8c"
            animate={{ cx: [p.x, hub.x], cy: [p.y, hub.y], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 2.4 + i * 0.55, duration: 1.0, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />
        ))}

        {/* Pulse dots hub → customers */}
        {customers.map((c, i) => (
          <motion.circle key={`cp${i}`} r="4" fill="#1a3a6e"
            animate={{ cx: [hub.x, c.x], cy: [hub.y, c.y], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 2.8 + i * 0.55, duration: 1.0, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
          />
        ))}
      </svg>

      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-2">New Customers</div>
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
      <Background />

      {/* ── Text ── */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-6 pt-16 pb-8 text-center">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}>
          <span className="inline-flex items-center gap-2 bg-white text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-5 shadow-sm border border-slate-100">
            <motion.span className="w-1.5 h-1.5 bg-teal rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }} />
            Built exclusively for plumbers
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.65, ease }}
          className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight mb-5"
          style={{ color: "#0f172a" }}
        >
          Look Like the Best<br />
          <span style={{ color: "#1b9e8c" }}>Plumber in Town.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-8"
        >
          We build done-for-you websites exclusively for plumbers — SEO included, live in 48 hours.
          No tech knowledge, no back-and-forth. Just a professional website that makes customers trust you before they even call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.55, ease }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3 rounded-full text-sm"
              style={{ backgroundColor: "#1b9e8c" }}>
              Get started
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 35 }}>
            <a href="#how-it-works"
              className="inline-flex items-center justify-center font-semibold px-7 py-3 rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 transition-all text-sm shadow-sm">
              View live demo
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Top floating cards ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 hidden lg:flex justify-between items-start mb-2" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
        <MetricCard started={started} />
        <SecurityCard />
      </div>

      {/* ── Network Hub ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 flex justify-center">
        <NetworkHub />
      </div>

      {/* ── Mobile bottom cards (below hub) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.0, duration: 0.6, ease }}
        className="relative z-10 flex lg:hidden gap-3 justify-center pb-12 mt-4"
      >
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
            <svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-navy leading-none">Mobile Ready</div>
            <div className="text-[8px] text-slate-400">All devices</div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-100 px-3 py-2 flex items-center gap-2">
          <motion.div className="w-2 h-2 rounded-full bg-teal shrink-0"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }} />
          <div>
            <div className="text-[10px] font-bold text-navy leading-none">Site Live</div>
            <div className="text-[8px] text-slate-400">48h delivery</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
