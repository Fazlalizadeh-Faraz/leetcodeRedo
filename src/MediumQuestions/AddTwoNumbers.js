var addTwoNumbers = function (l1, l2) {
  // make sure both exist
  if (!l1 && !l2) return null
  if (!l1) return l2
  if (!l2) return l1

  let result = new ListNode()
  const head = result
  let carry = 0

  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = parseInt(sum / 10)
    sum = sum % 10

    result.val = sum

    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null

    result.next = l1 || l2 || carry ? new ListNode() : null
    result = result.next
  }

  return head
}
