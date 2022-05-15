// Iterative
// Time: O(n)
// Space: O(1)
var reverseLinkedList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};



// ES6 code
// var reverseList = function(head) {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }


// Recursive
// Time: O(n)
// Space: O(n)
// var reverseList = function(head) {
// 	// base case
//     if (head == null || head.next == null){
//         return head;
//     }
// 	// go all the way to the end
//     let reversedListHead = reverseList(head.next)
// 	// add reverse myself
//     head.next.next = head;
//     head.next = null;
// 	// go up
//     return reversedListHead
// };
