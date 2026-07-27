# Toner Cropped Artwork Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Display a cropped version of the supplied toner artwork on `/toner` while retaining the existing floating Amazon CTA.

**Architecture:** A derived PNG in `public/toner/` holds all artwork above the source image's orange button. `HeroSection` becomes a focused responsive-image component that references that public asset. The route continues to own the fixed CTA and tracking logic.

**Tech Stack:** React 19, React Router 7, Vite, Tailwind CSS v4, macOS `sips`.

## Global Constraints

- Crop `app/assets/root/image.png` (750 × 1400) non-destructively at the row immediately above the orange Amazon button; retain the offer copy.
- Store the derived public asset under `public/toner/`.
- Do not modify the fixed CTA, Amazon-link resolution, or Facebook Pixel behavior in `app/routes/toner.tsx`.
- Do not add a test framework for this static visual change; the repository has no configured test command. Validate with lint, typecheck, production build, and browser checks.

---

### Task 1: Create the cropped public artwork

**Files:**
- Create: `public/toner/essence-toner-hero.png`
- Read: `app/assets/root/image.png`

**Interfaces:**
- Consumes: a 750 × 1400 PNG source image.
- Produces: a 750 px-wide PNG ending before the orange Amazon button, suitable for `src="/toner/essence-toner-hero.png"`.

- [ ] **Step 1: Confirm the crop boundary**

Use the first row of the orange button as the excluded boundary. The output retains the source from `y=0` through `y=1094`, ending after the offer-copy region and before the button.

- [ ] **Step 2: Create the non-destructive crop**

Run:

```bash
mkdir -p public/toner
sips --cropToHeightWidth 1095 750 app/assets/root/image.png --out public/toner/essence-toner-hero.png
```

- [ ] **Step 3: Verify the derived image dimensions and lower edge**

Run:

```bash
sips -g pixelWidth -g pixelHeight public/toner/essence-toner-hero.png
```

Expected: width `750`, height `1095`; no orange button pixels appear at the lower edge.

### Task 2: Render the cropped artwork in the toner hero

**Files:**
- Modify: `app/components/toner/hero-section.tsx`
- Consumes: `/toner/essence-toner-hero.png` created in Task 1.
- Produces: a centered, responsive hero image with no duplicated in-page CTA copy.

**Interfaces:**
- The component remains a default export with no props:

```tsx
export default function HeroSection() {
  return <section>{/* toner hero artwork */}</section>;
}
```

- [ ] **Step 1: Establish the expected markup before replacement**

The finished component must contain an image with these user-visible properties:

```tsx
<img
  src="/toner/essence-toner-hero.png"
  alt="Pyunkang Yul Essence Toner 20% offer"
/>
```

The component must not render a second Amazon button; `/toner` already renders its fixed `CtaButton`.

- [ ] **Step 2: Replace the assembled hero markup**

Implement a white wrapper and a full-width image constrained to 750 px, preserving the source artwork's ratio:

```tsx
export default function HeroSection() {
  return (
    <section className="flex justify-center bg-white">
      <img
        src="/toner/essence-toner-hero.png"
        alt="Pyunkang Yul Essence Toner 20% offer"
        className="h-auto w-full max-w-[750px]"
      />
    </section>
  );
}
```

- [ ] **Step 3: Verify compilation and visual behavior**

Run:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Then inspect `/toner` at a mobile-width viewport and a desktop-width viewport. Confirm the image is centered with no horizontal overflow, retains the offer copy, excludes the embedded orange button, and has exactly one fixed Amazon CTA.

