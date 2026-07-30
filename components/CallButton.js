import { SITE, telHref } from '@/lib/site';

// Tap-to-call button. On a mobile notary site this is often the #1 conversion
// path, so it appears in the nav and hero. Renders the placeholder [PHONE]
// until SITE.phone / SITE.phoneHref are filled in.
export default function CallButton({ className = 'callpill', label }) {
  return (
    <a href={telHref} className={className}>
      {label || `Call ${SITE.phone}`}
    </a>
  );
}
