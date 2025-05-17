const { checkAnswer, shuffleArray, filterByCategory } = require('../src/utils');

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

describe("filterByCategory", () => {
  const mockQuestions = [
    { category: "Sports", question: "Q1" },
    { category: "Movies", question: "Q2" },
    { category: "History", question: "Q3" },
    { category: "Movies", question: "Q4" }
  ];

  test("returns only questions from the selected category", () => {
    const result = filterByCategory(mockQuestions, "Movies");
    expect(result).toHaveLength(2);
    expect(result.every(q => q.category === "Movies")).toBe(true);
  });

  test("returns all questions when 'All Categories' is selected", () => {
    const result = filterByCategory(mockQuestions, "All Categories");
    expect(result).toHaveLength(4);
  });

  test("returns an empty array when no questions match the category", () => {
    const result = filterByCategory(mockQuestions, "Science");
    expect(result).toEqual([]);
  });
});