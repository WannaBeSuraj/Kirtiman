import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://corropaints.com';
  const routes = [
    '',
    '/about-us',
    '/solutions',
    '/solutions/anticorrosive-coatings',
    '/solutions/pipe-coating-solutions',
    '/solutions/pipe-fabrication-mechanical',
    '/solutions/surface-preparation-application',
    '/industries',
    '/industries/water-wastewater',
    '/industries/manufacturing',
    '/industries/infrastructure',
    '/projects',
    '/blog',
    '/contact',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
