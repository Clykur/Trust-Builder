import { db } from "./db";
import { waitlist, type InsertWaitlist, type WaitlistEntry } from "@shared/schema";
import { eq } from "drizzle-orm";
import { supabase } from "./supabase";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

/** Map Supabase row (snake_case) to WaitlistEntry (camelCase) */
function fromSupabaseRow(row: { id: number; email: string; role: string; city: string | null; category: string | null; created_at: string }): WaitlistEntry {
  return {
    id: row.id,
    email: row.email,
    role: row.role,
    city: row.city,
    category: row.category,
    createdAt: new Date(row.created_at),
  };
}

export class SupabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry> {
    const { data, error } = await supabase!
      .from("waitlist")
      .insert({
        email: entry.email,
        role: entry.role,
        city: entry.city,
        category: entry.category,
      })
      .select()
      .single();

    if (error) throw error;
    return fromSupabaseRow(data);
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const { data, error } = await supabase!
      .from("waitlist")
      .select()
      .eq("email", email)
      .maybeSingle();

    if (error) throw error;
    return data ? fromSupabaseRow(data) : undefined;
  }
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry> {
    if (!db) throw new Error("Database not configured");
    const [created] = await db
      .insert(waitlist)
      .values(entry)
      .returning();
    return created;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    if (!db) throw new Error("Database not configured");
    const [entry] = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, email));
    return entry;
  }
}

export const storage =
  supabase != null ? new SupabaseStorage() : new DatabaseStorage();
