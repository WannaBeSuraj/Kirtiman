export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Corro Protection Engineering',
  alternateName: 'Corro Paints',
  url: 'https://corropaints.com',
  logo: 'https://corropaints.com/logo.png',
  description:
    'ISO 9001:2015 certified industrial coating and pipeline fabrication specialist providing anticorrosive solutions across India',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '107/B, D-Block, Baghajatin, P.O. & P.S. Jadavpur',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700032',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-9830374408',
    contactType: 'customer service',
    email: 'corroengineering@yahoo.co.in',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi', 'bn'],
  },
  sameAs: ['https://maps.google.com/?cid=1307063725898602661'],
  foundingDate: '2006',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: '50-100',
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Corro Protection Engineering',
  image: 'https://corropaints.com/factory.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 233, Durgapur Highway, Vill. Joymollha',
    addressLocality: 'Singur',
    addressRegion: 'West Bengal',
    postalCode: '712407',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '22.8236',
    longitude: '88.2290',
  },
  telephone: '+91-9830374408',
  priceRange: 'Contact for quote',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '18:00',
  },
};

export function buildArticleSchema({
  title,
  description,
  image,
  date,
}: {
  title: string;
  description: string;
  image: string;
  date: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    author: {
      '@type': 'Organization',
      name: 'Corro Protection Engineering',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Corro Protection Engineering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://corropaints.com/logo.png',
      },
    },
    datePublished: date,
    dateModified: date,
  };
}
