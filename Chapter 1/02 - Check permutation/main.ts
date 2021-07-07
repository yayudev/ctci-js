function stringToHashMap(originalString) {
  const characterMap = {};

  for (const character of originalString.toLowerCase()) {
    characterMap[character] = characterMap[character]
      ? characterMap[character] + 1
      : 1;
  }

  return characterMap;
}

// More readable, simpler to undertand version
export function isStringPermutationSimple(
  string1: string,
  string2: string
): boolean {
  if (string1.length !== string2.length) return false;

  const string1HashMap = stringToHashMap(string1);
  const string2HashMap = stringToHashMap(string2);
  const keys = Object.keys(string1HashMap);

  for (const key of keys) {
    if (string1HashMap[key] !== string2HashMap[key]) {
      return false;
    }
  }

  return true;
}

// Optimized version
export function isStringPermutationOptimized(
  string1: string,
  string2: string
): boolean {
  if (string1.length !== string2.length) return false;

  const characterMap = {};
  for (const character of string1.toLowerCase()) {
    characterMap[character] = characterMap[character]
      ? characterMap[character] + 1
      : 1;
  }

  for (const character of string2.toLowerCase()) {
    if (!characterMap[character]) return false;

    characterMap[character]--;
  }

  return true;
}
