export function stringRotation(
  originalString: string,
  compareString: string
): boolean {
  return originalString.repeat(2).includes(compareString);
}
