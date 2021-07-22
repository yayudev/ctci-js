import { LinkedListNode } from "../../shared-libraries/LinkedListNode";

export function getKthToLast(
  headNode: LinkedListNode<number>,
  k: number
): LinkedListNode<number> {
  let currentNode = headNode;
  let size = 0;

  while (currentNode) {
    size++;
    currentNode = currentNode.next;
  }

  currentNode = headNode;
  for (let node = 0; node < size - k; node++) {
    currentNode = currentNode.next;
  }

  return currentNode;
}
