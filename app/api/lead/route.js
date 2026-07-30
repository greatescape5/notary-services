import { supabase } from '@/lib/supabaseClient';
import { Resend } from 'resend';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

// Escape user input before putting it in HTML emails.
function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Best-effort email: never throws, logs failures so they show in Vercel logs.
// Returns true if at least one message was accepted.
async function sendEmails(lead) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error('[lead] Email skipped — missing env vars', {
      RESEND_API_KEY: !!apiKey,
      LEAD_TO_EMAIL: !!to,
      LEAD_FROM_EMAIL: !!from,
    });
    return false;
  }

  const resend = new Resend(apiKey);
  const s = {
    name: esc(lead.name),
    email: esc(lead.email),
    phone: esc(lead.phone || '—'),
    service: esc(lead.service || '—'),
    location: esc(lead.location || '—'),
    when: esc(lead.preferred_time || '—'),
    message: esc(lead.message || '—'),
  };

  let notifyOk = false;
  let confirmOk = false;

  // 1) Owner alert
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      reply_to: lead.email,
      subject: `New notary request: ${lead.name} (${lead.service || 'general'})`,
      html: `<h2>New notary lead</h2>
        <p><b>Name:</b> ${s.name}</p>
        <p><b>Phone:</b> ${s.phone}</p>
        <p><b>Email:</b> ${s.email}</p>
        <p><b>Service:</b> ${s.service}</p>
        <p><b>Location:</b> ${s.location}</p>
        <p><b>Preferred time:</b> ${s.when}</p>
        <p><b>Details:</b><br>${s.message}</p>`,
    });
    if (error) console.error('[lead] Resend notify FAILED:', JSON.stringify(error));
    else { notifyOk = true; console.log('[lead] notify OK', data?.id); }
  } catch (e) {
    console.error('[lead] notify threw:', e?.message || e);
  }

  // 2) Client confirmation
  try {
    const { data, error } = await resend.emails.send({
      from,
      to: lead.email,
      subject: `We got your notary request — ${SITE.name}`,
      html: `<p>Hi ${s.name},</p>
        <p>Thanks for reaching out to ${SITE.name}. We received your request and
        will confirm your appointment shortly. If it's urgent, call us at ${esc(SITE.phone)}.</p>
        <p>— ${SITE.name}, ${SITE.city} ${SITE.state}</p>`,
    });
    if (error) console.error('[lead] Resend confirmation FAILED:', JSON.stringify(error));
    else { confirmOk = true; console.log('[lead] confirm OK', data?.id); }
  } catch (e) {
    console.error('[lead] confirm threw:', e?.message || e);
  }

  return notifyOk || confirmOk;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const lead = {
    name: (body.name || '').trim(),
    email: (body.email || '').trim(),
    phone: (body.phone || '').trim() || null,
    service: (body.service || '').trim() || null,
    location: (body.location || '').trim() || null,
    preferred_time: (body.preferred_time || '').trim() || null,
    message: (body.message || '').trim() || null,
  };

  if (!lead.name || !lead.email) {
    return Response.json(
      { ok: false, error: 'Name and email are required.' },
      { status: 400 }
    );
  }

  // Save first. The email step must never block or undo the save.
  const { error } = await supabase.from('leads').insert(lead);
  if (error) {
    console.error('[lead] Supabase insert FAILED:', error.message);
    return Response.json({ ok: false, error: 'Could not save your request.' }, { status: 500 });
  }

  const emailed = await sendEmails(lead);
  return Response.json({ ok: true, emailed });
}
