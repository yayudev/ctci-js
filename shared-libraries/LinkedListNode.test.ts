import { LinkedListNode, createLinkedListFromArray } from "./LinkedListNode";

describe("LinkeListNode class", () => {
  it("should insert the next node when using. setNext", () => {
    const head = new LinkedListNode(1);
    const tail = new LinkedListNode(2);
    head.setNext(tail);

    expect(head.next).toBe(tail);
    expect(tail.previous).toBe(head);
  });

  it("should insert the previous node when using .setPrevious", () => {
    const head = new LinkedListNode(1);
    const tail = new LinkedListNode(2);
    tail.setPrevious(head);

    expect(tail.previous).toBe(head);
    expect(head.next).toBe(tail);
  });

  it("should return an array when using .asArray", () => {
    const node1 = new LinkedListNode(1);
    const node2 = new LinkedListNode(2);
    const node3 = new LinkedListNode(3);
    const node4 = new LinkedListNode(4);
    node1.setNext(node2);
    node2.setNext(node3);
    node3.setNext(node4);

    const array = node1.asArray();

    expect(array).toStrictEqual([1, 2, 3, 4]);
  });
});

describe("createLinkedListFromArray", () => {
  it("should create a linked list from an array", () => {
    const array = [1, 2, 3, 4];
    const linkedListHead = createLinkedListFromArray(array);

    expect(linkedListHead.data).toBe(1);
    expect(linkedListHead.next.data).toBe(2);
    expect(linkedListHead.next.next.data).toBe(3);
    expect(linkedListHead.next.next.next.data).toBe(4);
    expect(linkedListHead.asArray()).toStrictEqual(array);
  });
});
