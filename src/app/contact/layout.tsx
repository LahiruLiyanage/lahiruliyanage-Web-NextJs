import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Lahiru Liyanage - Software Engineer & Project Architect",
  description:
    "Get in touch with Lahiru Liyanage for software engineering services, project architecture consultation, and full-stack development opportunities. Available for freelance work and collaboration.",
  keywords: [
    "Contact Lahiru Liyanage",
    "Hire Software Engineer",
    "Project Architect Consultation",
    "Full-Stack Developer Contact",
    "Software Engineering Services",
    "Freelance Developer Sri Lanka",
    "Enterprise Software Consultant",
    "Next.js Developer Hire",
    "React Developer Contact",
    "Java Developer Services",
  ],
  openGraph: {
    title: "Contact Lahiru Liyanage - Software Engineer & Project Architect",
    description:
      "Get in touch with experienced Software Engineer Lahiru Liyanage for development services and project consultation.",
    url: "https://www.lahiruliyanage.com/contact",
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    title: "Contact Lahiru Liyanage - Software Engineer & Project Architect",
    description:
      "Get in touch with experienced Software Engineer Lahiru Liyanage for development services and project consultation.",
  },
  alternates: {
    canonical: "https://www.lahiruliyanage.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
