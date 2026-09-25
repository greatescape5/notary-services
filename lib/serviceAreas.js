// ---------------------------------------------------------------------------
// SERVICE AREAS — local content for the /service-area/[slug] pages.
// Each town has UNIQUE 300+ word content (real local detail, not boilerplate
// with the name swapped) so the pages rank instead of being filtered as
// duplicate content. Local, so pages build without Supabase; can be moved into
// the service_areas table later.
// ---------------------------------------------------------------------------

export const SERVICE_AREAS = [
  {
    slug: 'spokane',
    name: 'Spokane',
    region: 'Spokane County, WA',
    cardBlurb: 'Every neighborhood — downtown, North Side, the hospitals & offices.',
    metaDesc:
      'Mobile notary in Spokane, WA. We travel to homes, offices, hospitals, and care facilities across the city — same-day and after-hours by appointment.',
    paragraphs: [
      'Spokane is home base for ML Notary Services. As a fully mobile notary, we travel across the city so you never have to hunt for a notary or wait in line at the bank — from downtown and Kendall Yards to the North Side, East Central, Hillyard, and the West Central neighborhoods.',
      'We regularly meet clients at homes and apartments, downtown offices, and coffee shops, as well as at Spokane’s hospitals and care facilities — including patients and families near Providence Sacred Heart and MultiCare Deaconess. Whether it’s a power of attorney at a hospital bedside, real estate documents at a title company, or an affidavit at your kitchen table, we come to you.',
      'Same-day and after-hours appointments are often available across the city. Just tell us the document, the place, and a time that works — we confirm pricing up front and complete every notarization carefully and correctly under Washington State law.',
    ],
    neighborhoods: ['Downtown', 'Kendall Yards', "Browne's Addition", 'North Side', 'East Central', 'Hillyard', 'West Central'],
    driveNote: "We're based in Spokane — usually same-day availability citywide.",
    faq: [
      {
        q: 'How fast can a mobile notary reach me in Spokane?',
        a: "Often the same day. Call with your location and we'll give a realistic arrival window — downtown and the central neighborhoods are usually quickest.",
      },
      {
        q: 'Can you come to a Spokane hospital or care facility?',
        a: 'Yes. We frequently notarize for patients and families at Spokane hospitals and care facilities. Please have a valid, unexpired photo ID ready for each signer, and make sure the signer can communicate their wishes.',
      },
    ],
  },
  {
    slug: 'spokane-valley',
    name: 'Spokane Valley',
    region: 'Spokane County, WA',
    cardBlurb: 'Sullivan corridor to Ponderosa — the whole Valley, usually same-day.',
    metaDesc:
      'Mobile notary in Spokane Valley, WA. We come to your home, office, or business across the Valley — real estate, POAs, title transfers, and more.',
    paragraphs: [
      'Spokane Valley is the region’s second-largest city, and our mobile notary covers it end to end — from the Sullivan Road corridor to Ponderosa and the neighborhoods around the Spokane Valley Mall. We bring the notary to your door.',
      'We meet clients at homes, at businesses along Sprague and Pines, and at offices throughout the Valley. Common requests include real estate documents, powers of attorney, vehicle title transfers, and business acknowledgments — and we’re happy to meet at a coffee shop or near CenterPlace if that’s easier for you.',
      'With quick access via I-90, Spokane Valley appointments are usually easy to schedule same-day or next-day, evenings and weekends included. We’ll confirm the time and any small travel fee up front so there are no surprises.',
    ],
    neighborhoods: ['Sullivan Road corridor', 'Sprague & Pines', 'Ponderosa', 'Greenacres', 'Millwood-adjacent'],
    driveNote: 'About 15 minutes east of Spokane on I-90.',
    faq: [
      {
        q: 'How soon can you get to Spokane Valley?',
        a: "Usually the same day. Give us your cross streets and we'll provide an arrival window.",
      },
      {
        q: 'Do you notarize vehicle title transfers in Spokane Valley?',
        a: 'Yes — title transfers, acknowledgments, and other general notarizations are all part of what we do.',
      },
    ],
  },
  {
    slug: 'liberty-lake',
    name: 'Liberty Lake',
    region: 'Spokane County, WA',
    cardBlurb: 'East county — offices, business parks & the lake community.',
    metaDesc:
      'Mobile notary in Liberty Lake, WA. We travel to homes, offices, and business parks near the River District and Meadowwood — evenings and weekends by appointment.',
    paragraphs: [
      'On the eastern edge of Spokane County near the Idaho line, Liberty Lake blends a lakeside community with a busy business district. Our mobile notary comes to you — at home, at the office, or somewhere in between.',
      'We frequently meet professionals at offices and business parks in the River District and Meadowwood area, and we help homeowners and retirees around the lake with estate-planning documents, powers of attorney, and real estate paperwork. Coffee shops and the library make easy meeting spots too.',
      'Liberty Lake is a straightforward drive east on I-90, so appointments are usually quick to arrange, including evenings and weekends. Tell us what you need notarized and we’ll confirm the time and any travel fee before we arrive.',
    ],
    neighborhoods: ['River District', 'Meadowwood business park', 'Lake community', 'Rocky Hill'],
    driveNote: 'About 20 minutes east of Spokane via I-90.',
    faq: [
      {
        q: 'Can you meet at my Liberty Lake office?',
        a: 'Absolutely — we regularly notarize at offices and business parks in Liberty Lake, including multi-signer business documents.',
      },
      {
        q: 'Do you handle real estate documents in Liberty Lake?',
        a: "Yes, we notarize real estate and refinance paperwork. For a full loan signing, ask when you book and we'll confirm availability.",
      },
    ],
  },
  {
    slug: 'south-hill',
    name: 'South Hill',
    region: 'Spokane, WA',
    cardBlurb: 'Manito, Comstock, Lincoln Heights & Rockwood — often same-day.',
    metaDesc:
      'Mobile notary on the South Hill in Spokane, WA. Home visits for estate-planning documents, powers of attorney, and health-care directives — often same-day.',
    paragraphs: [
      'The South Hill is one of Spokane’s most established neighborhoods, and a frequent destination for our mobile notary. From Manito Park and Comstock to the Lincoln Heights and Rockwood areas, we come to your home so you don’t have to drive anywhere.',
      'Many South Hill clients call us for estate-planning documents, powers of attorney, and health-care directives — often for older family members who’d rather sign at home. We also meet near the South Hill medical district and the Rockwood retirement community, and at cafes along 29th and Regal.',
      'Because the South Hill is minutes from central Spokane, we can usually offer same-day or next-day appointments, including evenings and weekends. We confirm pricing before we arrive and handle every notarization carefully and correctly.',
    ],
    neighborhoods: ['Manito', 'Comstock', 'Lincoln Heights', 'Rockwood', 'Cannon Hill', 'Regal / 29th'],
    driveNote: 'Minutes from central Spokane — usually same-day.',
    faq: [
      {
        q: 'Can you notarize documents for an older relative at home on the South Hill?',
        a: 'Yes — home visits for estate-planning documents and powers of attorney are one of our most common South Hill requests. Each signer needs a valid photo ID and must be able to communicate their wishes.',
      },
      {
        q: 'Is the South Hill within your service area?',
        a: 'Yes — the South Hill is one of our core Spokane neighborhoods, usually with same-day availability.',
      },
    ],
  },
  {
    slug: 'airway-heights',
    name: 'Airway Heights',
    region: 'Spokane County, WA',
    cardBlurb: 'West of Spokane on US-2, near Fairchild AFB.',
    metaDesc:
      'Mobile notary in Airway Heights, WA. We travel to homes and businesses along US-2, including help for military families near Fairchild AFB.',
    paragraphs: [
      'Just west of Spokane along US-2, Airway Heights is one of the fastest-growing communities in the region — and a regular stop for our mobile notary service. We travel out to homes, new-construction neighborhoods, and businesses along the highway corridor.',
      'With Fairchild Air Force Base next door, we often help military members and their families with time-sensitive documents like powers of attorney and affidavits before a deployment or move. We also meet clients near Northern Quest and the retail area along Hayford Road.',
      'Because Airway Heights is a short drive from Spokane, we can usually schedule same-day or next-day appointments. Evenings and weekends are available by appointment, and we agree any travel fee up front so there are no surprises.',
    ],
    neighborhoods: ['US-2 corridor', 'Hayford Road area', 'Fairchild AFB vicinity', 'New residential developments'],
    driveNote: 'About 15–20 minutes west of central Spokane.',
    faq: [
      {
        q: 'Do you serve military families near Fairchild AFB?',
        a: "Yes. We're experienced with the powers of attorney and affidavits military members often need, and we can meet on short notice before a deployment or PCS move.",
      },
      {
        q: 'Is there a travel fee to Airway Heights?',
        a: 'The per-signature notarial fee is set by Washington State; any travel fee is modest and agreed before we head out.',
      },
    ],
  },
  {
    slug: 'cheney',
    name: 'Cheney',
    region: 'Spokane County, WA',
    cardBlurb: 'EWU area & downtown — I-9s, apostille-bound docs & more.',
    metaDesc:
      'Mobile notary in Cheney, WA. Serving Eastern Washington University and the wider community — I-9 verifications, apostille-bound documents, POAs, and more.',
    paragraphs: [
      'Southwest of Spokane on SR-904, Cheney is home to Eastern Washington University and a tight-knit community our mobile notary serves regularly. We come to campus-area apartments, homes, and businesses around town.',
      'With EWU nearby, we often help students and staff with I-9 employment verifications, apostille-bound documents for study abroad, and general notarizations. We also assist Cheney homeowners and families with powers of attorney, affidavits, and real estate paperwork, meeting at homes or a local coffee shop.',
      'Cheney is a straightforward drive from Spokane, so appointments are usually easy to arrange, including evenings and weekends. We confirm pricing and any travel fee before we arrive.',
    ],
    neighborhoods: ['EWU campus area', 'Downtown Cheney', 'Betz Road', 'Surrounding neighborhoods'],
    driveNote: 'About 25 minutes southwest of Spokane on SR-904.',
    faq: [
      {
        q: 'Do you work with EWU students and staff?',
        a: 'Yes — I-9 verifications, documents headed for apostille (for study or work abroad), and general notarizations are all common Cheney requests.',
      },
      {
        q: 'How much notice do you need for Cheney?',
        a: 'Often same or next day. Book ahead when you can so we can lock in a convenient time.',
      },
    ],
  },
  {
    slug: 'deer-park',
    name: 'Deer Park',
    region: 'Spokane County, WA',
    cardBlurb: 'North on US-395 — homes, farms & businesses. Book ahead.',
    metaDesc:
      'Mobile notary in Deer Park, WA. We travel north on US-395 to homes, farms, and businesses in and around town — general notarizations by appointment.',
    paragraphs: [
      'North of Spokane along US-395, Deer Park is a smaller community we’re glad to serve. Our mobile notary travels out to homes, farms, and businesses in and around town so residents don’t have to make the drive into the city.',
      'We help Deer Park clients with the full range of general notarizations — powers of attorney, affidavits, real estate documents, and certifications. Because Deer Park is a bit farther out, we recommend booking ahead so we can schedule a time that works and keep any travel fee reasonable.',
      'Evening and weekend appointments are available by arrangement. Tell us the document and your location, and we’ll confirm the details — including travel — before we head your way.',
    ],
    neighborhoods: ['Downtown Deer Park', 'US-395 corridor', 'Surrounding rural areas', 'Clayton / Loon Lake vicinity'],
    driveNote: 'About 30–35 minutes north of Spokane on US-395.',
    faq: [
      {
        q: 'Do you travel all the way to Deer Park?',
        a: "Yes. Deer Park is a bit farther from Spokane, so we book ahead and agree the travel fee up front — but we're happy to come to you.",
      },
      {
        q: 'Can you meet at a home or farm outside town?',
        a: 'Yes, we regularly meet at rural residences around Deer Park; just share directions when you book.',
      },
    ],
  },
];

export function getLocalServiceArea(slug) {
  return SERVICE_AREAS.find((a) => a.slug === slug) || null;
}
