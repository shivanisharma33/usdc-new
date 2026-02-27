import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/views/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Review the USDC privacy policy covering data collection, use, and protection.',
  openGraph: {
    title: 'Privacy Policy | USDC',
    description: 'USDC privacy practices and data handling commitments.',
    type: 'website',
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
