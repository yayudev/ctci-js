export function hasOnlyUniqueCharacters(testString: string): boolean {
  const characterMap = {};

  for (const character of testString.toLowerCase()) {
    if (characterMap[character]) return false;

    characterMap[character] = true;
  }

  return true;
}
