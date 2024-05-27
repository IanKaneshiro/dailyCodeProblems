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

const overlappingIntervals = (intervals) => {
  // Step 1: Sort the intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Initialize the merged intervals array
  const mergedIntervals = [];

  for (let interval of intervals) {
    // If mergedIntervals is empty or there is no overlap, simply append the interval
    if (
      mergedIntervals.length === 0 ||
      mergedIntervals[mergedIntervals.length - 1][1] < interval[0]
    ) {
      mergedIntervals.push(interval);
    } else {
      // There is overlap, so merge the current interval with the last one in mergedIntervals
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        mergedIntervals[mergedIntervals.length - 1][1],
        interval[1]
      );
    }
  }

  return mergedIntervals;
};

console.log(overlappingIntervals(sampleInput)); // [[1,3], [4,10], [20,25]]

console.log(overlappingIntervals(sampleInput2)); // [[1,8], [10,20]]
