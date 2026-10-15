import { Metadata } from "next";
import ProjectsPageClient from "@/app/projects/ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Custom Software, ERP & Web Apps | Code Pe Charcha",
  description:
    "Explore Code Pe Charcha's portfolio of custom ERP software, mobile apps, e-commerce platforms, and high-performance websites built for businesses in Jaipur & across India.",
  alternates: {
    canonical: "https://codepecharcha.in/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Custom Software & Web Apps | Code Pe Charcha",
    description:
      "Explore live demos and case studies of enterprise ERP software, clinical systems, mobile apps, and high-conversion websites engineered by Code Pe Charcha.",
    url: "https://codepecharcha.in/projects",
    siteName: "Code Pe Charcha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Pe Charcha Projects & Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Portfolio | Custom Software & Web Apps | Code Pe Charcha",
    description:
      "Explore live demos and case studies of enterprise ERP software, clinical systems, mobile apps, and websites engineered by Code Pe Charcha.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ProjectsPageClient />;
}
