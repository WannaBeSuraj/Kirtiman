import type { Metadata } from 'next';
import { DM_Serif_Text } from 'next/font/google';
import '../styles/globals.css';
import { organizationSchema } from '../lib/schema';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const dmSerifText = DM_Serif_Text({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-serif',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://corropaints.com'),
  title: {
    template: '%s | Corro Protection Engineering - Industrial Coatings & Pipeline Solutions',
    default: 'Corro Protection Engineering - Industrial Anticorrosive Coatings & Pipeline Fabrication',
  },
  description:
    'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist. 18+ years experience in anticorrosive coatings, polyurethane, coal tar epoxy, and pipeline protection across India.',
  keywords: [
    'industrial coating solutions',
    'anticorrosive coatings India',
    'pipeline fabrication',
    'corrosion protection',
    'coal tar epoxy coating',
    'polyurethane coating',
    'pipe coating services',
    'surface preparation',
    'cement mortar lining',
    'West Bengal industrial services',
    'ISO 9001 certified coatings',
  ],
  authors: [{ name: 'Corro Protection Engineering' }],
  creator: 'Corro Protection Engineering',
  publisher: 'Corro Protection Engineering',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Corro Protection Engineering - Industrial Anticorrosive Coatings & Pipeline Solutions',
    description:
      'ISO 9001:2015 certified provider of anticorrosive coatings, pipeline fabrication, and industrial protection systems. 18+ years of trusted service across India.',
    url: 'https://corropaints.com',
    siteName: 'Corro Protection Engineering',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Corro Protection Engineering - Industrial Coatings',
      },
      {
        url: '/images/og-image-square.jpg',
        width: 800,
        height: 800,
        alt: 'Corro Protection Engineering Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corro Protection Engineering',
    description:
      'Industrial anticorrosive coating and pipeline fabrication solutions. ISO 9001 certified, 18+ years experience.',
    images: ['/images/og-image.jpg'],
    creator: '@corroprotection',
    site: '@corroprotection',
  },
  alternates: {
    canonical: 'https://corropaints.com',
    languages: {
      'en-IN': 'https://corropaints.com/en',
      'hi-IN': 'https://corropaints.com/hi',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Corro Protection Engineering',
  },
  formatDetection: {
    telephone: false,
    email: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'theme-color': '#1f2937',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#1f2937',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${dmSerifText.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Corro Protection Engineering" />
        <meta name="copyright" content="© 2026 Corro Protection Engineering. All rights reserved." />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Organization',
              name: 'Corro Protection Engineering',
              url: 'https://corropaints.com',
              logo: 'https://corropaints.com/images/logo.png',
              description:
                'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist',
              sameAs: [
                'https://www.linkedin.com/company/corro-protection-engineering',
                'https://www.facebook.com/corroprotection',
                'https://twitter.com/corroprotection',
              ],
              contact: {
                '@type': 'ContactPoint',
                contactType: 'Customer Support',
                telephone: '+91-XXXXXXXXXX',
                email: 'info@corropaints.com',
              },
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'West Bengal',
                streetAddress: 'Your Address Here',
                postalCode: 'XXXXXX',
              },
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'WebSite',
              url: 'https://corropaints.com',
              name: 'Corro Protection Engineering',
              description: 'Industrial anticorrosive coatings and pipeline fabrication solutions',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://corropaints.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />

        <link rel="canonical" href="https://corropaints.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" hrefLang="en-IN" href="https://corropaints.com" />
      </head>
      <body className={`${dmSerifText.className} antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Corro Protection Engineering',
              image: 'https://corropaints.com/images/logo.png',
              description: 'Industrial anticorrosive coatings and pipeline fabrication solutions',
              url: 'https://corropaints.com',
              telephone: '+91-XXXXXXXXXX',
              email: 'info@corropaints.com',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'IN',
                addressRegion: 'West Bengal',
              },
              priceRange: '$$$',
            }),
          }}
        />
        
        {/* Organization Schema Fallback */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
