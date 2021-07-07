import { hasOnlyUniqueCharacters } from "./main";

describe("hasOnlyUniqueCharacters", () => {
  it("It accepts a string if it has only unique values", () => {
    const testString = "Hi world";

    const result = hasOnlyUniqueCharacters(testString);
    expect(result).toBe(true);
  });

  it("Rejects if it has repeated values", () => {
    const testString = "Hello world";

    const result = hasOnlyUniqueCharacters(testString);
    expect(result).toBe(false);
  });

  it("It rejects repeated values regardless of its case", () => {
    const testString = "Hello WORLD";

    const result = hasOnlyUniqueCharacters(testString);
    expect(result).toBe(false);
  });
});
