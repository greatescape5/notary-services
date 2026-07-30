import JsonLd from './JsonLd';
import { faqSchema } from '@/lib/seo';

// Renders a visible FAQ list AND matching FAQPage structured data from the
// same array, so the two never drift apart. items: [{ q, a }]
export default function Faq({ items }) {
  return (
    <>
      <div className="faq">
        {items.map((i) => (
          <div className="faq-item" key={i.q}>
            <h3>{i.q}</h3>
            <p>{i.a}</p>
          </div>
        ))}
      </div>
      <JsonLd data={faqSchema(items)} />
    </>
  );
}
