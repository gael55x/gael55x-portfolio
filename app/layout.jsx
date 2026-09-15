import { Inter, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/Header';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});
const title = 'Gaille Amolong, AI Platform & Security Engineer';
const description =
  'I ship production AI and security systems and publish the proof. Selected engineering work at Willed, BitWork Solutions, and Referrin Health, plus open-source developer tools.';

export const viewport = { themeColor: '#161922' };
export const metadata = {
  metadataBase: new URL('https://gailleamolong.vercel.app'),
  title: { default: title, template: '%s | Gaille Amolong' },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/',
    locale: 'en_US',
    siteName: 'Gaille Amolong',
  },
  twitter: { card: 'summary_large_image', title, description },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        {children}
        {process.env.VERCEL === '1' && <Analytics />}
      </body>
    </html>
  );
}
