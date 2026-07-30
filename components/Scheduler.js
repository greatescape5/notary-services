'use client';

import Script from 'next/script';
import { SITE } from '@/lib/site';

// Embedded Calendly scheduler. Until SITE.calendlyUrl is set, it shows a
// friendly placeholder instead of a broken embed, so the page still works.
export default function Scheduler() {
  if (!SITE.calendlyUrl) {
    return (
      <div className="sched-placeholder">
        <h3>Online booking coming soon</h3>
        <p>
          We&rsquo;re setting up instant online scheduling. For now, fill out the
          form or give us a call and we&rsquo;ll lock in a time that works for you.
        </p>
      </div>
    );
  }

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
