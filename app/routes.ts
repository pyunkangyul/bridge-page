import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("toner", "routes/toner.tsx"),
  route("barrier-shield-gel-mask", "routes/barrier-shield-gel-mask.tsx"),
  route(
    "calming-moisture-barrier-cream",
    "routes/calming-moisture-barrier-cream.tsx",
  ),
] satisfies RouteConfig;
