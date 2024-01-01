class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findTreeDepth(root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = findTreeDepth(root.left);
    const rightDepth = findTreeDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Constructing a simple binary tree
const rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

const depth = findTreeDepth(rootNode);
console.log(`Depth of the tree: ${depth}`);
