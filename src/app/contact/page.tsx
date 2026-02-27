import type { Metadata } from 'next';
import ContactPage from '@/views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact USDC for investor relations, media, careers, and general business inquiries.',
  openGraph: {
    title: 'Contact | USDC',
    description: 'Reach USDC teams for business, media, and operational inquiries.',
    type: 'website',
  },
};

export default function Page() {
  return <ContactPage />;
}
