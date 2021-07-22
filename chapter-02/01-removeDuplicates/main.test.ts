import { removeDuplicates } from "./main";
import { createLinkedListFromArray } from "../../shared-libraries/LinkedListNode";

describe("removeDuplicates", () => {
  it("should remove duplicates from the linked list", () => {
    const head = createLinkedListFromArray([1, 2, 3, 2, 5]);
    const result = removeDuplicates(head);

    expect(result.asArray()).toEqual([1, 2, 3, 5]);
  });

  it("should return the original list if no duplicates found", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const result = removeDuplicates(head);

    expect(result.asArray()).toEqual([1, 2, 3, 4, 5]);
  });
});
