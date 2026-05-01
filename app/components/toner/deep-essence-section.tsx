const FEATURES = [
  {
    icon: "/icons/toner-root.png",
    alt: "",
    text: (
      <>
        Astragalus Root Extract
        <br />
        for a stronger barrier
      </>
    ),
  },
  {
    icon: "/icons/toner-texture.png",
    alt: "",
    text: (
      <>
        A rich essence texture
        <br />
        that adheres deeply
      </>
    ),
  },
  {
    icon: "/icons/toner-vegan.png",
    alt: "",
    text: (
      <>
        Dermatologically Tested
        <br />
        Excellent & Vegan Certified
      </>
    ),
  },
];

export default function DeepEssenceSection() {
  return (
    <section className="bg-white">
      <div
        className="relative mx-auto w-full max-w-[750px] overflow-hidden bg-white"
        style={{ aspectRatio: "750 / 1107" }}
      >
        <div
          className="absolute left-[10.4%] top-[10.2%] z-10 text-[#080b2d]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <p className="text-[4.8vw] font-normal leading-none tracking-normal min-[750px]:text-[36px]">
            Barrier Care
          </p>
          <h2 className="mt-[3.1%] whitespace-nowrap text-[7.9vw] font-extrabold leading-none tracking-normal text-[#172571] min-[750px]:text-[59px]">
            Deep Essence Toner
          </h2>
        </div>

        <div className="absolute left-[9.7%] top-[29.8%] z-20 flex w-[28.5%] flex-col items-center gap-[5.1vw] text-center text-[#111122] min-[750px]:gap-[38px]">
          {FEATURES.map((feature, index) => (
            <div key={index} className="w-full">
              <img
                src={feature.icon}
                alt={feature.alt}
                className="mx-auto mb-[4.2%] block w-[43%]"
                aria-hidden="true"
              />
              <p className="relative left-1/2 w-[165%] -translate-x-1/2 text-center text-[3.3vw] font-medium leading-[1.13] tracking-normal min-[750px]:text-[25px]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="absolute left-[10.8%] top-[58.4%] z-0 h-px w-[26.8%] bg-[#ededed]"
          aria-hidden="true"
        />

        <img
          src="/product-ginseng.png"
          alt="Pyunkang Yul Essence Toner with astragalus root"
          className="pointer-events-none absolute left-0 top-[24.3%] w-full select-none"
        />
      </div>
    </section>
  );
}
