import { JetBrains_Mono, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

import Header from '@/components/Header';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: {
    default: 'Gaille Amolong — AI Platform & Security Engineer',
    template: '%s | Gaille Amolong',
  },
  description:
    'Production AI and security systems with public proof: enterprise SIEM for 170k+ users, healthcare platform for 5,000+ providers, a 20x computer-vision pipeline speedup, and open-source agent tooling on npm.',
  openGraph: {
    title: 'Gaille Amolong — AI Platform & Security Engineer',
    description:
      'Enterprise SIEM for 170k+ users, healthcare infrastructure for 5,000+ providers, 20x CV pipeline speedup, open-source agent tooling on npm.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaille Amolong — AI Platform & Security Engineer',
    description:
      'Production AI and security systems with public proof — SIEM at 170k+ users, agent devtools on npm.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
