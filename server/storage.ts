import { db } from "./db";
import { waitlist, type InsertWaitlist, type WaitlistEntry } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry>;
  getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined>;
}

export class DatabaseStorage implements IStorage {
  async createWaitlistEntry(entry: InsertWaitlist): Promise<WaitlistEntry> {
    const [created] = await db
      .insert(waitlist)
      .values(entry)
      .returning();
    return created;
  }

  async getWaitlistEntryByEmail(email: string): Promise<WaitlistEntry | undefined> {
    const [entry] = await db
      .select()
      .from(waitlist)
      .where(eq(waitlist.email, email));
    return entry;
  }
}

export const storage = new DatabaseStorage();
