const wordExists = require("../6_17_24");

const demoInput = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

test("wordExists", () => {
  expect(wordExists(demoInput, "ABCCED")).toBe(true);
});

test("wordExists2", () => {
  expect(wordExists(demoInput, "SEE")).toBe(true);
});

test("wordExists3", () => {
  expect(wordExists(demoInput, "ABCB")).toBe(false);
});
