import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
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
              href="mailto:hello.fixedonline@gmail.com"
              className="mt-4 inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              hello.fixedonline@gmail.com
            </a>
          </div>

          <nav className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <Link href="/" className="text-sm text-blue-200 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm text-blue-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-blue-200 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} Fixed Online. All rights reserved.
          </p>
          <p className="text-xs text-blue-300">
            Built for tradespeople who mean business.
          </p>
        </div>
      </div>
    </footer>
  );
}
