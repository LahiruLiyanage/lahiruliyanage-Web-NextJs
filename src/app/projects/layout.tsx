import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects by Lahiru Liyanage - Software Engineer Portfolio",
  description:
    "Explore software development and architectural projects by Lahiru Liyanage. View full-stack web applications, enterprise solutions, and innovative projects built with Next.js, TypeScript, React, Java, and modern technologies.",
  keywords: [
    "Lahiru Liyanage Projects",
    "Software Engineer Portfolio",
    "Project Architect Works",
    "Full-Stack Development Projects",
    "Next.js Projects",
    "TypeScript Applications",
    "React Projects",
    "Java Enterprise Projects",
    "Web Development Portfolio",
    "Architectural Design Projects",
    "Software Engineering Portfolio",
    "IJSE Developer Projects",
  ],
  openGraph: {
    title: "Projects by Lahiru Liyanage - Software Engineer Portfolio",
    description:
      "Explore innovative software development and architectural projects by experienced Software Engineer Lahiru Liyanage.",
    url: "https://www.lahiruliyanage.com/projects",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    title: "Projects by Lahiru Liyanage - Software Engineer Portfolio",
    description:
      "Explore innovative software development and architectural projects by experienced Software Engineer Lahiru Liyanage.",
  },
  alternates: {
    canonical: "https://www.lahiruliyanage.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
