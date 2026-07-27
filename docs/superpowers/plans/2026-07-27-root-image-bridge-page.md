# Root Image Bridge Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the root toner page with the supplied artwork while retaining dynamic Amazon destinations and Meta Pixel PageView/Purchase conversion tracking.

**Architecture:** Keep the page route responsible for page metadata and browser-only URL query handling. Extract the Amazon URL resolver into a small framework-independent module so it can be covered by Node's built-in test runner. The visual route will be a single positioned artwork image with a semantic transparent anchor over the artwork's Amazon button; its click handler uses the same generic Purchase event as the existing CTA.

**Tech Stack:** React 19, React Router 7, TypeScript, Tailwind CSS v4, Node 22 built-in `node:test`.

## Global Constraints

- Render `app/assets/root/image.png` as the sole visible root-page artwork.
- Preserve the default Amazon URL exactly: `https://www.amazon.com/Moisturizer-Combination-Astringent-Certified-Zero-Irritation/dp/B06ZZK3YJY`.
- The first URL query value containing `amazon.com` replaces the default destination.
- The overlay link must be keyboard accessible, retain a meaningful accessible name, and emit `fbq("track", "Purchase")` before navigating.
- Preserve `app/root.tsx` root Pixel `965145019301682` initialization and PageView tracking unchanged.
- Do not alter other routes or root metadata.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build`; visually inspect mobile and desktop renderings.

---

## File Structure

- Create: `app/lib/amazon-link.ts` — URL-query destination resolver, independent of React.
- Create: `app/lib/amazon-link.test.ts` — Node test coverage for default and override behavior.
- Modify: `app/routes/home.tsx` — replace assembled layout with artwork and CTA overlay; consume the resolver.
- Keep: `app/assets/root/image.png` — user-supplied artwork to import into the route.

### Task 1: Add a tested Amazon URL resolver

**Files:**
- Create: `app/lib/amazon-link.ts`
- Create: `app/lib/amazon-link.test.ts`

**Interfaces:**
- Produces: `resolveAmazonLink(search: string, defaultLink: string): string`
- Consumes: raw browser `window.location.search`, such as `"?destination=https%3A%2F%2Fwww.amazon.com%2Fdp%2Fexample"`.
- Guarantees: returns the first decoded query value containing `amazon.com`, otherwise returns `defaultLink`.

- [ ] **Step 1: Write the failing test**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { resolveAmazonLink } from "./amazon-link.ts";

const defaultLink = "https://www.amazon.com/default";

test("returns the supplied default when no Amazon query value exists", () => {
  assert.equal(resolveAmazonLink("?campaign=summer", defaultLink), defaultLink);
});

test("uses the first Amazon URL stored in a query value", () => {
  const destination = "https://www.amazon.com/dp/B06ZZK3YJY?tag=ad";
  const search = `?source=facebook&destination=${encodeURIComponent(destination)}`;

  assert.equal(resolveAmazonLink(search, defaultLink), destination);
});
```

- [ ] **Step 2: Run the test to verify it fails because the module does not exist**

Run: `node --experimental-strip-types --test app/lib/amazon-link.test.ts`

Expected: FAIL with a module-not-found error for `app/lib/amazon-link.ts`.

- [ ] **Step 3: Implement the minimal resolver**

```ts
export function resolveAmazonLink(search: string, defaultLink: string): string {
  const params = new URLSearchParams(search);

  for (const [, value] of params) {
    if (/amazon\.com/i.test(value)) return value;
  }

  return defaultLink;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --experimental-strip-types --test app/lib/amazon-link.test.ts`

Expected: PASS with two passing subtests and zero failures.

- [ ] **Step 5: Commit the completed resolver and test**

```bash
git add app/lib/amazon-link.ts app/lib/amazon-link.test.ts
git commit -m "Add Amazon link resolver"
```

### Task 2: Render the artwork with an accessible tracked CTA overlay

**Files:**
- Modify: `app/routes/home.tsx`

