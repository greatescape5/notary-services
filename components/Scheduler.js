'use client';

import Script from 'next/script';
import { SITE } from '@/lib/site';

// Embedded Calendly scheduler. Renders nothing until SITE.calendlyUrl is set,
// so there's no placeholder note before online booking is turned on.
export default function Scheduler() {
  if (!SITE.calendlyUrl) return null;

  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={SITE.calendlyUrl}
        style={{ minWidth: '320px', height: '700px' }}
      />
      {/* Lazy-loaded: keeps the embed from blocking initial page load. */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
