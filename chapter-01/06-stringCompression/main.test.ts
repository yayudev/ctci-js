import { stringCompression } from "./main";

describe("stringCompression", () => {
  it("it compress strings", () => {
    const result = stringCompression("aabcccccaaa");

    expect(result).toBe("a2b1c5a3");
  });

  it("it do not compress strings", () => {
    const result = stringCompression("abc");

    expect(result).toBe("abc");
  });
});
