import { Metadata } from 'next';
import { projects } from '@/data';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return {
      title: 'Project Not Found | Code Pe Charcha',
    };
  }

  const metadata: Metadata = {
    title: `${project.name} - ${project.category} | Code Pe Charcha`,
    description: project.copy,
    alternates: {
      canonical: `https://thecodepecharcha.vercel.app/projects/${project.id}`,
    },
    openGraph: {
      title: `${project.name} Portfolio | Code Pe Charcha`,
      description: project.copy,
      url: `https://thecodepecharcha.vercel.app/projects/${project.id}`,
      ...(project.image ? { images: [{ url: project.image }] } : {}),
    },
    twitter: {
      title: `${project.name} Portfolio | Code Pe Charcha`,
      description: project.copy,
      ...(project.image ? { card: "summary_large_image", images: [project.image] } : {}),
    },
  };

  return metadata;
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
