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
      alternateName: ["Code Pe Charcha Jaipur", "CodePeCharcha"],
      description:
        "Code Pe Charcha builds modern websites, mobile apps, custom software, CRM systems and digital solutions for businesses in Jaipur and across India.",
      publisher: {
        "@id": "https://codepecharcha.in/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://codepecharcha.in/services?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
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
