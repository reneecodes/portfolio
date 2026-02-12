import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Renee Martinez - UX Designer Portfolio",
  description: "Portfolio of Renee Martinez, a UX Designer specializing in intuitive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Renee Martinez",
        "jobTitle": "UI/UX Designer",
        "url": "https://renee-portfolio.com",
        "sameAs": [
          "https://www.linkedin.com/in/renee-martinez-9b63a725b",
          "https://www.behance.net/reneemartinez6",
          "https://github.com/renee-martinez" 
        ],
        "knowsAbout": ["UI/UX Design", "Next.js", "Tailwind CSS", "Brand Identity", "Figma", "Prototyping", "User Research", "Design Systems"],
        "description": "28-year-old female UI/UX Designer specializing in high-fidelity visual design, modern web aesthetics, and interactive prototypes."
      },
      {
        "@type": "ProfessionalService",
        "name": "Renee Martinez Design",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900 dark:text-gray-100`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
