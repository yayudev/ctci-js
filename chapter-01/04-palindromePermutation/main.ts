function isEven(n: number) {
  return n % 2 === 0;
}

export function palindromePermutation(input: string): boolean {
  const characterMap: Record<string, number> = {};
  const normalizedInput = input.replace(/\s/g, "").toLowerCase();

  for (const character of normalizedInput) {
    if (!characterMap[character]) {
      characterMap[character] = 0;
    }

    characterMap[character]++;
  }

  let singleCharacters = 0;
  for (const characterCount of Object.values(characterMap)) {
    if (isEven(characterCount)) continue;

    singleCharacters++;

    if (singleCharacters > 1) return false;
  }

  return true;
}
