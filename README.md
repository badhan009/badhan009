# JACK — Full-Stack Developer Portfolio

A cinematic, responsive portfolio built on Next.js 16.4.4, React 19.3, TypeScript, Tailwind CSS 4, Motion for React, Lucide, and React Icons. The npm package retains the original repository name `developers-protfolio`.

## Run locally

Requires Node.js 20.9+ (verified with Node.js 24.19.0).

```bash
npm ci
npm run dev
```

Open http://localhost:3000 on the machine running the server. In a cloud workspace, this address is internal and is not a public preview link.

For a browser-accessible screenshot, [open the desktop preview on GitHub](https://github.com/badhan009/badhan009/blob/work/docs/previews/desktop.png).

For an interactive public preview, import `badhan009/badhan009` into Vercel, select the `work` branch, and deploy with the detected Next.js defaults (root directory: repository root). No public hosting deployment has been created by this workspace.

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

Fonts are bundled locally through `next/font/local`; builds do not contact Google Fonts. Font licenses are included in `src/app/fonts`.

## Content and configuration

- `src/data/site.ts`: identity, contact email, availability, GitHub link, and non-numeric professional highlights.
- `src/data/services.ts`: service descriptions.
- `src/data/skills.ts`: technology list.
- `src/data/projects.ts`: three demo concepts, case-study narratives, technologies, and optional live URLs.
- `src/app/globals.css`: design tokens, typography, layouts, and responsive states.

Set `site.email` to a real address to switch the contact CTA to email. Until then it opens the repository owner's GitHub profile. Availability is off by default. No experience counts, clients, testimonials, or live project claims are invented.

Set `NEXT_PUBLIC_SITE_URL` to the final absolute production origin before building for deployment. Canonical URLs and sitemap entries are intentionally omitted until a real domain is configured. `robots.txt` remains available.

## Website

One vertical page: Hero → Technology Strip → About → Services → Tech Stack → Featured Work → Development Process → Code Showcase → Contact → Footer.

The reusable `CinematicCharacter` component creates one sticky scene shared by Hero and About. Motion scroll values drive spring-smoothed movement, scaling, a coordinated two-view crossfade, and an exit. Both renders depict the same generated character. This is rendered 2D artwork, not a rotating live 3D model. The scene is clipped before Services. Mobile and reduced-motion users get a static hero composition.

The carousel supports buttons, left/right keyboard keys, swipe gestures, three preview modes, and live project announcements. It never autoplays. Three statically generated case studies live at:

- `/projects/nexora-saas`
- `/projects/form-commerce`
- `/projects/studio-orbit`

Each contains an overview, approach, technologies, gallery, honest concept scope, and next-project navigation. Unknown project slugs return 404.

## Assets

- `public/images/character/hero.webp`: 1024×1536, about 279 KB.
- `public/images/character/about.webp`: 1024×1536, about 249 KB.
- `public/images/decorations/chrome-ring.webp`: 900×900, about 139 KB.

The three artwork assets were generated for this implementation and optimized with alpha transparency. Next.js Image handles responsive delivery. Project previews are editable HTML/CSS concept interfaces, as permitted by the brief, rather than screenshots of real clients. No intro video was supplied; the secondary CTA opens About.

The supplied reference was a single TRANSCEND hero image, rather than the full two-column design board described in the written brief. Its material, lighting, palette, and type direction guide the artwork; the brief supplies the section layout and Jack-specific copy. Exact full-page reference matching cannot be established from the available source.

## Browser verification

Playwright tests use a Chromium executable and an already-running production server:

```bash
npm run build
npm run start -- --port 3001
# In a second terminal:
npm run test:e2e
```

Set `CHROMIUM_PATH` when Chromium is not at `/usr/bin/chromium`; set `TEST_BASE_URL` for another port. Browser coverage includes navigation, menu dismissal and focus, carousel buttons/keyboard/touch, case-study routes/404, reduced motion, widths 320/390/768/1024/1440, missing artwork, console errors, and automated WCAG A/AA checks with axe-core.

See `design-qa.md` for evidence, limitations, and the verification report. Automated accessibility checks do not replace a complete assistive-technology audit.
