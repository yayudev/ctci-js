import { LinkedListNode } from "../../shared-libraries/LinkedListNode";

export function removeDuplicates(
  headNode: LinkedListNode<number | string>
): LinkedListNode<number | string> {
  const foundValues: Record<number | string, boolean> = {};

  let currentNode = headNode;
  while (currentNode?.data) {
    if (foundValues[currentNode.data]) {
      currentNode?.previous?.setNext(currentNode.next);
    } else {
      foundValues[currentNode.data] = true;
    }

    currentNode = currentNode.next;
  }

  return headNode;
}
