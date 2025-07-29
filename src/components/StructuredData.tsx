"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  type?: "person" | "organization" | "website";
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = "person" }) => {
  useEffect(() => {
    // Person Schema (Primary)
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Lahiru Liyanage",
      alternateName: ["Lahiru H. Liyanage", "L. H. Liyanage"],
      jobTitle: [
        "Software Engineer",
        "Project Architect",
        "Full-Stack Developer",
      ],
      description:
        "Experienced Software Engineer and Project Architect specializing in full-stack development, architectural design, and modern web technologies.",
      url: "https://www.lahiruliyanage.com",
      sameAs: [
        "https://github.com/LahiruLiyanage",
        "https://www.linkedin.com/in/lahiru-liyanage-643a26178/",
        "https://www.instagram.com/lhliyanage/",
      ],
      knowsAbout: [
        "Software Engineering",
        "Project Architecture",
        "Full-Stack Development",
        "Next.js",
        "TypeScript",
        "React",
        "JavaScript",
        "Web Development",
        "Enterprise Software",
        "Architectural Design",
        "Java",
        "Spring Framework",
        "Database Design",
        "UI/UX Design",
      ],
      worksFor: {
        "@type": "Organization",
        name: "IJSE",
        description: "Institute of Java Software Engineering",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Moratuwa",
        description: "University of Moratuwa, Sri Lanka",
      },
      nationality: "Sri Lankan",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
        addressRegion: "Western Province",
      },
      email: "lahiruUJ59@gmail.com",
      telephone: "+94719607296",
    };

    // Website Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "Website",
      name: "Lahiru Liyanage Portfolio",
      alternateName: "Lahiru Liyanage - Software Engineer",
      url: "https://www.lahiruliyanage.com",
      description:
        "Personal portfolio website of Lahiru Liyanage, Software Engineer and Project Architect",
      inLanguage: "en-US",
      isAccessibleForFree: true,
      creator: {
        "@type": "Person",
        name: "Lahiru Liyanage",
      },
      mainEntity: {
        "@id": "https://www.lahiruliyanage.com#person",
      },
    };

    // Professional Service Schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Lahiru Liyanage Software Engineering Services",
      description:
        "Professional software engineering and project architecture services",
      provider: {
        "@type": "Person",
        name: "Lahiru Liyanage",
      },
      serviceType: [
        "Software Engineering",
        "Project Architecture",
        "Full-Stack Development",
        "Web Application Development",
        "Enterprise Software Solutions",
      ],
      areaServed: "Worldwide",
      availableLanguage: "English",
    };

    // Create script elements and add to head
    const schemas = [personSchema, websiteSchema, professionalServiceSchema];

    schemas.forEach((schema, index) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = `structured-data-${index}`;
      script.innerHTML = JSON.stringify(schema);

      // Remove existing script if it exists
      const existing = document.getElementById(`structured-data-${index}`);
      if (existing) {
        existing.remove();
      }

      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      schemas.forEach((_, index) => {
        const script = document.getElementById(`structured-data-${index}`);
        if (script) {
          script.remove();
        }
      });
    };
  }, [type]);

  return null; // This component doesn't render anything
};

export default StructuredData;
