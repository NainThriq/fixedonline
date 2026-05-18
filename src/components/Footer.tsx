"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function FooterNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;
    const nodes = Array.from({ length: 22 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1, pulse: Math.random() * Math.PI * 2,
    }));
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      nodes.forEach((n) => { n.x += n.vx; n.y += n.vy; n.pulse += 0.02; if (n.x < 0 || n.x > w) n.vx *= -1; if (n.y < 0 || n.y > h) n.vy *= -1; });
      nodes.forEach((a, i) => { nodes.slice(i + 1).forEach((b) => { const d = Math.hypot(b.x - a.x, b.y - a.y); if (d < 110) { ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.strokeStyle = `rgba(27,158,140,${(1 - d / 110) * 0.18})`; ctx.lineWidth = 0.7; ctx.stroke(); } }); });
      nodes.forEach((n) => { const p = Math.sin(n.pulse) * 0.5 + 0.5; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + p * 1.2, 0, Math.PI * 2); ctx.fillStyle = `rgba(27,158,140,${0.25 + p * 0.2})`; ctx.fill(); });
      raf = requestAnimationFrame(draw);
    }
    draw();
    const obs = new ResizeObserver(() => { w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w; canvas.height = h; });
    obs.observe(canvas);
    return () => { cancelAnimationFrame(raf); obs.disconnect(); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50" />;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Website Design", href: "/contact" },
  { label: "Local SEO", href: "/contact" },
  { label: "48h Delivery", href: "/contact" },
  { label: "Free Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      <FooterNetwork />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block bg-white rounded-xl px-3 py-2 mb-5">
              <Image src="/logo.jpeg" alt="Get Fixed Online" width={140} height={46} className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-sm text-blue-200 leading-relaxed mb-5 max-w-[220px]">
              Professional websites built exclusively for plumbers. Done for you in 48 hours.
            </p>
            <a
              href="mailto:hello@getfixedonline.uk"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@getfixedonline.uk
            </a>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-teal transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-teal transition-all duration-200" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Follow + CTA */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-5">Follow Us</h4>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/getfixedonline"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/8 transition-all duration-200 group mb-4"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white group-hover:text-teal transition-colors">@getfixedonline</div>
                <div className="text-xs text-blue-300">Follow on Instagram</div>
              </div>
            </a>

            {/* CTA card */}
            <div className="p-4 rounded-xl border border-teal/20 bg-teal/5">
              <p className="text-xs text-blue-200 mb-3 leading-relaxed">Ready to get your plumbing business online?</p>
              <Link href="/contact"
                className="block text-center bg-teal hover:bg-teal-dark text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
                Get a Free Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300/70">© {new Date().getFullYear()} Get Fixed Online. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-blue-300/70">Built exclusively for plumbers</span>
            <span className="text-blue-300/30">·</span>
            <a href="https://www.instagram.com/getfixedonline" target="_blank" rel="noopener noreferrer"
              className="text-xs text-blue-300/70 hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
