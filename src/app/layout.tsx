import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codepecharcha.in"),
  applicationName: "Code Pe Charcha",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Code Pe Charcha",
  },
  title: {
    default:
      "Code Pe Charcha | Software Development, Mobile Apps & Digital Marketing",
    template: "%s | Code Pe Charcha",
  },
  description:
    "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
  keywords: [
    "Software Development",
    "Mobile App Development",
    "Digital Marketing",
    "Web Development",
    "IT Agency",
    "Tech Startup",
    "Code Pe Charcha",
    "SEO Services",
    "UI/UX Design",
  ],
  authors: [{ name: "Code Pe Charcha Team" }],
  creator: "Code Pe Charcha",
  publisher: "Code Pe Charcha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title:
      "Code Pe Charcha | Software Development, Mobile Apps & Digital Marketing",
    description:
      "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
    url: "https://codepecharcha.in",
    siteName: "Code Pe Charcha",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code Pe Charcha - Software Development, Mobile Apps and Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Code Pe Charcha | Software Development, Mobile Apps & Digital Marketing",
    description:
      "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
    images: ["/og-image.png"],
  },
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
  alternates: {
    canonical: "https://codepecharcha.in",
    languages: {
      "en-IN": "https://codepecharcha.in",
      "en-US": "https://codepecharcha.in",
    },
  },
  verification: {
    google: "-qh8731Gx6TDJ6SAtaWmtIu5dehQs0zyUEoFjASAQQg",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }, // SVG ka koi size issue nahi hota
      { url: "/logo.png", type: "image/png", sizes: "1200x1200" },
    ],
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://codepecharcha.in/#organization",
      name: "Code Pe Charcha",
      url: "https://codepecharcha.in",
      logo: {
        "@type": "ImageObject",
        url: "https://codepecharcha.in/logo.png",
        width: 1200,
        height: 1200,
      },
      sameAs: [
        "https://www.facebook.com/people/codepecharcha/61594409911258/",
        "https://www.linkedin.com/company/codepecharcha-solutions",
        "https://www.instagram.com/code.pe_charcha",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8949936535",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://codepecharcha.in/#localbusiness",
      name: "Code Pe Charcha",
      image: "https://codepecharcha.in/logo.png",
      url: "https://codepecharcha.in",
      telephone: "+91-8949936535",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Muhana Mandi Mod, Sanganer",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302029",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.7909,
        longitude: 75.7538,
      },
      areaServed: {
        "@type": "City",
        name: "Jaipur",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      parentOrganization: {
        "@id": "https://codepecharcha.in/#organization",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://codepecharcha.in/#website",
      url: "https://codepecharcha.in/",
      name: "Code Pe Charcha",
      alternateName: ["Code Pe Charcha Jaipur", "CodePeCharcha", "Code Pe Charcha Solutions"],
      description:
        "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
      publisher: {
        "@id": "https://codepecharcha.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://codepecharcha.in/services?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      hasPart: [
        {
          "@type": "WebPage",
          "@id": "https://codepecharcha.in/services",
          name: "Services",
          url: "https://codepecharcha.in/services",
          description: "Software, Mobile App, Web, CRM and ERP Development Services",
        },
        {
          "@type": "WebPage",
          "@id": "https://codepecharcha.in/projects",
          name: "Projects & Portfolio",
          url: "https://codepecharcha.in/projects",
          description: "Live Demos and Engineering Track Record of Software, Web and Mobile Apps",
        },
        {
          "@type": "WebPage",
          "@id": "https://codepecharcha.in/case-studies",
          name: "Case Studies",
          url: "https://codepecharcha.in/case-studies",
          description: "Detailed client case studies and technical architectures",
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://codepecharcha.in/#sitenav",
      name: "Primary Navigation Sitelinks",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Services",
          description: "Software Development, Mobile Apps, CRM, ERP & Web Solutions",
          url: "https://codepecharcha.in/services",
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "Projects",
          description: "Our portfolio of enterprise ERPs, clinical software, and web applications",
          url: "https://codepecharcha.in/projects",
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Case Studies",
          description: "Deep dive into client success stories and system architectures",
          url: "https://codepecharcha.in/case-studies",
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Website Development",
          description: "Modern, responsive, fast, and SEO-optimized business websites",
          url: "https://codepecharcha.in/services/website-development",
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Custom Software & ERP",
          description: "Bespoke SaaS platforms, internal tools, manufacturing and hospital ERPs",
          url: "https://codepecharcha.in/services/custom-software",
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Mobile App Development",
          description: "Native and cross-platform Android and iOS mobile app development",
          url: "https://codepecharcha.in/services/mobile-app-development",
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "CRM Development",
          description: "Multi-tenant CRM, lead pipelines, attendance, and task automation",
          url: "https://codepecharcha.in/services/crm-development",
        },
        {
          "@type": "SiteNavigationElement",
          position: 8,
          name: "Contact Us",
          description: "Get a free project consultation and quotation from our team",
          url: "https://codepecharcha.in/#contact",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-RWTHP1EJ69`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RWTHP1EJ69');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
