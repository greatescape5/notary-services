# ML Notary Services

Lead-generation website for a mobile notary + apostille business in Spokane, WA.
Built with Next.js 14 (App Router), Supabase, Resend, and an embedded Calendly scheduler.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build check (dummy Supabase values are fine for a local build):

```bash
NEXT_PUBLIC_SUPABASE_URL=https://dummy.supabase.co NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy npx next build
```

## Where to edit things

- **`lib/site.js`** — the control panel: phone, email, domain, Calendly link, GA4 ID, service-area towns, and trust badges. Fill in the `[PLACEHOLDER]` values here.
- **`app/globals.css`** — the design system (colors, fonts, spacing) in one place.
- **`public/spokane-hero.jpg`** — the hero background photo.

## Environment variables (set in Vercel → Production, then redeploy)

| Var | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key (public, protected by RLS) |
| `RESEND_API_KEY` | Resend API key (`re_...`) |
| `LEAD_TO_EMAIL` | Where new-lead alerts are sent |
| `LEAD_FROM_EMAIL` | From address on a Resend-verified domain |

## Deploy

Auto-deploys to Vercel from this repo. In Vercel, **Framework Preset must = Next.js**.

## Credits

Hero photo: People's Park Bridge over the Spokane River by Clay Elliot (Unsplash, free license).
