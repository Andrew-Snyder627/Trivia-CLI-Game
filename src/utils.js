function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

// Breaking out this logic for future question types, possibly fill in the blank when case and spacing matters

module.exports = { checkAnswer };