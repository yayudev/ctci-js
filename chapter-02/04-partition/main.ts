import { LinkedListNode } from "../../shared-libraries/LinkedListNode";

export function partition<T>(
  head: LinkedListNode<T>,
  pivot: T
): LinkedListNode<T> {
  let smaller: LinkedListNode<T> = null;
  let greater: LinkedListNode<T> = null;
  let initialSmaller: LinkedListNode<T> = null;
  let initialGreater: LinkedListNode<T> = null;

  let currentNode = head;
  while (currentNode) {
    if (currentNode.data < pivot) {
      if (!smaller) {
        initialSmaller = currentNode;
        smaller = currentNode;
      } else {
        smaller.setNext(currentNode);
        smaller = currentNode;
      }
    } else {
      if (!greater) {
        initialGreater = currentNode;
        greater = currentNode;
      } else {
        greater.setNext(currentNode);
        greater = greater.next;
      }
    }

    currentNode = currentNode.next;
  }

  if (greater?.next) {
    greater.next = null;
  }

  if (smaller) {
    smaller.next = initialGreater;
  }

  return initialSmaller || initialGreater;
}
