import { getKthToLast } from "./main";
import { createLinkedListFromArray } from "../../shared-libraries/LinkedListNode";

describe("getKthToLast", () => {
  it("should the 3rd to last value", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = getKthToLast(head, 3);

    expect(result.data).toEqual(3);
  });

  it("should return 2nd to last value", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = getKthToLast(head, 2);

    expect(result.data).toEqual(4);
  });
});
