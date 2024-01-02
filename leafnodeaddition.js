


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    addLeaf(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._addLeaf(this.root, newNode);
        }
    }

    _addLeaf(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._addLeaf(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._addLeaf(node.right, newNode);
            }
        }
    }

    sumLeafNodes() {
        return this._sumLeafNodes(this.root);
    }

    _sumLeafNodes(node) {
        if (!node) {
            return 0;
        }

        if (!node.left && !node.right) {
            // Node is a leaf
            return node.data;
        }

        // Recursively sum leaf nodes in left and right subtrees
        return this._sumLeafNodes(node.left) + this._sumLeafNodes(node.right);
    }
}

// Example usage:
const tree = new BinaryTree();
tree.addLeaf(10);
tree.addLeaf(5);
tree.addLeaf(15);
tree.addLeaf(3);
tree.addLeaf(7);
tree.addLeaf(12);
tree.addLeaf(18);

console.log(tree.sumLeafNodes()); // Output: 45 (5 + 3 + 7 + 12 + 18)
