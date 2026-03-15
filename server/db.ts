import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;
const useSupabase = !!(
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
);

if (!connectionString && !useSupabase) {
  throw new Error(
    "Either DATABASE_URL or both SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set.",
  );
}

export const pool = connectionString ? new Pool({ connectionString }) : null;
export const db = pool ? drizzle(pool, { schema }) : null;
