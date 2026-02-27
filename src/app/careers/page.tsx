import type { Metadata } from 'next';
import CareersPage from '@/views/Careers';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join USDC and help build sustainable infrastructure for the future of computing.',
  openGraph: {
    title: 'Careers | USDC',
    description: 'Open roles and career opportunities at USDC.',
    type: 'website',
    url: '/careers',
  },
};

export default function Page() {
  return <CareersPage />;
}
