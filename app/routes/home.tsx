import { useEffect, useState } from "react";
import type { Route } from "./+types/home";
import rootArtwork from "../assets/root/new-image.png";
import PromoCodeCopyButton from "../components/promo-code-copy-button";
import { resolveAmazonLink } from "../lib/amazon-link";
import { ESSENCE_TONER_PROMO_CODE } from "../lib/promotion";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/Moisturizer-Combination-Astringent-Certified-Zero-Irritation/dp/B06ZZK3YJY";

const PAGE_BACKGROUND =
  "linear-gradient(180deg, #ffffff 0%, #ffffff 24%, #fdfefe 32%, #f8fcff 42%, #f3fbfe 50%, #eaf8fe 60%, #e1f5fd 70%, #d8f3fc 78%, #d2f0fc 85%, #c8eefb 100%)";

const PAGE_TITLE = "ESSENCE TONER - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water, this toner delivers deep hydration and strengthens the skin barrier. With only 7 essential ingredients, it offers a fresh, non-sticky feel that's gentle enough for sensitive skin. Fast-absorbing, it can be applied with a cotton pad or used as a sheet mask for rich hydration. Achieve balanced, radiant skin with Pyunkang Yul's gentle yet effective skincare philosophy.";
const OG_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water. Deep hydration, barrier strengthening, only 7 essential ingredients. Gentle yet effective for sensitive skin.";
const OG_IMAGE = "https://shop.pyunkangyul.com/og/toner.webp";
const PAGE_URL = "https://shop.pyunkangyul.com/";
const OG_TITLE = "ESSENCE TONER - Pyunkang Yul | 25% OFF";

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
    <main
      className="flex min-h-dvh items-center justify-center"
      style={{ background: PAGE_BACKGROUND }}
    >
      <div className="relative">
        <img
          src={rootArtwork}
          alt="Pyunkang Yul Essence Toner promotion with an exclusive 25% off offer"
          className="block h-auto w-auto max-h-dvh max-w-full md:w-full md:max-h-none md:max-w-[750px]"
        />
        <PromoCodeCopyButton
          code={ESSENCE_TONER_PROMO_CODE}
          variant="overlay"
          className="left-[21.1%] top-[63.5%] h-[15.2%] w-[58%]"
        />
        <a
          href={amazonLink}
          aria-label="Shop Pyunkang Yul Essence Toner on Amazon"
          className="absolute left-[14.5%] top-[82.2%] h-[5.8%] w-[71%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
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
