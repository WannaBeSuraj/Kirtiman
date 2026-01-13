# Corro Protection Engineering Website

Industrial and anticorrosive coating + pipeline fabrication site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and static export for SEO.

## Tech Stack
- Next.js 14 (App Router, SSG/export)
- TypeScript
- Tailwind CSS
- Remark + gray-matter for markdown blog

## Running Locally
```bash
npm install
npm run dev
```

## Building for Production
```bash
npm run build
```
Deploy on Vercel; pages are statically generated where possible with API routes enabled for contact submissions.

## Key Features
- SEO-focused metadata and Open Graph defaults
- JSON-LD schemas (Organization, LocalBusiness, Article)
- Markdown-driven blog with reading time
- Contact form posting to `/api/contact`
- Sitemap and robots.txt

## Structure
- `src/app` pages (home, about, solutions, industries, projects, blog, contact, privacy)
- `src/components` reusable UI (hero, cards, CTA, header, footer, contact form)
- `src/lib` metadata, schema, and blog utilities
- `content/blog` markdown posts
- `public` static assets and SEO files

## Deployment
Deploy to Vercel with static export (`output: 'export'`). Ensure domain points to Vercel, submit sitemap to Search Console, and verify analytics.
