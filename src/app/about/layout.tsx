import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lahiru Liyanage - Software Engineer & Project Architect",
  description:
    "Learn about Lahiru Liyanage, an experienced Software Engineer and Project Architect with expertise in full-stack development, enterprise solutions, and architectural design. Based in Sri Lanka, specializing in Next.js, TypeScript, React, and Java.",
  keywords: [
    "Lahiru Liyanage",
    "About Software Engineer",
    "Project Architect Background",
    "Full-Stack Developer Experience",
    "Sri Lanka Software Engineer",
    "IJSE Developer",
    "University of Moratuwa Graduate",
    "Architecture to Software Development",
    "Enterprise Software Expert",
    "Java Spring Developer",
  ],
  openGraph: {
    title: "About Lahiru Liyanage - Software Engineer & Project Architect",
    description:
      "Experienced Software Engineer and Project Architect specializing in full-stack development and enterprise solutions.",
    url: "https://www.lahiruliyanage.com/about",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    title: "About Lahiru Liyanage - Software Engineer & Project Architect",
    description:
      "Experienced Software Engineer and Project Architect specializing in full-stack development and enterprise solutions.",
  },
  alternates: {
    canonical: "https://www.lahiruliyanage.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
