import designImage from "../../assets/barrier-shield-gel-mask/barrier-shield-gel-mask-prom.png";
import { BARRIER_SHIELD_GEL_MASK_PROMO_CODE } from "../../lib/promotion";
import PromoCodeCopyButton from "../promo-code-copy-button";

const PAGE_BACKGROUND =
  "linear-gradient(180deg, #ffffff 0%, #f7fbff 52%, #d7eefb 100%)";

function trackPurchase(pixelId?: string) {
  if (typeof window.fbq !== "function") return;
  if (pixelId) {
    window.fbq("trackSingle", pixelId, "Purchase");
  } else {
    window.fbq("track", "Purchase");
  }
}

export default function HeroSection({
  amazonLink,
  pixelId,
}: {
  amazonLink: string;
  pixelId?: string;
}) {
  return (
    <section style={{ background: PAGE_BACKGROUND }}>
      <div
        className="relative mx-auto w-full max-w-[750px] overflow-hidden"
        style={{ background: PAGE_BACKGROUND }}
      >
        <img
          src={designImage}
          alt="Pyunkang Yul Barrier Shield Gel Mask promotion with 20% off using promo code WXLYETWZ."
          className="block w-full select-none"
        />

        <PromoCodeCopyButton
          code={BARRIER_SHIELD_GEL_MASK_PROMO_CODE}
          variant="overlay"
          className="left-[19.73%] top-[77.69%] h-[4.15%] w-[60.4%]"
        />

        <a
          href={amazonLink}
          aria-label="Shop Pyunkang Yul Barrier Shield Gel Mask on Amazon"
          onClick={() => trackPurchase(pixelId)}
          className="absolute left-[14.53%] top-[83.77%] h-[6.77%] w-[71.07%] rounded-full focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        />
      </div>
    </section>
  );
}
