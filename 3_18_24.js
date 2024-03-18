/*

Good morning! Here's your coding interview problem for today.

This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

const codes = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

function decodeMessage(message) {
  const n = message.length;
  if (n === 0) return 0;

  // Initialize an array to store the number of ways to decode a substring of the message
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = message[0] !== "0" ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(message.slice(i - 1, i));
    const twoDigits = parseInt(message.slice(i - 2, i));

    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}

console.log(decodeMessage("1111")); // 3
