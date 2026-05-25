import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Route } from "./+types/calming-moisture-barrier-cream";
import BridgeSection from "../components/calming-moisture-barrier-cream/bridge-section";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/PYUNKANG-YUL-Calming-Moisture-Barrier/dp/B09X9Q6494/";

const PAGE_TITLE = "Calming Moisture Barrier Cream - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Pyunkang Yul Calming Moisture Barrier Cream supports sensitive, acne-prone skin with soothing moisture barrier care, Centella Asiatica, ceramide, and lasting hydration.";
const OG_DESCRIPTION =
  "Sensitive skin comfort and barrier strengthening care for acne-prone skin.";
const OG_IMAGE =
  "https://shop.pyunkangyul.com/og/calming-moisture-barrier-cream.jpg";
const PAGE_URL = "https://shop.pyunkangyul.com/calming-moisture-barrier-cream";
const OG_TITLE =
  "Calming Moisture Barrier Cream - Pyunkang Yul | Amazon Deal";
const PAGE_BACKGROUND =
  "linear-gradient(180deg, #ece7e1 0%, #f0ece7 24%, #eeeae5 48%, #fffff5 82%, #fffff5 100%)";

export const meta: Route.MetaFunction = () => [
  { title: PAGE_TITLE },
  { name: "description", content: PAGE_DESCRIPTION },
  {
    name: "keywords",
    content:
      "Pyunkang Yul, Calming Moisture Barrier Cream, Korean Skincare, K-Beauty, Acne Prone Skin, Barrier Cream, Amazon Deal",
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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function CalmingMoistureBarrierCream() {
  const [amazonLink, setAmazonLink] = useState<string>(DEFAULT_AMAZON_LINK);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isCentered, setIsCentered] = useState<boolean | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    for (const [, value] of params) {
      if (/amazon\.com/i.test(value)) {
        setAmazonLink(value);
        return;
      }
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const getDvh = () => {
      const el = document.createElement("div");
      el.style.height = "100dvh";
      el.style.position = "fixed";
      el.style.visibility = "hidden";
      document.body.appendChild(el);
      const dvh = el.offsetHeight;
      document.body.removeChild(el);
      return dvh;
    };

    const check = () => {
      const contentHeight = contentRef.current?.scrollHeight ?? 0;
      setIsCentered(contentHeight <= getDvh());
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <main
      style={{ minHeight: "100dvh", background: PAGE_BACKGROUND }}
      className={`flex w-screen max-w-[100vw] justify-center overflow-x-hidden ${
        isCentered ? "items-center" : "items-start"
      } ${isCentered === null ? "invisible" : "visible"}`}
    >
      <div ref={contentRef} className="w-full">
        <BridgeSection amazonLink={amazonLink} />
      </div>
    </main>
  );
}
