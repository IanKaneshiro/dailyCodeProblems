/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Print the nodes in a binary tree level-wise. For example, the following should print 1, 2, 3, 4, 5.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);

one.left = two;
one.right = three;
three.left = four;
three.right = five;

function traverseTree(root) {
  return;
}
