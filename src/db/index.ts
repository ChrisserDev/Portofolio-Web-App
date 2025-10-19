import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const databaseUrl = process.env.DATABASE_URL; // Supabase connection string

if (!databaseUrl) {
  throw new Error('Environment variable DATABASE_URL is required but was not provided.');
}

// Prevent duplicate clients during hot reload
const globalForDb = globalThis as unknown as {
  __drizzleClient?: ReturnType<typeof postgres>;
  __drizzleDb?: ReturnType<typeof drizzle>;
};

const client =
  globalForDb.__drizzleClient ?? postgres(databaseUrl, { prepare: false });
const dbInstance = globalForDb.__drizzleDb ?? drizzle(client);

// Cache client globally
if (!globalForDb.__drizzleClient) {
  globalForDb.__drizzleClient = client;
}

// Cache Drizzle instance globally
if (!globalForDb.__drizzleDb) {
  globalForDb.__drizzleDb = dbInstance;
}

export const db = dbInstance;
