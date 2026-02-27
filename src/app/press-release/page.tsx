import type { Metadata } from 'next';
import PressReleasePage from '@/views/PressRelease';

export const metadata: Metadata = {
  title: 'Press Releases',
  description:
    'Read official USDC announcements, press releases, and corporate news.',
  openGraph: {
    title: 'Press Releases | USDC',
    description: 'Official press releases and corporate announcements from USDC.',
    type: 'website',
  },
};

export default function Page() {
  return <PressReleasePage />;
}
