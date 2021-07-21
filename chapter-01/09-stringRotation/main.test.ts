import { stringRotation } from "./main";

describe("stringRotation", () => {
  it("should return true if the strings are rotations of each other", () => {
    const result = stringRotation("waterbottle", "erbottlewat");
    expect(result).toBe(true);
  });

  it("should return flase if the strings are not rotations of each other", () => {
    const result = stringRotation("pizza", "erbottlewat");
    expect(result).toBe(false);
  });
});
