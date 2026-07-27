import assert from "node:assert/strict";
import test from "node:test";
import { resolveAmazonLink } from "./amazon-link.ts";

const defaultLink = "https://www.amazon.com/default";

test("returns the supplied default when no Amazon query value exists", () => {
  assert.equal(resolveAmazonLink("?campaign=summer", defaultLink), defaultLink);
});

test("uses the first Amazon URL stored in a query value", () => {
  const destination = "https://www.amazon.com/dp/B06ZZK3YJY?tag=ad";
  const search = `?source=facebook&destination=${encodeURIComponent(destination)}`;

  assert.equal(resolveAmazonLink(search, defaultLink), destination);
});
