import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixed Online — Websites for Australian Plumbers",
  description:
    "Fixed Online builds professional websites for Australian plumbing businesses. Get online in 48 hours. Serving Sydney, Melbourne, Brisbane & beyond. No tech knowledge required.",
  keywords: [
    "plumber website Australia",
    "plumbing business website",
    "website for plumbers Sydney",
    "website for plumbers Melbourne",
    "website for plumbers Brisbane",
    "tradie website Australia",
    "plumbing website design",
    "get plumbing business online",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
