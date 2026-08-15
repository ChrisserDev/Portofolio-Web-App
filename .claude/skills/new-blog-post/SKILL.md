---
name: new-blog-post
description: Use when Cristian pastes the text of one of his Medium articles (or otherwise asks to turn an article into a new blog post on this site). Creates a new src/app/blog/<slug>/ folder with a page.mdx (frontmatter, Medium metadata stripped, images turned into accessible placeholders) and a layout.tsx, matching the pattern of the existing posts. Triggers on "add this as a blog post", "new blog post", "turn this into a post", "paste medium article".
---

# New blog post from a Medium article

Turns a pasted Medium article into a new post folder under `src/app/blog/`,
following this repo's existing convention exactly (see
[../../../CLAUDE.md](../../../CLAUDE.md) for the general blog architecture).
No new npm packages, no new shared components — every post is just two
files: `page.mdx` + `layout.tsx`.

**Before doing anything, read one or two existing posts** to recalibrate
structure if necessrry — e.g. `src/app/blog/http-fundamentals/page.mdx` and
`src/app/blog/state-in-react/page.mdx`. This skill describes the pattern;
the existing posts are the ground truth if they ever diverge.

## 1. Work out the slug and title

- `title`: the article's real title, cleaned up (no Medium clickbait artifacts, no trailing " | by Author").
- `slug`: kebab-case version of the title, matching existing folder names
  (`http-fundamentals`, `how-javascript-works`, `state-in-react`). Short,
  no stopwords needed either way — look at existing folders for the level
  of abbreviation used.
- Folder path: `src/app/blog/<slug>/`.

## 2. Strip Medium's chrome — keep only the article body

Medium pastes bring along a lot of junk that is not part of the article.
Remove all of it:

- Byline/meta line ("X min read · Published in ... · Jun 3, 2025")
- Claps count, response count, "Listen", "Share", member-only lock icon
- "Follow" buttons, author bio card (photo + short bio), "Written by ..."
- Tags list at the bottom, "No responses yet", related-articles rail
- Any Medium navigation text ("Open in app", "Sign up", "Sign in")

What's left should read exactly like the body of
`src/app/blog/*/page.mdx` — headings, paragraphs, lists, code blocks,
images — nothing else.

## 3. Build the frontmatter

```yaml
---
title: 'Exact Article Title'
description: 'One or two sentences summarizing what the post covers — written in the same second-person, matter-of-fact voice as the existing descriptions (see below), not copy-pasted Medium subtitle fluff.'
date: 'YYYY-MM-DD'
image: 'https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Blog_Assets/Title_With_Underscores/lowercase_snake_cover.webp'
---
```

- `description`: if the Medium subtitle is decent, adapt it; otherwise
  write one from the article's opening paragraph. Match the register of
  existing descriptions, e.g. *"How a request and response are actually
  structured, the methods and status codes you'll use constantly..."*
- `date`: ask Cristian if not given; otherwise use today's date.
- `image`: see the naming convention in step 4 — this is the cover image,
  same URL as the first `<figure>` in the body.

## 4. Image src naming convention (placeholders)

Every image — cover and inline — lives in the same Supabase bucket, in a
folder named after the post title, `Title_Case_With_Underscores`:

```
https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Blog_Assets/<Post_Title_With_Underscores>/<filename>.webp
```

- Cover image filename: `<lowercase_snake_of_title>_cover.webp`
  (e.g. title "HTTP Fundamentals" → folder `HTTP_Fundamentals`, cover
  `http_fundamentals_cover.webp`).
- Inline images: short descriptive filename in the same folder, e.g.
  `FOUC.webp`, matching what the image actually shows — look at how
  `css-concepts-and-algorithms/page.mdx` and `how-javascript-works/page.mdx`
  name theirs.

These URLs are **placeholders** — the file doesn't need to exist in
Supabase yet. Write the `src` using this exact convention so that once
Cristian uploads the real webp to that bucket path, the image just works
with no code changes. Never point `src` at anything else (no local
`/public` paths, no hotlinked Medium CDN URLs) — `next.config.ts` only
whitelists the Supabase host.

Every `<img>` **must** have a non-empty, descriptive `alt` (accessibility
requirement — no `alt=""` unless the image is truly decorative, and none
of the existing posts do that). If the source article had an image with
no useful caption, write an `alt` from context, not the filename.

## 5. page.mdx structure

````mdx
---
title: 'Post Title'
description: '...'
date: 'YYYY-MM-DD'
image: 'https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Blog_Assets/Post_Title/post_title_cover.webp'
---

# Post Title

<div className="blog-callout">
  One short paragraph hook — what this post covers and why it matters. Usually adapted from the article's own opening.
</div>

<figure className="blog-figure">
  <img src="https://xxpokwgadanlbdaiughz.supabase.co/storage/v1/object/public/Blog_Assets/Post_Title/post_title_cover.webp" alt="Post Title" />
</figure>

## First Section Heading

Body content, converted from the Medium article's headings/paragraphs/lists.
`##` for top-level sections, `###` for subsections — mirror the article's
own heading hierarchy.

```javascript
// code blocks keep their language tag
```

<figure className="blog-figure">
  <img src="https://.../Post_Title/some_inline_image.webp" alt="Descriptive alt text for this specific image" />
  <figcaption>Optional caption, if the original had one</figcaption>
</figure>
````

Notes on fidelity to the source:

- Keep the article's own section structure and examples — this is a
  transcription + cleanup pass, not a rewrite. Fix only what Medium's
  export mangled (smart quotes, broken code formatting, stray link
  artifacts).
- Only add a `blog-callout` at the very end (a short sign-off) if the
  source article had one, or if Cristian asks for it — don't invent one
  by default, since it's a personal touch, not a template requirement.
- `blog-callout` and `blog-figure` are the only two custom classes
  available (defined in `src/app/blog/blog.scss`); don't invent new ones.

## 6. layout.tsx — copy verbatim, no edits needed

```tsx
import type { ReactNode } from 'react';
import '../blog.scss';

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <main id='main-content' className='blog-post-container'>
      <article className='blog-post-content'>
        {children}
      </article>
    </main>
  );
}
```

Identical across every post in the repo — just write this file as-is into
the new folder.

## 7. Done — no other files to touch

`src/lib/posts.ts` (`getBlogPosts`) scans `src/app/blog/*` on the
filesystem at request time and reads frontmatter via `gray-matter` — the
new folder is picked up automatically on the next request. Do not edit
`posts.ts`, the blog index `page.tsx`, or any nav/config file for a new
post.

After writing both files, run `npm run lint` to catch formatting issues
(2-space indent, single quotes, trailing commas — see root
[CLAUDE.md](../../../CLAUDE.md)) — this applies to `layout.tsx`; `page.mdx`
isn't linted but should still be tidy.
