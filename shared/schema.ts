import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  role: text("role").notNull(), // Client, Freelancer, Investor
  city: text("city"),
  category: text("category"), // Skill category
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// === BASE SCHEMAS ===
export const insertWaitlistSchema = createInsertSchema(waitlist).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  email: z.string().email("Please enter a valid email address"),
  role: z.enum(["Client", "Freelancer", "Investor"], {
    required_error: "Please select a role",
  }),
  city: z.string().min(1, "Please enter your city"),
  category: z.string().min(1, "Please enter your industry"),
});

// === EXPLICIT API CONTRACT TYPES ===
export type WaitlistEntry = typeof waitlist.$inferSelect;
export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;

export type CreateWaitlistRequest = InsertWaitlist;
export type WaitlistResponse = WaitlistEntry;
