import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: [
    "/",
    "/toner",
    "/barrier-shield-gel-mask",
    "/calming-moisture-barrier-cream",
  ],
} satisfies Config;
