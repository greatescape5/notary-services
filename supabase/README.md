# Supabase setup

The site runs fine **without** Supabase (the lead form just can't save yet).
When you're ready to turn on the database and start capturing leads:

1. Create a free project at [supabase.com](https://supabase.com).
2. In your project, open **SQL Editor → New query**, paste all of
   [`schema.sql`](schema.sql), and click **Run**. This creates the tables and
   security rules.
3. Go to **Project Settings → API** and copy:
   - **Project URL**
   - **anon public** key
4. Add them as environment variables (locally in `.env.local`, and in
   **Vercel → Settings → Environment Variables**), then redeploy:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
5. To also send email alerts on each lead, add your Resend variables too:
   ```
   RESEND_API_KEY=re_xxx
   LEAD_TO_EMAIL=you@yourdomain.com
   LEAD_FROM_EMAIL=ML Notary <hello@yourdomain.com>
   ```

That's it — once those are set and you redeploy, the "Request a notary" form
saves to the `leads` table and emails you. You can view submissions in
**Supabase → Table Editor → leads**.

> The `anon` key is safe to expose publicly: Row Level Security lets visitors
> submit the form but never read stored data.
