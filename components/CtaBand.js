import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';

// Reusable bottom-of-page call to action, used on interior pages.
export default function CtaBand({
  heading = 'Need a notary today?',
  text = "Book online in under a minute, or call and we'll come to you.",
}) {
  return (
    <section className="cta-band">
      <h2>{heading}</h2>
      <p>{text}</p>
      <div className="cta-row">
        <Link className="btn btn-gold" href="/book">Book a Notary</Link>
        <a className="btn btn-ghostlight" href={telHref}>Call {SITE.phone}</a>
      </div>
    </section>
  );
}
