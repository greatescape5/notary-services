import { Hanken_Grotesk, Inter } from 'next/font/google';
import { SITE } from '@/lib/site';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import './globals.css';

const head = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-head',
  display: 'swap',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `Mobile Notary in ${SITE.city}, ${SITE.state} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    `Mobile & traveling notary serving ${SITE.city} and the surrounding area. We come to you — homes, hospitals, offices. Apostille services too. Book online or call.`,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE.baseUrl,
    title: `Mobile Notary in ${SITE.city}, ${SITE.state} | ${SITE.name}`,
    description:
      `Mobile & traveling notary serving ${SITE.city} and the surrounding area. Apostille services too.`,
    siteName: SITE.name,
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${sans.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
