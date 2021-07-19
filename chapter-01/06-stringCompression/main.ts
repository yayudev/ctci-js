export function stringCompression(input: string): string {
  if (input.length <= 1) {
    return input;
  }

  let result = "";
  let characterCount = 0;

  for (let index = 0; index < input.length; index++) {
    const character = input[index];
    const nextCharacter = input[index + 1];

    characterCount++;

    if (character === nextCharacter) continue;

    result += character + characterCount;
    characterCount = 0;

    if (result.length > input.length) {
      return input;
    }
  }

  return result;
}
