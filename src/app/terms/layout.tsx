import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Code Pe Charcha',
  description: 'Read the terms of service and usage conditions for Code Pe Charcha.',
  alternates: {
    canonical: 'https://codepecharcha.in/terms',
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
