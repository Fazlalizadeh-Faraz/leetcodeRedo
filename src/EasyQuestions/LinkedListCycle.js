/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let cur = head
  let spdcurr = head

  // if there is a cycle then cur and fast line will meet
  while (spdcurr && spdcurr.next && spdcurr.next.next) {
    cur = cur.next
    spdcurr = spdcurr.next.next

    if (cur === spdcurr) {
      return true
    }
  }

  return false
}
