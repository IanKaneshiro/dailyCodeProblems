/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.


*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const sortLinkedList = (arr) => {
  const dummyHead = new Node(null);
  let current = dummyHead;

  let min = Infinity;
  let index = null;
  while (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].val < min) {
        max = arr[i].val;
        index = i;
      }
    }
    current.next = arr[index];
    arr[index] = arr[index].next;
    if (!arr[index]) arr.splice(index, 1);
    min = Infinity;
    index = null;
    current = current.next;
  }
  current.next = arr[0];
  return dummyHead.next;
};

const one = new Node(1);
const three = new Node(3);
const five = new Node(5);
const two = new Node(2);
const four = new Node(4);
const seven = new Node(7);

one.next = three;
three.next = five;

two.next = four;
four.next = seven;

const head = sortLinkedList([one, two]);

let current = head;
while (current) {
  console.log(current.val);
  current = current.next;
}
