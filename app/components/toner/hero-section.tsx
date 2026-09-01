import PromoCodeCopyButton from "../promo-code-copy-button";
import { ESSENCE_TONER_PROMO_CODE } from "../../lib/promotion";

export default function HeroSection() {
  return (
    <section className="flex justify-center bg-white">
      <div className="relative w-full max-w-[750px]">
        <img
          src="/toner/essence-toner-hero.png"
          alt="Pyunkang Yul Essence Toner 25% offer"
          className="h-auto w-full"
        />
        <PromoCodeCopyButton
          code={ESSENCE_TONER_PROMO_CODE}
          variant="overlay"
          className="left-[21.1%] top-[77.3%] h-[18.5%] w-[58%]"
        />
      </div>
    </section>
  );
}
