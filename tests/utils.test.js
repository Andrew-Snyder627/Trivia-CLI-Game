const { checkAnswer, shuffleArray } = require('../src/utils');

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

  test("correctly validates fill-in-the-blank style answer", () => {
    expect(checkAnswer("france", "France")).toBe(true);
  });
});

describe("shuffleArray", () => {
  test("returns an array of the same length", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...original]);
    expect(shuffled).toHaveLength(original.length);
  });

  test("contains the same elements", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...original]);
    expect(shuffled.sort()).toEqual(original.sort());
  });

  test("shuffles elements (not always but usually)", () => {
    const original = [1, 2, 3, 4, 5];
    const shuffled = shuffleArray([...original]);
    // There's a slim chance it matches, but this is a fair randomness test
    const isSameOrder = original.every((value, index) => value === shuffled[index]);
    expect(isSameOrder).toBe(false);
  });
});