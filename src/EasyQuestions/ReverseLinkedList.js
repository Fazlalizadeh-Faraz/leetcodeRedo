var reverseList = (head) => {
  let prev = null
  while (head) {
    const temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
}
