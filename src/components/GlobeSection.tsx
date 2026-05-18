"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const R = 190; // globe radius
const CX = 220; // center x
const CY = 220; // center y

// Node lat/lon pairs — representative plumber markets
const NODES: [number, number][] = [
  [51, 0],     // London
  [40, -74],   // New York
  [-33, 151],  // Sydney
  [35, 140],   // Tokyo
  [19, -99],   // Mexico City
  [1, 103],    // Singapore
  [55, 37],    // Moscow
  [-23, -43],  // Rio
  [48, 2],     // Paris
  [-34, 18],   // Cape Town
];

function projectNode(lat: number, lon: number, rotDeg: number) {
  const latR = (lat * Math.PI) / 180;
  const lonR = ((lon + rotDeg) * Math.PI) / 180;
  const x = CX + R * Math.cos(latR) * Math.sin(lonR);
  const y = CY - R * Math.sin(latR) * 0.55;
  const depth = Math.cos(latR) * Math.cos(lonR);
  return { x, y, depth, visible: depth > 0 };
}

// Check if two nodes are close enough for a connection line
function shouldConnect(
  n1: { x: number; y: number; depth: number; visible: boolean },
  n2: { x: number; y: number; depth: number; visible: boolean }
) {
  if (!n1.visible || !n2.visible) return false;
  const d = Math.hypot(n2.x - n1.x, n2.y - n1.y);
  return d < 140 && d > 30;
}

export default function GlobeSection() {
  const [rotation, setRotation] = useState(0);
  const rafRef = useRef<number>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    function tick() {
      setRotation((r) => r + 0.18);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Compute projected nodes
  const projected = NODES.map(([lat, lon]) => projectNode(lat, lon, rotation));

  // Longitude ellipses rx
  const lonPhases = [0, 60, 120];
  const lonLines = lonPhases.map((phase) => ({
    rx: Math.abs(R * Math.cos(((rotation + phase) * Math.PI) / 180)),
    phase,
  }));

  // Latitude ellipses (fixed)
  const latLines = [
    { ry: R * 0.5 * 0.55, rx: R * Math.sqrt(1 - 0.25), y: CY - R * 0.5 * 0.55 },
    { ry: R * 0.866 * 0.55, rx: R * 0.5, y: CY - R * 0.866 * 0.55 },
    { ry: 0, rx: R, y: CY },
    { ry: R * 0.5 * 0.55, rx: R * Math.sqrt(1 - 0.25), y: CY + R * 0.5 * 0.55 },
    { ry: R * 0.866 * 0.55, rx: R * 0.5, y: CY + R * 0.866 * 0.55 },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#07111e" }}
    >
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(27,158,140,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease }}
            >
              <span className="inline-flex items-center gap-2 border border-teal/30 text-teal text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-teal rounded-full" />
                Built for plumbers everywhere
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28, clipPath: "inset(100% 0 0 0)" }}
              animate={inView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5"
            >
              Local plumbers.
              <br />
              <span style={{ color: "#1b9e8c" }}>Found everywhere.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6, ease }}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-md"
            >
              Every website we build is optimised so your plumbing business
              shows up when local customers search on Google — not buried on page 5.
            </motion.p>

            {/* Features */}
            {[
              { icon: "🔍", label: "Local SEO built in", desc: "Ranks in your area from day one" },
              { icon: "📱", label: "Mobile-first design", desc: "70%+ of searches happen on mobile" },
              { icon: "⚡", label: "Fast load speed", desc: "Under 2s — Google rewards this" },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5, ease }}
                className="flex items-start gap-3 mb-4"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-sm">
                  {f.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{f.label}</div>
                  <div className="text-xs text-slate-500">{f.desc}</div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5, ease }}
              className="mt-8"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-full text-sm"
                  style={{ backgroundColor: "#1b9e8c" }}>
                  Get your website
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <svg width="440" height="440" viewBox="0 0 440 440" className="overflow-visible">
                <defs>
                  <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#1b9e8c" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="#1b9e8c" stopOpacity="0.05" />
                    <stop offset="100%" stopColor="#1b9e8c" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="globeFill" cx="40%" cy="35%" r="60%">
                    <stop offset="0%" stopColor="#0d2440" />
                    <stop offset="100%" stopColor="#07111e" />
                  </radialGradient>
                </defs>

                {/* Outer glow */}
                <circle cx={CX} cy={CY} r={R + 30} fill="url(#globeGlow)" />

                {/* Globe fill */}
                <circle cx={CX} cy={CY} r={R} fill="url(#globeFill)" />

                {/* Latitude rings */}
                {latLines.map((l, i) => (
                  <ellipse
                    key={`lat-${i}`}
                    cx={CX} cy={l.y}
                    rx={l.rx} ry={Math.abs(l.ry)}
                    fill="none" stroke="#1b9e8c" strokeWidth="0.6" opacity="0.2"
                  />
                ))}

                {/* Longitude lines */}
                {lonLines.map((l, i) => (
                  <ellipse
                    key={`lon-${i}`}
                    cx={CX} cy={CY}
                    rx={l.rx} ry={R * 0.55}
                    fill="none" stroke="#1b9e8c" strokeWidth="0.6" opacity="0.2"
                  />
                ))}

                {/* Globe border */}
                <circle cx={CX} cy={CY} r={R} fill="none" stroke="#1b9e8c" strokeWidth="1" opacity="0.3" />

                {/* Connection lines between visible nearby nodes */}
                {projected.map((n1, i) =>
                  projected.slice(i + 1).map((n2, j) =>
                    shouldConnect(n1, n2) ? (
                      <line
                        key={`line-${i}-${j}`}
                        x1={n1.x} y1={n1.y}
                        x2={n2.x} y2={n2.y}
                        stroke="#1b9e8c"
                        strokeWidth="0.8"
                        opacity={Math.min(n1.depth, n2.depth) * 0.35}
                      />
                    ) : null
                  )
                )}

                {/* Nodes */}
                {projected.map((n, i) =>
                  n.visible ? (
                    <g key={`node-${i}`}>
                      {/* Glow ring for front nodes */}
                      {n.depth > 0.5 && (
                        <circle cx={n.x} cy={n.y} r={6} fill="#1b9e8c" opacity={n.depth * 0.15} />
                      )}
                      <circle
                        cx={n.x} cy={n.y}
                        r={n.depth > 0.6 ? 3.5 : 2}
                        fill="#1b9e8c"
                        opacity={Math.max(0.3, n.depth)}
                      />
                    </g>
                  ) : null
                )}

                {/* Pulsing node at "top" (most prominent) */}
                {projected[0]?.visible && (
                  <>
                    <motion.circle
                      cx={projected[0].x} cy={projected[0].y} r={6}
                      stroke="#1b9e8c" strokeWidth="1.5" fill="none"
                      animate={{ r: [6, 14], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <circle cx={projected[0].x} cy={projected[0].y} r={4} fill="#1b9e8c" opacity="0.9" />
                  </>
                )}
              </svg>

              {/* Floating stat cards around globe */}
              <motion.div
                className="absolute -top-2 -right-6 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-white text-xs font-bold">Google Rank #1</div>
                <div className="text-teal text-[9px]">Local search results</div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-6 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-white text-xs font-bold">SEO Included</div>
                <div className="text-teal text-[9px]">Every single site</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
