import type { Metadata } from 'next';
import ManagementPage from '@/views/Management';

export const metadata: Metadata = {
  title: 'Management Team',
  description:
    'Meet the leadership team driving USDC infrastructure strategy and execution.',
  openGraph: {
    title: 'Management Team | USDC',
    description: 'Leadership profiles and executive insights from USDC.',
    type: 'website',
  },
};

export default function Page() {
  return <ManagementPage />;
}
