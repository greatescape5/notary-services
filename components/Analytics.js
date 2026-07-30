import Script from 'next/script';
import { SITE } from '@/lib/site';

// Google Analytics 4. Renders nothing until SITE.gaId is set to your
// G-XXXXXXXXXX measurement id, so it's safe to ship before analytics exists.
export default function Analytics() {
  if (!SITE.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.gaId}');
        `}
      </Script>
    </>
  );
}
