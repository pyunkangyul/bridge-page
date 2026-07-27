import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import rootArtwork from "../assets/root/image.png";
import { resolveAmazonLink } from "../lib/amazon-link";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/Moisturizer-Combination-Astringent-Certified-Zero-Irritation/dp/B06ZZK3YJY";

const PAGE_TITLE = "ESSENCE TONER - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water, this toner delivers deep hydration and strengthens the skin barrier. With only 7 essential ingredients, it offers a fresh, non-sticky feel that's gentle enough for sensitive skin. Fast-absorbing, it can be applied with a cotton pad or used as a sheet mask for rich hydration. Achieve balanced, radiant skin with Pyunkang Yul's gentle yet effective skincare philosophy.";
const OG_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water. Deep hydration, barrier strengthening, only 7 essential ingredients. Gentle yet effective for sensitive skin.";
const OG_IMAGE = "https://shop.pyunkangyul.com/og/toner.webp";
const PAGE_URL = "https://shop.pyunkangyul.com/";
const OG_TITLE = "ESSENCE TONER - Pyunkang Yul | 20% OFF";

export const meta: Route.MetaFunction = () => [
  { title: PAGE_TITLE },
  { name: "description", content: PAGE_DESCRIPTION },
  {
    name: "keywords",
    content:
      "Pyunkang Yul, Essence Toner, Korean Skincare, K-Beauty, Barrier Toner, Amazon Deal",
  },
  { name: "robots", content: "index, follow" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: OG_TITLE },
  { property: "og:description", content: OG_DESCRIPTION },
  { property: "og:url", content: PAGE_URL },
  { property: "og:image", content: OG_IMAGE },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: OG_TITLE },
  { name: "twitter:description", content: OG_DESCRIPTION },
  { name: "twitter:image", content: OG_IMAGE },
];

export default function Home() {
  const [amazonLink, setAmazonLink] = useState(DEFAULT_AMAZON_LINK);

  useEffect(() => {
    setAmazonLink(resolveAmazonLink(window.location.search, DEFAULT_AMAZON_LINK));
  }, []);

  return (
    <main className="flex min-h-dvh items-center justify-center bg-[#d4e4f4]">
      <div className="relative">
        <img
          src={rootArtwork}
          alt="Pyunkang Yul Essence Toner promotion with an exclusive 20% off offer"
          className="block h-auto w-auto max-h-dvh max-w-full md:w-full md:max-h-none md:max-w-[750px]"
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
