class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addData(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }

    display() {
        if (!this.head) {
            console.log('Empty list');
        } else {
            var current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }

    removeDuplicates() {
        var seen = {};
        var current = this.head;
        var prev = null;

        while (current) {
            if (seen[current.data]) {
                // Remove the current node if it's a duplicate
                prev.next = current.next;
            } else {
                // Mark the current node as seen
                seen[current.data] = true;
                prev = current;
            }
            current = current.next;
        }
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.addData(1);
linkedList.addData(2);
linkedList.addData(2);
linkedList.addData(3);
linkedList.addData(4);
linkedList.addData(4);

console.log('Original Linked List:');
linkedList.display();

linkedList.removeDuplicates();

console.log('\nLinked List after removing duplicates:');
linkedList.display();
