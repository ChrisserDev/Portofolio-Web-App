import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

async function main() {
  // Disable prefetch as it is not supported for "Transaction" pool mode
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('Environment variable DATABASE_URL is required but was not provided.');
  }

  const client = postgres(databaseUrl, { prepare: false });
  const db = drizzle({ client });
}

main();
