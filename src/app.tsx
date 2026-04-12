import AmazonLogo from "./components/amazon-logo";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f8fc] to-[#d9e7f5] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        {/* Brand Name */}
        <p className="text-[#555] text-sm tracking-[0.2em] font-medium mb-4">
          Pyunkang Yul
        </p>

        {/* Title */}
        <h2 className="text-[#3366cc] text-xl font-bold mb-1">
          Barrier Strengthening
        </h2>
        <h1 className="text-[#111827] text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          ESSENCE TONER
        </h1>

        {/* Product Image Area */}
        <div className="relative w-full flex justify-center mb-8">
          {/* GET 15% OFF Badge */}
          <div className="absolute right-2 md:right-6 top-0 z-10">
            <div className="w-[72px] h-[72px] rounded-full bg-[#ff2d55] flex flex-col items-center justify-center text-white shadow-lg">
              <span className="text-[10px] font-bold leading-tight">GET</span>
              <span className="text-xl font-extrabold leading-tight">15%</span>
              <span className="text-[10px] font-bold leading-tight">OFF</span>
            </div>
          </div>

          {/* 3M SOLD Badge */}
          <div className="absolute right-2 md:right-6 top-20 z-10">
            <div className="w-[72px] h-[72px] rounded-full bg-[#2a4cb5] flex flex-col items-center justify-center text-white shadow-lg border-[3px] border-[#e8b830]">
              <span className="text-2xl font-extrabold leading-tight">3M</span>
              <span className="text-[10px] font-bold tracking-wider leading-tight">
                SOLD
              </span>
            </div>
          </div>

          {/* Product Image */}
          <img
            src="/product.png"
            alt="Pyunkang Yul Essence Toner"
            className="w-[240px] md:w-[280px] drop-shadow-2xl"
          />
        </div>

        {/* Discount Text */}
        <p className="text-center text-[#111827] text-base md:text-lg font-semibold leading-snug mb-6">
          Get your{" "}
          <span className="text-[#ff2d55] font-bold">15%</span> Amazon
          discount
          <br />
          only via this link
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="group flex items-center justify-center gap-3 w-full max-w-[340px] bg-[#1a2340] hover:bg-[#0f1730] text-white rounded-full py-4 px-8 transition-colors mb-4"
        >
          <span className="text-sm font-bold tracking-wider">SHOP ON</span>
          <AmazonLogo className="h-5 text-white" />
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff9900] group-hover:bg-[#e88a00] transition-colors ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </a>

        {/* Footer Text */}
        <p className="text-[#999] text-xs text-center">
          Coupon will be automatically applied at checkout.
        </p>
      </div>
    </div>
  );
}
