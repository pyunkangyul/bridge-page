import afterImage from "../../assets/barrier-shield-gel-mask/after.png";
import backgroundImage from "../../assets/barrier-shield-gel-mask/bg.jpg";
import beforeImage from "../../assets/barrier-shield-gel-mask/before.png";
import logoImage from "../../assets/brand/logo.png";
import veganLogo from "../../assets/toner/vegan.png";
import CtaButton from "../cta-button";

const PAGE_BACKGROUND =
  "linear-gradient(90deg, #90bfe1 0%, #acd0ea 22%, #95c3e4 48%, #c0ddf0 68%, #c6e0f1 88%, #b2d2e8 100%) bottom / 100% 24% no-repeat, linear-gradient(180deg, #ffffff 0%, #ffffff 48%, #f9fbfe 62%, #dcecf7 74%, #bfdcf0 82%, #acd0ea 88%, #a9cee9 100%) center / 100% 100% no-repeat";

function ArrowIcon({ direction }: { direction: "down" | "up" }) {
  return (
    <span
      className={`ml-[1.2%] inline-block h-[5.2vw] w-[4.3vw] align-middle drop-shadow-[5px_5px_6px_rgba(13,23,96,0.28)] min-[750px]:h-[39px] min-[750px]:w-[32px] ${
        direction === "up" ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <span className="block h-full w-full [background:linear-gradient(180deg,#f8fbff_0%,#b5bdd7_21%,#6871a1_38%,#26357b_58%,#1a205f_100%)] [clip-path:polygon(24%_0,76%_0,76%_52%,100%_52%,50%_100%,0_52%,24%_52%)]" />
    </span>
  );
}

export default function HeroSection({
  amazonLink,
  pixelId,
}: {
  amazonLink: string;
  pixelId?: string;
}) {
  return (
    <section className="flex justify-center" style={{ background: PAGE_BACKGROUND }}>
      <div
        className="relative w-full max-w-[750px] overflow-hidden"
        style={{ aspectRatio: "750 / 1201", background: PAGE_BACKGROUND }}
      >
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />

        <img
          src={veganLogo}
          alt="Vegan certified"
          className="absolute left-[3.5%] top-[2.4%] z-10 w-[13.5%]"
        />

        <img
          src={logoImage}
          alt="Pyunkang Yul"
          className="absolute left-1/2 top-[8.3%] z-10 w-[29.6%] -translate-x-1/2"
        />

        <h1
          className="absolute inset-x-0 top-[12.3%] z-10 text-center text-[8.8vw] font-extrabold leading-[1.28] tracking-normal text-[#10186c] min-[750px]:text-[66px]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Adhesive Moisture
          <br />
          Barrier Shield
        </h1>

        <div
          className="absolute inset-x-0 top-[26.9%] z-10 flex items-center justify-center gap-[1.2%] text-[#050505]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <span className="h-[2px] w-[4.9%] bg-[#050505]" aria-hidden="true" />
          <p className="text-[4.25vw] font-semibold leading-none tracking-normal min-[750px]:text-[32px]">
            Barrier Shield Gel Mask
          </p>
          <span className="h-[2px] w-[4.9%] bg-[#050505]" aria-hidden="true" />
        </div>

        <img
          src={beforeImage}
          alt="Skin before using Barrier Shield Gel Mask"
          className="absolute left-[7.7%] top-[32.8%] z-10 w-[28.4%]"
        />

        <img
          src={afterImage}
          alt="Skin after using Barrier Shield Gel Mask"
          className="absolute left-[7.5%] top-[49.3%] z-10 w-[28.9%]"
        />

        <div
          className="absolute inset-x-0 top-[67.7%] z-10 text-center"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <p className="flex items-baseline justify-center text-[3.9vw] font-semibold leading-none tracking-normal text-black min-[750px]:text-[29px]">
            <strong className="mr-[1.2%] text-[5.6vw] font-extrabold leading-none text-[#10186c] min-[750px]:text-[42px]">
              34.94<span className="text-[3vw] min-[750px]:text-[23px]">%</span>
            </strong>
            Barrier Damage
            <ArrowIcon direction="down" />
          </p>

          <p className="mt-[2.5%] flex items-baseline justify-center text-[3.9vw] font-semibold leading-none tracking-normal text-black min-[750px]:text-[29px]">
            <strong className="mr-[1.2%] text-[5.6vw] font-extrabold leading-none text-[#10186c] min-[750px]:text-[42px]">
              28.60<span className="text-[3vw] min-[750px]:text-[23px]">%</span>
            </strong>
            Skin Barrier
            <ArrowIcon direction="up" />
          </p>

          <p className="mt-[3.1%] text-[4.9vw] font-extrabold leading-none tracking-normal text-[#10186c] min-[750px]:text-[37px]">
            Tested for Skin Irritation
          </p>
        </div>

        <div className="absolute left-[14.7%] top-[84.7%] z-20 h-[7.2%] w-[70.7%]">
          <CtaButton
            amazonLink={amazonLink}
            pixelId={pixelId}
            showCaption={false}
            variant="artwork"
          />
        </div>
      </div>
    </section>
  );
}
