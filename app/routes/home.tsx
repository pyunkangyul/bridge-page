import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Route } from "./+types/home";
import CtaButton from "../components/cta-button";

const DEFAULT_AMAZON_LINK =
  "https://www.amazon.com/Moisturizer-Combination-Astringent-Certified-Zero-Irritation/dp/B06ZZK3YJY";

const PAGE_TITLE = "ESSENCE TONER - Pyunkang Yul";
const PAGE_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water, this toner delivers deep hydration and strengthens the skin barrier. With only 7 essential ingredients, it offers a fresh, non-sticky feel that's gentle enough for sensitive skin. Fast-absorbing, it can be applied with a cotton pad or used as a sheet mask for rich hydration. Achieve balanced, radiant skin with Pyunkang Yul's gentle yet effective skincare philosophy.";
const OG_DESCRIPTION =
  "Formulated with Astragalus Root Extract instead of purified water. Deep hydration, barrier strengthening, only 7 essential ingredients. Gentle yet effective for sensitive skin.";
const OG_IMAGE = "https://shop.pyunkangyul.com/product.webp";
const PAGE_URL = "https://shop.pyunkangyul.com/";
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

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Home() {
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

  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isFloating, setIsFloating] = useState<boolean | null>(null);

  useIsomorphicLayoutEffect(() => {
    const getDvh = () => {
      // dvh를 정확히 구하기 위해 임시 요소로 측정
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
      const ctaHeight = ctaRef.current?.offsetHeight ?? 0;
      const viewportHeight = getDvh();
      setIsFloating(contentHeight + ctaHeight > viewportHeight);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div
      style={{ minHeight: "100dvh" }}
      className={`bg-gradient-to-b from-white from-30% to-[#d4e4f4] flex justify-center px-4 pt-10 ${
        isFloating ? "items-center pb-28" : "items-center"
      } ${isFloating === null ? "invisible" : "visible"}`}
    >
      <div ref={contentRef} className="w-full max-w-[420px] flex flex-col items-center">
        {/* Brand Logo */}
        <img
          src="/logo.png"
          alt="Pyunkang Yul"
          className="h-5 mb-4"
        />

        {/* Title */}
        <h2 className="text-[#111827] text-xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Barrier Strengthening
        </h2>
        <h1 className="text-[#436adf] text-4xl md:text-5xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
          ESSENCE TONER
        </h1>

        {/* Product Image Area */}
        <div className="relative w-full flex justify-center mb-8">
          {/* GET 15% OFF Badge */}
          <div className="absolute right-2 md:right-6 top-0 z-10">
            <div className="w-[78px] h-[78px] rounded-full bg-[#FF2158] flex items-center justify-center shadow-lg">
              <div className="relative w-[70px] h-[70px] rounded-full border-[1px] border-white/80 flex flex-col items-center justify-center overflow-hidden">
                {/* Diagonal lines */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] rotate-[-45deg] pointer-events-none">
                  <div className="bg-white/8 w-[200%] h-[18px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[4px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[8px] rounded-full" />
                </div>
                <span className="relative z-[1] text-[12px] font-bold leading-tight text-white">GET</span>
                <svg viewBox="0 0 60 28" className="relative z-[1] w-[56px] h-[26px]">
                  <defs>
                    <linearGradient id="gold-gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                  <text
                    x="30"
                    y="24"
                    textAnchor="middle"
                    fill="url(#gold-gradient)"
                    fontWeight="800"
                    fontSize="28"
                    fontFamily="'Poppins', sans-serif"
                    fontStyle="italic"
                  >
                    15%
                  </text>
                </svg>
                <span className="relative z-[1] text-[12px] font-bold leading-tight text-white -mt-0.5">OFF</span>
              </div>
            </div>
          </div>

          {/* 3M SOLD Badge */}
          <div className="absolute right-2 md:right-6 top-[88px] z-10">
            <div className="w-[78px] h-[78px] rounded-full bg-[#3257FE] flex items-center justify-center shadow-lg">
              <div className="relative w-[70px] h-[70px] rounded-full border-[1px] border-white/80 flex flex-col items-center justify-center overflow-hidden">
                {/* Diagonal lines */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] rotate-[-45deg] pointer-events-none">
                  <div className="bg-white/8 w-[200%] h-[18px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[4px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[8px] rounded-full" />
                </div>
                <span className="relative z-[1] text-[26px] font-extrabold leading-tight text-white italic" style={{ fontFamily: "'Poppins', sans-serif" }}>3M</span>
                <span className="relative z-[1] text-[12px] font-bold leading-tight text-white -mt-0.5">SOLD</span>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <img
            src="/product.webp"
            alt="Pyunkang Yul Essence Toner"
            className="w-[240px] md:w-[280px] drop-shadow-2xl"
          />
        </div>

        {/* Discount Text */}
        <p className="text-center text-[#111827] text-base md:text-lg font-semibold leading-snug mb-6">
          Get your{" "}
          <span className="text-[#436adf] font-bold">15%</span> Amazon
          discount
          <br />
          only via this link
        </p>

        {/* 인라인 CTA (화면에 다 들어갈 때) */}
        {!isFloating && (
          <div className="flex flex-col items-center w-full pt-2">
            <CtaButton amazonLink={amazonLink} />
          </div>
        )}
      </div>

      {/* CTA 높이 측정용 (숨김) */}
      <div ref={ctaRef} className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pb-6 pt-8 px-4 pointer-events-none invisible">
        <CtaButton amazonLink={amazonLink} />
      </div>

      {/* 플로팅 CTA (스크롤 필요할 때) */}
      {isFloating && (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center pb-6 pt-8 px-4 bg-gradient-to-t from-[#d4e4f4] from-60% to-transparent">
          <CtaButton amazonLink={amazonLink} />
        </div>
      )}
    </div>
  );
}
