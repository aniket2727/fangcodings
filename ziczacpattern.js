



class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function printTreeZigzag(root) {
    if (!root) {
      return;
    }
  
    let currentLevel = [root];
    let nextLevel = [];
    let leftToRight = true;
  
    while (currentLevel.length > 0) {
      const node = leftToRight ? currentLevel.pop() : currentLevel.shift();
      process.stdout.write(node.value + ' ');
  
      if (leftToRight) {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      } else {
        if (node.right) nextLevel.unshift(node.right);
        if (node.left) nextLevel.unshift(node.left);
      }
  
      if (currentLevel.length === 0) {
        [currentLevel, nextLevel] = [nextLevel, currentLevel];
        leftToRight = !leftToRight;
        console.log(); // Move to the next line for the next level
      }
    }
  }
  
  // Example usage
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  printTreeZigzag(root);
  