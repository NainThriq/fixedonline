"use client";

import { useRef } from "react";
import Image from "next/image";

const reviews = [
  { text: "Needed a professional website for my plumbing business and these guys delivered fast. The biggest thing for me was that my website was live and listed online within 48 hours exactly as promised.", name: "Jason M.", location: "Melbourne", photo: 1 },
  { text: "I had zero online presence before this. Within 2 days my plumbing business had a modern website up and running. Super smooth process.", name: "Liam T.", location: "Sydney", photo: 2 },
  { text: "What impressed me most was the speed. They got my plumbing website built and listed online within 48 hours and it already started bringing in enquiries.", name: "Nathan R.", location: "Brisbane", photo: 3 },
  { text: "Very professional team. The website looks clean, works perfectly on mobile, and they delivered everything way faster than I expected.", name: "Daniel P.", location: "Perth", photo: 4 },
  { text: "As a small plumbing business owner I didn't know anything about websites. They handled everything and got us online in just 48 hours.", name: "Chris W.", location: "Adelaide", photo: 5 },
  { text: "Best investment I made for my business this year. The site made us look far more trustworthy and professional online.", name: "Mark H.", location: "Gold Coast", photo: 6 },
  { text: "They understand tradie businesses properly. Fast setup, clean design, and the website was listed online almost immediately.", name: "Ben C.", location: "Canberra", photo: 7 },
  { text: "The turnaround time was crazy fast. Website launched within 48 hours and customers can now easily contact us online.", name: "Tyler G.", location: "Newcastle", photo: 8 },
  { text: "Excellent communication from start to finish. They built a website designed specifically to help plumbers get more calls.", name: "Aaron S.", location: "Melbourne", photo: 9 },
  { text: "Our old website looked outdated. The new one looks modern, professional, and started generating quote requests quickly.", name: "Jake L.", location: "Sydney", photo: 10 },
  { text: "Affordable, fast, and professional. They made the entire process easy and handled all the technical stuff for me.", name: "Ryan D.", location: "Perth", photo: 1 },
  { text: "My business finally looks legitimate online. Customers constantly mention how professional the website looks.", name: "Corey B.", location: "Brisbane", photo: 2 },
  { text: "They delivered exactly what they promised. Website live within 48 hours and already ranking locally better than before.", name: "Ethan K.", location: "Adelaide", photo: 3 },
  { text: "I relied only on word of mouth before this. Now customers actually find us online and send enquiries directly through the website.", name: "Luke J.", location: "Hobart", photo: 4 },
  { text: "Fastest and easiest experience I've had working with a web design company. Perfect for small plumbing businesses wanting more leads.", name: "Matthew F.", location: "Sydney", photo: 5 },
];

type Review = (typeof reviews)[0];

const row1 = reviews.slice(0, 8);
const row2 = reviews.slice(7);

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-72 sm:w-80 shrink-0 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mx-3">
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-teal fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-teal-light">
          <Image
            src={`/reviewer-${review.photo}.png`}
            alt={review.name}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-xs font-semibold text-navy">{review.name}</div>
          <div className="text-xs text-gray-400">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 40,
}: {
  items: Review[];
  reverse?: boolean;
  duration?: number;
}) {
  const doubled = [...items, ...items];
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => {
        if (ref.current) ref.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.animationPlayState = "running";
      }}
    >
      <div
        ref={ref}
        className="flex"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function ReviewsCarousel() {
  return (
    <section className="bg-surface py-16 sm:py-24 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 mb-10 sm:mb-14 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy">
          What plumbers say about us
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
          Real results from real tradespeople across Australia.
        </p>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} duration={45} />
        <MarqueeRow items={row2} reverse duration={40} />
      </div>
    </section>
  );
}
