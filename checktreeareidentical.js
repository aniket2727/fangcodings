

// find the given tree is identical or not


class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2) {
        return false;
    }

    if (node1.data !== node2.data) {
        return false;
    }

    return (
        areIdentical(node1.left, node2.left) &&
        areIdentical(node1.right, node2.right)
    );
}

const tree1 = new TreeNode(100);
tree1.left = new TreeNode(200);
tree1.right = new TreeNode(200);

const tree2 = new TreeNode(100);
tree2.left = new TreeNode(200);
tree2.right = new TreeNode(200);

const result = areIdentical(tree1, tree2);
conso
