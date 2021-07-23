import { deleteMiddleNode } from "./main";
import { createLinkedListFromArray } from "../../shared-libraries/LinkedListNode";

describe("getKthToLast", () => {
  it("should return 1st node", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const node2 = head.next;
    const result = deleteMiddleNode(head);
    const listAsArray = node2.asArray();

    expect(listAsArray).toEqual([2, 3, 4, 5]);
  });

  it("should return 2nd node", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const node2 = head.next;
    const result = deleteMiddleNode(node2);
    const listAsArray = head.asArray();

    expect(listAsArray).toEqual([1, 3, 4, 5]);
  });

  it("should return 3rd node", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const node3 = head.next.next;
    const result = deleteMiddleNode(node3);
    const listAsArray = head.asArray();

    expect(listAsArray).toEqual([1, 2, 4, 5]);
  });

  it("should return 4th node", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const node4 = head.next.next.next;
    const result = deleteMiddleNode(node4);
    const listAsArray = head.asArray();

    expect(listAsArray).toEqual([1, 2, 3, 5]);
  });

  it("should return 5th node", () => {
    const head = createLinkedListFromArray([1, 2, 3, 4, 5]);
    const node5 = head.next.next.next.next;
    const result = deleteMiddleNode(node5);
    const listAsArray = head.asArray();

    expect(listAsArray).toEqual([1, 2, 3, 4]);
  });
});
