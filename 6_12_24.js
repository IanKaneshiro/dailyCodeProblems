// Good morning! Here's your coding interview problem for today.

// This problem was asked by Dropbox.

// What does the below code snippet print out? How can we fix the anonymous functions to behave as we'd expect?

// functions = []
// for i in range(10):
//     functions.append(lambda : i)

// for f in functions:
//     print(f())

const functions = [];

for (let i = 0; i < 10; i++) {
  functions.push(() => i);
}

for (let f of functions) {
  console.log(f());
}
