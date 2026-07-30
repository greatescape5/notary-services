import Image from 'next/image';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import CallButton from '@/components/CallButton';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/seo';

// Homepage service rows (reference-format list). Edit freely.
const SERVICES = [
  {
    title: 'Individual & Personal',
    blurb:
      'Real estate transactions, estate planning, powers of attorney, affidavits, and certifications — notarized wherever you are.',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#5c4326" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 30l18-18 4 4-18 18-6 2 2-6z" /><path d="M22 8l4 4" />
      </svg>
    ),
  },
  {
    title: 'Business Documents',
    blurb:
      'Contracts, resolutions, agreements, and export paperwork handled professionally for your company.',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#5c4326" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 33V13l10-6 10 6v20" /><path d="M12 33V22h6v11" />
      </svg>
    ),
  },
  {
    title: 'Apostille & Certifications',
    blurb:
      'Documents bound for international use — we notarize and help facilitate the apostille through the WA Secretary of State.',
    icon: (
      <svg width="40" height="40" fill="none" stroke="#5c4326" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="15" r="9" /><path d="M13 23l-3 11 8-5 8 5-3-11" />
      </svg>
    ),
  },
];

const CHECK = (
  <svg className="ck" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 11l5 5 9-11" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      {/* HERO */}
      <section className="hero">
        <div className="hero-photo">
          {/* Aerial of downtown Spokane (Tyler-provided). NOTE: confirm licensing
              before launch — likely stock/third-party. Bridge fallback: /spokane-hero.jpg */}
          <Image
            src="/spokane-aerial.webp"
            alt="Aerial view of downtown Spokane, Washington"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Mobile · We come to you</p>
            <h1>
              {SITE.city}&rsquo;s mobile notary,
              <br />
              <span className="accent">anytime you need one.</span>
            </h1>
            <p className="sub">
              Friendly, professional notary service that travels to you — home,
              office, hospital, or care facility — across the {SITE.city} area.
              Apostille services too.
            </p>
            <div className="cta">
              <Link className="btn btn-gold" href="/book">Book a Notary</Link>
              <Link className="btn btn-outline" href="/book">Get a Quote</Link>
            </div>
            <div className="badges">
              {SITE.badges.map((b) => (
                <span className="tb" key={b}>{b}</span>
              ))}
            </div>
          </div>

          <div className="portrait">
            <div className="pcard">
              {/* Replace with a headshot: drop a file at public/headshot.jpg and
                  swap the silhouette below for <Image src="/headshot.jpg" .../> */}
              <svg className="silhouette" viewBox="0 0 100 120">
                <circle cx="50" cy="42" r="22" fill="#9c8f78" />
                <path d="M12 120 C12 88 30 74 50 74 C70 74 88 88 88 120 Z" fill="#9c8f78" />
              </svg>
            </div>
            <span className="pcaption">Your headshot goes here</span>
          </div>
        </div>
      </section>

      <div className="strip">
        Serving {SITE.areas.slice(0, 5).join(' · ')} &amp; more &nbsp;·&nbsp;{' '}
        <b>Evenings &amp; weekends by appointment</b>
      </div>

      {/* HOW IT WORKS */}
      <section className="sec sec-sand">
        <div className="frame center">
          <p className="eyebrow">Simple &amp; fast</p>
          <h2>How it works</h2>
          <p className="lead">
            Getting a document notarized shouldn&rsquo;t be a hassle. Three easy steps.
          </p>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Book or call</h3>
              <p>Tell us what you need notarized and where. Book online or call for same-day availability.</p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>We come to you</h3>
              <p>We travel to your home, office, hospital, or a coffee shop — wherever works for you.</p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Signed &amp; done</h3>
              <p>We verify ID, notarize your documents properly, and you&rsquo;re on your way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES — reference format */}
      <section className="sec sec-greige">
        <div className="frame">
          <div className="svc">
            <div className="svc-left">
              <div>
                <p className="eyebrow">What we do</p>
                <h2>Comprehensive notary services</h2>
                <p className="intro">
                  From real estate closings to power-of-attorney documents — we come to you.
                </p>
              </div>
              <div className="lower">
                <p>
                  We handle affidavits, acknowledgments, jurats, certified copies,
                  and oath administration with careful attention to detail and
                  Washington State compliance.
                </p>
                <Link className="btn btn-dark" href="/mobile-notary">Explore Our Services</Link>
              </div>
            </div>

            <div className="svc-right">
              {SERVICES.map((s) => (
                <div className="srow" key={s.title}>
                  <div className="thumb"><span className="ph-icon">{s.icon}</span></div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="sec sec-white">
        <div className="frame why">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2 style={{ fontSize: 29 }}>A notary you can trust, when you need one</h2>
            <ul className="checks">
              <li>{CHECK}Commissioned notary public in Washington State</li>
              <li>{CHECK}Bonded &amp; insured for your protection</li>
              <li>{CHECK}We come to you — evenings &amp; weekends available</li>
              <li>{CHECK}Transparent, agreed-upfront pricing — no surprises</li>
            </ul>
            <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link className="btn btn-gold" href="/book">Book a Notary</Link>
              <CallButton className="btn btn-outline" />
            </div>
          </div>
          <div className="quote">
            <p>
              &ldquo;She met us at the hospital within the hour. Calm,
              professional, and exactly what our family needed.&rdquo;
            </p>
            <span>Placeholder testimonial · we&rsquo;ll use your real reviews</span>
          </div>
        </div>
      </section>
    </>
  );
}
