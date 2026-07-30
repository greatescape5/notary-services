import { supabase } from './supabaseClient';

// IMPORTANT PATTERN: every read is wrapped in try/catch and returns a safe
// fallback ([] or null). This means a build with no network / no Supabase
// configured never fails — pages just render with empty data.

export async function getServices() {
  try {
    const { data } = await supabase
      .from('services')
      .select('*')
      .order('sort_order');
    return data || [];
  } catch {
    return [];
  }
}

export async function getServiceAreas() {
  try {
    const { data } = await supabase
      .from('service_areas')
      .select('*')
      .eq('published', true)
      .order('sort_order');
    return data || [];
  } catch {
    return [];
  }
}

export async function getServiceArea(slug) {
  try {
    const { data } = await supabase
      .from('service_areas')
      .select('*')
      .eq('slug', slug)
      .single();
    return data || null;
  } catch {
    return null;
  }
}

export async function getTestimonials() {
  try {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .order('sort_order');
    return data || [];
  } catch {
    return [];
  }
}

export async function getSettings() {
  try {
    const { data } = await supabase.from('settings').select('*');
    // Return as a simple { key: value } object for easy lookup.
    return (data || []).reduce((acc, row) => {
      acc[row.key] = row.value;
      return acc;
    }, {});
  } catch {
    return {};
  }
}
