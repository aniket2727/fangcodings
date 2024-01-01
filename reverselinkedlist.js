class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev; // The new head of the reversed list
}

// Example usage:
// Creating a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
printLinkedList(head);

// Reverse the linked list
const reversedHead = reverseLinkedList(head);

console.log("\nReversed linked list:");
printLinkedList(reversedHead);

// Function to print the linked list
function printLinkedList(node) {
    while (node !== null) {
        process.stdout.write(`${node.value} -> `);
        node = node.next;
    }
    console.log("null");
}
