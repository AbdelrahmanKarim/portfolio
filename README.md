# Abdelrahman Karim — Portfolio

Android/Kotlin portfolio built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

All copy lives in one file:

- [`src/data/portfolio.ts`](src/data/portfolio.ts) — name, bio, experience, projects, skills, links

## Add your assets

| File | Purpose |
|------|---------|
| `public/profile.jpg` | Your profile photo (hero section) |
| `public/hero/` | Background slideshow photos |
| `public/achievements/` | Competition photos for track record |
| `public/projects/<name>/` | Project screenshot carousels |

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Framework preset: **Next.js** (auto-detected)
4. Deploy

## Project structure

```
src/
├── app/              # Next.js App Router
├── components/
│   ├── layout/       # Navbar, Footer, scroll UI
│   ├── sections/     # Hero, About, Experience, ...
│   └── ui/           # Shared UI primitives
└── data/
    └── portfolio.ts  # All site content
```
