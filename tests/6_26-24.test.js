const traverseTree = require("../6_26-24");

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

test("traversTree", () => {
  expect(traverseTree(one)).toBe("true");
});
