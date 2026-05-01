import { useEffect, useState } from "react";
import type { Route } from "./+types/toner";
import BarrierStrengthSection from "../components/toner/barrier-strength-section";
import CtaButton from "../components/cta-button";
import DeepEssenceSection from "../components/toner/deep-essence-section";
import HeroSection from "../components/toner/hero-section";
import TrustedBarrierSection from "../components/toner/trusted-barrier-section";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/Moisturizer-Combination-Astringent-Certified-Zero-Irritation/dp/B06ZZK3YJY";

const PAGE_TITLE = "ESSENCE TONER - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water, this toner delivers deep hydration and strengthens the skin barrier. With only 7 essential ingredients, it offers a fresh, non-sticky feel that's gentle enough for sensitive skin.";
const OG_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water. Deep hydration, barrier strengthening, only 7 essential ingredients.";
const OG_IMAGE = "https://shop.pyunkangyul.com/product.webp";
const PAGE_URL = "https://shop.pyunkangyul.com/toner";
const OG_TITLE = "ESSENCE TONER - Pyunkang Yul | 15% OFF";

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

export default function Toner() {
  const [amazonLink, setAmazonLink] = useState<string>(DEFAULT_AMAZON_LINK);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const [, value] of params) {
      if (/amazon\.com/i.test(value)) {
        setAmazonLink(value);
        return;
      }
    }
  }, []);

  return (
    <div className="w-screen max-w-[100vw] overflow-x-hidden bg-white pb-32">
      <HeroSection />
      <BarrierStrengthSection />
      <TrustedBarrierSection />
      <DeepEssenceSection />

      <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pb-6 pt-8 px-4 bg-gradient-to-t from-white via-white/95 from-50% to-transparent">
        <CtaButton amazonLink={amazonLink} />
      </div>
    </div>
  );
}
