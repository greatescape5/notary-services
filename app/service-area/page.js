import Link from 'next/link';
import { SITE } from '@/lib/site';
import { SERVICE_AREAS } from '@/lib/serviceAreas';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: `Service Areas — Mobile Notary Across the ${SITE.city} Area`,
  description: `Where we travel: a mobile notary serving ${SITE.city} and nearby communities including Spokane Valley, Liberty Lake, the South Hill, Airway Heights, Cheney, and Deer Park.`,
  alternates: { canonical: '/service-area' },
};

export default function ServiceAreaIndex() {
  return (
    <>
      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">Service Areas</p>
          <h1>We come to you across the {SITE.city} area</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>
            A mobile notary serving {SITE.city} and the surrounding communities of
            Spokane County. Pick your area for local details, or just book and tell
            us where to meet you.
          </p>
          <div className="head-cta">
            <Link className="btn btn-gold" href="/book">Book a Notary</Link>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame">
          <div className="area-grid">
            {SERVICE_AREAS.map((a) => (
              <Link className="area-card" key={a.slug} href={`/service-area/${a.slug}`}>
                <h3>{a.name}</h3>
                <p>{a.cardBlurb}</p>
                <span className="area-more">Mobile notary in {a.name} →</span>
              </Link>
            ))}
          </div>
          <p className="disclaimer-note" style={{ marginTop: 26 }}>
            Don&rsquo;t see your neighborhood? We travel throughout the {SITE.city}{' '}
            area — <Link href="/book" className="inline-call">book a notary</Link> or
            call and we&rsquo;ll let you know. A small travel fee may apply based on
            distance, always agreed up front.
          </p>
        </div>
      </section>

      <CtaBand
        heading={`Serving ${SITE.city} & the surrounding area`}
        text="Book online in under a minute, or call and we'll come to you — wherever you are."
      />
    </>
  );
}
