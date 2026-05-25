# Repository Guidelines

## Project Structure & Module Organization

This is a React Router 7 + Vite landing-page app for Pyunkang Yul bridge pages. Source lives in `app/`: route modules are in `app/routes/`, shared UI is in `app/components/`, and global styles are in `app/app.css`. Route registration is centralized in `app/routes.ts`; add new pages there instead of creating ad hoc entry points. Static production assets live in `public/`, grouped by purpose such as `public/brand/` and `public/toner/`. Design references and source imagery live in `design/` and should not be imported directly by app code.

## Build, Test, and Development Commands

Use pnpm for all package operations.

- `pnpm install` installs dependencies from `pnpm-lock.yaml`.
- `pnpm dev` starts the React Router development server.
- `pnpm build` creates the production build in `build/`.
- `pnpm preview` serves the built app locally through Vite.
- `pnpm typecheck` generates React Router types and runs `tsc -b`.
- `pnpm lint` runs ESLint across the repo.

CI uses Node 22 and `pnpm install --frozen-lockfile`, then deploys `build/client` to GitHub Pages.

## Coding Style & Naming Conventions

Write TypeScript and TSX with 2-space indentation, semicolons, and double quotes, matching the existing files. Keep React components in PascalCase, route files lowercase (`home.tsx`, `toner.tsx`), and component filenames kebab-case (`cta-button.tsx`). Prefer small route-specific sections under `app/components/<route>/` when a component is not shared. Use Tailwind CSS v4 utilities in markup and keep only global/base rules in `app/app.css`.

## Testing Guidelines

No unit test framework is currently configured. Before handing off changes, run `pnpm lint`, `pnpm typecheck`, and `pnpm build`. For visual changes, verify the affected route in a browser at common mobile and desktop widths. If adding tests later, colocate them near the code under test and use clear names such as `cta-button.test.tsx`.

## Commit & Pull Request Guidelines

Recent commits use short, descriptive messages in English or Korean, for example `Add toner bridge page` or `픽셀아이디`. Keep messages concise and focused on the user-visible change. Pull requests should include a brief summary, commands run, screenshots for UI changes, and notes for tracking updates such as Facebook Pixel IDs, Amazon CTA URLs, or asset replacements.

## Security & Configuration Tips

Do not commit real account credentials or private deployment tokens. Treat `public/CNAME`, `robots.txt`, `sitemap.xml`, Pixel IDs, and product asset paths as production-facing configuration; update them deliberately and mention changes in the PR.
