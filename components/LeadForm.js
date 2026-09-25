'use client';

import { useState } from 'react';

const SERVICES = [
  'Mobile Notary',
  'Apostille',
  'General Notarization',
  'Loan Signing',
  'Other',
];

// Autocomplete suggestions for the location field — the Spokane-area towns &
// ZIPs we serve. Customers can still type a full street address; these just
// help them fill in a nearby area quickly.
const TIME_WINDOWS = ['Morning', 'Midday', 'Evening'];

const LOCATIONS = [
  'Spokane, WA 99201',
  'Spokane, WA 99205',
  'Spokane, WA 99207',
  'Spokane, WA 99208',
  'South Hill (Spokane), WA 99203',
  'South Hill (Spokane), WA 99223',
  'Spokane Valley, WA 99206',
  'Spokane Valley, WA 99212',
  'Spokane Valley, WA 99216',
  'Liberty Lake, WA 99019',
  'Airway Heights, WA 99001',
  'Cheney, WA 99004',
  'Deer Park, WA 99006',
];

export default function LeadForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [message, setMessage] = useState('');

  // Earliest selectable date = today (no past dates).
  const today = new Date().toISOString().slice(0, 10);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Combine the date + time-of-day into a single preferred_time value,
    // e.g. "2026-10-02 · Morning".
    data.preferred_time = [data.preferred_date, data.preferred_window]
      .filter(Boolean)
      .join(' · ');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus('ok');
        setMessage(
          "Thanks! We got your request and will reach out shortly. If it's urgent, please call."
        );
        form.reset();
      } else {
        setStatus('error');
        setMessage(json.error || 'Something went wrong. Please try again or call us.');
      }
    } catch {
      setStatus('error');
      setMessage('Could not send right now. Please try again or call us.');
    }
  }

  if (status === 'ok') {
    return (
      <div className="form-note form-ok" role="status">
        <strong>Request received.</strong>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <form className="leadform" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name *</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="service">Service needed</label>
          <select id="service" name="service" defaultValue="Mobile Notary">
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="location">Location / ZIP</label>
          <input
            id="location"
            name="location"
            type="text"
            list="location-options"
            placeholder="Start typing your city or ZIP"
            autoComplete="off"
          />
          <datalist id="location-options">
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="preferred_date">Preferred date</label>
          <input id="preferred_date" name="preferred_date" type="date" min={today} />
        </div>
        <div className="field">
          <label htmlFor="preferred_window">Preferred time</label>
          <select id="preferred_window" name="preferred_window" defaultValue="">
            <option value="">No preference</option>
            {TIME_WINDOWS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Details</label>
        <textarea id="message" name="message" rows={4} placeholder="What do you need notarized? Any details that help us prepare." />
      </div>

      <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request a Notary'}
      </button>

      {status === 'error' && (
        <p className="form-note form-error" role="alert">{message}</p>
      )}
      <p className="form-fine">* Required. We&rsquo;ll never share your information.</p>
    </form>
  );
}
