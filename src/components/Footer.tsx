"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Animated network canvas for footer background
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

    // Nodes
    const nodes = Array.from({ length: 22 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // Draw connections
      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const d = Math.hypot(b.x - a.x, b.y - a.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(27,158,140,${(1 - d / 110) * 0.18})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((n) => {
        const pulse = Math.sin(n.pulse) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + pulse * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(27,158,140,${0.25 + pulse * 0.2})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    }

    draw();

    const observer = new ResizeObserver(() => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    });
    observer.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-navy text-white overflow-hidden">
      <FooterNetwork />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <Link href="/" className="inline-block bg-white rounded-xl px-3 py-2">
              <Image
                src="/logo.jpeg"
                alt="Fixed Online"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-sm text-blue-200 max-w-xs">
              Professional websites for plumbing businesses. Get online fast,
              get found faster.
            </p>
            <a
              href="mailto:hello@getfixedonline.uk"
              className="mt-4 inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello@getfixedonline.uk
            </a>
          </div>

          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="text-sm text-blue-200 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-blue-300">© {new Date().getFullYear()} Fixed Online. All rights reserved.</p>
          <p className="text-xs text-blue-300">Built for tradespeople who mean business.</p>
        </div>
      </div>
    </footer>
  );
}
