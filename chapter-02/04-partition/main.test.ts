import { createLinkedListFromArray } from "../../shared-libraries/LinkedListNode";
import { partition } from "./main";

describe("partition", () => {
  it("should partition a linked list around a value", () => {
    const head = createLinkedListFromArray([3, 5, 8, 5, 10, 2, 1]);
    const partitionedList = partition(head, 5);
    const resultAsArray = partitionedList.asArray();

    expect(resultAsArray).toEqual([3, 2, 1, 5, 8, 5, 10]);
  });

  it("should return the same list if the pivot is bigger than the largest number", () => {
    const head = createLinkedListFromArray([11, 2, 1, 5, 10, 2, 1]);
    const partitionedList = partition(head, 12);
    const resultAsArray = partitionedList.asArray();

    expect(resultAsArray).toEqual([11, 2, 1, 5, 10, 2, 1]);
  });

  it("should return the same list if the pivot is less than the smallest number", () => {
    const head = createLinkedListFromArray([-1, 2, 1, 5, 10, 2, 1]);
    const partitionedList = partition(head, -2);
    const resultAsArray = partitionedList.asArray();

    expect(resultAsArray).toEqual([-1, 2, 1, 5, 10, 2, 1]);
  });
});
