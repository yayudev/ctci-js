import { LinkedListNode } from "../../shared-libraries/LinkedListNode";

export function deleteMiddleNode<T>(node: LinkedListNode<T>): boolean {
  if (!node) return false;

  const { previous, next } = node;

  if (previous) {
    previous.next = next;
  }
  if (next) {
    next.previous = previous;
  }

  return true;
}
