import {
  isStringPermutationSimple,
  isStringPermutationOptimized,
} from "./main";

describe("isStringPermutation", () => {
  it("It accepts if the string is a permutation of the other one", () => {
    const string1 = "Hello";
    const string2 = "leHlo";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(true);
    expect(resultOptimized).toBe(true);
  });

  it("It matches if the string is a permutation of the other one regardless of the case", () => {
    const string1 = "Hello";
    const string2 = "lEhLo";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(true);
    expect(resultOptimized).toBe(true);
  });

  it("It matches if the string is the same", () => {
    const string1 = "Hello";
    const string2 = "Hello";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(true);
    expect(resultOptimized).toBe(true);
  });

  it("Rejects if it the strings dont match", () => {
    const string1 = "Hello";
    const string2 = "Hi";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(false);
    expect(resultOptimized).toBe(false);
  });

  it("Rejects if it the strings dont match by 1 letter", () => {
    const string1 = "Hello";
    const string2 = "Hellw";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(false);
    expect(resultOptimized).toBe(false);
  });

  it("Rejects if it the string match but has extra letters", () => {
    const string1 = "Hello";
    const string2 = "leHloworld";

    const resultSimple = isStringPermutationSimple(string1, string2);
    const resultOptimized = isStringPermutationOptimized(string1, string2);

    expect(resultSimple).toBe(false);
    expect(resultOptimized).toBe(false);
  });
});
