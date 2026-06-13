// leetcode 141. Linked List Cycle
/*
They are essentially saying: "We built a loop using a secret number. 
We aren't going to tell you what that number is, or if we even used one. 
By looking only at the nodes themselves, can you figure out if we made a loop?"*/

function ListNode(val) {
    this.val = val;
    this.next = null;
}
head = new ListNode(3);
node2 = head.next = new ListNode(2);
node3 = node2.next = new ListNode(0);
node4 = node3.next = new ListNode(-4);
node4.next = head;

var hasCycle = function(head) {
    if (head == null || head.val == null || head.next == null) {
        return false;
    }
    let slow = head;
    let fast = head;
while (fast != null && fast.next != null) {

    slow = slow.next;
    fast = fast.next.next;

        if (slow === fast) {
        return true;
    }
}   return false;

};

console.log(hasCycle(head)); // true
