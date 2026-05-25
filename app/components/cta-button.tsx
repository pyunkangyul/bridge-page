import AmazonLogo from "./amazon-logo";

type CtaButtonVariant = "default" | "artwork";

const BUTTON_CLASSES: Record<CtaButtonVariant, string> = {
  default:
    "group relative flex items-center justify-center gap-3 w-full max-w-[340px] bg-[#FFA41C] hover:bg-[#f09800] text-black rounded-full py-4 px-8 transition-colors shadow-lg mb-2",
  artwork:
    "group relative flex h-full w-full max-w-none items-center justify-center gap-[4.5%] rounded-full bg-[#FFA41C] px-[7.4%] py-0 text-black shadow-[0_4px_12px_rgba(0,0,0,0.18)] transition-colors hover:bg-[#f09800]",
};

const TEXT_CLASSES: Record<CtaButtonVariant, string> = {
  default: "text-base font-bold tracking-wider leading-none",
  artwork:
    "text-[4.9vw] font-extrabold leading-none tracking-[0.04em] min-[750px]:text-[37px]",
};

const LOGO_CLASSES: Record<CtaButtonVariant, string> = {
  default: "h-[18px] text-black",
  artwork: "h-[5.6vw] text-black min-[750px]:h-[42px]",
};

const ARROW_CLASSES: Record<CtaButtonVariant, string> = {
  default: "absolute right-6 w-5 h-5 text-black",
  artwork:
    "absolute right-[6.9%] h-[5.4vw] w-[5.4vw] text-black min-[750px]:h-[41px] min-[750px]:w-[41px]",
};

export default function CtaButton({
  amazonLink,
  pixelId,
  showCaption = true,
  variant = "default",
}: {
  amazonLink: string;
  pixelId?: string;
  showCaption?: boolean;
  variant?: CtaButtonVariant;
}) {
  return (
    <>
      <a
        href={amazonLink}
        onClick={() => {
          if (typeof window.fbq !== "function") return;
          if (pixelId) {
            window.fbq("trackSingle", pixelId, "Purchase");
          } else {
            window.fbq("track", "Purchase");
          }
        }}
        className={BUTTON_CLASSES[variant]}
      >
        <span className={TEXT_CLASSES[variant]}>SHOP ON</span>
        <AmazonLogo className={LOGO_CLASSES[variant]} />
        <svg xmlns="http://www.w3.org/2000/svg" className={ARROW_CLASSES[variant]} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
      {showCaption && (
        <p className="text-[#4d4d4d] text-xs text-center">
          Coupon will be automatically applied at checkout.
        </p>
      )}
    </>
  );
}
