import { SITE } from '@/lib/site';

// Static routes for now. When /service-area/[slug] town pages are added,
// map over getServiceAreas() here and append each town URL.
export default function sitemap() {
  const routes = ['', '/mobile-notary', '/apostille', '/about', '/book'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
