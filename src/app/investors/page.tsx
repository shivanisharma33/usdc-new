import type { Metadata } from 'next';
import InvestorsPage from '@/views/Investors';

export const metadata: Metadata = {
  title: 'Investors',
  description:
    'Investor resources, performance highlights, and corporate updates from USDC and DigiPowerX.',
  openGraph: {
    title: 'Investors | USDC',
    description: 'Access investor information and the latest financial and corporate updates.',
    type: 'website',
  },
};

export default function Page() {
  return <InvestorsPage />;
}
