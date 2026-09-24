import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thecodepecharcha.vercel.app"),
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
    url: "https://thecodepecharcha.vercel.app",
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
    canonical: "https://thecodepecharcha.vercel.app",
  },
  verification: {
    google: "-qh8731Gx6TDJ6SAtaWmtIu5dehQs0zyUEoFjASAQQg",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Code Pe Charcha",
  image: "https://thecodepecharcha.vercel.app/logo.jpg",
  url: "https://thecodepecharcha.vercel.app",
  telephone: "+91-8949936535",
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
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/codepecharcha",
    "https://www.linkedin.com/company/codepecharcha",
    "https://www.instagram.com/codepecharcha",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
