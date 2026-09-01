import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type CopyState = "idle" | "copied" | "error";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Continue to the compatibility fallback below.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let didCopy = false;

  try {
    didCopy = document.execCommand("copy");
  } finally {
    document.body.removeChild(textarea);
  }

  return didCopy;
}

export default function PromoCodeCopyButton({
  code,
  className,
  variant = "default",
}: {
  code: string;
  className: string;
  variant?: "default" | "overlay";
}) {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
    }

    const didCopy = await copyText(code);
    setCopyState(didCopy ? "copied" : "error");

    if (didCopy) {
      toast.success("Promo code copied", {
        id: "promo-code-copy",
        description: `${code} is ready to paste at checkout.`,
      });
    } else {
      toast.error("Copy didn't work", {
        id: "promo-code-copy",
        description: `Please try again or enter ${code} manually.`,
      });
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCopyState("idle");
      resetTimerRef.current = null;
    }, 1500);
  };

  return (
    <button
      type="button"
      aria-label={`Copy promo code ${code}`}
      className={`${
        variant === "overlay"
          ? "absolute z-10 cursor-pointer rounded-[8%] bg-transparent focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
          : "group absolute z-10 flex h-[clamp(2rem,7vw,3.25rem)] w-[54%] -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center overflow-hidden rounded-full bg-[linear-gradient(105deg,#55a5fb_0%,#397de9_46%,#315bd4_100%)] px-[clamp(0.625rem,2.2vw,1rem)] text-white shadow-[0_8px_22px_rgba(38,83,177,0.2),inset_0_1px_0_rgba(255,255,255,0.38)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.015] active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173f9f] focus-visible:ring-offset-2"
      } ${className}`}
      onClick={handleCopy}
    >
      {variant === "default" ? (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[8%] top-0 h-px bg-white/50"
          />

          <span className="flex min-w-0 flex-1 items-baseline justify-center gap-[0.28em] whitespace-nowrap text-[clamp(0.69rem,2.9vw,1.35rem)] leading-none tracking-[-0.02em]">
            <span className="font-medium text-white/90">Promo Code:</span>
            <span className="font-semibold tracking-[-0.015em]">
              [{code}]
            </span>
          </span>

          <span className="relative ml-[clamp(0.35rem,1.4vw,0.65rem)] grid size-[clamp(1.375rem,4.6vw,2rem)] shrink-0 place-items-center rounded-full bg-white/16 ring-1 ring-white/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-active:scale-[0.9]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className={`absolute size-[clamp(0.875rem,2.7vw,1.125rem)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                copyState === "copied"
                  ? "scale-75 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            >
              <rect
                x="8.25"
                y="8.25"
                width="10.5"
                height="10.5"
                rx="2.25"
                stroke="currentColor"
                strokeWidth="1.7"
              />
              <path
                d="M15.75 8.25V6.5A2.25 2.25 0 0 0 13.5 4.25h-7A2.25 2.25 0 0 0 4.25 6.5v7a2.25 2.25 0 0 0 2.25 2.25h1.75"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>

            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className={`absolute size-[clamp(0.9rem,2.8vw,1.2rem)] transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                copyState === "copied"
                  ? "scale-100 opacity-100"
                  : "scale-75 opacity-0"
              }`}
            >
              <path
                d="m5.5 12.5 4 4 9-9"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </>
      ) : null}
    </button>
  );
}
