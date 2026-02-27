import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  style: ['italic'],
  weight: ['700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://usdc.com'),
  title: {
    default: 'US Data Centers (USDC)',
    template: '%s | USDC',
  },
  description:
    'US Data Centers develops and operates sustainable Tier III-ready infrastructure for AI and high-performance computing workloads.',
  openGraph: {
    title: 'US Data Centers (USDC)',
    description:
      'Sustainable, high-performance data center infrastructure for AI and enterprise workloads.',
    type: 'website',
    siteName: 'USDC',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#001738',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-white text-slate-900 antialiased`}>
        <div className="min-h-screen selection:bg-cyan-100 selection:text-cyan-700 uppercase-none">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
