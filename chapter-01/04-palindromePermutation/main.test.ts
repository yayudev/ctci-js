import { palindromePermutation } from "./main";

describe("palindromePermutation", () => {
  it("It detects palindrome permutations correctly", () => {
    const testString = "Tactcoa";

    const result = palindromePermutation(testString);
    expect(result).toBe(true);
  });

  it("It detects non-palindrome permutations", () => {
    const testString = "Tac toe";

    const result = palindromePermutation(testString);
    expect(result).toBe(false);
  });

  it("It detects palindrome permutations with even characters", () => {
    const testString = "toetoe";

    const result = palindromePermutation(testString);
    expect(result).toBe(true);
  });

  it("It detects non-palindrome permutations regardless of the spaces and cases", () => {
    const testString = "Taco coa";

    const result = palindromePermutation(testString);
    expect(result).toBe(true);
  });
});
