import type { Metadata } from 'next';
import AboutUsPage from '@/views/AboutUs';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about USDC mission, values, and strategy for building sustainable data center infrastructure.',
  openGraph: {
    title: 'About Us | USDC',
    description:
      'Meet USDC and see how we deliver sustainable, high-performance digital infrastructure.',
    type: 'website',
  },
};

export default function Page() {
  return <AboutUsPage />;
}
