import { SITE } from './site';

// LocalBusiness / ProfessionalService structured data for the homepage.
// Notary businesses use LocalBusiness + ProfessionalService (there is no
// dedicated schema.org Notary type). Fields fill in automatically from
// lib/site.js as placeholders are replaced.
export function localBusinessSchema(areaNames = SITE.areas) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    name: SITE.name,
    url: SITE.baseUrl,
    image: `${SITE.baseUrl}/spokane-aerial.webp`,
    description: `Mobile notary and apostille services in ${SITE.city}, ${SITE.state}. We come to you.`,
    areaServed: areaNames.map((a) => ({ '@type': 'City', name: a })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 47.6588, longitude: -117.426 },
    priceRange: '$$',
  };

  // Only include contact fields once real values are set (avoid shipping
  // "[PHONE]" / "[EMAIL]" into structured data).
  if (SITE.phoneHref) schema.telephone = SITE.phoneHref;
  if (SITE.email && !SITE.email.startsWith('[')) schema.email = SITE.email;

  return schema;
}

// BreadcrumbList structured data. items: [{ name, url }] in order.
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// FAQPage structured data from an array of { q, a }.
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
