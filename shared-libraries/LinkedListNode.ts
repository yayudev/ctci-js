export class LinkedListNode<T> {
  previous?: LinkedListNode<T>;
  next?: LinkedListNode<T>;
  data: T;

  constructor(data: T) {
    this.data = data;
  }

  /**
   * Get an array representation of the linked list.
   */
  asArray(): Array<T> {
    let currentNode: LinkedListNode<T> = this;
    const array = [];

    while (currentNode?.data) {
      array.push(currentNode?.data);
      currentNode = currentNode?.next;
    }

    return array;
  }

  /**
   * Set next node in the linked list.
   */
  setNext(next: LinkedListNode<T>): LinkedListNode<T> {
    this.next = next;

    if (!next?.previous || next.previous !== this) {
      next.previous = this;
    }

    return this;
  }

  /**
   * Set previous node in the linked list.
   */
  setPrevious(previous: LinkedListNode<T>): LinkedListNode<T> {
    this.previous = previous;

    if (!previous?.next || previous.next !== this) {
      previous.next = this;
    }

    return this;
  }
}

export function createLinkedListFromArray<T>(
  array: Array<T>
): LinkedListNode<T> {
  if (array.length === 0) return null;

  let firstNode: LinkedListNode<T> = new LinkedListNode(array[0]);

  let currentNode: LinkedListNode<T> = firstNode;
  for (let i = 1; i < array.length; i++) {
    const nextNode = new LinkedListNode(array[i]);
    currentNode.setNext(nextNode);
    currentNode = nextNode;
  }

  return firstNode;
}
