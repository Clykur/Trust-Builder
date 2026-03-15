import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export type SupabaseClientInstance = SupabaseClient;

/**
 * Server-side Supabase client using the service role key.
 * Use this for backend operations that need to bypass Row Level Security (RLS).
 * Only create the client when SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set.
 */
export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseServiceKey) {
    return null;
  }
  return createClient(supabaseUrl, supabaseServiceKey);
}

export const supabase = getSupabase();
