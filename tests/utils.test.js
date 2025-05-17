const { checkAnswer } = require('../src/utils');

describe("checkAnswer", () => {
  test("returns true for exact match", () => {
    expect(checkAnswer("France", "France")).toBe(true);
  });

  test("returns true for case-insensitive match", () => {
    expect(checkAnswer("france", "France")).toBe(true);
  });

  test("returns true when answer has extra whitespace", () => {
    expect(checkAnswer("  France  ", "France")).toBe(true);
  });

  test("returns false for wrong answer", () => {
    expect(checkAnswer("Brazil", "France")).toBe(false);
  });

  test("returns false for similar but not matching answers", () => {
    expect(checkAnswer("Frances", "France")).toBe(false);
  });
});