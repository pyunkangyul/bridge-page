import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Route } from "./+types/barrier-shield-gel-mask";
import HeroSection from "../components/barrier-shield-gel-mask/hero-section";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/s?k=Pyunkang+Yul+Barrier+Shield+Gel+Mask";

const BARRIER_SHIELD_GEL_MASK_FB_PIXEL_ID = "1617572582680265";

const PAGE_TITLE = "Barrier Shield Gel Mask - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Pyunkang Yul Barrier Shield Gel Mask delivers adhesive moisture care for a comfortable skin barrier, with before and after barrier care benefits highlighted for sensitive skin.";
const OG_DESCRIPTION =
  "Adhesive moisture barrier care with Pyunkang Yul Barrier Shield Gel Mask.";
const OG_IMAGE = "https://shop.pyunkangyul.com/og/barrier-shield-gel-mask.jpg";
const PAGE_URL = "https://shop.pyunkangyul.com/barrier-shield-gel-mask";
const OG_TITLE = "Barrier Shield Gel Mask - Pyunkang Yul";
const PAGE_BACKGROUND =
  "linear-gradient(90deg, #90bfe1 0%, #acd0ea 22%, #95c3e4 48%, #c0ddf0 68%, #c6e0f1 88%, #b2d2e8 100%) bottom / 100% 24% no-repeat, linear-gradient(180deg, #ffffff 0%, #ffffff 48%, #f9fbfe 62%, #dcecf7 74%, #bfdcf0 82%, #acd0ea 88%, #a9cee9 100%) center / 100% 100% no-repeat";

export const meta: Route.MetaFunction = () => [
  { title: PAGE_TITLE },
  { name: "description", content: PAGE_DESCRIPTION },
  {
    name: "keywords",
    content:
      "Pyunkang Yul, Barrier Shield Gel Mask, Korean Skincare, K-Beauty, Moisture Barrier, Vegan Skincare",
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

export default function BarrierShieldGelMask() {
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
        <HeroSection
          amazonLink={amazonLink}
          pixelId={BARRIER_SHIELD_GEL_MASK_FB_PIXEL_ID}
        />
      </div>
    </main>
  );
}
