export default function HeroSection() {
  return (
    <section className="flex justify-center bg-gradient-to-b from-white from-30% to-[#d4e4f4] px-4 pt-10 pb-12">
      <div className="flex w-full max-w-[750px] flex-col items-center">
        <img src="/logo.png" alt="Pyunkang Yul" className="h-5 mb-4" />

        <h2
          className="text-[#111827] text-xl font-bold mb-1"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Barrier Strengthening
        </h2>
        <h1
          className="text-[#436adf] text-4xl md:text-5xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ESSENCE TONER
        </h1>

        <div className="relative w-full flex justify-center mb-8">
          <div className="absolute left-1/2 top-0 z-10 translate-x-[78px] md:translate-x-[96px]">
            <div className="w-[78px] h-[78px] rounded-full bg-[#FF2158] flex items-center justify-center shadow-lg">
              <div className="relative w-[70px] h-[70px] rounded-full border-[1px] border-white/80 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] rotate-[-45deg] pointer-events-none">
                  <div className="bg-white/8 w-[200%] h-[18px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[4px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[8px] rounded-full" />
                </div>
                <span className="relative z-[1] text-[12px] font-bold leading-tight text-white">GET</span>
                <svg viewBox="0 0 60 28" className="relative z-[1] w-[56px] h-[26px]">
                  <defs>
                    <linearGradient id="gold-gradient-toner" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                  <text
                    x="30"
                    y="24"
                    textAnchor="middle"
                    fill="url(#gold-gradient-toner)"
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

          <div className="absolute left-1/2 top-[88px] z-10 translate-x-[78px] md:translate-x-[96px]">
            <div className="w-[78px] h-[78px] rounded-full bg-[#3257FE] flex items-center justify-center shadow-lg">
              <div className="relative w-[70px] h-[70px] rounded-full border-[1px] border-white/80 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] rotate-[-45deg] pointer-events-none">
                  <div className="bg-white/8 w-[200%] h-[18px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[4px] rounded-full" />
                  <div className="bg-white/8 w-[200%] h-[8px] rounded-full" />
                </div>
                <span
                  className="relative z-[1] text-[26px] font-extrabold leading-tight text-white italic"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  3M
                </span>
                <span className="relative z-[1] text-[12px] font-bold leading-tight text-white -mt-0.5">SOLD</span>
              </div>
            </div>
          </div>

          <img
            src="/product.webp"
            alt="Pyunkang Yul Essence Toner"
            className="w-[240px] md:w-[280px] drop-shadow-2xl"
          />
        </div>

        <p className="text-center text-[#111827] text-base md:text-lg font-semibold leading-snug">
          Get your{" "}
          <span className="text-[#436adf] font-bold">15%</span> Amazon discount
          <br />
          only via this link
        </p>
      </div>
    </section>
  );
}
