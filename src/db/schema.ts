import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  image: varchar('image', { length: 2048 }).notNull(),
  title: varchar('title', { length: 200 }).notNull(),
  demo: text('demo').array().notNull(),
  stack: text('tech_stack').array().notNull(),
  description: text('description').notNull(),
});
