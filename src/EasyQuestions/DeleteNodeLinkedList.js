var deleteNode = function (node) {
  if (node.val !== undefined && node.next !== undefined) {
    //copy the next node to this node
    node.val = node.next.val
    node.next = node.next.next
  }
}
