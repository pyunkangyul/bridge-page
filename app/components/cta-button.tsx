import AmazonLogo from "./amazon-logo";

export default function CtaButton({ amazonLink }: { amazonLink: string }) {
  return (
    <>
      <a
        href={amazonLink}
        onClick={() => {
          if (typeof window.fbq === "function") {
            window.fbq("track", "Purchase");
          }
        }}
        className="group relative flex items-center justify-center gap-3 w-full max-w-[340px] bg-[#FFA41C] hover:bg-[#f09800] text-black rounded-full py-4 px-8 transition-colors shadow-lg mb-2"
      >
        <span className="text-base font-bold tracking-wider leading-none">SHOP ON</span>
        <AmazonLogo className="h-[18px] text-black" />
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-6 w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </a>
      <p className="text-[#4d4d4d] text-xs text-center">
        Coupon will be automatically applied at checkout.
      </p>
    </>
  );
}
