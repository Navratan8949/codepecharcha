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
    alternates: {
      canonical: `https://thecodepecharcha.vercel.app/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} | Code Pe Charcha`,
      description: service.copy,
      url: `https://thecodepecharcha.vercel.app/services/${service.id}`,
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
