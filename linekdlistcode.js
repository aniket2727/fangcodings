class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = new Node(data);
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    delete(data) {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current.next && current.next.data !== data) {
                current = current.next;
            }

            if (current.next) {
                current.next = current.next.next;
            }
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(2);
linkedList.append(3);

console.log("Original Linked List:");
linkedList.display();

linkedList.delete(2);

console.log("\nLinked List after deleting 2:");
linkedList.display();
