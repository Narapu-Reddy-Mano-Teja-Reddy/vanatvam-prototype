import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vanatvam.com';

  const routes = [
    '',
    '/about',
    '/projects',
    '/investment',
    '/blog',
    '/contact',
    '/brindavana',
    '/madhuvana',
    '/anantavana',
    '/eeshavana',
    '/privacy-policy',
    '/terms'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