**Interfaces:**
- Consumes: `resolveAmazonLink(search, DEFAULT_AMAZON_LINK)` from `app/lib/amazon-link.ts` and `rootArtwork` imported from `app/assets/root/image.png`.
- Produces: a root route that renders one artwork image and one anchor placed over the visible Amazon button.

- [ ] **Step 1: Make the production requirement fail manually before replacing the layout**

Start: `pnpm dev`

Open: `http://localhost:5173/`

Expected before implementation: the page is assembled from independent logo, headings, product, badges, and CTA elements rather than a single artwork image. Record this as the baseline screenshot or browser observation.

- [ ] **Step 2: Replace the route's visual implementation**

Keep all existing metadata constants. Replace the component implementation and obsolete React/component imports with the following structure, retaining the exact default destination constant:

```tsx
import { useEffect, useState } from "react";
import rootArtwork from "../assets/root/image.png";
import { resolveAmazonLink } from "../lib/amazon-link";

export default function Home() {
  const [amazonLink, setAmazonLink] = useState(DEFAULT_AMAZON_LINK);

  useEffect(() => {
    setAmazonLink(resolveAmazonLink(window.location.search, DEFAULT_AMAZON_LINK));
  }, []);

  return (
    <main className="min-h-dvh bg-[#d4e4f4]">
      <div className="relative mx-auto w-full max-w-[750px]">
        <img
          src={rootArtwork}
          alt="Pyunkang Yul Essence Toner promotion with an exclusive 20% off offer"
          className="block h-auto w-full"
        />
        <a
          href={amazonLink}
          aria-label="Shop Pyunkang Yul Essence Toner on Amazon"
          className="absolute left-[14.7%] top-[78.3%] h-[6.1%] w-[70.8%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          onClick={() => {
            if (typeof window.fbq === "function") {
              window.fbq("track", "Purchase");
            }
          }}
        />
      </div>
    </main>
  );
}
```

The percentages map the image's visible orange Amazon button, approximately x=110–641 and y=1096–1181 in a 750×1400 artwork. Do not change `app/root.tsx`; it still loads the root Pixel and sends PageView.

- [ ] **Step 3: Verify no unrelated route behavior changes**

Run: `pnpm typecheck`

Expected: PASS. The route compiles with the existing generated React Router route type, all imports resolve, and no obsolete imports remain.

- [ ] **Step 4: Commit the artwork route**

```bash
git add app/routes/home.tsx app/assets/root/image.png
git commit -m "Replace root page with toner artwork"
```

### Task 3: Validate the production route and conversion path

**Files:**
- Modify only if validation exposes a defect: `app/routes/home.tsx`.

**Interfaces:**
- Validates: rendered root artwork, visible-button overlay geometry, root Amazon query override, and client-side generic Purchase event.

- [ ] **Step 1: Execute automated and production checks**

```bash
node --experimental-strip-types --test app/lib/amazon-link.test.ts
pnpm lint
pnpm typecheck
pnpm build
```

Expected: every command exits with status 0.

- [ ] **Step 2: Inspect desktop and mobile rendering**

Start: `pnpm dev`

Inspect `http://localhost:5173/` at 375px and 1440px viewport widths. At each width, verify the artwork preserves its aspect ratio, is horizontally centered, has no reconstructed HTML visual content, and the keyboard focus ring identifies the visible orange button.

- [ ] **Step 3: Verify conversion behavior in the browser**

At `http://localhost:5173/?destination=https%3A%2F%2Fwww.amazon.com%2Fdp%2Fexample`, inspect the overlay anchor's `href` and confirm it equals `https://www.amazon.com/dp/example`. Stub `window.fbq` in DevTools before clicking the anchor and confirm its captured invocation is `["track", "Purchase"]`. Confirm the default root PageView initialization remains present in page source through the existing `app/root.tsx` script.

- [ ] **Step 4: Commit any validation correction, if one was necessary**

```bash
git add app/routes/home.tsx
git commit -m "Fix root artwork CTA alignment"
```
