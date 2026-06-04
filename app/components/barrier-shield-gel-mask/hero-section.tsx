import designImage from "../../assets/barrier-shield-gel-mask/barrier-shield-gel-mask.jpg";

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
          alt="Pyunkang Yul Barrier Shield Gel Mask adhesive moisture barrier care."
          className="block w-full select-none"
        />

        <a
          href={amazonLink}
          aria-label="Shop Pyunkang Yul Barrier Shield Gel Mask on Amazon"
          onClick={() => trackPurchase(pixelId)}
          className="absolute left-[14.67%] top-[80.62%] h-[6.92%] w-[70.67%] rounded-full"
        />
      </div>
    </section>
  );
}
