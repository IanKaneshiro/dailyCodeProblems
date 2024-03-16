/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.
*/

function cons(a, b) {
  function pair(f) {
    return f(a, b);
  }
  return pair;
}

function car(pair) {
  function getFirstElement(a, b) {
    return a;
  }
  return pair(getFirstElement);
}

function cdr(pair) {
  function getSecondElement(a, b) {
    return b;
  }
  return pair(getSecondElement);
}

console.log(car(cons(3, 4))); // Output: 3
console.log(cdr(cons(3, 4))); // Output: 4
