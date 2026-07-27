# Toner cropped artwork design

## Goal

Use a cropped version of the supplied toner artwork on the toner page while retaining the page's existing floating Amazon CTA.

## Asset

- Source: `app/assets/root/image.png` (750 × 1400 PNG).
- Derived asset: a non-destructive crop saved in `public/toner/`.
- Crop bounds: retain the artwork from the top through the offer copy immediately above the orange Amazon button. Exclude the orange button and the warning copy below it.

## Page integration

- Replace the current assembled toner hero (logo, headings, product, badge, and offer-copy markup) with the cropped artwork as a responsive image.
- Keep the existing `Toner` route, tracking behavior, and fixed bottom CTA unchanged.
- Keep the existing mobile-first full-width layout; constrain the image to its intrinsic 750 px design width on wider screens.

## Validation

- Confirm the cropped file has the intended lower edge and does not include any part of the orange button.
- Verify `/toner` at mobile and desktop widths: the artwork remains centered, has no horizontal overflow, and the existing floating CTA remains visible.
- Run `pnpm lint`, `pnpm typecheck`, and `pnpm build`.
