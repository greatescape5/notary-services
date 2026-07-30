import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/site';

export const runtime = 'edge';
export const alt = `${SITE.name} — Mobile Notary in ${SITE.city}, ${SITE.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social-share card (shown when the site is linked in texts, Facebook,
// etc.). Generated at build time — no image file to maintain.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2E2A24 0%, #241f1a 100%)',
          fontFamily: 'sans-serif',
          textAlign: 'center',
          padding: '0 80px',
        }}
      >
        <div
          style={{
            color: '#C0894B',
            fontSize: 28,
            letterSpacing: 10,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          {`Mobile Notary · ${SITE.city}`}
        </div>
        <div style={{ color: '#ffffff', fontSize: 78, fontWeight: 800, lineHeight: 1.1 }}>
          {SITE.name}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: 34, marginTop: 20 }}>
          We come to you — Apostille services too
        </div>
      </div>
    ),
    { ...size }
  );
}
