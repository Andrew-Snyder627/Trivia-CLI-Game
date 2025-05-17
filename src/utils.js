function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function filterByCategory(questions, selectedCategory) {
  if (selectedCategory === "All Categories") {
    return questions;
  }
  return questions.filter(q => q.category === selectedCategory);
}

module.exports = { checkAnswer, shuffleArray, filterByCategory };