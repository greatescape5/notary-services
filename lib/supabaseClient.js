import { createClient } from '@supabase/supabase-js';

// These are public values (protected by Row Level Security). For local build
// tests you can pass dummy values:
//   NEXT_PUBLIC_SUPABASE_URL=https://dummy.supabase.co \
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=dummy npx next build
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy';

export const supabase = createClient(url, anonKey);
