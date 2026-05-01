export default function BarrierStrengthSection() {
  return (
    <section className="bg-white">
      <div
        className="relative mx-auto w-full max-w-[750px] overflow-hidden bg-white"
        style={{ aspectRatio: "750 / 1139" }}
      >
        <div
          className="absolute left-[-11%] top-[45.5%] h-[34%] w-[49%] rounded-full border border-[#d9dde8]/55 opacity-70"
          aria-hidden="true"
        />

        <div className="absolute inset-x-0 top-[9.1%] text-center">
          <p
            className="text-[3.8vw] leading-none text-[#111122] min-[750px]:text-[28px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Pyunkang Yul
          </p>
          <h2
            className="mx-auto mt-[5.5%] max-w-[86%] text-[9vw] font-extrabold leading-[1.28] tracking-normal text-[#172571] min-[750px]:text-[67px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Barrier Strength
            <br />
            Built from Within
          </h2>

          <div className="mt-[3.3%] flex items-center justify-center gap-[2.1%] text-[#080b2d]">
            <span className="h-px w-[7.3%] bg-[#111122]" aria-hidden="true" />
            <p
              className="text-[5.3vw] font-extrabold leading-none min-[750px]:text-[40px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Essence Toner
            </p>
            <span className="h-px w-[7.3%] bg-[#111122]" aria-hidden="true" />
          </div>
        </div>

        <div className="absolute left-[8.7%] top-[38.4%] grid w-[82.4%] grid-cols-2 gap-[1.8%]">
          <div>
            <img
              src="/before.png"
              alt="Skin before using Essence Toner"
              className="block aspect-[255/210] w-full object-cover"
            />
            <div
              className="flex h-[5.3vw] max-h-[40px] items-center justify-center bg-[#e3e3e3] text-[3.2vw] font-semibold leading-none text-[#080b2d] min-[750px]:text-[24px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              BEFORE
            </div>
          </div>

          <div className="relative border-[3px] border-[#172571] border-b-0">
            <img
              src="/after.png"
              alt="Skin after using Essence Toner"
              className="block aspect-[255/210] w-full object-cover"
            />
            <div
              className="flex h-[5.3vw] max-h-[40px] items-center justify-center bg-[#172571] text-[3.2vw] font-semibold leading-none text-white min-[750px]:text-[24px]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              AFTER
            </div>
          </div>

          <div
            className="absolute left-1/2 top-[47%] flex h-[6.9vw] max-h-[52px] w-[6.9vw] max-w-[52px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#172571] text-[8.3vw] font-light leading-none text-white shadow-[0_2px_5px_rgba(0,0,0,0.18)] min-[750px]:text-[62px]"
            aria-hidden="true"
          >
            <span className="-mt-[8%]">›</span>
          </div>
        </div>

        <div
          className="absolute left-[8.7%] top-[65.9%] z-10 space-y-[2.1%] text-[#172571]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <p className="flex items-baseline whitespace-nowrap text-[4.1vw] font-semibold leading-[1.25] min-[750px]:text-[31px]">
            <strong className="mr-[2vw] text-[5.9vw] font-extrabold min-[750px]:mr-4 min-[750px]:text-[44px]">
              34.94<span className="text-[3.4vw] min-[750px]:text-[25px]">%</span>
            </strong>
            Barrier Damage
            <span className="ml-[1.4vw] inline-block h-[5.2vw] w-[5.2vw] self-center min-[750px]:ml-3 min-[750px]:h-[39px] min-[750px]:w-[39px]">
              <span className="block h-full w-full bg-gradient-to-b from-[#172571] via-[#26357b] to-white [clip-path:polygon(28%_0,72%_0,72%_52%,100%_52%,50%_100%,0_52%,28%_52%)]" />
            </span>
          </p>

          <p className="flex items-baseline whitespace-nowrap text-[4.1vw] font-semibold leading-[1.25] min-[750px]:text-[31px]">
            <strong className="mr-[2vw] text-[5.9vw] font-extrabold min-[750px]:mr-4 min-[750px]:text-[44px]">
              28.60<span className="text-[3.4vw] min-[750px]:text-[25px]">%</span>
            </strong>
            Skin Barrier
            <span className="ml-[1.4vw] inline-block h-[5.2vw] w-[5.2vw] rotate-180 min-[750px]:ml-3 min-[750px]:h-[39px] min-[750px]:w-[39px]">
              <span className="block h-full w-full bg-gradient-to-b from-[#172571] via-[#26357b] to-white [clip-path:polygon(28%_0,72%_0,72%_52%,100%_52%,50%_100%,0_52%,28%_52%)]" />
            </span>
          </p>

          <p className="whitespace-nowrap text-[4.1vw] font-semibold leading-[1.25] min-[750px]:text-[31px]">
            <strong className="mr-[1.1vw] text-[5.9vw] font-extrabold min-[750px]:mr-2 min-[750px]:text-[44px]">
              24-Hour
            </strong>
            Hydration
          </p>
        </div>

        <img
          src="/product.webp"
          alt="Pyunkang Yul Essence Toner bottle"
          className="absolute right-[8.9%] top-[65.9%] h-[17.4%] w-auto object-contain drop-shadow-[8px_18px_8px_rgba(0,0,0,0.18)]"
        />
      </div>
    </section>
  );
}
