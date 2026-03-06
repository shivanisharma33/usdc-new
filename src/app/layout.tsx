import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
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
    // Provide multiple icon formats to support broad browser compatibility.
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#001738' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

const themeInitScript = `
(() => {
  try {
    const storageKey = 'theme';
    const storedTheme = localStorage.getItem(storageKey);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = storedTheme ? storedTheme === 'dark' : systemPrefersDark;
    const root = document.documentElement;

    root.classList.toggle('dark', isDark);
    root.style.colorScheme = isDark ? 'dark' : 'light';
    root.dataset.theme = isDark ? 'dark' : 'light';

    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      themeColorMeta.setAttribute('content', isDark ? '#020617' : '#001738');
    }
  } catch {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-white text-slate-900 antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <div className="min-h-screen selection:bg-cyan-100 selection:text-cyan-700 uppercase-none">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
