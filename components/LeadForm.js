'use client';

import { useState } from 'react';

const SERVICES = [
  'Mobile Notary',
  'Apostille',
  'General Notarization',
  'Loan Signing',
  'Other',
];

export default function LeadForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [message, setMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
          <input id="location" name="location" type="text" placeholder="Where should we meet you?" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="preferred_time">Preferred date &amp; time</label>
        <input id="preferred_time" name="preferred_time" type="text" placeholder="e.g. Thursday afternoon, or ASAP" />
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
