// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Invert a binary tree.

// For example, given the following tree:'

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const four = new TreeNode(4);
const two = new TreeNode(2);
const seven = new TreeNode(7);
const one = new TreeNode(1);
const three = new TreeNode(3);
const six = new TreeNode(6);
const nine = new TreeNode(9);

four.left = two;
four.right = seven;

two.left = one;
two.right = three;

seven.left = six;
seven.right = nine;

function invertBinaryTree(root) {
  if (!root) return null;
}

function printTree(root) {
  let queue = [root];

  while (queue.length) {
    const current = stack.pop();
    console.log(current);

    if (current.left) queue.shift(current.left);
    if (current.right) queue.shift(current.right);
  }
}
