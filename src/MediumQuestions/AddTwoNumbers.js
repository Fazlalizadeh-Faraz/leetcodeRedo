var addTwoNumber = function (l1, l2) {
    let head = null,
        curr = null,
        sum = 0,
        carry = 0,
        num,
        node = null;

    while(l1 || l2) {
        sum = 0;
        if(l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        num = parseInt(sum%10);
        carry = parseInt(sum/10);

        node = new ListNode(num);
        if(!head) {
            head = node;
        }
        if(curr) {
            curr.next = node;
        }
        curr = node;
    }
    if(carry) {
        node = new ListNode(carry);
        curr.next = node;
        curr = node;
    }
    return head;
}