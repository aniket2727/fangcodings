// Binary Search Tree in JavaScript

class Node {
    constructor(value) {
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this._insert(this.root, key);
    }

    _insert(node, key) {
        if (node === null) {
            return new Node(key);
        }

        if (key < node.key) {
            node.left = this._insert(node.left, key);
        } else if (key > node.key) {
            node.right = this._insert(node.right, key);
        }

        return node;
    }

    inorder() {
        const result = [];
        this._inorder(this.root, result);
        return result;
    }

    _inorder(node, result) {
        if (node !== null) {
            this._inorder(node.left, result);
            result.push(node.key);
            this._inorder(node.right, result);
        }
    }
}

// Example usage:
const bst = new BinaryTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

console.log("Inorder Traversal:", bst.inorder());
