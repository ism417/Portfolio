# Portfolio

Personal site of Ismail El Abbassi — a single-page portfolio in a dark editorial style, with a
hover-driven work index, a custom cursor, and drifting background light fields.

**Live:** [ismail-el-abbassi.vercel.app](https://ismail-el-abbassi.vercel.app/)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- CSS Modules for component styling, with design tokens as CSS custom properties in `globals.css`
- [Tailwind CSS](https://tailwindcss.com) v4, available for utility classes
- `next/font` for Newsreader (serif) and JetBrains Mono

## Getting started

The app lives in `react-portfolio/`:

```bash
cd react-portfolio
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |

## Project structure

```
react-portfolio/
├── public/
│   ├── projects/           Project screenshots used by the work index
│   └── eismail-cv.pdf      Résumé linked from the hero
└── src/
    ├── app/
    │   ├── layout.js       Fonts and document metadata
    │   ├── page.js         Page composition and hover state
    │   └── globals.css     Design tokens, base styles, keyframes
    ├── components/
    │   ├── BackgroundField Drifting light fields and dot grid
    │   ├── CursorLayer     Lagging cursor ring and the pointer-following preview
    │   ├── Section         Shared section shell (padding, rule, max width)
    │   ├── SiteHeader      Sticky anchor nav
    │   └── sections/       Hero, NowStrip, Work, Craft, Path, Contact
    ├── data/
    │   └── portfolio.js    All site content: projects, stack, timeline, contact
    └── hooks/
        └── useReveal.js    Reveal-on-scroll via IntersectionObserver
```

## Editing content

Copy, projects, skills, timeline entries and contact links all live in
[`src/data/portfolio.js`](react-portfolio/src/data/portfolio.js) — no component changes needed to
update them. Project screenshots go in `public/projects/` and are referenced from the same file.

## Deployment

Deployed on Vercel with `react-portfolio` as the project root directory.
