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

  return {
    title: `${project.name} - ${project.category} | Code Pe Charcha`,
    description: project.copy,
    openGraph: {
      title: `${project.name} Portfolio | Code Pe Charcha`,
      description: project.copy,
    },
    twitter: {
      title: `${project.name} Portfolio | Code Pe Charcha`,
      description: project.copy,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
