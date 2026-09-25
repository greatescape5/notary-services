import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';
import { SERVICE_AREAS, getLocalServiceArea } from '@/lib/serviceAreas';
import Check from '@/components/Check';
import CtaBand from '@/components/CtaBand';
import Faq from '@/components/Faq';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema, breadcrumbSchema } from '@/lib/seo';

// Pre-render a static page for every town.
export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const area = getLocalServiceArea(params.slug);
  if (!area) return {};
  return {
    title: `Mobile Notary in ${area.name}, ${SITE.state}`,
    description: area.metaDesc,
    alternates: { canonical: `/service-area/${area.slug}` },
  };
}

export default function ServiceAreaTownPage({ params }) {
  const area = getLocalServiceArea(params.slug);
  if (!area) notFound();

  const crumbs = breadcrumbSchema([
    { name: 'Home', url: SITE.baseUrl },
    { name: 'Service Areas', url: `${SITE.baseUrl}/service-area` },
    { name: area.name, url: `${SITE.baseUrl}/service-area/${area.slug}` },
  ]);

  return (
    <>
      <JsonLd data={localBusinessSchema([area.name])} />
      <JsonLd data={crumbs} />

      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">
            <Link href="/service-area" className="crumb-link">Service Areas</Link>
            {' · '}
            {area.region}
          </p>
          <h1>Mobile Notary in {area.name}, {SITE.state}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>{area.metaDesc}</p>
          <div className="head-cta">
            <Link className="btn btn-gold" href="/book">Book a Notary</Link>
            <a className="btn btn-outline" href={telHref}>Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame split">
          <div className="content">
            {area.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="content">
            <div className="infocard">
              <h3>Where we meet you in {area.name}</h3>
              <ul className="tick-list">
                {area.neighborhoods.map((n) => (
                  <li key={n}><Check />{n}</li>
                ))}
              </ul>
              <p style={{ fontSize: 13, color: '#8a8073', marginTop: 12, marginBottom: 0 }}>
                {area.driveNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-greige">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>{area.name} notary FAQ</h2>
            <Faq items={area.faq} />
            <p style={{ marginTop: 24 }}>
              Also serving nearby:{' '}
              {SERVICE_AREAS.filter((a) => a.slug !== area.slug)
                .slice(0, 4)
                .map((a, i, arr) => (
                  <span key={a.slug}>
                    <Link href={`/service-area/${a.slug}`} className="inline-call">{a.name}</Link>
                    {i < arr.length - 1 ? ', ' : ''}
                  </span>
                ))}
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Need a notary in ${area.name}?`}
        text={`Serving ${area.name} and the ${SITE.city} area. Book online or call — we come to you.`}
      />
    </>
  );
}
