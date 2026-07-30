import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';
import Check from '@/components/Check';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: `Apostille Services in ${SITE.city}, ${SITE.state}`,
  description: `Apostille help in ${SITE.city}: we notarize your documents and facilitate the apostille process through the Washington Secretary of State for use in other countries.`,
  alternates: { canonical: '/apostille' },
};

const DOCS = [
  'Powers of attorney',
  'Birth, marriage & death certificates',
  'Diplomas & transcripts',
  'Business & corporate documents',
  'Single-status / no-record affidavits',
  'Adoption paperwork',
];

export default function ApostillePage() {
  return (
    <>
      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">Apostille</p>
          <h1>Apostille services in {SITE.city}, {SITE.state}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>
            Sending documents abroad? We notarize your paperwork and help you
            navigate the apostille process so your documents are accepted overseas.
          </p>
          <div className="head-cta">
            <Link className="btn btn-gold" href="/book">Start Your Apostille</Link>
            <a className="btn btn-outline" href={telHref}>Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>What is an apostille?</h2>
            <p>
              An apostille is a certificate that authenticates a public document
              so it&rsquo;s recognized in another country that belongs to the Hague
              Apostille Convention. It confirms that the notary or official who
              signed your document is genuine.
            </p>
            <div className="disclaimer-note" style={{ margin: '6px 0 20px' }}>
              <strong>Important:</strong> in the United States, apostilles are
              issued by the state — here, the <strong>Washington Secretary of
              State</strong> — not by a notary. We notarize your documents where
              required and help facilitate the process; we don&rsquo;t issue the
              apostille ourselves.
            </div>
            <h2>Documents we commonly help with</h2>
            <ul className="tick-list">
              {DOCS.map((d) => (
                <li key={d}><Check />{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec-greige">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="eyebrow" style={{ textAlign: 'center' }}>The process</p>
            <h2 style={{ textAlign: 'center' }}>How apostille handling works</h2>
            <div className="process" style={{ marginTop: 20 }}>
              <div className="pstep"><div className="pnum">1</div><div><h3>Tell us what you need</h3><p>Let us know the document and the destination country so we can confirm the right steps.</p></div></div>
              <div className="pstep"><div className="pnum">2</div><div><h3>Notarize (if required)</h3><p>Many documents must be notarized first. We can do that mobile — we come to you.</p></div></div>
              <div className="pstep"><div className="pnum">3</div><div><h3>Submit to the Secretary of State</h3><p>We help prepare and route your documents to the Washington Secretary of State for the apostille.</p></div></div>
              <div className="pstep"><div className="pnum">4</div><div><h3>Return to you</h3><p>Once apostilled, your documents come back to you, ready to use internationally.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>Apostille FAQ</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>How long does an apostille take?</h3>
                <p>Turnaround depends on the Washington Secretary of State&rsquo;s current processing times and how the documents are submitted. We&rsquo;ll give you an estimate up front.</p>
              </div>
              <div className="faq-item">
                <h3>Do you issue the apostille?</h3>
                <p>No. The Washington Secretary of State issues apostilles. We prepare and facilitate — including any required notarization — to make it straightforward for you.</p>
              </div>
              <div className="faq-item">
                <h3>Which countries accept an apostille?</h3>
                <p>Countries that are members of the Hague Apostille Convention. For non-member countries a different authentication/legalization process applies; tell us the destination and we&rsquo;ll point you the right way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Ready to get your documents apostilled?"
        text="Tell us the document and destination country — we'll handle the notarization and help facilitate the rest."
      />
    </>
  );
}
