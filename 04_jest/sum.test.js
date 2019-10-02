const sum = require("./sum");

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 3 + 7 to equal 10", () => {
  expect(sum(3, 7)).toBe(10);
});

test("adds 3 + 7 to equal 11", () => {
  expect(sum(3, 7)).toBe(11);
});
