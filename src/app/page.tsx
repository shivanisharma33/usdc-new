import type { Metadata } from 'next';
import HomePage from '@/views/Home';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'USDC builds sustainable Tier III-ready infrastructure for high-performance computing and AI workloads.',
  openGraph: {
    title: 'USDC | Home',
    description:
      'Explore USDC infrastructure, sustainability strategy, and high-performance compute capabilities.',
    type: 'website',
  },
};

export default function Page() {
  return <HomePage />;
}
