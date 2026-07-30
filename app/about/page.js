import { SITE } from '@/lib/site';
import Check from '@/components/Check';
import CtaBand from '@/components/CtaBand';

export const metadata = {
  title: 'About',
  description: `Meet your ${SITE.city}-area mobile notary. Commissioned in Washington State, bonded & insured, and focused on friendly, on-time, professional service.`,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">About</p>
          <h1>About {SITE.name}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>
            A friendly, professional mobile notary serving {SITE.city} and the
            surrounding area — bringing convenient, reliable notarization to you.
          </p>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame split">
          <div className="content">
            <h2>Your notary</h2>
            {/* TODO: replace the bracketed placeholders with the real bio. */}
            <p>
              Hi, I&rsquo;m <strong>[NOTARY NAME]</strong>, the notary behind{' '}
              {SITE.name}. [Add a short, personal note here — how you got started,
              why you became a notary, and what you enjoy about helping people in
              the {SITE.city} community.]
            </p>
            <p>
              I started this mobile service because getting a document notarized
              shouldn&rsquo;t mean taking time off work or driving across town. I
              bring the notarization to you — on your schedule, at a place that
              works for you.
            </p>
          </div>
          <div className="content">
            <div className="infocard">
              <h3>Credentials &amp; trust</h3>
              <ul className="tick-list">
                <li><Check />Commissioned notary public in Washington State</li>
                <li><Check />Bonded &amp; insured</li>
                {/* Add these only when confirmed true:
                <li><Check />NNA trained &amp; background screened</li>
                <li><Check />E&amp;O insured</li> */}
              </ul>
              <p style={{ fontSize: 13, color: '#8a8073', marginTop: 12, marginBottom: 0 }}>
                Commission #: <span className="ph">[COMMISSION #]</span> · Expires:{' '}
                <span className="ph">[DATE]</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-greige">
        <div className="frame">
          <div className="content" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2>What you can expect</h2>
            <ul className="tick-list">
              <li><Check />On-time arrival and clear, up-front pricing</li>
              <li><Check />Careful attention to detail and Washington State requirements</li>
              <li><Check />Respect for your time, privacy, and situation</li>
              <li><Check />Evening &amp; weekend availability by appointment</li>
            </ul>
            <div className="disclaimer-note" style={{ marginTop: 18 }}>
              <strong>Please note:</strong> a notary public is not an attorney and
              cannot give legal advice or help you choose or prepare a document.
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Let's get your document notarized"
        text={`Serving ${SITE.city} and nearby. Book online or call — we'll come to you.`}
      />
    </>
  );
}
