import { SITE } from '@/lib/site';
import { SERVICE_AREAS } from '@/lib/serviceAreas';

export default function sitemap() {
  const routes = ['', '/mobile-notary', '/apostille', '/service-area', '/about', '/book'];
  const townRoutes = SERVICE_AREAS.map((a) => `/service-area/${a.slug}`);
  const now = new Date();
  return [...routes, ...townRoutes].map((path) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
