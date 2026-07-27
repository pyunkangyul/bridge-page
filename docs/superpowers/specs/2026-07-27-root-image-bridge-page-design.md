# Root image bridge page

## Goal

Replace the root route's assembled toner landing page with the supplied single artwork image while preserving all existing conversion behavior.

## Rendering

- Render `app/assets/root/image.png` as the sole visible root-page artwork.
- Keep the image proportional and centered. On viewports narrower than the artwork, scale it to the viewport width; on wider viewports, retain the artwork's native-width presentation.
- Expose meaningful alternative text for the product promotion image.

## Conversion behavior

- Preserve the existing default Amazon product URL and URL-query override: the first query parameter value containing `amazon.com` becomes the destination.
- Overlay a transparent, keyboard-accessible anchor on the artwork's visible `SHOP ON amazon` button.
- The anchor uses the resolved Amazon destination and sends the existing generic Meta Pixel `Purchase` event on click, matching the current root CTA behavior.
- Preserve root-route Meta Pixel initialization and `PageView` tracking in `app/root.tsx` unchanged.

## Scope

- Keep the existing root metadata and other product routes unchanged.
- No visual elements other than the supplied artwork are recreated in HTML.

## Verification

- Add a focused test or equivalent automated check for the root CTA's URL override and Purchase tracking behavior if the project tooling supports it.
- Run lint, typecheck, and production build.
- Inspect the root route at mobile and desktop widths, confirming the artwork renders without distortion and the button overlay follows its visual location.
