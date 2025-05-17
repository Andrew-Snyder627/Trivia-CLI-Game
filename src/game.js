const prompts = require("@inquirer/prompts");
const chalk = require("chalk");
const questions = require("../data/questions");
const { startTimer } = require("./timer");
const { checkAnswer, shuffleArray, filterByCategory } = require("./utils");

async function startGame() {
  console.log(chalk.green("\n Welcome to the Trivia Challenge!!"));
  let score = 0;

  // Select a category
  const categories = [...new Set(questions.map(q => q.category))];
  categories.unshift("All Categories");

  const selectedCategory = await prompts.select({
    message: "Choose a category:",
    choices: categories.map(c => ({name: c, value: c })),
  });

  const filteredQuestions = filterByCategory(questions, selectedCategory);

  // Shuffle the questions
  const shuffledQuestions = shuffleArray(filteredQuestions);

  // Start a total game timer
  const gameTimer = startTimer(60, () => {
    console.log(chalk.red("\nGame over!"));
    console.log(`You scored ${score}/${shuffledQuestions.length}`);
    process.exit();
  });

  // Loop through the questions and prompt the user
  for (let i = 0; i < shuffledQuestions.length; i++) {
    const q = shuffledQuestions[i];
    let answer;

    if (q.type === "multiple-choice") {
      answer = await prompts.select({
        message: `\n${q.question}`,
        choices: q.options.map(option => ({ name: option, value: option })),
      });
    } else if (q.type === "fill-in-the-blank") {
        answer = await prompts.input({
        message: `\n${q.question} (Type your answer):`,
      });
    }

    if (checkAnswer(answer, q.answer)) {
      console.log(chalk.green("Correct!!"));
      score++;
    } else {
      console.log(chalk.red(`Wrong! The correct answer was: ${q.answer}`));
    }
  }

  clearTimeout(gameTimer); // If all questions answered in time
  console.log(chalk.yellow(`\n Game complete! You scored ${score}/${shuffledQuestions.length}`));
}

module.exports = { startGame };