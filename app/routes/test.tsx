import type { Route } from "./+types/test";

export const meta: Route.MetaFunction = () => [
  { title: "TEST ROUTE - Pyunkang Yul" },
  {
    name: "description",
    content:
      "Placeholder route used to verify multi-page prerendering on GitHub Pages.",
  },
  { name: "robots", content: "noindex" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "TEST ROUTE OG — Pyunkang Yul" },
  {
    property: "og:description",
    content:
      "If a Facebook/Kakao scraper sees THIS title (not the Essence Toner one), per-route OG is working.",
  },
  { property: "og:url", content: "https://shop.pyunkangyul.com/test" },
  { property: "og:image", content: "https://shop.pyunkangyul.com/product.webp" },
];

export default function Test() {
  return (
    <div className="min-h-dvh flex items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider uppercase bg-yellow-100 text-yellow-800 rounded-full">
          Placeholder
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">TEST ROUTE</h1>
        <p className="text-sm text-gray-600 mb-6">
          Path:{" "}
          <code className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-800 font-mono">
            /test
          </code>
        </p>
        <ul className="text-left text-sm text-gray-700 space-y-2 mb-6">
          <li>✓ HTTP 200 OK on direct URL access (no SPA fallback trick)</li>
          <li>✓ Per-route OG meta (verifiable via opengraph.xyz)</li>
          <li>✓ Static HTML prerendered at build time</li>
        </ul>
        <a
          href="/"
          className="inline-block text-sm text-blue-600 hover:text-blue-700 underline"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
}
