// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * Find the smallest element in a binary tree.
 * @param {TreeNode} root - The root of the binary tree.
 * @return {number} - The smallest element.
 */
var findSmallestElement = function(root) {
    // Base case: if the root is null, return Infinity
    if (root === null) {
        return Infinity;
    }

    // Recursively find the smallest element in the left subtree
    const leftSmallest = findSmallestElement(root.left);

    // Compare the smallest element in the left subtree with the current node's value
    const currentSmallest = Math.min(leftSmallest, root.val);

    // Recursively find the smallest element in the right subtree
    const rightSmallest = findSmallestElement(root.right);

    // Compare the smallest element so far with the smallest element in the right subtree
    return Math.min(currentSmallest, rightSmallest);
};


const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(8);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);


const smallestElement = findSmallestElement(root);
console.log("The smallest element in the binary tree is:", smallestElement);
