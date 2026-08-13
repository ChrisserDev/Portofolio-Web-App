# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website / portfolio built with Next.js (App Router), TypeScript, PostgreSQL (via Drizzle ORM), and Supabase (Postgres hosting + image storage). Content is a mix of static React pages, MDX-based blog posts, and a database-backed projects list.

## Commands

- `npm run dev` — start the Next.js dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`)

There is no test suite configured in this repo.

### Database (Drizzle + Postgres)

- Schema lives in `src/db/schema.ts`; config is `drizzle.config.ts` (outputs migrations to `./drizzle`).
- `DATABASE_URL` must be set in `.env` (loaded via `dotenv/config` for drizzle-kit, and injected into `next.config.ts`'s `env` for the app).
- No `db:*` scripts are defined in `package.json` — use `drizzle-kit` directly via `npx`, e.g. `npx drizzle-kit push` or `npx drizzle-kit generate`, when schema changes are needed.

## Architecture

- **App Router structure**: all routes live under `src/app`. Each top-level route (`experience`, `projectss`, `skills`, `blog/*`) is a self-contained folder with its own `page.tsx` and a colocated `.scss` file imported directly into that page (no CSS modules; plain global-ish SCSS scoped by convention/class naming).
- **Blog posts are MDX, not database-backed**: each post is a folder under `src/app/blog/<slug>/` containing:
  - `page.mdx` — the content, with YAML frontmatter (`title`, `description`, `date`, `image`) parsed by `gray-matter`.
  - `layout.tsx` — a near-identical wrapper (imports `../blog.scss`, wraps children in `<main className='blog-post-container'><article className='blog-post-content'>`) repeated per post folder rather than shared.
  - New posts: create a new folder following this exact pattern (frontmatter fields are required — `src/lib/posts.ts` reads them directly off `data` with no validation/fallback).
  - `src/lib/posts.ts` (`getBlogPosts`) reads the blog post list at request time by scanning `src/app/blog` directory entries on the filesystem (`fs.readdirSync`/`fs.readFileSync`) — it does not use a content collection or database, so it only works server-side.
  - MDX rendering config: `next.config.ts` wires up `@next/mdx` with `remark-frontmatter`; `mdx-components.tsx` provides (currently empty) global MDX component overrides.
- **Projects are database-backed**: `src/app/projectss/page.tsx` queries the `projects` table directly via `db.select().from(projects)` (Drizzle) using `export const dynamic = 'force-dynamic'` to force per-request rendering. Schema: `id, image, title, demo[] (text array — GitHub/live URLs), stack[] (text array), description`.
- **Images**: served from a Supabase Storage bucket; `next.config.ts` whitelists `xxpokwgadanlbdaiughz.supabase.co` under `images.remotePatterns` — any new remote image host must be added there.
- **DB client**: `src/db/index.ts` creates a single `postgres-js` client + Drizzle instance (`prepare: false`, required for Supabase's connection pooler) — import `db` from `@/db` rather than instantiating new clients.
- **Path alias**: `@/*` maps to `./src/*` (see `tsconfig.json`).
- **Layout**: `src/app/layout.tsx` is the root layout — loads the Quicksand font and renders the shared `NavigationMenu` around all pages.

## Code style

Enforced by ESLint on top of `next/core-web-vitals` and `next/typescript`:
- 2-space indentation
- single quotes (escape-avoiding)
- semicolons required
- trailing commas in multiline (`always-multiline`)
- spaced object braces (`{ foo }`), no spaces in array brackets (`[foo]`)
- max one consecutive empty line
- newline at end of file
