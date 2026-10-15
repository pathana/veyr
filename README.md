# VEYR

Site for **VEYR** — Pathana (full stack engineer) + Sam (art director).

Built with **Next.js** (App Router), **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion**.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Deploy — no env vars required for v1.

After you buy a domain, point it at Vercel and update `url` in [`content/site.ts`](content/site.ts).

## Brand tokens (pre-logo)

Colors live as CSS variables in [`app/globals.css`](app/globals.css):

- `--background` / `--foreground` — near-black / off-white
- `--neon-teal` — Pathana / custom websites
- `--neon-magenta` — Sam / brand design
- `--neon-lime` — energy accent / ongoing care
- `--neon-violet` / `--neon-orange` — additional service & project accents

Swap values there when the logo and final palette land. The wordmark in the nav/footer is text-based until Sam’s logo files are ready — drop SVGs into `public/` and wire them in `components/layout/Nav.tsx` / `Footer.tsx`.

## Contact form

[`lib/actions.ts`](lib/actions.ts) validates and `console.info`s submissions. When you have an inbox:

1. Add something like [Resend](https://resend.com) (or Formspree).
2. Replace the placeholder log with a real send.
3. Update `emailPlaceholder` in [`content/site.ts`](content/site.ts).

## Content

Typed content modules (no CMS yet):

- [`content/site.ts`](content/site.ts) — name, tagline, nav
- [`content/team.ts`](content/team.ts) — founders
- [`content/services.ts`](content/services.ts) — services
- [`content/projects.ts`](content/projects.ts) — case studies (placeholders)

## Pages

- `/` — Home
- `/about` — Team
- `/services` — Services
- `/work` — Project index
- `/work/[slug]` — Case study
- `/contact` — Contact form
