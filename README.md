# Syed Muneeb Ur Rehman — Portfolio (Next.js)

A componentized, TypeScript **Next.js (App Router)** rebuild of my portfolio, with the same
design and interactions: mouse-reactive constellation hero, typing terminal, count-up stats,
3D-tilt project cards, scroll progress, active-section nav, and full light/dark theming.

## Tech

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- Plain **CSS** (design tokens + `data-theme` theming in `app/globals.css`) — no CSS framework needed
- Zero runtime dependencies beyond React/Next

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Add your résumé PDF

Copy your résumé into the `public/` folder so the "Download résumé" button works:

```
public/Muneeb-SoftwareEngineer.pdf
```

(The download link points to `/Muneeb-SoftwareEngineer.pdf`.)

## Project structure

```
app/
  layout.tsx        # <html>/<body>, metadata, global CSS
  page.tsx          # assembles all sections
  globals.css       # design tokens, theming, all styles
  icon.svg          # favicon
lib/
  data.ts           # ALL content lives here — edit this to update the site
components/
  SiteHeader.tsx    # nav, theme toggle, active-section highlight   (client)
  ScrollProgress.tsx# top scroll-progress bar                        (client)
  Hero.tsx          # hero layout + intro orchestration             (client)
  Constellation.tsx # canvas network background                     (client)
  Typewriter.tsx    # rotating role text                            (client)
  Terminal.tsx      # animated console                              (client)
  CountUp.tsx       # animated stat numbers                         (client)
  ProjectCard.tsx   # tilt + spotlight + reveal work card           (client)
  Magnetic.tsx      # magnetic buttons                              (client)
  Reveal.tsx        # scroll-reveal wrapper                         (client)
  About / Skills / Experience / Work / Education / Contact / Footer  (server)
```

## Editing content

Everything (skills, experience, projects, education, contact, terminal lines, rotating roles)
is defined in **`lib/data.ts`**. Change it there and every section updates.

## Deploy

- **Vercel** (recommended): push to GitHub, "Import Project" → deploy. Zero config.
- **Netlify**: works with the Next.js runtime.
- Any Node host: `npm run build && npm start`.

## Accessibility

- Respects `prefers-reduced-motion` (all animations disable).
- Pointer-driven effects (tilt / magnetic / constellation) only run on fine pointers.
- Keyboard focus styles and semantic landmarks included.
