import { JetBrains_Mono, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

import Header from '@/components/Header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

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
    default: 'Gaille Amolong — Lead Software Engineer | AI, platform & security',
    template: '%s | Gaille Amolong',
  },
  description:
    'Lead software engineer: production computer vision (10 min → 30 s pipelines), platform & SIEM-oriented security at 150k+ users, full-stack scale to 5k+ users. AI, backend, DevOps.',
  openGraph: {
    title: 'Gaille Amolong — Lead Software Engineer',
    description:
      'Production AI/CV, secure platforms, and full-stack delivery—Bitwork, Willed, early-stage products.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaille Amolong — Lead Software Engineer',
    description:
      'Production AI/CV, secure platforms, and full-stack delivery—measurable impact.',
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
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
