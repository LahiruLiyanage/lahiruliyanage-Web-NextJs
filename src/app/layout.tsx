import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lahiruliyanage.com"),
  title: {
    default:
      "Lahiru Liyanage - Software Engineer | Project Architect | Full-Stack Developer",
    template: "%s | Lahiru Liyanage - Software Engineer",
  },
  description:
    "Lahiru Liyanage - Experienced Software Engineer and Project Architect specializing in full-stack development, architectural design, and modern web technologies. Expert in Next.js, TypeScript, React, and enterprise software solutions.",
  keywords: [
    "Lahiru Liyanage",
    "Software Engineer",
    "Project Architect",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "React Developer",
    "Architectural Designer",
    "Enterprise Software",
    "Sri Lanka Software Engineer",
    "IJSE Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Lahiru Liyanage" }],
  creator: "Lahiru Liyanage",
  publisher: "Lahiru Liyanage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.lahiruliyanage.com",
    title: "Lahiru Liyanage - Software Engineer | Project Architect",
    description:
      "Experienced Software Engineer and Project Architect specializing in full-stack development and architectural design. Expert in modern web technologies and enterprise solutions.",
    siteName: "Lahiru Liyanage Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lahiru Liyanage - Software Engineer and Project Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lahiru Liyanage - Software Engineer | Project Architect",
    description:
      "Experienced Software Engineer and Project Architect specializing in full-stack development and architectural design.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.lahiruliyanage.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StructuredData />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
