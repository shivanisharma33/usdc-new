import type { Metadata } from 'next';
import LocationsPage from '@/views/Locations';

export const metadata: Metadata = {
  title: 'Locations',
  description:
    'Explore USDC operational and planned data center sites across strategic U.S. regions.',
  openGraph: {
    title: 'Locations | USDC',
    description: 'View USDC infrastructure footprint and regional capacity.',
    type: 'website',
  },
};

export default function Page() {
  return <LocationsPage />;
}
