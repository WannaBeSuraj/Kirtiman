import { Metadata } from 'next';

const siteUrl = 'https://corropaints.com';
const defaultImage = '/images/og-image.jpg';
const company = 'Corro Protection Engineering';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Corro Protection Engineering - Industrial Coatings & Pipeline Solutions',
    template: '%s | Corro Protection Engineering',
  },
  description:
    'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist. 18+ years experience in anticorrosive coatings, polyurethane, coal tar epoxy, and pipeline protection across India.',
  keywords: [
    'industrial coating',
    'anticorrosive coatings',
    'pipeline fabrication',
    'corrosion protection',
    'coal tar epoxy coating',
    'polyurethane coating',
    'pipe coating services',
    'surface preparation',
    'cement mortar lining',
    'West Bengal',
    'ISO 9001 certified',
  ],
  authors: [{ name: company }],
  creator: company,
  publisher: company,
  formatDetection: {
    telephone: false,
    email: false,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Corro Protection Engineering - Industrial Anticorrosive Coatings & Pipeline Solutions',
    description:
      'ISO 9001:2015 certified provider of anticorrosive coatings, pipeline fabrication, and industrial protection systems across India. 18+ years experience.',
    url: siteUrl,
    siteName: company,
    images: [
      {
        url: defaultImage,
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
    images: [defaultImage],
    creator: '@corroprotection',
    site: '@corroprotection',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: company,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-IN': `${siteUrl}/en`,
      'hi-IN': `${siteUrl}/hi`,
    },
  },
};

export function buildMetadata({
  title,
  description,
  keywords,
  url,
  image,
}: {
  title: string;
  description: string;
  keywords: string[];
  url: string;
  image?: string;
}): Metadata {
  const ogImage = image || defaultImage;

  return {
    ...baseMetadata,
    title,
    description,
    keywords: [...(baseMetadata.keywords as string[]), ...keywords],
    openGraph: {
      ...(baseMetadata.openGraph || {}),
      title,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...(baseMetadata.twitter || {}),
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

// Organization Schema for SEO
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Corro Protection Engineering',
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description:
    'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist providing anticorrosive coatings and pipeline protection solutions across India.',
  sameAs: [
    'https://www.linkedin.com/company/corro-protection-engineering',
    'https://www.facebook.com/corroprotection',
    'https://twitter.com/corroprotection',
  ],
  contactPoint: {
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
};

// Local Business Schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Corro Protection Engineering',
  image: `${siteUrl}/images/logo.png`,
  description:
    'Professional industrial coating and pipeline fabrication services with ISO 9001 certification.',
  url: siteUrl,
  telephone: '+91-XXXXXXXXXX',
  email: 'info@corropaints.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'West Bengal',
  },
  priceRange: '$$$',
};

// Service Schema
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrial Coating Solutions',
  provider: {
    '@type': 'Organization',
    name: company,
    url: siteUrl,
  },
  areaServed: 'IN',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: siteUrl,
  },
};
