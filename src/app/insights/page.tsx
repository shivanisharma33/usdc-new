import type { Metadata } from 'next';
import InsightsPage from '@/views/Insights';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Industry insights, technology articles, and sustainability updates from USDC.',
  openGraph: {
    title: 'Insights | USDC',
    description: 'Read news and expert analysis on AI infrastructure and data center trends.',
    type: 'website',
  },
};

export default function Page() {
  return <InsightsPage />;
}
