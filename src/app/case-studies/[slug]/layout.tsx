import { projects } from "@/data";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | null> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) return null;

  const title = `${project.h1 || project.name} Case Study | Code Pe Charcha`;
  const description = project.seoDescription || project.copy;
  const canonical = `https://codepecharcha.in/case-studies/${project.id}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(project.image ? { images: [project.image] } : {}),
    },
  };
}

export default async function CaseStudyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) return <>{children}</>;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://codepecharcha.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://codepecharcha.in/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `https://codepecharcha.in/case-studies/${project.id}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${project.name} Case Study`,
    description: project.copy,
    image: project.image ? `https://codepecharcha.in${project.image}` : undefined,
    author: {
      "@type": "Organization",
      name: "Code Pe Charcha",
      url: "https://codepecharcha.in"
    },
    publisher: {
      "@type": "Organization",
      name: "Code Pe Charcha",
      logo: {
        "@type": "ImageObject",
        url: "https://codepecharcha.in/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {children}
    </>
  );
}
