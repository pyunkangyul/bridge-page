import type { ReactNode } from "react";

function ReviewCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[14px] bg-white px-[5%] py-[6%] shadow-[0_5px_14px_rgba(0,0,0,0.14)] ring-1 ring-black/[0.04]">
      <div className="mb-[4%] flex items-center justify-center gap-[1%]" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-[9.5%] w-[9.5%] text-[#FFD400]" fill="currentColor" aria-hidden="true">
            <path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.57L12 17.77 6.1 20.67l1.13-6.57L2.45 9.44l6.6-.96L12 2.5z" />
          </svg>
        ))}
      </div>
      <p className="text-center text-[clamp(12px,3vw,19px)] leading-[1.2] text-black">{children}</p>
    </div>
  );
}

export default function TrustedBarrierSection() {
  return (
    <section className="mt-[clamp(-108px,-14vw,-72px)] bg-white">
      <div
        className="relative mx-auto w-[100svw] max-w-[750px] overflow-hidden bg-white"
        style={{ aspectRatio: "750 / 1035" }}
      >
        <div className="absolute inset-x-0 top-[14.2%] -translate-x-[6%] text-center">
          <p
            className="text-[4.1vw] leading-tight text-[#080b2d] min-[750px]:text-[31px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Loved by <span className="font-extrabold">3M+</span> Worldwide
          </p>
          <h2
            className="mt-[1.4%] whitespace-nowrap text-[5.8vw] font-extrabold leading-none tracking-normal text-[#172571] min-[750px]:text-[44px]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trusted Barrier Care
          </h2>
        </div>

        <img
          src="/pyunkang-yul-toner-hand.png"
          alt="Hand holding Pyunkang Yul Essence Toner"
          className="pointer-events-none absolute left-[-1.5%] top-[34.7%] w-[50%] select-none"
        />

        <div className="absolute left-[28.5%] top-[32.2%] w-[56%]">
          <ReviewCard>
            My skin barrier feels <strong>stronger</strong> and stays{" "}
            <strong>calm throughout the day.</strong>
          </ReviewCard>
        </div>

        <div className="absolute right-[3.5%] top-[51.8%] w-[50.4%]">
          <ReviewCard>
            The moisture <strong>lasts all day,</strong>
            <br />
            so my skin doesn't feel dry
            <br />
            and looks <strong>healthier over time</strong>
          </ReviewCard>
        </div>

        <div className="absolute right-[4.5%] top-[73.3%] w-[49.8%]">
          <ReviewCard>
            Whenever my skin feels off,
            <br />
            it helps bring it back
            <br />
            to a <strong>calm, comfortable state.</strong>
          </ReviewCard>
        </div>
      </div>
    </section>
  );
}
