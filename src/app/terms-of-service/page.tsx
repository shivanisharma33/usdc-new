import type { Metadata } from 'next';
import TermsOfServicePage from '@/views/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Read the USDC Terms of Service for website access and service usage conditions.',
  openGraph: {
    title: 'Terms of Service | USDC',
    description: 'USDC legal terms for website and service use.',
    type: 'website',
  },
};

export default function Page() {
  return <TermsOfServicePage />;
}
