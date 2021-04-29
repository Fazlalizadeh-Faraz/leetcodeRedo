

// remove nth node from end of list
var removeNthFromEnd = function(head, n) {
    const dummyHead = new ListNode(0, head);
    let fast = dummyHead;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    let slow = dummyHead;

    while (fast && fast.next != null)  {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return dummyHead.next;
};

// generate parantheses

var generateParenthesis = function(n) {
    let res = [];
    const go = (s="",l=0,r=0)=>{
        if(s.length===2*n){
            res.push(s);
            return;
        }
        if(l<n) go(s+'(',l+1,r);
        if(r<l) go(s+')',l,r+1);
    }
    go();
    return res;
};