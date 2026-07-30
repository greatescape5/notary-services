import Link from 'next/link';
import { SITE, telHref } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="frame">
        <div className="foot-grid">
          <div>
            <p className="brandline"><b>{SITE.name}</b></p>
            <p style={{ marginTop: 8 }}>
              {SITE.city}, {SITE.state}
              <br />
              {SITE.hours}
            </p>
            <p style={{ marginTop: 8 }}>
              <a href={telHref}>{SITE.phone}</a>
              {' · '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link href="/mobile-notary">Mobile Notary</Link></li>
              <li><Link href="/apostille">Apostille</Link></li>
              <li><Link href="/book">Book a Notary</Link></li>
              <li><Link href="/about">About</Link></li>
            </ul>
          </div>

          <div>
            <h4>Service area</h4>
            <ul>
              {SITE.areas.slice(0, 6).map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="disc">
          A notary public is not an attorney and cannot give legal advice or
          accept fees for legal advice. Apostilles are issued by the Washington
          Secretary of State; we notarize documents and help facilitate the
          apostille process. © {SITE.name}. Final wording to be confirmed.
        </p>
      </div>
    </footer>
  );
}
