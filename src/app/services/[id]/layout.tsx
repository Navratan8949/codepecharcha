import { Metadata } from 'next';
import { services } from '@/data';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return {
      title: 'Service Not Found | Code Pe Charcha',
    };
  }

  return {
    title: `${service.title} | Code Pe Charcha`,
    description: service.copy,
    openGraph: {
      title: `${service.title} | Code Pe Charcha`,
      description: service.copy,
    },
    twitter: {
      title: `${service.title} | Code Pe Charcha`,
      description: service.copy,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
