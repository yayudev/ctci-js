export function oneAway(stringA: string, stringB: string): boolean {
  const lengthDifference = stringA.length - stringB.length;
  const [smallerString, largerString] =
    lengthDifference > 0 ? [stringB, stringA] : [stringA, stringB];

  if (Math.abs(lengthDifference) > 1) {
    return false;
  }

  let differences = 0;
  let aIndex = 0;
  let bIndex = 0;

  while (aIndex < smallerString.length) {
    if (smallerString[aIndex] === largerString[bIndex]) {
      bIndex++;
      aIndex++;
      continue;
    }

    differences++;

    bIndex++;
    if (!lengthDifference) aIndex++;

    if (differences > 1) return false;
  }

  return true;
}
