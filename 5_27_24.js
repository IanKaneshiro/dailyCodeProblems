// Good morning! Here's your coding interview problem for today.

// This problem was asked by Snapchat.

// Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

// The input list is not necessarily ordered in any way.

// For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].

const sampleInput = [
  [1, 3],
  [5, 8],
  [4, 10],
  [20, 25],
];
const sampleInput2 = [
  [5, 8],
  [1, 3],
  [3, 5],
  [10, 20],
];

const overlappingIntervals = (arr) => {
  // sort the array
  // interate through the array keeping track of the last value of the prev and the first of the current/
};

overlappingIntervals(sampleInput); // [[1,3], [4,10], [20,25]]
overlappingIntervals(sampleInput2); // [[1,8], [10,20]]
