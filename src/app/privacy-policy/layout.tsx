import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Code Pe Charcha',
  description: 'Read the privacy policy of Code Pe Charcha to understand how we handle your data.',
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
