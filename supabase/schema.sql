-- ===========================================================================
-- ML Notary Services — Supabase schema
--
-- HOW TO USE (when you're ready to turn on the database):
--   1. Create a project at https://supabase.com
--   2. Open your project → SQL Editor → New query
--   3. Paste this whole file → Run
--   4. Project Settings → API: copy the Project URL and the anon public key
--   5. Put them in the site's environment variables (Vercel → Settings → Env):
--        NEXT_PUBLIC_SUPABASE_URL   = your project URL
--        NEXT_PUBLIC_SUPABASE_ANON_KEY = your anon public key
--      then redeploy. That's it — the lead form will start saving.
--
-- Everything below has Row Level Security (RLS) ON, so the public anon key is
-- safe to expose: visitors can submit the form but can't read anyone's data.
-- ===========================================================================


-- ---------------------------------------------------------------------------
-- LEADS — the "Request a notary" form writes here.
-- Public (anon) may INSERT only. Only signed-in (authenticated) users can read.
-- ---------------------------------------------------------------------------
create table if not exists public.leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz default now(),
  name           text not null,
  email          text not null,
  phone          text,
  service        text,
  location       text,
  preferred_time text,   -- e.g. "2026-10-02 · Morning"
  message        text
);

alter table public.leads enable row level security;

create policy "anon can insert leads" on public.leads
  for insert to anon with check (true);

create policy "authed can read leads" on public.leads
  for select to authenticated using (true);


-- ---------------------------------------------------------------------------
-- SERVICE_AREAS — OPTIONAL. Only needed if you later move the town content out
-- of lib/serviceAreas.js and into the database. Public read of published rows.
-- ---------------------------------------------------------------------------
create table if not exists public.service_areas (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  name         text not null,
  county       text,
  region_label text,
  intro        text,
  landmarks    text[],
  published    boolean default true,
  sort_order   int default 0
);

alter table public.service_areas enable row level security;

create policy "public read areas" on public.service_areas
  for select to anon using (published = true);


-- ---------------------------------------------------------------------------
-- SERVICES / TESTIMONIALS / SETTINGS — OPTIONAL. Public read. These match the
-- helpers already in lib/data.js so the site can pull content from the DB later.
-- ---------------------------------------------------------------------------
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  title text,
  blurb text,
  slug text,
  sort_order int default 0
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  quote text,
  author text,
  location text,
  sort_order int default 0
);

create table if not exists public.settings (
  key   text primary key,
  value text
);

alter table public.services     enable row level security;
alter table public.testimonials enable row level security;
alter table public.settings     enable row level security;

create policy "public read services"     on public.services     for select to anon using (true);
create policy "public read testimonials" on public.testimonials for select to anon using (true);
create policy "public read settings"     on public.settings     for select to anon using (true);
