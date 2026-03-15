import { createClient } from "@supabase/supabase-js";

/**
 * Browser Supabase client (uses anon key).
 * Use for client-side features like Auth or Realtime when needed.
 * Do not put the service_role key in client code.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;
