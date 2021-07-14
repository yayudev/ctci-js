import { urlify } from "./main";

describe("urlify", () => {
  it("It urlifies a string correctly", () => {
    const testString = "Ms John Smith";

    const result = urlify(testString, 13);
    expect(result).toBe("Ms%20John%20Smith");
  });

  it("It removes trailing spacescorrectly", () => {
    const testString = " Ms John Smith  ";

    const result = urlify(testString, 13);
    expect(result).toBe("Ms%20John%20Smith");
  });

  it("It urlifies a string and reduces its size", () => {
    const testString = "Ms John Smith";

    const result = urlify(testString, 5);
    expect(result).toBe("Ms%20Jo");
  });
});
