export function urlify(url: string, length: number): string {
  return url.trim().slice(0, length).replace(/\s/g, "%20");
}
