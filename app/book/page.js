import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';
import LeadForm from '@/components/LeadForm';
import Scheduler from '@/components/Scheduler';

export const metadata = {
  title: `Book a Notary in ${SITE.city}`,
  description: `Book a mobile notary in ${SITE.city}, ${SITE.state}. Request a time online or call — we come to you across the ${SITE.city} area. Apostille services too.`,
  alternates: { canonical: '/book' },
};

export default function BookPage() {
  return (
    <>
      <section className="page-head">
        <div className="frame">
          <p className="eyebrow">Book / Get a quote</p>
          <h1>Book a notary in {SITE.city}</h1>
          <p className="lead" style={{ margin: '10px 0 0' }}>
            Tell us what you need and where — we&rsquo;ll come to you. Prefer to talk?{' '}
            <a className="inline-call" href={telHref}>Call {SITE.phone}</a>.
          </p>
        </div>
      </section>

      <section className="sec sec-sand">
        <div className="frame book-grid">
          <div className="book-form-col">
            <h2 className="colh">Request a notary</h2>
            <p className="colp">Fill this out and we&rsquo;ll confirm a time. Usually replies same day.</p>
            <LeadForm />
          </div>

          <div className="book-side-col">
            <h2 className="colh">Pick a time</h2>
            <p className="colp">Schedule instantly with our online calendar.</p>
            <Scheduler />

            <div className="book-callcard">
              <h3>Prefer to call?</h3>
              <p>{SITE.hours}</p>
              <a className="btn btn-dark" href={telHref}>Call {SITE.phone}</a>
              <p className="areas">
                <b>Serving:</b> {SITE.areas.join(' · ')}
              </p>
              <p className="areas">
                Have a question first? <Link href="/mobile-notary">See how mobile notary works</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
