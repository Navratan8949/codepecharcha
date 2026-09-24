import { Metadata } from 'next';
import { projects } from '@/data';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Code Pe Charcha',
    };
  }

  const title = project.seoTitle || `${project.name} - ${project.category} | Code Pe Charcha`;
  const description = project.seoDescription || project.copy;

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: `https://codepecharcha.in/projects/${project.id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://codepecharcha.in/projects/${project.id}`,
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
    twitter: {
      title,
      description,
      ...(project.image ? { card: "summary_large_image", images: [project.image] } : {}),
    },
  };

  return metadata;
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  const breadcrumbLd = project ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://codepecharcha.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://codepecharcha.in/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.name,
        "item": `https://codepecharcha.in/projects/${project.id}`
      }
    ]
  } : null;

  return (
    <>
      {breadcrumbLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
      )}
      {children}
    </>
  );
}
