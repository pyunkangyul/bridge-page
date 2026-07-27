export function resolveAmazonLink(search: string, defaultLink: string): string {
  const params = new URLSearchParams(search);

  for (const [, value] of params) {
    if (/amazon\.com/i.test(value)) return value;
  }

  return defaultLink;
}
