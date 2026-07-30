import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';
import Check from '@/components/Check';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: `Mobile Notary in ${SITE.city} — We Come to You`,
  description: `Mobile notary serving ${SITE.city}, ${SITE.state} and nearby towns. We travel to your home, office, hospital, or care facility. Evenings & weekends by appointment. Book online or call.`,
  alternates: { canonical: '/mobile-notary' },
};

const WE_NOTARIZE = [
  'Acknowledgments',
  'Jurats (sworn statements)',
  'Powers of attorney',
  'Real estate & refinance documents',
  'Affidavits & certifications',
  'Copy certifications',
  'Oaths & affirmations',
  'Medical & estate-planning forms',
];

const WHERE = [
  'Your home or apartment',
  'Hospitals & care facilities',
  'Offices & job sites',
  'Coffee shops & public meeting spots',
];

export default function MobileNotaryPage() {
  return (
    <>
      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">Mobile Notary</p>
          <h1>Mobile notary in {SITE.city}, {SITE.state}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>
            We come to you — at home, the office, the hospital, or wherever works.
            Serving {SITE.city} and the surrounding area, {SITE.hours.toLowerCase()}.
          </p>
          <div className="head-cta">
            <Link className="btn btn-gold" href="/book">Book a Notary</Link>
            <a className="btn btn-outline" href={telHref}>Call {SITE.phone}</a>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame split">
          <div className="content">
            <h2>What we notarize</h2>
            <p>
              Whether it&rsquo;s a single signature or a stack of documents, we
              handle the common notarizations individuals and businesses need:
            </p>
            <ul className="tick-list">
              {WE_NOTARIZE.map((item) => (
                <li key={item}><Check />{item}</li>
              ))}
            </ul>
          </div>
          <div className="content">
            <h2>Where we meet you</h2>
            <p>
              &ldquo;Mobile&rdquo; means we travel to your location across the{' '}
              {SITE.city} area — you don&rsquo;t have to find a bank branch or wait in line.
            </p>
            <ul className="tick-list">
              {WHERE.map((item) => (
                <li key={item}><Check />{item}</li>
              ))}
            </ul>
            <div className="disclaimer-note" style={{ marginTop: 18 }}>
              <strong>A note on ID:</strong> please have a valid, unexpired
              government-issued photo ID for each signer, and don&rsquo;t sign the
              document until we&rsquo;re together — the notarial act requires us to
              witness the signature.
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-greige">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="eyebrow center" style={{ textAlign: 'center' }}>How it works</p>
            <h2 style={{ textAlign: 'center' }}>Three simple steps</h2>
            <div className="process" style={{ marginTop: 20 }}>
              <div className="pstep"><div className="pnum">1</div><div><h3>Book or call</h3><p>Tell us what you need notarized, where, and when. Book online or call for same-day availability.</p></div></div>
              <div className="pstep"><div className="pnum">2</div><div><h3>We travel to you</h3><p>We arrive at your chosen location on time with everything needed to complete the notarization.</p></div></div>
              <div className="pstep"><div className="pnum">3</div><div><h3>Verify, sign &amp; seal</h3><p>We confirm ID, witness the signing, apply the notarial seal, and you&rsquo;re done.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>Serving {SITE.city} &amp; nearby</h2>
            <p>
              We travel throughout the region, including{' '}
              {SITE.areas.join(', ')}. Not sure if you&rsquo;re in range?{' '}
              <a className="inline-call" href={telHref}>Give us a call</a> — we&rsquo;ll let you know.
            </p>

            <h2 style={{ marginTop: 30 }}>Frequently asked questions</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>How fast can you get to me?</h3>
                <p>It depends on the day and your location, but same-day and after-hours appointments are often available. Call and we&rsquo;ll give you a realistic time.</p>
              </div>
              <div className="faq-item">
                <h3>What does a mobile notary cost?</h3>
                <p>The per-signature notarial fee is set by Washington State; a separate travel fee is agreed up front based on your location. No surprises — we confirm pricing before we head out.</p>
              </div>
              <div className="faq-item">
                <h3>What do I need to have ready?</h3>
                <p>The unsigned document(s), a valid government-issued photo ID for every signer, and any witnesses if your document requires them.</p>
              </div>
              <div className="faq-item">
                <h3>Can you give me legal advice about my document?</h3>
                <p>No — a notary public is not an attorney and can&rsquo;t give legal advice or help you choose or complete a document. We verify identity and witness signatures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Need a mobile notary in ${SITE.city}?`}
        text="Book online in under a minute, or call and we'll come to you — evenings and weekends included."
      />
    </>
  );
}
