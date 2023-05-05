/*Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
1 <= Node.val <= 100*/



let head1 = { /*this is a linked list */
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
};

let head2 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: {
                        value: 6,
                        next: null
                    }
                }
            }
        }
    }
};


function findMiddleNode(head) {
    // Initialize two pointers, fast and slow, both pointing to the head of the list
    let fast = head;
    let slow = head;
    
    // Loop until the fast pointer reaches the end of the list
    while (fast !== null && fast.next !== null) {
        // Move the fast pointer two nodes at a time
        fast = fast.next.next;
        // Move the slow pointer one node at a time
        slow = slow.next;
    }
    
    // When the fast pointer reaches the end of the list,
    // the slow pointer will be pointing at the middle node
    return slow;
}

console.log(findMiddleNode(head1))
console.log(findMiddleNode(head2))

/*run 'node --inspect middle-of-linked-list.js' */
