function checkAnswer(userAnswer, correctAnswer) {
  return userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
}

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}



module.exports = { checkAnswer, shuffleArray };