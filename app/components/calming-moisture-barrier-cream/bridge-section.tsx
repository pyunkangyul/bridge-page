import designImage from "../../assets/calming-moisture-barrier-cream/calming-moisture-barrier-cream.jpg";

const PAGE_BACKGROUND =
  "linear-gradient(180deg, #ece7e1 0%, #f0ece7 24%, #eeeae5 48%, #fffff5 82%, #fffff5 100%)";

function trackPurchase(pixelId?: string) {
  if (typeof window.fbq !== "function") return;
  if (pixelId) {
    window.fbq("trackSingle", pixelId, "Purchase");
  } else {
    window.fbq("track", "Purchase");
  }
}

export default function BridgeSection({ amazonLink }: { amazonLink: string }) {
  return (
    <section style={{ background: PAGE_BACKGROUND }}>
      <div
        className="relative mx-auto w-full max-w-[750px] overflow-hidden"
        style={{ background: PAGE_BACKGROUND }}
      >
        <img
          src={designImage}
          alt="Pyunkang Yul Calming Moisture Barrier Cream for sensitive skin comfort and barrier strengthening."
          className="block w-full select-none"
        />

        <a
          href={amazonLink}
          aria-label="Shop Pyunkang Yul Calming Moisture Barrier Cream on Amazon"
          onClick={() => trackPurchase()}
          className="absolute left-[14.67%] top-[84.6%] h-[7.16%] w-[70.67%] rounded-full"
        />
      </div>
    </section>
  );
}
