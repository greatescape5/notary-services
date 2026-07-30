// ---------------------------------------------------------------------------
// SITE CONFIG — edit these values as details are confirmed.
// Everything with a [PLACEHOLDER] must be replaced before launch.
// Nothing here is invented; placeholders are intentional.
// ---------------------------------------------------------------------------

export const SITE = {
  name: 'ML Notary Services',
  shortName: 'ML Notary',
  tagline: 'Mobile Notary · Spokane',

  // Contact — REPLACE these.
  phone: '[PHONE]', // display form, e.g. (509) 555-1234
  phoneHref: '', // digits only for tap-to-call, e.g. +15095551234  (leave '' until set)
  email: '[EMAIL]', // e.g. hello@yourdomain.com

  // Web — REPLACE once the domain is purchased. Used for canonical URLs + SEO.
  domain: 'www.example.com', // e.g. www.mlnotaryspokane.com
  get baseUrl() {
    return `https://${this.domain}`;
  },

  // Location / service area
  city: 'Spokane',
  state: 'WA',
  areas: [
    'Spokane',
    'Spokane Valley',
    'Liberty Lake',
    'Cheney',
    'Airway Heights',
    'Mead',
    'Deer Park',
    'Medical Lake',
  ],
  hours: 'By appointment · evenings & weekends available',

  // Booking — REPLACE with your Calendly link, e.g. https://calendly.com/your-name/notary
  calendlyUrl: '',

  // Analytics — REPLACE with your GA4 Measurement ID, e.g. G-XXXXXXXXXX
  gaId: '',

  // Trust badges — ONLY the ones confirmed true. Add more when confirmed.
  badges: ['Commissioned in WA', 'Bonded & Insured'],
};

// Convenience: a tel: href that safely no-ops until the number is filled in.
export const telHref = SITE.phoneHref ? `tel:${SITE.phoneHref}` : '#';
