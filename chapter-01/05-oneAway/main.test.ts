import { oneAway } from "./main";

describe("oneAway", () => {
  it("should detect if strings are away by one remove", () => {
    const result = oneAway("pale", "ple");
    const result2 = oneAway("ple", "pale");

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it("should detect if strings are away by one add", () => {
    const result = oneAway("pales", "pale");
    const result2 = oneAway("pale", "pales");

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it("should detect if strings are away by one replace", () => {
    const result = oneAway("pale", "bale");
    const result2 = oneAway("bale", "pale");

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it("should fail if strings require more than one action", () => {
    const result1 = oneAway("bales", "aleb");
    const result2 = oneAway("pale", "pee");
    const result3 = oneAway("aleb", "bales");
    const result4 = oneAway("aleb", "bale");
    const result5 = oneAway("aleb", "bale");
    const result6 = oneAway("pale", "bake");

    expect(result1).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
    expect(result4).toBe(false);
    expect(result5).toBe(false);
    expect(result6).toBe(false);
  });
});
